import * as actionTypes from "./actionTypes";

import { shuffleArray } from "../../Helpers/helperFunctions";

export const addUsername = (value) => ({
  type: actionTypes.ADD_USERNAME,
  payload: value,
});

export const addTempUsername = (value) => ({
  type: actionTypes.ADD_TEMP_USERNAME,
  payload: value,
});

export const resetTempUsername = () => ({
  type: actionTypes.RESET_TEMP_USERNAME,
});

export const createRandomQueue = (length) => ({
  type: actionTypes.CREATE_RANDOM_QUEUE,
  payload: shuffleArray(Array.from(Array(length).keys())),
});

export const changeActiveQuestionNdx = (value) => ({
  type: actionTypes.CHANGE_ACTIVE_QUESTION_NDX,
  payload: value,
});

export const goToNextQuestion = () => ({
  type: actionTypes.GO_TO_NEXT_QUESTION,
});

export const addAnswer = (value) => ({
  type: actionTypes.ADD_ANSWER,
  payload: value,
});
