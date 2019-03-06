// Core
import express from 'express';

// Handlers
import * as list from './';

const route = express.Router();

route.get('/', list.get);

export { route as list };
