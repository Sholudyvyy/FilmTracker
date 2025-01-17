import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { useDispatch } from "react-redux";
import { loadMoviesThunk } from "../features/movies/moviesSlice";
import { MoviesHeader } from "../features/movies/components/MoviesHeader";
import { MoviesList } from "../features/movies/components/MoviesList";
import { MovieModal } from "../features/movies/components/MovieModal";

export const HomePage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const [editActive, setEditActive] = useState(false);
  const [editMovie, setEditMovie] = useState();
  const [createActive, setCreateActive] = useState(false);

  useEffect(() => {
    const title = searchParams.get("title") || "";
    const genre = searchParams.get("genre") || "";
    const rating = searchParams.get("rating") || "";

    dispatch(loadMoviesThunk({ title, genre, rating }));
  }, [searchParams, dispatch]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <MoviesHeader setCreateActive={setCreateActive} />

      <MoviesList setEditActive={setEditActive} setEditMovie={setEditMovie}/>

      {editActive && (
        <MovieModal setActive={setEditActive} movie={editMovie}></MovieModal>
      )}
      {createActive && <MovieModal setActive={setCreateActive}></MovieModal>}
    </div>
  );
};
