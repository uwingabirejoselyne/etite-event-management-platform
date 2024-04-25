const express = require('express')
const router = express.Router()
const {createBooking,getUserBookings } = require('../controller/bookingController')
router.post('/',createBooking)
router.post('/',createBooking)
router.get('/:eventId',getUserBookings)


module.exports = router