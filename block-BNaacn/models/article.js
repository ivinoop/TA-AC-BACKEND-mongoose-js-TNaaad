const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let articleSchema = new Schema({
  title: String,
  description: String,
  tags: [String],
  createdAt: {type: Date, default: Date.now},
  likes: {type: Number, default: 0}
});

let userSchema = new Schema({
  name: String,
  email: {type: String, lowercase: true},
  age: {type: Number, default: 0},
  password: {type: String, minlength: 0},
  createdAt: {type: Date, default: Date.now},
  favorites: [String]
}, {timestamps: true});

let addressSchema = new Schema({
  state: {type: String, required: true},
  city: {type: String, required: true}
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Article', articleSchema);
module.exports = mongoose.model('Address', addressSchema);
