const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let addressSchema = new Schema({
  state: {type: String, required: true},
  city: {type: String, required: true}
}, {timestamps: true});

module.exports = mongoose.model('Address', addressSchema);