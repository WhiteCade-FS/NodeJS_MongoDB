const router = require("express").Router();
const {
  getAllVideoGames,
  getVideoGameById,
  createVideoGame,
  updateVideoGame,
  deleteVideoGame,
} = require("../controller/videoGameController.js");

router.get("/", getAllVideoGames);
router.get("/:id", getVideoGameById);
router.post("/", createVideoGame);
router.put("/:id", updateVideoGame);
router.delete("/:id", deleteVideoGame);

module.exports = router;
