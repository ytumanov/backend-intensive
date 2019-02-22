export const getPassword = () => {
    const { PASSWORD } = process.env;

    if (!PASSWORD) {
        throw new Error('Environment variable PASSWORD should be specified');
    }

    const isValid = PASSWORD.length > 6;

    if (!isValid) {
        throw new Error('Environment variable PASSWORD should have more than 6 symbols length');
    }

    return PASSWORD;
};
