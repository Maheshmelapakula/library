const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  journal: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },

})

const BookModel = mongoose.model('book', bookSchema);

module.exports = {BookModel}