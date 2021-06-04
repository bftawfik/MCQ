import * as actionTypes from "./actions/actionTypes";

const initState = { username: "", tempUsername: "" };

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

  return state;
};

export default rootReducer;
