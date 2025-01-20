const Studios = require("../models/Studios");

const getAllStudios = async (req, res) => {
  const studios = await Studios.find({});
  res.status(200).json({
    data: studios,
    success: true,
    message: `${req.method} - request to Studio endpoint`,
  });
};
const getStudioById = async (req, res) => {
  const { id } = req.params;
  try {
    const studioById = await Studios.findById(id);
    if (!studioById) {
      return res.status(404).json({
        success: false,
        message: `${id} not found. Check for typos and try again.`,
      });
    } else {
      res.status(200).json({
        success: true,
        message: `${req.method} - request to VideoGame endpoint`,
        data: studioById,
      });
    }
  } catch (error) {
    console.error("Could not find Studio", error);
  }
};
const createStudio = async (req, res) => {
  const { studio } = req.body;
  try {
    const newStudio = await Studios.create(studio);
    console.log("data >>>", newStudio);
    res.status(201).json({
      success: true,
      message: `${req.method} - request to Studio endpoint`,
      data: newStudio,
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
const updateStudio = async (req, res) => {
  const { id } = req.params;
  const studio = await Studios.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({
    data: studio,
    success: true,
    message: `${req.method} - request to Studio endpoint`,
  });
};
const deleteStudio = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedStudio = await Studios.findByIdAndDelete(id);
    if (!deletedStudio) {
      return res.status(404).json({
        success: false,
        message: `${id} not found. Check your spelling and try again.`,
      });
    } else {
      res.status(200).json({
        id,
        success: true,
        message: `${req.method} - request to Studio endpoint`,
      });
    }
  } catch (error) {
    console.error("Could not find Studio.", error);
    res.status(500).json(error);
  }
};

module.exports = {
  getAllStudios,
  getStudioById,
  createStudio,
  updateStudio,
  deleteStudio,
};
