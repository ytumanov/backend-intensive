import dg from 'debug';

const debug = dg('router:subjects:lessons');

// Instruments
import { Lessons } from '../../../../controllers';

export const get = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const lessons = new Lessons();
        const data = await lessons.find();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const lessons = new Lessons();
        const data = await lessons.create();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
