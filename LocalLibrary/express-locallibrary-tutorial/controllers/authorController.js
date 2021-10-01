const Author = require('../models/author');

exports.author_list = (req, res) => { res.send('author_list') };
exports.author_detail = (req, res) => { res.send('author_detail') };
exports.author_create_get = (req, res) => { res.send('author_create_get') };
exports.author_create_post = (req, res) => { res.send('author_create_post') };
exports.author_delete_get = (req, res) => { res.send('author_delete_get') };
exports.author_delete_post = (req, res) => { res.send('author_delete_post') };
exports.author_update_get = (req, res) => { res.send('author_update_get') };
exports.author_update_post = (req, res) => { res.send('author_update_post') };