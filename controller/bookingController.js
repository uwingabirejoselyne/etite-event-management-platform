const Booking = require('../models/bookingModel')
const Event = require('../models/eventModel')

const createBooking = async (req,res) =>{
try {
    const {eventId,userId,numberOfTicket} = req.body
    const event =await Event.findById(eventId)

    if(!event) {
        res.status(404).json({ error: 'Event not found' });
    }

    if (numberOfTicket > event.ticketAvailability) {
        return res.status(400).json({ error: 'Not enough tickets available' });
    }
    const newBooking = await Booking.create({ eventId, userId, numberOfTicket });
    event.ticketAvailability -= numberOfTicket;
    await event.save();
    res.status(201).json(newBooking)
} catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
}
}

const getUserBookings = async (req,res) =>{
    const {eventId} = req.params
try {
    const bookings = await Booking.find({ eventId });
    if (!bookings) {
        return res.status(404).json({ error: 'Bookings not found' });
    }
    res.json(bookings);
    
} catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
}
}

const updatingBookings = async (req,res) =>{
    const { bookingId } = req.params;
    const { numberOfTicket } = req.body;
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(bookingId, { numberOfTicket }, { new: true });
        res.json(updatedBooking);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

const cancelingBookings = async (req,res) =>{
    const { bookingId } = req.params;
    try {
        await Booking.findByIdAndDelete(bookingId);
        res.json({ message: 'Booking canceled successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}
module.exports = {createBooking,getUserBookings,updatingBookings,cancelingBookings}