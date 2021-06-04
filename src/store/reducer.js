import * as actionTypes from "./actions/actionTypes";

const initState = {
  user: {
    username: "",
    randomQueue: null,
    activeQuestionNdx: null,
    score: 0,
    answers: [],
  },
  tempUsername: "",
  questions: [
    {
      id: 0,
      question:
        " If a red house is made from red bricks, a blue house is made from blue bricks, a pink house is made from pink bricks, and a black house is made from black bricks. What is a greenhouse made from?",
      answers: ["Wood", "Moss covered stones", "Glass", "Green Bricks"],
      correctAnswerNdx: 1,
    },
    {
      id: 1,
      question:
        "Some months have 31 days, and some months have 30 days. But how many have 28 days",
      answers: ["1", "2", "4", "8"],
      correctAnswerNdx: 2,
    },
    {
      id: 2,
      question:
        "John digs a hole that is 2 yards wide, 3 yards long, and 1 yard deep. How many cubic feet of dirt are in it?",
      answers: ["0", "2", "3", "5"],
      correctAnswerNdx: 0,
    },
    {
      id: 3,
      question: "here did the real Boston Tea Party take place?",
      answers: ["New york", "Boston", "Washington", "Philadelphia"],
      correctAnswerNdx: 0,
    },
    {
      id: 4,
      question: "What is the capital of Florida?",
      answers: ["Miami", "Tampa Bay", "Tallahassee", "Orlando"],
      correctAnswerNdx: 0,
    },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === actionTypes.ADD_USERNAME) {
    // console.log(action);
    return {
      ...state,
      user: { ...state.user, username: action.payload },
    };
  }

  if (action.type === actionTypes.ADD_TEMP_USERNAME) {
    // console.log(action);
    return { ...state, tempUsername: action.payload };
  }

  if (action.type === actionTypes.RESET_TEMP_USERNAME) {
    // console.log(action);
    return { ...state, tempUsername: "" };
  }

  if (action.type === actionTypes.CREATE_RANDOM_QUEUE) {
    // console.log(action);
    return {
      ...state,
      user: { ...state.user, randomQueue: action.payload },
    };
  }

  if (action.type === actionTypes.CHANGE_ACTIVE_QUESTION_NDX) {
    // console.log(action);
    return {
      ...state,
      user: { ...state.user, activeQuestionNdx: action.payload },
    };
  }

  if (action.type === actionTypes.GO_TO_NEXT_QUESTION) {
    // console.log(action);
    return {
      ...state,
      user: {
        ...state.user,
        activeQuestionNdx: state.user.activeQuestionNdx + 1,
      },
    };
  }

  if (action.type === actionTypes.ADD_ANSWER) {
    const { correctAnswerNdx } =
      state.questions[state.user.randomQueue[state.user.activeQuestionNdx]];
    return {
      ...state,
      user: {
        ...state.user,
        answers: [...state.user.answers, action.payload],
        score: state.user.score + (action.payload === correctAnswerNdx ? 1 : 0),
      },
    };
  }

  return state;
};

export default rootReducer;
