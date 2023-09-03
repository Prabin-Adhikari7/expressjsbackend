const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
    // This is a required field and must be filled out
  },
  description: {
    type: String,
    required: true
    // This is a required field and must be filled out
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
    // This field references the user model and is required
  }
}, { timestamps: true });

module.exports = mongoose.model("Note", NoteSchema);
