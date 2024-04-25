const express = require('express')
const router = express.Router()
const {createBooking,getBooking } = require('../controller/bookingController')
router.post('/',createBooking)
router.post('/',createBooking)
router.get('/:eventId',getBooking)


module.exports = router