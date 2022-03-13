const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let articleSchema = new Schema({
  title: String,
  description: String,
  tags: [String],
  createdAt: {type: Date, default: Date.now},
  likes: {type: Number, default: 0}
});

module.exports = mongoose.model('Article', articleSchema);
