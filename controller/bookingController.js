const Booking = require('../models/bookingModel')
const Event = require('../models/eventModel')

const createBooking = async (req,res) =>{
try {
    const {eventId,numberOfTicket} = req.body
    const event =await Event.findById(eventId)

    if(!event) {
        res.status(404).json({ error: 'Event not found' });
    }

    if (numberOfTicket > event.ticketAvailability) {
        return res.status(400).json({ error: 'Not enough tickets available' });
    }
    const booking = new Booking({
        eventId,
        numberOfTicket,
        userId :req.user.id
    })
    await booking.save()
    res.status(201).json(booking)
} catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
}
}
module.exports = {createBooking}