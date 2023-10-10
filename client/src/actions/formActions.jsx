import axios from "axios";
import { ADD_FORM_FAIL, ADD_FORM_REQUEST, ADD_FORM_SUCCESS, CLEAR_ERRORS, GET_ALL_FORM_FAIL, GET_ALL_FORM_REQUEST, GET_ALL_FORM_SUCCESS } from "../constants/formConstants";

// add form
export const addForm = (formData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_FORM_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/v1/add-form", formData, config);

    dispatch({ type: ADD_FORM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_FORM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get all forms
export const getAllForms = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_FORM_REQUEST });

    const { data } = await axios.get("/api/v1/forms");

    dispatch({ type: GET_ALL_FORM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_FORM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// clear errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };
