export const MoviesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center bg-gray-50 rounded-lg">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Фільмів не знайдено
      </h3>
      <p className="text-gray-600 max-w-md">
        На жаль, за вашим запитом не було знайдено жодного фільму. Спробуйте
        змінити параметри пошуку.
      </p>
    </div>
  );
};
