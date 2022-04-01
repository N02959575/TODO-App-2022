require('dotenv').config();//load enviroment variables

const express = require('express')
const usersController = require('./controllers/users');
const tasksController = require('./controllers/tasks');


const app = express()
const port = 3000;

app

  .use('/', express.static(__dirname + '/public/'))

  .use(express.json())

  .get('/api/', (req, res) => {
  res.send('You are at the root of the API. For ' + process.env.WEB_DESCRIPTION);
  })

  .use('/api/users', usersController)

  .use('/api/tasks', tasksController)

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
})