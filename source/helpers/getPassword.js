export const getPassword = () => {
    const { PASSWORD } = process.env;

    if (!PASSWORD) {
        throw new Error('Environment variable PORT should be specified');
    }

    const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(PASSWORD);

    if (!isValid) {
        throw new Error(
            'Environment variable PASSWORD should have a minimum eight characters, at least one letter, one number and one special character',
        );
    }

    return PASSWORD;
};
