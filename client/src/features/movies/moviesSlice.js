import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createMovie,
  deleteMovieById,
  editMovie,
  fetchMovies,
} from "../../api/moviesApi";
import { toast } from "react-toastify";

export const loadMoviesThunk = createAsyncThunk(
  "movies/loadMovies",
  async ({ title, genre, rating }) => {
    const response = await fetchMovies(title, genre, rating);
    return response;
  }
);

export const deleteMovieThunk = createAsyncThunk(
  "movies/deleteMovies",
  async ({ id }) => {
    const response = await deleteMovieById(id);
    return response;
  }
);

export const editMovieThunk = createAsyncThunk(
  "movies/editMovies",
  async ({ id, movieInfo }) => {
    const response = await editMovie(
      id,
      movieInfo.title,
      movieInfo.description,
      movieInfo.actors,
      movieInfo.director,
      movieInfo.genre,
      movieInfo.rating,
      movieInfo.releaseDate,
      movieInfo.image
    );
    return response;
  }
);

export const createMovieThunk = createAsyncThunk(
  "movies/createMovieThunk",
  async ({ movieInfo }) => {
    try {
      const response = await createMovie(
        movieInfo.title,
        movieInfo.description,
        movieInfo.actors,
        movieInfo.director,
        movieInfo.genre,
        movieInfo.rating,
        movieInfo.releaseDate,
        movieInfo.image
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  values: [],
  isLoading: true,
  hasError: false,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadMoviesThunk.pending, (state) => {
      state.hasError = false;
      state.isLoading = true;
    });

    builder.addCase(loadMoviesThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.values = action.payload;
    });

    builder.addCase(loadMoviesThunk.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;

      toast.error(
        "Не вдалося оновити список фільмів. Перевірте інтернет-з'єднання"
      );
    });

    builder.addCase(deleteMovieThunk.fulfilled, (state, action) => {
      state.values = state.values.filter(
        (movie) => movie._id !== action.payload._id
      );
      toast.success("Фільм видалено зі списку.");
    });

    builder.addCase(deleteMovieThunk.rejected, (state, action) => {
      toast.error("Фільм не вдалося видалити. Перевірте інтернет-з'єднання");
    });

    builder.addCase(editMovieThunk.fulfilled, (state, action) => {
      state.values = state.values.map((movie) =>
        movie._id === action.payload._id ? action.payload : movie
      );
      toast.success("Інформація про фільм змінена.");
    });

    builder.addCase(editMovieThunk.rejected, (state, action) => {
      toast.error("Фільм не вдалося змінити. Перевірте інтернет-з'єднання");
    });

    builder.addCase(createMovieThunk.fulfilled, (state, action) => {
      state.values = [...state.values, action.payload];
      toast.success("Фільм додано до списку.");
    });

    builder.addCase(createMovieThunk.rejected, (state, action) => {
      state.values = [...state.values, action.payload];
      toast.error(
        "Фільм не вдалося додати до списку. Перевірте інтернет-з'єднання"
      );
    });
  },
});

export default moviesSlice.reducer;
