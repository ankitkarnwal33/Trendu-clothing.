import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User name is required'],
        maxlength: [60, "Name cannot be more than 60 characters."]
    },
    number: {
        type: Number,
        required: [true, "Number is required."],
        unique: [true, "Number is already registered"],
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email address',
        ],
    },
    password: {
        type: String,
        required: [true, "Please enter a valid password."],
    },
    salt: {
        type: String,
    }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;