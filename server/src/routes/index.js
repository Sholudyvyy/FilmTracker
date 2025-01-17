const express = require("express");
const movieRoutes = require("./movieRoutes");

const router = express.Router();

router.use("/users", movieRoutes);

module.exports = router;
