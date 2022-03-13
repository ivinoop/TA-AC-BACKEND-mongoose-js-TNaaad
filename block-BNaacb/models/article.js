const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

let articleSchema = new Schema( {
  title: String,
  description: String,
  views: Number
});
