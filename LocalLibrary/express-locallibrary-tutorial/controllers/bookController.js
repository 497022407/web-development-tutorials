const book = require('../models/book');
const bookInstance = require('../models/bookinstance');
const author = require('../models/author');
const genre = require('../models/genre');
const async = require('async');

exports.book_list = (req, res, next) => {
    book
        .find({}, 'title author')
        .populate('author')
        .exec(function(err, result) {
            if (err) {
                next(err);
            }
            console.log(result)
            res.render('book_list', { title: 'book_list', book_list: result })
        })
};
exports.book_detail = (req, res) => { res.send('book_detail') };
exports.book_create_get = (req, res) => { res.send('book_create_get') };
exports.book_create_post = (req, res) => { res.send('book_create_post') };
exports.book_delete_get = (req, res) => { res.send('book_delete_get') };
exports.book_delete_post = (req, res) => { res.send('book_delete_post') };
exports.book_update_get = (req, res) => { res.send('book_update_get') };
exports.book_update_post = (req, res) => { res.send('book_update_post') };

exports.index = (req, res) => {
    console.log('in bookController.index')
    async.parallel({
            book_count: function(callback) {
                book.count({}, callback);
            },
            book_instance_count: function(callback) {
                bookInstance.count({}, callback);
            },
            book_instance_available_count: function(callback) {
                bookInstance.count({ status: 'Available' }, callback);
            },
            author_count: function(callback) {
                author.count({}, callback);
            },
            genre_count: function(callback) {
                genre.count({}, callback);
            }
        }, function(err, result) {
            console.log('counts finished', result);
            res.render('index', { data: result, error: err, title: 'Local Library Home' })
        })
        // res.send('welcome')
};