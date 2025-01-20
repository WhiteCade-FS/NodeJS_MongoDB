const mongoose = require("mongoose");

const videoGamesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a title name."],
      trim: true,
      maxlength: [50, "Name cannot be longer than 50 characters."],
    },
    genre: {
      type: [String],
      required: [true, "Please add a genre for the game."],
      enum: [
        "Action",
        "Role-Playing",
        "Adventure",
        "Arcade",
        "Strategy",
        "Other",
      ],
    },
    rating: {
      type: Number,
      min: [1, "Rating must be at least 1."],
      max: [10, "Rating must not be more than 10."],
    },
    studio: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Studio",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("videogames", videoGamesSchema);
