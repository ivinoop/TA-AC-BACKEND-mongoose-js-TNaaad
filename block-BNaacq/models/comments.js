const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentsSchema = new Schema ({
  content: String,
  author: Schema.Types.ObjectId,
  article: String
}, {timestamps: true});

let Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;