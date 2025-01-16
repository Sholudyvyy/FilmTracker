import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { useDispatch } from "react-redux";

import { CreateModal } from "../components/CreateModal";
import { EditModal } from "../components/EditModal";

import { loadMoviesThunk } from "../features/movies/moviesSlice";
import { MoviesHeader } from "../components/MoviesHeader";
import { MoviesList } from "../components/MoviesList";

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

      <MoviesList setEditActive={setEditActive} setEditMovie={setEditMovie} />

      {editActive && (
        <EditModal
          setActive={setEditActive}
          movie={editMovie}
        ></EditModal>
      )}
      {createActive && (
        <CreateModal
          setActive={setCreateActive}
        ></CreateModal>
      )}
    </div>
  );
};
