import React, { useEffect, useState } from "react";
import TextField from "../forms/textField";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getForm, formUpdate } from "../../store/form";
import * as yup from "yup";
import TextFieldMask from "../forms/textFieldMask";

const HomeForm = () => {
  const dispatch = useDispatch();
  const form = useSelector(getForm());
  const [errors, setErrors] = useState({});

  function handleChange(target) {
    dispatch(formUpdate({ name: target.name, value: target.value }));
  }
  useEffect(() => {
    validate();
  }, [form]);

  const validateShema = yup.object().shape({
    email: yup
      .string()
      .required("Эликтронная почта обязательно для заполнения")
      .email("email введен не коррекно"),
    phone: yup.string().required("Телефон обязателен для заполнения"),
  });

  const validate = () => {
    validateShema
      .validate(form)
      .then(() => setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }));
  };
  const isValid = Object.keys(errors).length === 0;
  return (
    <form>
      <TextFieldMask
        value={form.phone}
        label="Номер телефона"
        name="phone"
        onChange={handleChange}
        placeholder="+7 (999) 999-99-99"
        error={errors.phone}
      />
      <TextField
        label="Email"
        name="email"
        id="email"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="tim.jennings@example.com"
      />
      <button
        disabled={!isValid}
        className={
          "primary-button home-form__button " + (!isValid ? "invalid" : "")
        }
        id="button-start"
      >
        <Link to="/create">Начать</Link>
      </button>
    </form>
  );
};

export default HomeForm;
