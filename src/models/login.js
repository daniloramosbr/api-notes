import mongoose from "mongoose";
import bcrypt from "bcrypt"

const loginSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
})

loginSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 10)
    next()
    })

const login = mongoose.model("usersdb", loginSchema)

export default login