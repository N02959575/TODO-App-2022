const express = require('express');
const app = express.Router();

const taskModel = require('../models/task');

const CREATED_STATUS = 201;

app
    //returns all tasks
    .get('/', (req,res,next) => {
        taskModel.getAll()
            .then(tasks => res.json({ success: true, errors: [], data: tasks }))
            .catch(next);
    })
    //returns only the tasks that are assigned to the user
    .get('/mytasks/:handle', (req,res,next) => {
        taskModel.getTasks(req.params.handle)
            .then(tasks => res.json({ success: true, errors: [], data: tasks }))
            .catch(next);
    })
    //returns a task by id
    .get('/:id', (req,res,next) => {
        taskModel.get(req.params.id)
            .then(task => res.json({ success: true, errors: [], data: task }))
            .catch(next);
    })
    //creates a task
    .post('/', (req,res,next) => {
        taskModel.create(req.body)
            .then(task => res.status(CREATED_STATUS).json({ success: true, errors: [], data: task }))
            .catch(next);
    })
    //deletes a task
    .delete('/:id', (req,res,next) => {
        taskModel.remove(req.params.id)
            .then(task => res.json({ success: true, errors: [], data: task }))
            .catch(next);
    })
    //updates a task
    .patch('/:id', (req,res,next) => {
        taskModel.update(req.params.id, req.body)
            .then(task => res.json({ success: true, errors: [], data: task }))
            .catch(next);
    })
    //seed the database with the tasks created in task.js file
    .post('/seed', (req,res,next) => {
        taskModel.seed()
        .then(x => {
            res.send({ success: true, errors: [], data: x.insertedIds });
        }).catch(next);
    })

module.exports = app;