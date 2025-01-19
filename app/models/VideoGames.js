const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a title name."],
      trim: true,
      maxlength: [50, "Name cannot be longer than 50 characters."],
    },
    genre: {
      type: [String],
      required: [true, "Please add a genre for the book."],
      enum: [
        "Web Development",
        "Mobile Development",
        "UI/UX",
        "Data Science",
        "Business",
        "Other",
      ],
    },
    rating: {
      type: Number,
      min: [1, "Rating must be at least 1."],
      max: [10, "Rating must not be more than 10."],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
