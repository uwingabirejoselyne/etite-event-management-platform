const Event = require('../models/eventModel');

const createEvent = async (req, res) => {
    console.log(req.body);
    try {
        const newEvent = await Event.create(req.body);
        res.json(newEvent);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {createEvent};
