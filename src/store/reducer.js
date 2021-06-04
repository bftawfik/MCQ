import * as actionTypes from "./actions/actionTypes";

const initState = {
  username: "",
  tempUsername: "",
  questions: [
    {
      id: 0,
      question: "q0",
      answers: ["a", "b", "c", "d"],
      correctAnswerNdx: 1,
    },
    {
      id: 1,
      question: "q1",
      answers: ["a", "b", "c", "d"],
      correctAnswerNdx: 2,
    },
    {
      id: 2,
      question: "q2",
      answers: ["a", "b", "c", "d"],
      correctAnswerNdx: 0,
    },
    {
      id: 3,
      question: "q3",
      answers: ["a", "b", "c", "d"],
      correctAnswerNdx: 0,
    },
    {
      id: 4,
      question: "q4",
      answers: ["a", "b", "c", "d"],
      correctAnswerNdx: 0,
    },
  ],
  randomQueue: null,
  activeQuestionNdx: null,
};

const rootReducer = (state = initState, action) => {
  if (action.type === actionTypes.ADD_USERNAME) {
    // console.log(action);
    return { ...state, username: action.payload };
  }

  if (action.type === actionTypes.ADD_TEMP_USERNAME) {
    // console.log(action);
    return { ...state, tempUsername: action.payload };
  }

  if (action.type === actionTypes.RESET_USERNAME) {
    // console.log(action);
    return { ...state, tempUsername: "" };
  }

  if (action.type === actionTypes.CREATE_RANDOM_QUEUE) {
    // console.log(action);
    return { ...state, randomQueue: action.payload };
  }

  if (action.type === actionTypes.CHANGE_ACTIVE_QUESTION_NDX) {
    // console.log(action);
    return { ...state, activeQuestionNdx: action.payload };
  }

  return state;
};

export default rootReducer;
