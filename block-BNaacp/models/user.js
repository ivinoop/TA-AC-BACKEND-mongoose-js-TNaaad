const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {type: String},
  email: {type: String},
  sports: [String],
});

let User = mongoose.model('User', userSchema);
module.exports = User;