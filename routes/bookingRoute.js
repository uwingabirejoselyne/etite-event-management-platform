const express = require('express')
const router = express.Router()
const {createBooking,getUserBookings,updatingBookings } = require('../controller/bookingController')
router.post('/',createBooking)
router.post('/',createBooking)
router.get('/:eventId',getUserBookings)
router.put('/:bookingId',updatingBookings)



module.exports = router