import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SuccessIcon from "../icons/successIcon";
import ErrorIcon from "../icons/errorIcon";
import CloseModalIcon from "../icons/closeModalIcon";
import { updateForm } from "../../store/form";
import { useDispatch } from "react-redux";

const ModalWindo = ({ isOpened, status, onCloseModal }) => {
  const dispatch = useDispatch();
  if (isOpened) {
    return (
      <div className={"container-modal active"}>
        <div className="delete-back" onClick={onCloseModal}></div>
        <div className="container-modal-form">
          <div className="form-modal">
            <div className="modal-title">
              {status ? (
                <p>Форма успешна отправлина</p>
              ) : (
                <div className="error-modal">
                  <p>Ошибка</p>
                  <CloseModalIcon onCtoggle={onCloseModal} />
                </div>
              )}
            </div>
            <div>
              <div className={"icon-status " + (!status ? "error-icon" : "")}>
                {status ? <SuccessIcon /> : <ErrorIcon />}
              </div>
            </div>
            <div
              className={
                "container-btn-modal " + (!status ? "eror-button " : "")
              }
            >
              {status ? (
                <button
                  className="btn-modal-ok"
                  id="button-to-main"
                  onClick={() => dispatch(updateForm())}
                >
                  <Link to="/">На главную</Link>
                </button>
              ) : (
                <button
                  className="btn-modal-error"
                  id="button-close"
                  onClick={onCloseModal}
                >
                  Закрыть
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
ModalWindo.propTypes = {
  status: PropTypes.bool,
  isOpened: PropTypes.bool,
  onCloseModal: PropTypes.func,
};

export default ModalWindo;
