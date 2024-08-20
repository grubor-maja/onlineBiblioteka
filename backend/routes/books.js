const express = require('express');
const { createBook, getBooks, getBook } = require('../controllers/bookController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBook);
// router.post('/', [auth, admin], createBook);
router.post('/',createBook);

module.exports = router;
