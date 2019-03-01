// Core
import express from 'express';

// Handlers
import * as login from './';

const route = express.Router();

route.post('/', login.post);

export { route as login };
