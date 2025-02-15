const express = require('express');

const knex = require('knex');
const knexConfig = require('./knexfile');
const studentsRouter = require('./students/students-router');
const cohortsRouter = require('./cohorts/cohorts-router');

const db = knex(knexConfig.development);

const server = express();
server.use(express.json());


server.get('/', async (req, res) => {
    try {
        const cohorts = await db('cohorts');
        res.status(200).json(cohorts);
    } catch (error) {
        res.status(500).json({ error: `${error}` });
    };
});

server.use('/students', studentsRouter);
server.use('/cohorts', cohortsRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));