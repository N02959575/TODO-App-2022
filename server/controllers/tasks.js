const express = require('express');
const app = express.Router();

const taskModel = require('../models/task');

const CREATED_STATUS = 201;

app
    .get('/', (req, res) => {
        res.send(taskModel.tasks);
    })
    .post('/', (req, res , next) => {
        taskModel.create(req.body)
        .then(task => {
            res.status(CREATED_STATUS).send(task);
        }).catch(next);
    })
    .delete('/:id', (req,res) => {
        const task = taskModel.remove(req.params.id);
        res.send({success: true, errors: [], data: task});
    })
    .patch('/:id', (req,res) => {
        const task = taskModel.update(req.params.id, req.body);
        res.send({success: true, errors: [], data: task});
    })

module.exports = app;