// Core
import express from 'express';

// Handlers
import * as teachers from './';
import * as subjects from './subjects';

const route = express.Router();

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.status(401).json({message: 'Not Authorized'});
}

route.get('/', ensureAuthenticated, teachers.get);
route.post('/', ensureAuthenticated, teachers.post);

route.get('/:teacherId/subjects', subjects.get);
route.post('/:teacherId/subjects', subjects.post);

export { route as teachers };
