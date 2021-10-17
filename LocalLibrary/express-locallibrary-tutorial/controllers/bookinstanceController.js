const bookinstance = require('../models/bookinstance');
const book = require('../models/book');

exports.bookinstance_list = (req, res, next) => {
    console.log('exports.bookinstance_list');
    bookinstance
        .find()
        .populate('book')
        .exec(function(err, result) {
            if (err) {
                next(err);
            }
            console.log(result);
            res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list: result })
        })
};
exports.bookinstance_detail = (req, res) => { res.send('bookinstance_detail') };
exports.bookinstance_create_get = (req, res) => { res.send('bookinstance_create_get') };
exports.bookinstance_create_post = (req, res) => { res.send('bookinstance_create_post') };
exports.bookinstance_delete_get = (req, res) => { res.send('bookinstance_delete_get') };
exports.bookinstance_delete_post = (req, res) => { res.send('bookinstance_delete_post') };
exports.bookinstance_update_get = (req, res) => { res.send('bookinstance_update_get') };
exports.bookinstance_update_post = (req, res) => { res.send('bookinstance_update_post') };