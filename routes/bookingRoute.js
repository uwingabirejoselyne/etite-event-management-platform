const express = require('express')
const router = express.Router()
const {createBooking } = require('../controller/bookingController')
router.post('/',createBooking)
module.exports = router