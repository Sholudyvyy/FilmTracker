export const toggleFavorite = (id) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.includes(id)) {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites.filter((fav) => fav !== id))
    );
  } else {
    favorites.push(id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};
