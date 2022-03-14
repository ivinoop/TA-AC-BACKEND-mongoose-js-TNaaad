const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, match: /@/},
  age: {type: Number, default: 18}
}, {timestamps: true});

let User = mongoose.model('User', userSchema);
module.exports = User;