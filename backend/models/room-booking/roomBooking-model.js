const mongoose = require('mongoose');
const schema = mongoose.Schema;

const roomBookingSchema = new schema({
    roomId: {
        type: schema.Types.ObjectId,
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: true,
        unique: false
    },
    createdBy: {
        type: schema.Types.ObjectId,
        required: true,
        unique: false
    },
    start: {
        type: Date,
        required: true,
        unique: false
    },
    end: {
        type: Date,
        required: true,
        unique: false
    },
    approved: {
        type: Number,
        required: true,
        unique: false
    }
});

const RoomBooking = mongoose.model('roomBooking', roomBookingSchema);
module.exports = RoomBooking;