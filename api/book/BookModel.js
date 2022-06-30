const mongoose = require('mongoose');
const Schema = mongoose.Schema;

BookSchema = new Schema({
    _id: Number,
    title: String,
    isbn: String,
    categories: [String]
}, {versionKey: false});

module.exports = mongoose.model('books', BookSchema);