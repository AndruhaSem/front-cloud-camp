import React from "react";
import InputMask from "react-input-mask";
import PropTypes from "prop-types";

const TextFieldMask = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  background,
}) => {
  function handleChange({ target }) {
    onChange({ name: target.name, value: target.value });
  }
  return (
    <div className="form-control">
      <label>{label}</label>
      <InputMask
        onChange={handleChange}
        name={name}
        id={name}
        value={value || ""}
        mask="+7 (999) 999-99-99"
        placeholder={placeholder}
        className={"form-control-input " + (background ? "bg" : "")}
      />
      {error ? <p className="error-input">{error}</p> : null}
    </div>
  );
};
TextFieldMask.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  background: PropTypes.bool,
};
export default TextFieldMask;
