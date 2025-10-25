import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,

    },
    phone: {
        type: Number,


    },
    question: {
        type: String,

    },
    role: {
        type: Number,
        default: 0

    },
    password: {
        type: String,
        required: true
    },


}, { timestamps: true })


const UserModel = mongoose.models.UserModel || mongoose.model("User", userSchema)

export default UserModel