const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

const PORT = 3001;

app.use(express.json());

app.use(cors());

mongoose
  .connect(
    'mongodb+srv://giffinmike:Ross310889@cluster0.ioqnq.mongodb.net/tippy',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Connected to Sacred Curse Mongo DB.'))
  .catch(console.error);

const State = require('./models/Schema');

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/state', async (req, res) => {
  const states = await State.find();
  res.json(states);
});

app.post('/state/new', (req, res) => {
  const state = new State({
    password: req.body.password,
    userId: req.body.userID,
    currentMap: req.body.currentMap,
    flowers: req.body.flowers,
    quest1: 'true',
    quest2: req.body.quest2,
    quest3: req.body.quest3,
    quest4: req.body.quest4,
    timeStamp: req.body.timeStamp,
    email: req.body.email,
    userName: req.body.userName,
  });
  state.save();
  res.json(state);
  console.log('STATE', state);
});

// app.put('/state/update/:id', async (req, res) => {
//   const state = await State.findById(req.params.id);
//   // UPDATE FEILDS HERE BELOW
//   state.text = req.body.text;
//   state.save();
//   res.json(this.state.first);
// });

app.delete('/state/delete/:id', async (req, res) => {
  const result = await State.findByIdAndDelete(req.params.id);
  res.json({ result });
});

/** HANDLE REQUESTS FOR STATIC FILES */
app.use(
  express.static(path.resolve(__dirname, '../client/stylesheets/styles.css'))
);

/** CATCH-ALL ROUTE HANDLER FOR ANY REQUESTS TO AN UNKNOWN ROUTE */
app.use('*', (request, response) => {
  response.status(404).send('Error: Page not found');
});

/** CONFIGURE EXPRESS GLOBAL ERROR HANDLER */
app.use((error, request, response, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error', // testing
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, { error });
  response.status(errorObj.status).json(errorObj.message.err);
});

app.listen(PORT, () => {
  console.log(`The server is connected and running on port: ${PORT}`);
});
