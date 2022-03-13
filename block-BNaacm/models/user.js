const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = ({
  name: String, 
  email: String,
  age: Number
});

let articleSchema = ({
  title: String,
  description: String
});

module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Article', articleSchema);

