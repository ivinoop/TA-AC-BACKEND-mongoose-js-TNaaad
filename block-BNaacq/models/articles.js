const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let articleShema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  tags: [String],
  likes: Number,
  author: Schema.Types.ObjectId,
  comments: [String]
}, {timestamps: true});

let Articles = mongoose.model('Articles', articleShema);
module.exports = Articles;
