const mongoose = require("mongoose");

const authorsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You are required to have an Author."],
    unique: [true, "You can only have one author with that name."],
    trim: true,
    maxlength: [50, "Your name is too long."],
  },
  age: {
    type: Number,
    required: [true, "You need to give the Author an age."],
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
