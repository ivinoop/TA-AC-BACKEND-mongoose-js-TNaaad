const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let addressSchema = ({
  village: String,
  city: String, 
  state: String,
  pin: Number,
  user: Schema.Types.ObjectId
})