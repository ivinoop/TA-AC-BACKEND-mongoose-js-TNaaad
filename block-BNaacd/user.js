const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

let userSchema = ({
  name: {type: String, lowercase: true},
  email: String,
  age: {type: Number, min: 0}
})