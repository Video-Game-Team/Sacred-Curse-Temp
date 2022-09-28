const mongoose = require('mongoose');

// Mongo DB Address for your database
const myURI =
  'mongodb+srv://giffinmike:Ross310889@cluster0.ioqnq.mongodb.net/tippy';

// MONGO URI
const URI = process.env.MONGO_URI || myURI;

// Mongo connection
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'tippy',
  })
  .then(() => console.log('Connected to Sacred Curse Database.'))
  .catch((err) => console.log(err));

// Sacred Curse Schema
const { Schema } = mongoose;

// Sacred Curse Schema
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
