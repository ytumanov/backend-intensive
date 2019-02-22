// Core
import express from 'express';

// Routes
import * as domains from './domains';
import { logger } from './helpers';

const app = express();

app.use(
    express.json({
        limit: '10kb',
    }),
);

app.use('/api/teachers', [ logger() ], domains.teachers);
app.use('/api/pupils', [ logger() ], domains.pupils);
app.use('/api/parents', [ logger() ], domains.parents);
app.use('/api/classes', [ logger() ], domains.classes);
app.use('/api/subjects', [ logger() ], domains.subjects);

export { app };
