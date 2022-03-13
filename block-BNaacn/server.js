const express = require('express');
const mongoose  = require('mongoose');
const logger = require('morgan');

mongoose.connect('mongodb://localhost/test', (err) => {
  console.log(err ? err : 'Connected to database');
});

let app = express();

app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send('Index page')
});

app.listen(3000, () => {
  console.log('=> Server listening to port 3000');
});