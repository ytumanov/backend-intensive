export const authenticate = (req, res, next) => {
    const { email } = req.session;
    if (!email) {
        res.status(401).json({ message: 'authentication credentials are not valid'});
    }

    next();
};
