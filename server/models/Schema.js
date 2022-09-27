const mongoose = require('mongoose');

const myURI =
  'mongodb+srv://giffinmike:Ross310889@cluster0.ioqnq.mongodb.net/test';

// UNCOMMENT THE LINE BELOW IF USING MONGO
const URI = process.env.MONGO_URI || myURI;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'SacredCurse',
  })
  .then(() => console.log('Connected to Sacred Curse Mongo DB.'))
  .catch((err) => console.log(err));

const { Schema } = mongoose;

const StateSchema = new Schema({
  password: {
    type: String,
    required: false,
  },
  userID: {
    type: String,
    required: false,
  },
  currentMap: {
    type: String,
    required: false,
  },
  flowers: {
    type: Number,
    required: false,
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
    required: false,
  },
  userName: {
    type: String,
    required: false,
  },
});

const State = mongoose.model('State', StateSchema);

module.exports = State;
