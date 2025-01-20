const mongoose = require("mongoose");

const studiosSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You are required to have a Studio name."],
    unique: [true, "You can only have one Studio with that name."],
    trim: true,
    maxlength: [50, "Your name cannot be longer than 50 characters."],
  },
  location: {
    type: String,
    required: [true, "You need to give the Studio a location."],
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
    required: [true, "Please add a description about the Studio."],
    maxlength: [500, "Description cannot be more than 500 characters."],
  },
});

module.exports = mongoose.model("Studio", studiosSchema);
