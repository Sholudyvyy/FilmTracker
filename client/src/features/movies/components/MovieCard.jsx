import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

import { deleteMovieThunk } from "../moviesSlice";
import { toggleFavorite } from "../../../utils/toggleFavorite";
import { isMovieInFavorites } from "../../../utils/isMovieInFavorites";

export const MovieCard = ({ movie, setEditActive, setEditMovie }) => {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(isMovieInFavorites(movie._id));

  const handleDeleteMovie = () => {
    dispatch(deleteMovieThunk({ id: movie._id }));
  };

  const editMovie = () => {
    setEditActive(true);
    setEditMovie(movie);
  };

  const headleToggleFavorite = () => {
    setFavorite(!favorite);
    toggleFavorite(movie._id);
  };

  return (
    <article className="relative bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
      <button
        onClick={() => {
          headleToggleFavorite();
        }}
      >
        {favorite ? (
          <MdFavorite className="absolute top-2 right-2 text-red-500 hover:text-red-700 cursor-pointer text-3xl" />
        ) : (
          <MdFavoriteBorder className="absolute top-2 right-2 text-red-500 hover:text-red-700 cursor-pointer text-3xl" />
        )}
      </button>

      <Link to={`/movies/${movie._id}`}>
        <div className="w-full aspect-[3/4] overflow-hidden rounded-t-lg">
          <img
            src={movie.image}
            alt={`${movie.title}`}
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="mt-4 text-lg font-semibold text-gray-800">
          {movie.title}
        </h2>

        <div className="mt-2 text-yellow-500 font-bold">{movie.rating}</div>

        <div className="text-sm text-gray-500 mt-1">{movie.releaseDate}</div>
      </Link>

      <div className="mt-auto w-full flex justify-between items-center border-t border-gray-200 pt-2">
        <button onClick={() => editMovie()}>
          <MdEdit className="text-blue-500 hover:text-blue-700 cursor-pointer text-xl" />
        </button>

        <button onClick={() => handleDeleteMovie()}>
          <MdDelete className="text-red-500 hover:text-red-700 cursor-pointer text-xl" />
        </button>
      </div>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  setEditActive: PropTypes.func,
  setEditMovie: PropTypes.func,
};
