const mongoose = require("mongoose");

const authorsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You are required to have an Author."],
    trim: true,
    maxlength: [50, "Your name is too long."],
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    match: [
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      "Please enter a valid email address.",
    ],
  },
  description: {
    type: String,
    required: [true, "Please add a description."],
    maxlength: [500, "Description cannot be more than 500 characters."],
  },
});

module.exports = mongoose.model("Author", authorsSchema);
