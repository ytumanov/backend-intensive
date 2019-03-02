// Core
import express from 'express';
import passport from 'passport';

// Handlers
import * as teachers from './';
import * as subjects from './subjects';

// Instruments
import createTeacher from './_schemas/createTeacher';
import { validator, limiter } from '../../helpers';

const route = express.Router();

route.get('/', teachers.get);
route.post('/', [ passport.authenticate('jwt', { session: false }), limiter(1000, 60 * 1000), validator(createTeacher) ], teachers.post);

route.get('/:teacherId/subjects', [ passport.authenticate('jwt', { session: false }) ], subjects.get);
route.post('/:teacherId/subjects', [ passport.authenticate('jwt', { session: false }) ], subjects.post);

export { route as teachers };
