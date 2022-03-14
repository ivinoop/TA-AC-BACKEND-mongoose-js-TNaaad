const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const Articles = require('./models/articles');
const Comments = require('./models/comments');
const User = require('./models/user');

mongoose.connect('mongodb://localhost/blog', (err) => {
  console.log(err ? err : 'Connected to database');
});

let app = express();

app.use(logger('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Index page');
});

app.listen(3000, () => {
  console.log('=> Server listening to port 3000');
});