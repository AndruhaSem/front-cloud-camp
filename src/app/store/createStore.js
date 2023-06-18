import { configureStore, combineReducers } from "@reduxjs/toolkit";
import formReducer from "./form";

const rootReducer = combineReducers({
  form: formReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
