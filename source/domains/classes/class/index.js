// Core
import dg from 'debug';

const debug = dg('router:classes:class');

// Instruments
import { Class } from '../../../controllers';

export const get = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const classInstance = new Class(null, req.params);
        const data = await classInstance.find();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const classInstance = new Class(req.body, req.params);
        const data = await classInstance.create();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const put = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const classInstance = new Class(req.body, req.params);
        const data = await classInstance.update();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const remove = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const classInstance = new Class(null, req.params);
        await classInstance.delete();

        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
