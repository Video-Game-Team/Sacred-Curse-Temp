const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const cool = require('cool-ascii-faces');
const State = require('./models/Schema');

// CREATING OUR INSTANCE OF OUR EXPRESS SERVER
const app = express();

// PORT TO LISTEN ON
const PORT = process.env.PORT || 3001;

// HANDLE PARSING REQUEST BODY FOR JSON AND URL
// app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// HANDLE REQUESTS FOR STATIC FILES
app.use(express.static(path.resolve(__dirname, '../build')));

// EMoji welcome screen Heroku
app.get('/cool', (req, res) => res.send(cool()));





const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.get(
    '/state',cors(),
    proxy({
      target: 'https://www.sacredcurse.com/state',
      changeOrigin: true,
      pathRewrite: {
        '^/state': '/',
      },
    })
  );
};




// // GET ROUTE
// app.get('/state', async (req, res) => {
//   const states = await State.find();
//   res.json(states);
//   // res.status(200);
// });

// POST ROUTE
app.post('/state/new', (req, res) => {
  const state = new State({
    name: req.body.name,
    email: req.body.email,
    userName: req.body.userName,
    password: req.body.password,
    userId: req.body.userID,
    currentMap: req.body.currentMap,
    flowers: req.body.flowers,
    quest1: req.body.quest1,
    quest2: req.body.quest2,
    quest3: req.body.quest3,
    quest4: req.body.quest4,
    timeStamp: req.body.timeStamp,
  });
  state.save();
  res.json(state);
  // res.status(200);
  // console.log('POST STATE', state);
});

// PUT ROUTE
app.put('/state/update/:id', async (req, res) => {
  const update = await State.findById(req.params.id);
  update.password = req.body.password;
  update.userID = req.body.userID;
  update.currentMap = req.body.currentMap;
  update.flowers = req.body.flowers;
  update.quest1 = req.body.quest1;
  update.quest2 = req.body.quest2;
  update.quest3 = req.body.quest3;
  update.quest4 = req.body.quest4;
  update.timeStamp = req.body.timeStamp;
  update.email = req.body.email;
  update.userName = req.body.userName;
  update.save();
  res.json(update);
  // res.status(200);
  // console.log('UPDATE', update);
});

// DELETE ROUTE
app.delete('/state/delete/:id', async (req, res) => {
  const result = await State.findByIdAndDelete(req.params.id);
  res.json({ result });
  // res.status(200);
  // console.log('DELETE', result);
});

// CATCH-ALL ROUTE HANDLER FOR ANY REQUESTS TO AN UNKNOWN ROUTE
app.use('*', (request, response) => {
  response.status(404).send('Error: Page not found for shizzle');
});

// CONFIGURE EXPRESS GLOBAL ERROR HANDLER
app.use((error, request, response, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, { error });
  response.status(errorObj.status).json(errorObj.message.err);
});

// START SERVER
app.listen(PORT, () => {
  console.log(`The server is connected and running on port: ${PORT}`);
});
