import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { formListReducer, formReducer } from "./reducers/formReducer";


const reducer = combineReducers({
    review: formReducer,
    reviews: formListReducer,
});

let initialState = {};

const store = configureStore({
	reducer: reducer,
	devTools: true,
    preloadedState: initialState,
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
	  immutableStateInvariantCheck: false,
    }).concat(thunkMiddleware),
});

export default store;
