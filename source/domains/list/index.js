// Core
import debug from 'debug';

export const get = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);
    try {
        const sessions = req.sessionStore.getAll();
        res.status(200).json(sessions);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
