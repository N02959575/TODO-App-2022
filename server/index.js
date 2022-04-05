require('dotenv').config();//load enviroment variables

const express = require('express')
const userModel = require('./models/user')//////////
const usersController = require('./controllers/users');
const tasksController = require('./controllers/tasks');
const { requireAuth } = require('./models/auth');

const app = express()
const port = process.env.PORT || 3000;

app

  .use('/', express.static(__dirname + '/public/'))

  .use(express.json())
  .use((req, res, next) => {///////////////////////
    const auth = req.headers.authorization;
    if(auth){
      const token = auth.split(' ')[1];
      userModel.fromToken(token)
        .then(user => {
          req.user = user;
          next();
        })
        .catch(next)
    }
    else{
      next();
    }
  })

  .get('/api/', (req, res) => {
  res.send('You are at the root of the API. For ' + process.env.WEB_DESCRIPTION);
  })
  
  .use('/api/users', usersController)
  
  .use('/api/tasks', requireAuth, tasksController)

  .use((err, req, res, next) => {
    console.error(err);
    
    res.status(err.statusCode || 500)
      .send({ errors: [err.message ?? 'Internal server error'] });
  })

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
})