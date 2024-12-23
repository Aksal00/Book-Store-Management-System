const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/books',controller.getBooks)
router.post('/addbook',controller.addBook)
router.put('/updatebook',controller.updateBook)
router.delete('/deletebook',controller.deleteBook)

module.exports = router;