import React from "react";
import PropTypes from "prop-types";

const TextFieldAdvantages = ({
  name,
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
    <div className="form-control-advantages">
      <input
        type={type}
        onChange={handleChange}
        name={name}
        id={name}
        value={value || ""}
        placeholder={placeholder}
        className={"form-control-input " + (background ? "bg" : "")}
      />
      {error ? <p className="error-input">{error}</p> : null}
    </div>
  );
};
TextFieldAdvantages.defaultProps = {
  type: "text",
};
TextFieldAdvantages.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  type: PropTypes.string,
  error: PropTypes.string,
  background: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default TextFieldAdvantages;
