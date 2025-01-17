import { useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import Select from "react-select";
import PropTypes from "prop-types";

export const SelectField = ({ placeholder, propsName, options }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSelect = useCallback(
    (term, pathname) => {
      const params = new URLSearchParams(location.search);
      params.delete(propsName);

      if (term) {
        params.append(propsName, term);
      } else {
        params.delete(propsName);
      }

      navigate(`${pathname}?${params.toString()}`);
    },
    [location.search, navigate, propsName]
  );

  return (
    <Select
      instanceId={1}
      options={options}
      className="basic-single"
      classNamePrefix="select"
      placeholder={placeholder}
      defaultValue={options.find(
        (option) =>
          option.value.toString() ===
          new URLSearchParams(location.search).get(propsName)
      )}
      isClearable={true}
      isSearchable={true}
      name={propsName}
      onChange={(e) => {
        handleSelect(e?.value, location.pathname);
      }}
    />
  );
};

SelectField.propTypes = {
  placeholder: PropTypes.string,
  propsName: PropTypes.string,
  options: PropTypes.array,
};
