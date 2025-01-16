import { IoMdAddCircle } from "react-icons/io";
import { SearchBar } from "./SearchBar";
import { SelectField } from "./SelectField";
import { ratingOptions } from "../utils/ratingOptions";
import { genreOptions } from "../utils/genreOptins";

export const MoviesHeader = ({ setCreateActive }) => {
  return (
    <header className="flex flex-wrap gap-4 items-center justify-between p-4 border-b border-gray-200">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto">
        <SearchBar placeholder="Введіть назву фільму" propsName="title" />
        <SelectField
          placeholder="Жанр"
          propsName="genre"
          options={genreOptions}
        />
        <SelectField
          placeholder="Мінімальний рейтинг"
          propsName="rating"
          options={ratingOptions}
        />
      </div>
      <button onClick={() => setCreateActive(true)}>
        <IoMdAddCircle className="text-green-500 hover:text-green-700 cursor-pointer text-3xl" />
      </button>
    </header>
  );
};
