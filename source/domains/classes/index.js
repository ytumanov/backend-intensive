// Core
import dg from 'debug';

const debug = dg('router:classes');

// Instruments
import { Classes } from '../../controllers';

export const get = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const classes = new Classes();
        const data = await classes.find();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const classes = new Classes(req.body);
        const data = await classes.create();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
