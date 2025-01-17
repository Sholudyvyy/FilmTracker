import { useEffect, useState } from "react";
import { fetchMovieById } from "../api/moviesApi";
import { useParams } from "react-router-dom";
import { MoviesNotFound } from "features/movies/components/MoviesNotFound";

export const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    const getMovie = async (id) => {
      try {
        setLoading(true);
        const data = await fetchMovieById(id);
        setMovie(data);
      } catch (err) {
        setError("Failed to fetch movie");
      } finally {
        setLoading(false);
      }
    };

    getMovie(params.id);
  }, [params.id]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  if (!movie) {
    return <MoviesNotFound />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full md:w-1/3 rounded-lg shadow-md"
        />
        <div className="md:ml-6 mt-6 md:mt-0">
          <h1 className="text-4xl font-bold text-gray-900">{movie.title}</h1>
          <p className="text-sm text-gray-500">{movie.releaseDate}</p>
          <p className="mt-4 text-gray-700">{movie.description}</p>

          <div className="mt-4">
            <p className="text-lg font-semibold">Жанр: {movie.genre}</p>
            <p className="text-lg font-semibold">Режисер: {movie.director}</p>
            <p className="text-lg font-semibold">Актори: {movie.actors}</p>
            <p className="text-lg font-semibold">Рейтинг: {movie.rating}/10</p>
          </div>
        </div>
      </div>
    </div>
  );
};
