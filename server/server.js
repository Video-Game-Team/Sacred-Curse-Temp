const express = require('express');

const app = express();
const path = require('path');

const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`The server is connected and running on port: ${PORT}`);
});
