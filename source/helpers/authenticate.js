import { getPassword } from './getPassword';
import jwt from 'jsonwebtoken';

const password = getPassword();

export const authenticate = (req, res, next) => {
    const { authorization } = req.headers;

    try {
        jwt.verify(authorization, password);
        next();
    } catch ({ message }) {
        res.status(401).json({ message: 'authentication credentials are not valid'});
    }
};
