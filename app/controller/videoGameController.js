const Studios = require("../models/Studios");

const getAllStudios = async (req, res) => {
  const studios = await Studios.find({});
  res.status(200).json({
    data: studios,
    success: true,
    message: `${req.method} - request to Studio endpoint`,
  });
};
const getStudioById = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - request to Studio endpoint`,
  });
};
const createStudio = async (req, res) => {
  const { studio } = req.body;
  try {
    const newStudio = await Studios.create(studio);
    console.log("data >>>", newStudio);
    res.status(200).json({
      success: true,
      message: `${req.method} - request to Studio endpoint`,
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
const deleteStudio = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - request to Studio endpoint`,
  });
};

module.exports = {
  getAllStudios,
  getStudioById,
  createStudio,
  updateStudio,
  deleteStudio,
};
