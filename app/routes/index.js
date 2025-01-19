const express = require("express");
const router = express.Router();
const authorRoutes = require("./studioRoutes");

router.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `${req.method} - Request made` });
});

router.use("/studios", authorRoutes);

module.exports = router;
