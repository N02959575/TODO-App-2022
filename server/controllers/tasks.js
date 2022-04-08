const express = require('express');
const app = express.Router();

const taskModel = require('../models/task');

const CREATED_STATUS = 201;

app
    //returns all tasks
    .get('/', (req,res,next) => {
        taskModel.getTasks()
        .then(tasks => {
            res.status(200).json(tasks);
        }).catch(next)
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
    .post('/seed', (req, res, next) => {
        taskModel.seed()
        .then(x => {
            res.send({ success: true, errors: [], data: x.insertedIds });
        }).catch(next);
    })

module.exports = app;