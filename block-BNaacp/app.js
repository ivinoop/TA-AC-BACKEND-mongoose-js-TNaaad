const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://localhost/users', (err) => {
  console.log(err ? err : 'Connected to database');
});

let app = express();

app.use(logger('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Index page');
});

app.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    console.log(err);
    res.json(users);
  });
});

app.get('/users/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    console.log(err);
    res.json(user);
  });
});

app.post('/users', (req, res) => {
  User.create(req.body, (err, user) => {
    console.log(err);
    res.json(user);
  });
});

// app.put('/users/:id', (req, res) => {
//   let id = req.params.id;
//   User.findByIdAndUpdate(id, req.body, {new: true}, (err, updatedUser) => {
//     console.log(err);
//     res.json(updatedUser);
//   });
// });

app.put('/users/:id', (req, res) => {
  User.findOne({"title": req.params.title}, (err, updatedUser) => {
    console.log(err);
    res.json(updatedUser);
  });
});

app.delete('/users/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    console.log(err);
    res.send(`${deletedUser.name} has been deleted`);
  });
});

app.listen(3000, () => {
  console.log('=> Server listening to port 3000');
});