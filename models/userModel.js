const mongoose = require('mongoose'); 


var userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      mobile: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      bookings:[{
        eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
        },
        numberOfTickets: {
             type: Number,
       required: true
        }
      }]
    
});

//Export the model
module.exports = mongoose.model('User', userSchema);