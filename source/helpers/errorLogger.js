import { createLogger, format, transports } from 'winston';
const { combine, timestamp, printf } = format;

const logFormat = printf(
    ({ message, timestamp }) => `${timestamp} ${message}`,
);

const logger = (loggerName) => {
    return createLogger({
        format:     combine(timestamp(), logFormat),
        transports: [
            new transports.File({
                filename: loggerName,
                level:    'error',
            }),
        ],
    });
};

export const errorLogger = logger('logs/errors.log');
export const notFoundLogger = logger('logs/not_found_error.log');
export const validationLogger = logger('logs/validation_errors.log');
