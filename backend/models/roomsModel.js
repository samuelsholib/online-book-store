import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    numBeds: {
        type: String,
        required: true,
    },

    size: {
        type: String,
        required: true,
    },

    

});

export default mongoose.model("Room", roomSchema);