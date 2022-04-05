const express = require('express');
const app = express.Router();

const taskModel = require('../models/task');

const CREATED_STATUS = 201;

app
    //returns all tasks
    .get('/', (req, res) => {
        res.send(taskModel.tasks);
    })
    //returns only the tasks that are assigned to the user
    .get('/mytasks', (req, res) => {
        res.send(taskModel.tasks.filter(task => task.taskee === req.user.handle));
    })
    .post('/', (req, res) => {
        const task = taskModel.create(req.body)
        res.status(CREATED_STATUS).send(task);
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