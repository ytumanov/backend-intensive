// Core
import express from 'express';

// Handlers
import * as parent from './parent';
import * as pupils from './pupils';
import * as person from './pupils/person';
import { checkPass } from '../../helpers';

const route = express.Router();

route.get('/:parentId', [ checkPass() ], parent.get);
route.post('/:parentId', [ checkPass() ], parent.post);
route.put('/:parentId', [ checkPass() ], parent.put);
route.delete('/:parentId', [ checkPass() ], parent.remove);

route.get('/:parentId/pupils', [ checkPass() ], pupils.get);
route.post('/:parentId/pupils', [ checkPass() ], pupils.post);

route.get('/:parentId/pupils/:personId', [ checkPass() ], person.get);
route.post('/:parentId/pupils/:personId', [ checkPass() ], person.post);
route.put('/:parentId/pupils/:personId', [ checkPass() ], person.put);
route.delete('/:parentId/pupils/:personId', [ checkPass() ], person.remove);

export { route as parents };
