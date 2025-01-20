const express = require("express");
const router = express.Router();
const studioRoutes = require("./studioRoutes");
const videoGameRoutes = require("./videoGameRoutes");

router.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `${req.method} - Request made` });
});

router.use("/studios", studioRoutes);
router.use("/videogames", videoGameRoutes);

module.exports = router;
