const mongoose = require('mongoose'); 

var bookingSchema = new mongoose.Schema({
    eventId:{
        type:mongoose.Types.Schema.ObjectId,
        ref: 'Event',
        required: true
    },
    userId:{
        type:mongoose.Types.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    numberOfTickets: {
        type: Number,
        required: true
      }
});

module.exports = mongoose.model('Booking', bookingSchema);