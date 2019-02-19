import express from 'express';

const route = express.Router();

route.get('/:subjectId', (req, res) => {
    try {
        const data = {};

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.post('/:subjectId', (req, res) => {
    try {
        const data = {};

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.put('/:subjectId', (req, res) => {
    try {
        const data = {};

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.delete('/:subjectId', (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.get('/:subjectId/seasons', (req, res) => {
    try {
        const data = [];

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.post('/:subjectId/seasons', (req, res) => {
    try {
        const data = [];

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.get('/:subjectId/seasons/:seasonId', (req, res) => {
    try {
        const data = {};

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.post('/:subjectId/seasons/:seasonId', (req, res) => {
    try {
        const data = {};

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.put('/:subjectId/seasons/:seasonId', (req, res) => {
    try {
        const data = {};

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.delete('/:subjectId/seasons/:seasonId', (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.get('/:subjectId/seasons/:seasonId/lessons', (req, res) => {
    try {
        const data = [];

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.post('/:subjectId/seasons/:seasonId/lessons', (req, res) => {
    try {
        const data = [];

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.get('/:subjectId/seasons/:seasonId/lessons/:lessonId', (req, res) => {
    try {
        const data = {};

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.post('/:subjectId/seasons/:seasonId/lessons/:lessonId', (req, res) => {
    try {
        const data = {};

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.put('/:subjectId/seasons/:seasonId/lessons/:lessonId', (req, res) => {
    try {
        const data = {};

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.delete('/:subjectId/seasons/:seasonId/lessons/:lessonId', (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export { route as subjectsRoute };
