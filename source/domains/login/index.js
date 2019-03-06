// Core
import debug from 'debug';

export const post = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);
    try {
        const { email, password } = req.body;
        const emailDecoded = Buffer.from(email, 'base64').toString();
        const passwordDecoded = Buffer.from(password, 'base64').toString();

        req.session.user = { email: emailDecoded };
        req.session.agent = req.get('User-Agent');

        res.sendStatus(204);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
