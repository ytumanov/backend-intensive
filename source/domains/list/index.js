// Core
import debug from 'debug';

export const get = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);
    try {
        const sessions = req.session.store.all();
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
        console.log(JSON.stringify(sessions));

        res.sendStatus(200);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
