import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    title: {
    type: String,
    required: true
    },
    
    note: {
        type: String,
        required: true
    },

})

const user = mongoose.model("userdb", userSchema)

export default user