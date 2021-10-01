const genre = require('../models/genre');

exports.genre_list = (req, res) => { res.send('genre_list') };
exports.genre_detail = (req, res) => { res.send('genre_detail') };
exports.genre_create_get = (req, res) => { res.send('genre_create_get') };
exports.genre_create_post = (req, res) => { res.send('genre_create_post') };
exports.genre_delete_get = (req, res) => { res.send('genre_delete_get') };
exports.genre_delete_post = (req, res) => { res.send('genre_delete_post') };
exports.genre_update_get = (req, res) => { res.send('genre_update_get') };
exports.genre_update_post = (req, res) => { res.send('genre_update_post') };