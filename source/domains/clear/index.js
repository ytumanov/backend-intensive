// Core
import debug from 'debug';

export const del = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);
    try {
        req.sessionStore.destroyAll();
        res.sendStatus(204);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
