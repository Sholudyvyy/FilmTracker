export const isMovieInFavorites = (id) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return favorites.includes(id);
};
