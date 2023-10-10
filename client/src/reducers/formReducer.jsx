import {
  ADD_FORM_FAIL,
  ADD_FORM_REQUEST,
  ADD_FORM_RESET,
  ADD_FORM_SUCCESS,
  CLEAR_ERRORS,
  GET_ALL_FORM_FAIL,
  GET_ALL_FORM_REQUEST,
  GET_ALL_FORM_SUCCESS,
} from "../constants/formConstants";

// reducer for a single form
export const formReducer = (state = { review: {} }, action) => {
  switch (action.type) {
    case ADD_FORM_REQUEST:
      return {
        loading: true,
        review: {},
      };
    case ADD_FORM_SUCCESS:
      return {
        loading: false,
        review: action.payload.form,
        success: true
      };
    case ADD_FORM_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ADD_FORM_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// reducer for list of forms
export const formListReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case GET_ALL_FORM_REQUEST:
      return {
        loading: true,
        reviews: [],
      };
    case GET_ALL_FORM_SUCCESS:
      return {
        loading: false,
        reviews: action.payload.forms,
      };
    case GET_ALL_FORM_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
