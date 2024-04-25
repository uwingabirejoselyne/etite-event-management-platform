const express = require('express')
const router = express.Router()
const {createBooking,getUserBookings,updatingBookings,cancelingBookings } = require('../controller/bookingController')
router.post('/',createBooking)
router.post('/',createBooking)
router.get('/:eventId',getUserBookings)
router.put('/:bookingId',updatingBookings)
router.delete('/:bookingId',cancelingBookings)




module.exports = router