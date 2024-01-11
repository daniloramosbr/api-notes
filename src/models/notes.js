import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  note: {
    type: String,
    required: true,
  },
});

const notes = mongoose.model("notesdb", userSchema);

export default notes;
