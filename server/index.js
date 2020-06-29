const express = require('express');
const server = express();

const ProjectRouter = require('../projects/router');
const ResourceRouter = require('../resources/router');

server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);

server.get('/', (req, res) => {
    return res.status(200).send("Butt Burglars");
});

module.exports = server;