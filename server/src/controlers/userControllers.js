const Movie = require('../models/movie');

const createMovies = async (req, res) => {
  const {
    title,
    description,
    actors,
    director,
    genre,
    rating,
    releaseDate,
    image,
  } = req.body;

  if (
    !title ||
    !description ||
    !actors ||
    !director ||
    !genre ||
    !rating ||
    !releaseDate ||
    !image
  ) {
    return res.status(422).json({ error: "All fields are required" });
  }

  try {
    const newMovie = await Movie.create({
      title,
      description,
      actors,
      director,
      genre,
      rating,
      releaseDate,
      image,
    });
    res.json(newMovie);
  } catch (err) {
    res.status(500).json({ error: "Failed to save movie" });
  }
};

const getMovies = async (req, res) => {
  try {
    const filters = {};

    if (req.query.title) {
      filters.title = { $regex: req.query.title, $options: "i" };
    }

    if (req.query.genre) {
      filters.genre = req.query.genre;
    }

    if (req.query.rating) {
      filters.rating = { $gte: Number(req.query.rating) };
    }

    const movies = await Movie.find(filters);

    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
};

const getMovie = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      throw error;
    }
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findByIdAndDelete(id);

    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
};

const updateSomeMovieInformation = async (req, res) => {
  const { id } = req.params;

  const {
    title,
    description,
    actors,
    director,
    genre,
    rating,
    releaseDate,
    image,
  } = req.body;

  if (
    !title &&
    !description &&
    !actors &&
    !director &&
    !genre &&
    !rating &&
    !releaseDate &&
    !image
  ) {
    return res.status(422).json({ error: "Some error" });
  }

  try {
    const movie = await Movie.findByIdAndUpdate(
      id,
      {
        title,
        description,
        actors,
        director,
        genre,
        rating,
        releaseDate,
        image,
      },
      { new: true, runValidators: true }
    );

    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
};

const updateAllMovieInformation = async (req, res) => {
  const { id } = req.params;

  const {
    title,
    description,
    actors,
    director,
    genre,
    rating,
    releaseDate,
    image,
  } = req.body;

  if (
    !title ||
    !description ||
    !actors ||
    !director ||
    !genre ||
    !rating ||
    !releaseDate ||
    !image
  ) {
    return res.status(422).json({ error: "All fields are required" });
  }

  try {
    const movie = await Movie.findByIdAndUpdate(
      id,
      {
        title,
        description,
        actors,
        director,
        genre,
        rating,
        releaseDate,
        image,
      },
      { new: true, runValidators: true }
    );
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
};

module.exports = {
  createMovies,
  getMovies,
  getMovie,
  deleteMovie,
  updateSomeMovieInformation,
  updateAllMovieInformation,
};
