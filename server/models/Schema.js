const mongoose = require('mongoose');
require('dotenv').config();

// MONGO URI
const URI = process.env.MONGO_URI;

// Mongo connection
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'SacredCurseUserDB',
  })
  .then(() => console.log('Connected to Sacred Curse Database.'))
  .catch((err) => console.log(err));

// Sacred Curse Schema
const { Schema } = mongoose;

// Sacred Curse Schema
const StateSchema = new Schema({
  name: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    default: '',
  },
  userName: {
    type: String,
    default: '',
  },
  subID: {
    type: String,
    default: '',
  },
  password: {
    type: String,
  },
  currentMap: {
    type: String,
    default: '',
  },
  flowers: {
    type: Number,
    default: 0,
  },
  quest1: {
    type: Boolean,
    default: false,
  },
  quest2: {
    type: Boolean,
    default: false,
  },
  quest3: {
    type: Boolean,
    default: false,
  },
  quest4: {
    type: Boolean,
    default: false,
  },
  timeStamp: {
    type: String,
    default: Date.now(),
  },
});

const State = mongoose.model('State', StateSchema);

module.exports = State;
