const express = require('express')
const router = express.Router()
const {createEvent } = require('../controller/eventController')
router.post('/',createEvent)
module.exports = router