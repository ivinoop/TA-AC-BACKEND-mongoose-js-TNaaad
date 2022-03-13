const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  email: {type: String, lowercase: true},
  age: {type: Number, default: 0},
  password: {type: String, minlength: 0},
  createdAt: {type: Date, default: Date.now},
  favorites: [String]
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);