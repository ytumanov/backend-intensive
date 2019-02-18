// Core
import express from 'express';

// Instruments
import { teachersRoute, pupilsRoute, parentsRoute } from './routes';

const app = express();

app.use('/teachers', teachersRoute);
app.use('/pupils', pupilsRoute);
app.use('/parents', parentsRoute);

export { app };
