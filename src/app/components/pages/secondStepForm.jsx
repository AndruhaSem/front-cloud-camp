import React, { useEffect, useState } from "react";
import {
  getForm,
  stepUpdate,
  createInput,
  removeInput,
  updateInput,
  updateCheckbox,
  updateRadio,
} from "../../store/form";
import { useDispatch, useSelector } from "react-redux";

import * as yup from "yup";
import CardIcon from "../icons/cardicon";

const SecondStepForm = () => {
  const form = useSelector(getForm());

  const [errors, setErrors] = useState({});
  const checkboxIsChecked = (value) => form.checkbox_group.includes(value);
  const dispatch = useDispatch();

  function handleAdvantageChange(index, value) {
    dispatch(updateInput(index, value));
  }
  function handleAdvantageCreate() {
    dispatch(createInput(""));
  }
  function handleAdvantageRemove(ind) {
    dispatch(removeInput(ind));
  }
  function handleCheckboxChange({ target }) {
    dispatch(updateCheckbox(target.value));
  }
  function handleRadioChange({ target }) {
    dispatch(updateRadio({ name: target.name, value: target.value }));
  }
  const validateShema = yup.object().shape({
    advantages: yup.array().of(yup.string().required("Поле обязательно")),
  });

  useEffect(() => {
    validate();
  }, [form]);

  function validate() {
    validateShema
      .validate(form)
      .then(() => setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }));
  }
  const isValid = Object.keys(errors).length === 0;
  return (
    <>
      <div className="create-form__container">
        <form>
          <div className="label-form-advantages">
            <label>Advantages</label>
          </div>
          {form.advantages.map((el, index) => (
            <div key={index + 1} className="container__advantages__form">
              <div className="container-advantages__input">
                <input
                  type="text"
                  onChange={({ target }) =>
                    handleAdvantageChange(index, target.value)
                  }
                  value={el}
                  placeholder="placeholder"
                  className="form-control-input"
                  id={`field-advatages-${index + 1}`}
                />
                {errors && errors[`advantages["${index}"]`] ? (
                  <p className="error-input">
                    {errors[`advantages["${index}"]`]}
                  </p>
                ) : null}
              </div>
              <div className="advantages-remove-container">
                <CardIcon
                  id={`button-remove-${index + 1}`}
                  handleClick={() => handleAdvantageRemove(index)}
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            className="btn-advantages__form"
            id="button-add"
            onClick={handleAdvantageCreate}
          >
            +
          </button>
          <div className="container-checkboxs__form">
            <label>Checkbox group</label>

            {[...Array(3).keys()].map((e, index) => (
              <div className="group-checkbox" key={index + 1}>
                <input
                  type="checkbox"
                  value={index + 1}
                  name="checkbox_group"
                  id={`field-checkbox-group-option-${index + 1}`}
                  className="advantages__checkbox"
                  checked={checkboxIsChecked(`${index + 1}`)}
                  onChange={handleCheckboxChange}
                />
                <label>{index + 1}</label>
              </div>
            ))}
          </div>
          <div className="container-radios_form">
            <label>Radio group</label>
            {[...Array(3).keys()].map((e, index) => (
              <div className="group-radio" key={index + 1}>
                <input
                  type="radio"
                  value={index + 1}
                  name="radio_group"
                  id={`field-radio-group-option-${index + 1}`}
                  className="advantages__radio"
                  onChange={handleRadioChange}
                />
                <label>{index + 1}</label>
              </div>
            ))}
          </div>
        </form>
      </div>
      <div className="actions-container">
        <button
          className="primary-stroke-button"
          id="button-back"
          onClick={() => dispatch(stepUpdate(1))}
        >
          Назад
        </button>
        <button
          className={"primary-button " + (!isValid ? "invalid" : "")}
          id="button-next"
          disabled={!isValid}
          onClick={() => dispatch(stepUpdate(3))}
        >
          Далее
        </button>
      </div>
    </>
  );
};

export default SecondStepForm;
