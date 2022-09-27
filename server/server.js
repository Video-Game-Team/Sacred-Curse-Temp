const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const State = require('./models/Schema.js');

const app = express();

const PORT = 3001;

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/state', async (req, res) => {
  const states = await State.find();
  res.json(states);
});

app.put('/state/new', async (req, res) => {
  const state = await new State({
    password: req.body.password,
    userId: req.body.userID,
    currentMap: req.body.currentMap,
    flowers: req.body.flowers,
    quest1: req.body.quest1,
    quest2: req.body.quest2,
    quest3: req.body.quest3,
    quest4: req.body.quest4,
    timeStamp: req.body.timeStamp,
    email: req.body.email,
    userName: req.body.userName,
  });
  state.save();
  res.json(state);
});

// app.put('/state/update/:id', async (req, res) => {
//   const state = await State.findById(req.params.id);
//   // UPDATE FEILDS HERE BELOW
//   state.text = req.body.text;

//   state.save();
//   res.json(this.state.first);
// });

app.listen(PORT, () => {
  console.log(`The server is connected and running on port: ${PORT}`);
});
