const mongoose = require('mongoose');

const { Schema } = mongoose;

const StateSchema = new Schema({
  password: {
    type: String,
  },
  userID: {
    type: String,
    default: '',
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
  email: {
    type: String,
    default: '',
  },
  userName: {
    type: String,
    default: '',
  },
});

const State = mongoose.model('State', StateSchema);

module.exports = State;
