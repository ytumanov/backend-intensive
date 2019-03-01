// Core
import debug from 'debug';
import jwt from 'jsonwebtoken';

const options = { expiresIn: '60s' };

export const post = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const {email, password} = req.body;
        const emailEncoded = Buffer.from(email, 'base64').toString('utf8');
        const passwordEncoded = Buffer.from(password, 'base64').toString('utf8');
        const token = jwt.sign({ email: emailEncoded }, passwordEncoded, options);

        res.setHeader('X-Token', token);
        res.status(200).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
