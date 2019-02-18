export const getPort = () => {
    const { PORT } = process.env;

    if (!PORT) {
        throw new Error('Environment variable PORT should be specified');
    }

    if (isNaN(PORT)) {
        throw new Error('Environment variable PORT should a number');
    }

    return PORT;
};
