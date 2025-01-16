const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieScheme = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  actors: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model('Movie', movieScheme);

module.exports = Movie;