import React from "react";

import PropTypes from "prop-types";

const SelectField = ({
  options,
  onChange,
  name,
  label,
  placeholder,
  id,
  error,
}) => {
  function handleChange({ target }) {
    onChange({ name: target.name, value: target.value });
  }
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <select
        className="basic-multi-select"
        id={id}
        onChange={handleChange}
        name={name}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option
            value={option.value}
            key={option.id}
            id={`field-sex-option-${option.title}`}
          >
            {option.title}
          </option>
        ))}
      </select>
      {error ? <p className="error-input">{error}</p> : null}
    </div>
  );
};
SelectField.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  placeholder: PropTypes.string,
  id: PropTypes.string,
  sex: PropTypes.string,
};

export default SelectField;
