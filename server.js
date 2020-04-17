const express = require('express');
const helmet = require('helmet');

const recipesRouter = require('./api/recipesRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', recipesRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is running' });
})

module.exports = server;