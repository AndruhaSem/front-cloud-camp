import React from "react";
import PropTypes from "prop-types";

const TextField = ({
  label,
  name,
  id,
  value,
  onChange,
  type,
  error,
  background,
  placeholder,
}) => {
  function handleChange({ target }) {
    onChange({ name: target.name, value: target.value });
  }
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        onChange={handleChange}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        className={"form-control-input " + (background ? "bg" : "")}
      />
      {error ? <p className="error-input">{error}</p> : null}
    </div>
  );
};
TextField.defaultProps = {
  type: "text",
};
TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  type: PropTypes.string,
  error: PropTypes.string,
  background: PropTypes.bool,
  placeholder: PropTypes.string,
  id: PropTypes.string,
};

export default TextField;
