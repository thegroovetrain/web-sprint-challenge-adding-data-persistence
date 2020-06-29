const express = require('express');
const Project = require('./model');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({message: err});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const project = await Project.find(parseInt(req.params.id, 10));
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({message: err});
    }
});

router.get('/:id/tasks', async (req, res) => {
    try {
        const tasks = await Project.findTasks(parseInt(req.params.id, 10));
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({message: err});
    }
})

router.post('/', async (req, res) => {
    try {
        const newProject = await Project.add({
            name: req.body.name,
            description: req.body.description || '',
            completed: req.body.completed || false
        });
        res.status(201).json(newProject);
    } catch (err) {
        res.status(500).json({message: err});
    }
});

router.post('/:id/tasks', async (req, res) => {
    try {
        const newTask = await Project.addTask({
            description: req.body.description,
            notes: req.body.notes || '',
            completed: req.body.completed || false,
            project_id: parseInt(req.params.id, 10)
        });
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({message: err});
    }
})



module.exports = router;