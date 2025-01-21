const VideoGame = require("../models/VideoGames");
const Studios = require("../models/Studios");

const getAllVideoGames = async (req, res) => {
  const videoGame = await VideoGame.find({});
  res.status(200).json({
    data: videoGame,
    success: true,
    message: `${req.method} - request to VideoGame endpoint`,
  });
};
const getVideoGameById = async (req, res) => {
  const { id } = req.params;
  try {
    const videoGameById = await VideoGame.findById(id);
    if (!videoGameById) {
      return res.status(404).json({
        success: false,
        message: `${id} not found. Check for typos and try again.`,
      });
    } else {
      res.status(200).json({
        success: true,
        message: `${req.method} - request to VideoGame endpoint`,
        data: videoGameById,
      });
    }
  } catch (error) {
    console.error("Could not find Video Game", error);
  }
};
const createVideoGame = async (req, res) => {
  const { videoGame } = req.body;
  try {
    // const newVideoGame = await VideoGame.create(videoGame);
    const studio = await Studios.findById(videoGame.studio);
    const videoGameData = new VideoGame(videoGame);
    studio.games.push(videoGameData._id);
    const queries = [videoGameData.save(), studio.save()];
    await Promise.all(queries);
    const populateGameData = await VideoGame.findById(videoGameData._id)
      .populate({
        path: "studio",
        select: "-__v",
      })
      .select("-__v");
    console.log("data >>>", populateGameData);
    res.status(201).json({
      success: true,
      message: `${req.method} - request to VideoGame endpoint`,
      data: populateGameData,
    });
  } catch (error) {
    if (error.name == "ValidationError") {
      console.error("Error Validating!", error);
      res.status(422).json(error);
    } else {
      console.error(error);
      res.status(500).json(error);
    }
  }
};
const updateVideoGame = async (req, res) => {
  const { id } = req.params;
  const videoGame = await VideoGame.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json({
    data: videoGame,
    success: true,
    message: `${req.method} - request to VideoGame endpoint`,
  });
};
const deleteVideoGame = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedGame = await VideoGame.findByIdAndDelete(id);
    if (!deletedGame) {
      return res.status(404).json({
        success: false,
        message: `${id} not found.`,
      });
    } else {
      res.status(200).json({
        id,
        success: true,
        message: `${req.method} - request to VideoGame endpoint`,
      });
    }
  } catch (error) {
    console.error("Could not find video game.", error);
    res.status(500).json(error);
  }
};

module.exports = {
  getAllVideoGames,
  getVideoGameById,
  createVideoGame,
  updateVideoGame,
  deleteVideoGame,
};
