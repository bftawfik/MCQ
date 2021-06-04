import * as actionTypes from "./actionTypes";


export const addUsername = (value) => ({
  type: actionTypes.ADD_USERNAME,
  payload: value,
});