const Event = require('../models/eventModel')

const createEvent = async(req,res)=>{
    try {
        const newEvent = await Event.create(req.body)
        res.json(newEvent)
        
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }

}
module.exports= createEvent