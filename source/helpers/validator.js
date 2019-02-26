import Ajv from 'ajv';
import { ValidationError } from '../helpers';

export const validator = (schema) => (req, res, next) => {
    const ajv = new Ajv({ allErrors: true });
    const validate = ajv.compile(schema);
    const valid = validate(req.body);

    if (valid) {
        next();
    } else {
        const errorMessages = validate.errors.map(({ message }) => message);
        const error = new ValidationError(`${req.method}: ${req.originalUrl} ${errorMessages} ${JSON.stringify(req.body)}`, 400);
        next(error);
    }
};
