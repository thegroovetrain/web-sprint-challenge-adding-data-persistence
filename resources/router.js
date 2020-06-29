const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const resources = await Resource.find();
        res.status(200).json(resources);
    } catch (err) {
        res.status(500).json({message: err});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const resource = await Resource.find(parseInt(req.params.id, 10));
        res.status(200).json(resource);
    } catch (err) {
        res.status(500).json({message: err});
    }
});

router.post('/', async (req, res) => {
    try {
        const newResource = await Resource.add({
            name: req.body.name,
            description: req.body.description || ''
        });
        res.status(201).json(newResource);
    } catch (err) {
        res.status(500).json({message: err});
    }
});

module.exports = router;