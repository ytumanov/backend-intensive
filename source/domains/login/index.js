// Core
import debug from 'debug';

export const post = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);
    try {
        const { email, password } = req.body;
        const emailDecoded = Buffer.from(email, 'base64').toString();
        const passwordDecoded = Buffer.from(password, 'base64').toString();

        req.session.user = { email: emailDecoded };
        const sessionObj = {
            payload: req.session.user,
            agent:   req.get('User-Agent'),
            start:   req.session.originalMaxAge,
            end:     req.session.expires,

        };

        req.session.store.set(req.sessionID, sessionObj, () => {
            console.log('Dooone');
        });

        res.sendStatus(204);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
