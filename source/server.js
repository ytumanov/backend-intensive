// Core
import express from 'express';
import session from 'express-session';
import { Storage } from './helpers/storage';

// Routes
import * as domains from './domains';

// Instruments
import {
    devLogger,
    errorLogger,
    notFoundLogger,
    validationLogger,
    requireJsonContent,
    NotFoundError,
    getSecretSession,
} from './helpers';

const app = express();

const sessionOptions = {
    key:               'user', // cookie name
    secret:            getSecretSession(), // change to your password
    resave:            false, // disable session resave
    rolling:           true, // reset max age on every use
    saveUninitialized: false,
    cookie:            {
        httpOnly: true,
        maxAge:   15 * 60 * 1000,
    },
    store: new Storage(),
};

app.use(
    express.json({
        limit: '10kb',
    }),
);

app.use(requireJsonContent);

if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
        const body
            = req.method === 'GET' ? 'Body not supported for GET' : JSON.stringify(req.body, null, 2);

        devLogger.debug(`${req.method}\n${body}`);
        next();
    });
}

app.use(session(sessionOptions));

app.use('/api/auth/login', domains.login);
app.use('/api/auth/list', domains.list);
app.use('/api/teachers', domains.teachers);
app.use('/api/pupils', domains.pupils);
app.use('/api/parents', domains.parents);
app.use('/api/classes', domains.classes);
app.use('/api/subjects', domains.subjects);

app.use('*', (req, res, next) => {
    const error = new NotFoundError(
        `Can not find right route for method ${req.method} and path ${req.originalUrl}`,
        404,
    );
    next(error);
});

if (process.env.NODE_ENV !== 'test') {
    // eslint-disable-next-line no-unused-vars
    app.use((error, req, res, next) => {
        const { name, message, statusCode } = error;
        const errorMessage = `${name}: ${message}`;

        switch (error.name) {
            case 'NotFoundError':
                notFoundLogger.error(errorMessage);
                break;

            case 'ValidationError':
                validationLogger.error(errorMessage);
                break;

            default:
                errorLogger.error(errorMessage);
                break;
        }

        const status = statusCode ? statusCode : 500;
        res.status(status).json({ message: message });
    });
}

export { app };
