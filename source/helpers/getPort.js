export const getPort = () => {
    const { PORT } = process.env;

    if (!PORT) {
        throw new Error('Environment variable PORT should be specified');
    }

    if (!/^[3-9]{1}[0-9]{3}$/.test(PORT)) {
        throw new Error('Environment variable PORT should a number and be between 3000 and 9999');
    }

    return PORT;
};
