// Core
import express from 'express';

// Handlers
import * as classes from './';
import * as classId from './class';
import * as gradebook from './gradebook';

import { checkPass } from '../../helpers';

const route = express.Router();

route.get('/', classes.get);
route.post('/', [ checkPass() ], classes.post);

route.get('/:classId', [ checkPass() ], classId.get);
route.post('/:classId', [ checkPass() ], classId.post);
route.put('/:classId', [ checkPass() ], classId.put);
route.delete('/:classId', [ checkPass() ], classId.remove);

route.get('/:classId/gradebook', [ checkPass() ], gradebook.get);
route.post('/:classId/gradebook', [ checkPass() ], gradebook.post);
route.put('/:classId/gradebook', [ checkPass() ], gradebook.put);
route.delete('/:classId/gradebook', [ checkPass() ], gradebook.remove);

export { route as classes };
