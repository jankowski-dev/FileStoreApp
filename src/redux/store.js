import { combineReducers, legacy_createStore as createStore } from "redux";
import { modalReducer } from "./reducers/modalReducer";

let reducers = combineReducers({
  modal: modalReducer,
});

let store = createStore(reducers);

export default store;