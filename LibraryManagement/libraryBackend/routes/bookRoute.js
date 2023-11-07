const express = require('express')
const router = express.Router()
const {addNewBook} = require('../controllers/bookController')

router.route('/').post(addNewBook)

module.exports = router