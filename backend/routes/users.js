const express = require('express');
const router = express.Router();
const {getUser, addBookToReservations,addBookToShelf, removeBookFromShelf, removeBookFromReservations} = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/me',auth,getUser);
router.post('/reservations',auth,addBookToReservations);
router.post('/shelf',auth,addBookToShelf);
router.delete('/shelf',auth,removeBookFromShelf);
router.delete('/reservations',auth,removeBookFromReservations);

module.exports = router;