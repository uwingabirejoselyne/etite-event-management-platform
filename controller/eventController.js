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

const updateEvent = async(req,res) =>{
    const {id} = req.params

    try {
        const updateEvent = await Event.findByIdAndUpdate(id,req.body, {
            new: true
        })
        res.json(updateEvent)
       
    } catch (error) {
       throw new Error(error) 
    }
}


module.exports = {createEvent,updateEvent};
