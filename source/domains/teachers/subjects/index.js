// Core
import dg from 'debug';

const debug = dg('router:teachers:subjects');

export const get = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);
    //req.user comes from passport-jwt payload

    try {
        const data = [];

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const data = [];

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
