const express = require('express');
const app = express.Router();
const { requireAuth } = require('../models/auth');

const userModel = require('../models/user')

const CREATED_STATUS = 201;

//get all users
app
.get('/', requireAuth, (req,res,next) => {
    userModel.getlist()
    .then(users => {
        res.status(200).json(users);
    }).catch(next)
})
//get user by id
.get('/:id', (req,res,next) =>{
    userModel.get(req.params.id)
    .then(user => {
        res.status(200).json(user);
    }).catch(next)
})
//create user
.post('/', (req,res,next) => {
    userModel.create(req.body)
    .then(user => {
        res.status(CREATED_STATUS).send(user);
    }).catch(next);//next is used to pass the error to the next middleware
})
//delete user
.delete('/:id', requireAuth, (req,res) => {
    userModel.remove(req.params.id)
    .then(user => {
        res.send({success: true, errors: [], data: x.insertedIds});
    }).catch(next);
})
//patch is used to update only the fields that are passed in the request
.patch('/:id', (req, res, next) => {

    userModel.update(req.params.id, req.body)
    .then(user => {
        res.send({ success: true, errors: [], data: user });
    }).catch(next);
})
//login
.post('/login', (req,res,next) => {
    userModel.login(req.body.email, req.body.password)
    .then(user => {
        res.send(user);
    }).catch(next);
})
//seed the database with the users created in user.js file
.post('/seed', (req, res, next) => {
    userModel.seed()
    .then(x => {
        res.send({ success: true, errors: [], data: x.insertedIds });
    }).catch(next);
})
module.exports = app;