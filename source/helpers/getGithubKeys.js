import { ValidationError } from './errors';

export const getGithubKeys = () => {
    const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, SECRET_SESSION } = process.env;

    if (!GITHUB_CLIENT_ID) {
        throw new ValidationError('Environment variable GITHUB_CLIENT_ID should be specified', 400);
    }

    if (!GITHUB_CLIENT_SECRET) {
        throw new ValidationError('Environment variable GITHUB_CLIENT_SECRET should be specified', 400);
    }

    if (!SECRET_SESSION) {
        throw new ValidationError('Environment variable GITHUB_CLIENT_SECRET should be specified', 400);
    }

    return { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, SECRET_SESSION };
};
