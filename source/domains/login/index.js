// Core
import debug from 'debug';

export const post = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    req.session.email = req.body.email;
    res.status(200).end();
};
