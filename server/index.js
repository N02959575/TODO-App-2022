const express = require('express')
const usersController = require('./controllers/users');
const tasksController = require('./controllers/tasks');


const app = express()
const port = 3000

app

  .use('/', express.static(__dirname + '/public/'))

  .use(express.json())

  .get('/api/', (req, res) => {
  res.send('You are on the homepage');
  })

  .use('/api/users', usersController)

  .use('/api/tasks', tasksController)

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
})