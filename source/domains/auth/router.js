// Core
import express from 'express';

// Handlers
import * as login from './login';
import * as list from './list';
import * as clear from './clear';

const route = express.Router();

route.post('/login', login.post);
route.get('/list', list.get);
route.delete('/clear', clear.del);

export { route as auth };
