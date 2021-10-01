const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = Schema({
    title: { type: String, required: true },
    book: { type: Schema.Types.ObjectId, ref: 'book', required: true },
    summary: { type: String, required: true },
    isbn: { type: String, required: true },
    genre: [{ type: Schema.Types.ObjectId, ref: 'Genre' }]
})

BookSchema
    .virtual('url')
    .get(function () {
        return '/catalog/book/' + this._id;
    })

module.exports = mongoose.model('book', BookSchema);