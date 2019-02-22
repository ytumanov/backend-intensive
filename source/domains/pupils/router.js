// Core
import express from 'express';

// Handlers
import * as pupils from './';
import * as person from './person';
import { checkPass } from '../../helpers';

const route = express.Router();

route.get('/', [ checkPass() ], pupils.get);
route.post('/', [ checkPass() ], pupils.post);

route.get('/:personId', [ checkPass() ], person.get);
route.post('/:personId', [ checkPass() ], person.post);
route.put('/:personId', [ checkPass() ], person.put);
route.delete('/:personId', [ checkPass() ], person.remove);

export { route as pupils };
