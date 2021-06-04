import * as actionTypes from "./actionTypes";


export const addUsername = (value) => ({
  type: actionTypes.ADD_USERNAME,
  payload: value,
});

export const addTempUsername = (value) => ({
  type: actionTypes.ADD_TEMP_USERNAME,
  payload: value,
});

export const resetUsername = () => ({
  type: actionTypes.RESET_USERNAME,
});