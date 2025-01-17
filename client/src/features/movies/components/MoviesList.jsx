import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import { MoviesNotFound } from "./MoviesNotFound";
import PropTypes from "prop-types";

export const MoviesList = ({ setEditActive, setEditMovie }) => {
  const {
    values: movies,
    isLoading,
    hasError,
  } = useSelector((state) => state.movies);

  if (isLoading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (hasError) {
    return (
      <div className="text-center mt-10 text-red-500">
        На жаль, при завантаженні виникла помилка.
      </div>
    );
  }

  if (!movies.length) {
    return <MoviesNotFound />;
  }

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie._id}
          movie={movie}
          setEditActive={setEditActive}
          setEditMovie={setEditMovie}
        />
      ))}
    </main>
  );
};

MoviesList.propTypes = {
  setEditActive: PropTypes.func,
  setEditMovie: PropTypes.func,
};
