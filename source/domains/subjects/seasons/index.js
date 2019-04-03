// Core
import dg from 'debug';

const debug = dg('router:subjects:seasons');

// Instruments
import { Seasons } from '../../../controllers';

export const get = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const seasons = new Seasons();
        const data = await seasons.find();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const seasons = new Seasons();
        const data = await seasons.create();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
