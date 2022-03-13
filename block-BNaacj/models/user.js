const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = ({
  name: String,
  age: Number,
  email: {type: String, lowercase: true, trim: true, match: /@/},
  password: {type: String, minlength: 5, maxlength: 15},
  createdAt: {type: Date, default: Date.now}
});