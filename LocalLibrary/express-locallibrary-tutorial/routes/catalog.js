const express = require('express');
const router = express.Router();

const book_controller = require('../controllers/bookController');
const author_controller = require('../controllers/authorController');
const genre_controller = require('../controllers/genreController');
const book_instance_controller = require('../controllers/bookinstanceController');

router.get('/', book_controller.index);

router.get('/book/create', book_controller.book_create_get);
router.post('/book/create', book_controller.book_create_post);
router.get('/book/:id/delete', book_controller.book_delete_get);
router.post('/book/:id/delte', book_controller.book_delete_post);
router.get('/book/:id/update', book_controller.book_update_get);
router.post('/book/:id/update', book_controller.book_update_post);
router.get('/book/:id', book_controller.book_detail);
router.get('/books', book_controller.book_list);

router.get('/authors/create', author_controller.author_create_get);
router.post('/authors/create', author_controller.author_create_post);
router.get('/authors/:id/delete', author_controller.author_delete_get);
router.post('/authors/:id/delte', author_controller.author_delete_post);
router.get('/authors/:id/update', author_controller.author_update_get);
router.post('/authors/:id/update', author_controller.author_update_post);
router.get('/authors/:id', author_controller.author_detail);
router.get('/authors', author_controller.author_list);

router.get('/genres/create', genre_controller.genre_create_get);
router.post('/genres/create', genre_controller.genre_create_post);
router.get('/genres/:id/delete', genre_controller.genre_delete_get);
router.post('/genres/:id/delte', genre_controller.genre_delete_post);
router.get('/genres/:id/update', genre_controller.genre_update_get);
router.post('/genres/:id/update', genre_controller.genre_update_post);
router.get('/genres/:id', genre_controller.genre_detail);
router.get('/genres', genre_controller.genre_list);

router.get('/bookinstances/create', book_instance_controller.bookinstance_create_get);
router.post('/bookinstances/create', book_instance_controller.bookinstance_create_post);
router.get('/bookinstances/:id/delete', book_instance_controller.bookinstance_delete_get);
router.post('/bookinstances/:id/delte', book_instance_controller.bookinstance_delete_post);
router.get('/bookinstances/:id/update', book_instance_controller.bookinstance_update_get);
router.post('/bookinstances/:id/update', book_instance_controller.bookinstance_update_post);
router.get('/bookinstances/:id', book_instance_controller.bookinstance_detail);
router.get('/bookinstances', book_instance_controller.bookinstance_list);

module.exports = router;