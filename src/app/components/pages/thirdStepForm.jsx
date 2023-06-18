import React, { useState, useEffect } from "react";
import {
  formUpdate,
  getForm,
  stepUpdate,
  sendForm,
  modalState,
  statusState,
  closeModal,
} from "../../store/form";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../forms/madal";
import * as yup from "yup";

const ThirdStepForm = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const form = useSelector(getForm());
  const modalIsOpened = useSelector(modalState());
  const status = useSelector(statusState());

  function handleAboutChange({ target }) {
    dispatch(formUpdate({ name: target.name, value: target.value }));
  }
  function handleModalClose() {
    dispatch(closeModal());
  }
  const validateShema = yup.object().shape({
    about: yup
      .string()
      .required("поле обязательно для заполнения")
      .max(200, "максимальная длина 200 символов"),
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

  function lettersCount() {
    return form.about.replace(/\s/g, "").length
  }

  function handleSendForm() {
    dispatch(sendForm(form));
  }
  return (
    <>
      <Modal
        isOpened={modalIsOpened}
        status={status}
        onCloseModal={handleModalClose}
      />
      <form>
          <div>
            <div>
              <label>About</label>
            </div>
            <textarea
              id="field-about"
              className="about__textarea"
              placeholder="Placeholder"
              rows="3"
              name="about"
              value={form.about}
              onChange={handleAboutChange}
            />
            <div className="about-counter-container">
              <div>{lettersCount()}</div>
            </div>
            <div>
              {errors.about ? (
                  <p className="error-input">{errors.about}</p>
              ) : null}
            </div>
          </div>
      </form>
      <div className="actions-container">
        <button
          className="primary-stroke-button"
          id="button-back"
          onClick={() => dispatch(stepUpdate(2))}
        >
          Назад
        </button>
        <button
          disabled={!isValid}
          className={"primary-button " + (!isValid ? "invalid" : "")}
          onClick={handleSendForm}
          id="button-next"
        >
          Отправить
        </button>
      </div>
    </>
  );
};

export default ThirdStepForm;
