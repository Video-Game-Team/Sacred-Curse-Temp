const mongoose = require('mongoose');
require('dotenv').config();
const bcrypt = require('bcryptjs');

// MONGO URI
const URI = process.env.MONGO_URI;

// Mongo connection
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'SacredCurseUserDB'
  })
  .then(() => console.log('Connected to Sacred Curse Database.'))
  .catch((err) => console.log(err));

// Sacred Curse Schema
const { Schema } = mongoose;

// Sacred Curse Schema
const StateSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  userName: {
    type: String,
    default: ''
  },
  subID: {
    type: String,
    default: ''
  },
  password: {
    type: String
  },
  currentMap: {
    type: String,
    default: ''
  },
  flowers: {
    type: Number,
    default: 0
  },
  quest1: {
    type: Boolean,
    default: false
  },
  quest2: {
    type: Boolean,
    default: false
  },
  quest3: {
    type: Boolean,
    default: false
  },
  quest4: {
    type: Boolean,
    default: false
  },
  timeStamp: {
    type: String,
    default: Date.now()
  }
});

StateSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.name = await bcrypt.hash(this.name, salt);
  this.password = await bcrypt.hash(this.password, salt);
  this.userName = await bcrypt.hash(this.userName, salt);
  next();
});

StateSchema.methods.compareUserName = async function (userName) {
  if (!userName) throw new Error('UserName is wrong, cant compare');

  try {
    const result = await bcrypt.compare(userName, this.userName);
    console.log('RESULT', result);
    return result;
  } catch (error) {
    console.log('Error while comparing userName!', error.message);
  }
};

const State = mongoose.model('State', StateSchema);

module.exports = State;
