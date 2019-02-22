// Core
import express from 'express';

// Handlers
import * as pupils from './';
import * as person from './person';

const route = express.Router();

route.get('/', pupils.get);
route.post('/', pupils.post);

route.get('/:personId', person.get);
route.post('/:personId', person.post);
route.put('/:personId', person.put);
route.delete('/:personId', person.remove);

export { route as pupils };
