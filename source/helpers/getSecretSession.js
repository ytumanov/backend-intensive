import { ValidationError } from './errors';

export const getSecretSession = () => {
    const { SECRET_SESSION } = process.env;

    if (!SECRET_SESSION) {
        throw new ValidationError('Environment variable SECRET_SESSION should be specified', 400);
    }

    return SECRET_SESSION;
};
