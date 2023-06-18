import React, { useState, useEffect } from "react";
import SelectField from "../forms/selectField";
import { formUpdate, getForm, stepUpdate, getMaxStep } from "../../store/form";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import TextField from "../forms/textField";
import * as yup from "yup";

const FirstStepForm = () => {
  const sexOptions = [
    { id: "field-sex-option-man", title: "man", value: "man" },
    { id: "field-sex-option-woman", title: " woman", value: "woman" },
  ];
  const dispatch = useDispatch();
  const form = useSelector(getForm());
  const [errors, setErrors] = useState({});

  const validateShema = yup.object().shape({
    sex: yup.string().required("Поле обязательно для заполнения"),
    sername: yup
      .string()
      .required("Поле обязательно для заполнения")
      .matches(/([a-zA-Z])/, "Некорректный символ")
      .max(50, "максимальная длина 50 символов"),
    name: yup
      .string()
      .required("Поле обязательно для заполнения")
      .matches(/([a-zA-Z])/, "Некорректный символ")
      .max(50, "максимальная длина 50 символов"),
    nickname: yup
      .string()
      .required("Поле обязательно для заполнения")
      .matches(/([a-zA-Z0-9])/, "Некорректный символ")
      .max(30, "максимальная длина 30 символов"),
  });

  useEffect(() => {
    validate();
  }, [form]);

  const validate = () => {
    validateShema
      .validate(form)
      .then(() => setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }));
  };

  function handleChange(target) {
    dispatch(formUpdate({ name: target.name, value: target.value }));
  }
  const isValid = Object.keys(errors).length === 0;

  return (
    <>
      <div className="create-form__container">
        <form>
          <TextField
            label="Nickname"
            id="field-nickname"
            name="nickname"
            value={form.nickname}
            onChange={handleChange}
            error={errors.nickname}
            background={true}
            placeholder="Placeholder"
          />
          <TextField
            label="Name"
            name="name"
            id="field-name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            background={true}
            placeholder="Placeholder"
          />
          <TextField
            label="Sername"
            name="sername"
            id="field-sername"
            value={form.sername}
            onChange={handleChange}
            error={errors.sername}
            background={true}
            placeholder="Placeholder"
          />
          <SelectField
            options={sexOptions}
            onChange={handleChange}
            placeholder="Не выбрано"
            name="sex"
            id="field-sex"
            label="Sex"
            error={errors.sex}
          />
        </form>
      </div>
      <div className="actions-container">
        <Link to="/" className="primary-stroke-button" id="button-back">
          Назад
        </Link>
        <button
          className={"primary-button " + (!isValid ? "invalid" : "")}
          id="button-next"
          disabled={!isValid}
          onClick={() => dispatch(stepUpdate(2))}
        >
          Далее
        </button>
      </div>
    </>
  );
};

export default FirstStepForm;
