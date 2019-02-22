// Core
import express from 'express';

// Handlers
import * as subject from './';
import * as seasons from './seasons';
import * as season from './seasons/season';
import * as lessons from './seasons/lessons';
import * as lesson from './seasons/lessons/lesson';

import { checkPass } from '../../helpers';

const route = express.Router();

route.get('/:subjectsId', subject.get);
route.post('/:subjectsId', [ checkPass() ], subject.post);
route.put('/:subjectsId', [ checkPass() ], subject.put);
route.delete('/:subjectsId', [ checkPass() ], subject.remove);

route.get('/:subjectsId/seasons', seasons.get);
route.post('/:subjectsId/seasons', [ checkPass() ], seasons.post);

route.get('/:subjectsId/seasons/:seasonId', season.get);
route.post('/:subjectsId/seasons/:seasonId', [ checkPass() ], season.post);
route.put('/:subjectsId/seasons/:seasonId', [ checkPass() ], season.put);
route.delete('/:subjectsId/seasons/:seasonId', [ checkPass() ], season.remove);

route.get('/:subjectsId/seasons/:seasonId/lessons', lessons.get);
route.post('/:subjectsId/seasons/:seasonId/lessons', [ checkPass() ], lessons.post);

route.get('/:subjectsId/seasons/:seasonId/lessons/:lessonId', lesson.get);
route.post('/:subjectsId/seasons/:seasonId/lessons/:lessonId', [ checkPass() ], lesson.post);
route.put('/:subjectsId/seasons/:seasonId/lessons/:lessonId', [ checkPass() ], lesson.put);
route.delete('/:subjectsId/seasons/:seasonId/lessons/:lessonId', [ checkPass() ], lesson.remove);

export { route as subjects };
