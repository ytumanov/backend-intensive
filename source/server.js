// Core
import express from 'express';

// Instruments
import { teachersRoute, pupilsRoute, parentsRoute, classesRoute, subjectsRoute } from './routes';

const app = express();

app.use('/teachers', teachersRoute);
app.use('/pupils', pupilsRoute);
app.use('/parents', parentsRoute);
app.use('/classes', classesRoute);
app.use('/subjects', subjectsRoute);

export { app };
