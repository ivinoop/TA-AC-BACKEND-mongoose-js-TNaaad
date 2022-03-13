const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', (err) => {
  err ? err : 'Connected to database';
});

let app = express();

app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send('Index page');
});

app.listen(3000, () => {
  console.log('=> Server listening on port 3000');
});