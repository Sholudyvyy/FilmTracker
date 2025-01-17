const express = require("express");
const {
  createMovies,
  getMovies,
  getMovie,
  deleteMovie,
  updateSomeMovieInformation,
  updateAllMovieInformation,
} = require("../controlers/userControllers");

const router = express.Router();

router.get("/", getMovies);

router.post("/", express.json(), createMovies);

router.get("/:id", getMovie);

router.delete("/:id", deleteMovie);

router.patch("/:id", express.json(), updateSomeMovieInformation);

router.put("/:id", express.json(), updateAllMovieInformation);

module.exports = router;
