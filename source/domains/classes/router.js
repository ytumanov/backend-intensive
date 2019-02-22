// Core
import express from 'express';

// Handlers
import * as classes from './';
import * as classId from './class';
import * as gradebook from './gradebook';

const route = express.Router();

route.get('/', classes.get);
route.post('/', classes.post);

route.get('/:classId', classId.get);
route.post('/:classId', classId.post);
route.put('/:classId', classId.put);
route.delete('/:classId', classId.remove);

route.get('/:classId/gradebook', gradebook.get);
route.post('/:classId/gradebook', gradebook.post);
route.put('/:classId/gradebook', gradebook.put);
route.delete('/:classId/gradebook', gradebook.remove);

export { route as classes };
