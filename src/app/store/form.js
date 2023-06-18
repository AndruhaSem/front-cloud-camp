import { createSlice } from "@reduxjs/toolkit";
import apiServices from "../services/form.services";
const form = {
  phone: "",
  email: "",
  nickname: "",
  name: "",
  sername: "",
  sex: "",
  advantages: [],
  checkbox_group: [],
  radio_group: "",
  about: "",
};

const formSlise = createSlice({
  name: "form",
  initialState: {
    entities: form,
    step: 1,
    maxStep: 3,
    status: null,
    modal_is_opened: false,
  },
  reducers: {
    formUpdateSuccessed: (state, action) => {
      state.entities[action.payload.name] = action.payload.value;
    },
    stepUpdateSuccessed: (state, action) => {
      state.step = action.payload;
    },
    createFormInput: (state, action) => {
      state.entities.advantages.push(action.payload);
    },
    removeFormInput: (state, action) => {
      state.entities.advantages = state.entities.advantages.filter(
        (el, ind) => ind !== action.payload
      );
    },
    updateAdvantagValue: (state, action) => {
      state.entities.advantages[action.payload.index] = action.payload.value;
    },
    updateCheckedValue: (state, action) => {
      if (state.entities.checkbox_group.includes(action.payload.value)) {
        state.entities.checkbox_group = state.entities.checkbox_group.filter(
          (value) => value !== action.payload.value
        );
        return;
      }

      state.entities.checkbox_group.push(action.payload.value);
    },
    updateRadioValue: (state, action) => {
      state.entities[action.payload.name] = action.payload.value;
    },
    changeStatus: (state, action) => {
      state.status = action.payload.success;
    },
    updateModalState: (state, action) => {
      state.modal_is_opened = action.payload;
    },
    removeForm: (state, action) => {
      state.entities = form;
      state.step = 1;
      state.maxStep = 3;
      state.status = null;
      state.modal_is_opened = false;
    },
  },
});
const { reducer: formReducer, actions } = formSlise;
const {
  formUpdateSuccessed,
  stepUpdateSuccessed,
  createFormInput,
  removeFormInput,
  updateAdvantagValue,
  updateCheckedValue,
  updateRadioValue,
  changeStatus,
  updateModalState,
  removeForm,
} = actions;

export const formUpdate = (data) => (dispatch) => {
  dispatch(formUpdateSuccessed(data));
};
export const stepUpdate = (ind) => (dispatch) => {
  dispatch(stepUpdateSuccessed(ind));
};
export const createInput = (data) => (dispatch) => {
  dispatch(createFormInput(data));
};
export const removeInput = (ind) => (dispatch) => {
  dispatch(removeFormInput(ind));
};
export const updateInput = (index, value) => (dispatch) => {
  dispatch(updateAdvantagValue({ index, value }));
};
export const updateRadio = (data) => (dispatch) => {
  dispatch(updateRadioValue(data));
};
export const updateCheckbox = (value) => (dispatch) => {
  dispatch(updateCheckedValue({ value }));
};
export const closeModal = () => (dispatch) => {
  dispatch(updateModalState(false));
};
export const sendForm = (payload) => async (dispatch) => {
  try {
    await apiServices.post(payload);
    dispatch(changeStatus({ success: true }));
    dispatch(updateModalState(true));
  } catch (err) {
    dispatch(changeStatus({ sucess: false }));
    dispatch(updateModalState(true));
  }
};
export const updateForm = () => (dispatch) => {
  dispatch(removeForm());
};

export const getForm = () => (state) => state.form.entities;
export const getStep = () => (state) => state.form.step;
export const getMaxStep = () => (state) => state.form.maxStep;
export const modalState = () => (state) => state.form.modal_is_opened;
export const statusState = () => (state) => state.form.status;

export default formReducer;
