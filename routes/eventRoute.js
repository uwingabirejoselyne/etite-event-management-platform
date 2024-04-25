const express = require('express')
const router = express.Router()
const {createEvent,updateEvent } = require('../controller/eventController')
router.post('/',createEvent)
router.put('/:id/update', updateEvent)
module.exports = router