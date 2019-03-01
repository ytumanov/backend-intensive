// Core
import express from 'express';
import passport from 'passport';
import passportJWT from 'passport-jwt';
import { getPassword } from '../../helpers/getPassword';

// Handlers
import * as teachers from './';
import * as subjects from './subjects';

// Instruments
import createTeacher from './_schemas/createTeacher';
import { authenticate, validator, limiter } from '../../helpers';

const route = express.Router();
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy   = passportJWT.Strategy;

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromHeader('authorization'),
    secretOrKey:    getPassword(),
},
function (jwtPayload, cb) {
    return cb(null, jwtPayload);
}));

route.get('/', teachers.get);
route.post('/', [ authenticate, limiter(1000, 60 * 1000), validator(createTeacher) ], teachers.post);

route.get('/:teacherId/subjects', [ passport.authenticate('jwt', { session: false }) ], subjects.get);
route.post('/:teacherId/subjects', [ passport.authenticate('jwt', { session: false }) ], subjects.post);

export { route as teachers };
