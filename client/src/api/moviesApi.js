import axiosInstance from "./axiosInstance";

export const fetchMovies = async (title, genre, rating) => {
  const response = await axiosInstance.get(
    `/movies?title=${title ? title : ""}${genre ? "&genre=" + genre : ""}${
      rating ? "&rating=" + rating : ""
    }`
  );
  return response.data;
};

export const fetchMovieById = async (id) => {
  const response = await axiosInstance.get(`/movies/${id}`);
  return response.data;
};

export const deleteMovieById = async (id) => {
  const response = await axiosInstance.delete(`/movies/${id}`);
  return response.data;
};

export const createMovie = async (
  movieInfo
) => {
  const response = await axiosInstance.post(`/movies`, {
    title: movieInfo.title,
    description: movieInfo.description,
    actors: movieInfo.actors,
    director: movieInfo.director,
    genre: movieInfo.genre,
    rating: movieInfo.rating,
    releaseDate: movieInfo.releaseDate,
    image: movieInfo.image,
  });
  return response.data;
};

export const editMovie = async (
  id,
  movieInfo
) => {
  const response = await axiosInstance.put(`/movies/${id}`, {
    title: movieInfo.title,
    description: movieInfo.description,
    actors: movieInfo.actors,
    director: movieInfo.director,
    genre: movieInfo.genre,
    rating: movieInfo.rating,
    releaseDate: movieInfo.releaseDate,
    image: movieInfo.image,
  });
  return response.data;
};
