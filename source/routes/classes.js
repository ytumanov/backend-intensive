import express from 'express';

const route = express.Router();

route.get('/', (req, res) => {
    try {
        const data = [];

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.post('/', (req, res) => {
    try {
        const data = [];

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.get('/:classId', (req, res) => {
    try {
        const data = {};

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.post('/:classId', (req, res) => {
    try {
        const data = {};

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.put('/:classId', (req, res) => {
    try {
        const data = {};

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.delete('/:classId', (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.get('/:classId/gradebook', (req, res) => {
    try {
        const data = [];

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

route.post('/:classId/gradebook', (req, res) => {
    try {
        const data = [];

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export { route as classesRoute };
