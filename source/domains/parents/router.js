// Core
import express from 'express';

// Handlers
import * as parent from './parent';
import * as pupils from './pupils';
import * as person from './pupils/person';

const route = express.Router();

route.get('/:parentId', parent.get);
route.post('/:parentId', parent.post);
route.put('/:parentId', parent.put);
route.delete('/:parentId', parent.remove);

route.get('/:parentId/pupils', pupils.get);
route.post('/:parentId/pupils', pupils.post);

route.get('/:parentId/pupils/:personId', person.get);
route.post('/:parentId/pupils/:personId', person.post);
route.put('/:parentId/pupils/:personId', person.put);
route.delete('/:parentId/pupils/:personId', person.remove);

export { route as parents };
