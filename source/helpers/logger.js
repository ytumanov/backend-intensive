
import { createLogger, transports, format } from 'winston';

const { ENV } = process.env;
const { combine, timestamp, prettyPrint } = format;

const log = createLogger({
    level:      'debug',
    format:     combine(timestamp(), prettyPrint()),
    transports: [ new transports.Console() ],
});


export const logger = () => (req, res, next) => {
    const payload = req.method === 'GET' ? 'not provided for GET requests' : JSON.stringify(req.body);

    if (ENV === 'dev') {
        log.debug(`method: ${req.method}, payload : ${payload}`);
    }

    next();
};
