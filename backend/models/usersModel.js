import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    DOB: {
        type: Number,
        required: false,
    },
    


});

export default mongoose.model("User", userSchema);