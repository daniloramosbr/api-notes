import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const login = mongoose.model("usersdb", loginSchema)

export default login