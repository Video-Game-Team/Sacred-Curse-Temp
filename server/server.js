const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const cool = require('cool-ascii-faces');
const axios = require('axios');
const parse = require('html-react-parser');
const jwt = require('jsonwebtoken');

const State = require('./models/Schema');
require('dotenv').config();

// CREATING OUR INSTANCE OF OUR EXPRESS SERVER
const app = express();

// PORT TO LISTEN ON
const PORT = process.env.PORT || 3001;

// HANDLE PARSING REQUEST BODY FOR JSON AND URL
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// HANDLE REQUESTS FOR STATIC FILES
app.use(express.static(path.resolve(__dirname, '../build')));

// EMoji welcome screen Heroku
app.get('/cool', (req, res) => res.send(cool()));

// const loggedin = true;

// // // GET ROUTE
app.get('/state', async (req, res) => {
  try {
    const states = await State.find();
    res.json(states);
  } catch (error) {
    console.log(error);
  }
});

// app.get('/state', async (req, res) => {
//   const token = req.headers['x-access-token'];
//   try {
//     if (!token) {
//       // const decoded = jwt.verify(token, 'secret123');
//       // const { email } = decoded;
//       const states = await State.find();
//       res.json(states);
//     }
//   } catch (error) {
//     console.log(error);
//     res.json({ status: 'error', error: 'invalid token' });
//   }
// });

// POST ROUTE
app.post('/state/new', (req, res) => {
  const state = new State({
    name: req.body.name,
    email: req.body.email,
    userName: req.body.userName,
    subID: req.body.subID,
    password: req.body.password,
    currentMap: req.body.currentMap,
    flowers: req.body.flowers,
    quest1: req.body.quest1,
    quest2: req.body.quest2,
    quest3: req.body.quest3,
    quest4: req.body.quest4,
    timeStamp: req.body.timeStamp
  });
  state.save();
  res.json(state);
  // res.status(200);
  console.log('POST STATE', state);
});

// app.post('/state/new', async (req, res) => {
//   try {
//     const state = await new State({
//       name: req.body.name,
//       email: req.body.email,
//       userName: req.body.userName,
//       password: req.body.password,
//       userId: req.body.userID,
//       currentMap: req.body.currentMap,
//       flowers: req.body.flowers,
//       quest1: req.body.quest1,
//       quest2: req.body.quest2,
//       quest3: req.body.quest3,
//       quest4: req.body.quest4,
//       timeStamp: req.body.timeStamp
//     });
//     state.save();
//     res.json(state);
//     // res.json({ status: 'ok' });
//   } catch (err) {
//     res.json({ status: 'error', error: 'Problem!' });
//   }
// });

// app.post('/state/new', (req, res) => {
//   const state = new State({
//     name: req.body.name,
//     email: req.body.email,
//     userName: req.body.userName,
//     password: req.body.password,
//     userId: req.body.userID,
//     currentMap: req.body.currentMap,
//     flowers: req.body.flowers,
//     quest1: req.body.quest1,
//     quest2: req.body.quest2,
//     quest3: req.body.quest3,
//     quest4: req.body.quest4,
//     timeStamp: req.body.timeStamp
//   });

//   if (state) {
//     const token = jwt.sign(
//       {
//         name: state.name,
//         email: state.email,
//         userName: state.userName,
//         password: state.password,
//         userId: state.userID,
//         currentMap: state.currentMap,
//         flowers: state.flowers,
//         quest1: state.quest1,
//         quest2: state.quest2,
//         quest3: state.quest3,
//         quest4: state.quest4,
//         timeStamp: state.timeStamp
//       },
//       'secret123'
//     );
//     state.save();
//     // res.json(state);
//     return res.json({ status: 'ok', state: token });
//   }
//   return res.json({ status: 'error', state: false });
// });

// PUT ROUTE
app.put('/state/update/:id', async (req, res) => {
  const update = await State.findById(req.params.id);
  update.name = req.body.name;
  update.email = req.body.email;
  update.userName = req.body.userName;
  update.subID = req.body.subID;
  update.password = req.body.password;
  update.currentMap = req.body.currentMap;
  update.flowers = req.body.flowers;
  update.quest1 = req.body.quest1;
  update.quest2 = req.body.quest2;
  update.quest3 = req.body.quest3;
  update.quest4 = req.body.quest4;
  update.timeStamp = req.body.timeStamp;
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
    message: { err: 'An error occurred' }
  };
  const errorObj = Object.assign(defaultErr, { error });
  response.status(errorObj.status).json(errorObj.message.err);
});

// START SERVER
app.listen(PORT, () => {
  console.log(`The server is connected and running on port: ${PORT}`);
});
