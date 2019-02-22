import { getPassword } from './';
import dg from 'debug';

const debug = dg('router:teachers');


export const checkPass = () => (req, res, next) => {

    const expectedPassword = getPassword();

    if (req.headers.authorization === expectedPassword) {
        next();
    } else {
        res.status(401).json({ message: 'Provided password is not valid' });
    }
};
