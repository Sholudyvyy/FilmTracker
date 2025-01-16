import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import { MoviesNotFound } from "./MoviesNotFound";

export const MoviesList = ({ setEditActive, setEditMovie }) => {
  const { values: movies, isLoading } = useSelector((state) => state.movies);

  return isLoading ? (
    "Loading..."
  ) : movies.length ? (
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
  ) : (
    <MoviesNotFound />
  );
};
