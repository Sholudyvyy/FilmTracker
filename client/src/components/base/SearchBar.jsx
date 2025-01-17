import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

export const SearchBar = ({ placeholder, propsName }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(location.search);
    
    if (term) {
      params.set(propsName, term);
    } else {
      params.delete(propsName);
    }

    navigate(`${location.pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={new URLSearchParams(location.search).get(propsName)}
      />
      <FaSearch className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  propsName: PropTypes.string,
};
