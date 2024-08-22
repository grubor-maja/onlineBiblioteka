const express = require('express');
const router = express.Router();
const {getUser, addBookToReservations,addBookToShelf} = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/me',auth,getUser);
router.post('/reservations',auth,addBookToReservations);
router.post('/shelf',auth,addBookToShelf);

module.exports = router;