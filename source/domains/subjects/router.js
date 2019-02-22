// Core
import express from 'express';

// Handlers
import * as subject from './';
import * as seasons from './seasons';
import * as season from './seasons/season';
import * as lessons from './seasons/lessons';
import * as lesson from './seasons/lessons/lesson';

const route = express.Router();

route.get('/subjects/:subjectsId', subject.get);
route.post('/subjects/:subjectsId', subject.post);
route.put('/subjects/:subjectsId', subject.put);
route.delete('/subjects/:subjectsId', subject.remove);

route.get('/subjects/:subjectsId/seasons', seasons.get);
route.post('/subjects/:subjectsId/seasons', seasons.post);

route.get('/subjects/:subjectsId/seasons/:seasonId', season.get);
route.post('/subjects/:subjectsId/seasons/:seasonId', season.post);
route.put('/subjects/:subjectsId/seasons/:seasonId', season.put);
route.delete('/subjects/:subjectsId/seasons/:seasonId', season.remove);

route.get('/subjects/:subjectsId/seasons/:seasonId/lessons', lessons.get);
route.post('/subjects/:subjectsId/seasons/:seasonId/lessons', lessons.post);

route.get('/subjects/:subjectsId/seasons/:seasonId/lessons/:lessonId', lesson.get);
route.post('/subjects/:subjectsId/seasons/:seasonId/lessons/:lessonId', lesson.post);
route.put('/subjects/:subjectsId/seasons/:seasonId/lessons/:lessonId', lesson.put);
route.delete('/subjects/:subjectsId/seasons/:seasonId/lessons/:lessonId', lesson.remove);

export { route as subjects };
