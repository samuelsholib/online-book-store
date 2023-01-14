import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },

    distance: {
        type: Number,
        required: true,
    },
    photos: {
        type: [String],
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    rooms: {
        type: [String],
        required: true,
    },
    cheapestRoom: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        required: false,
    },

});

export default mongoose.model("Hotel", hotelSchema);