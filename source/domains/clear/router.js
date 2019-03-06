// Core
import express from 'express';

// Handlers
import * as clear from './';

const route = express.Router();

route.delete('/', clear.del);

export { route as clear };
