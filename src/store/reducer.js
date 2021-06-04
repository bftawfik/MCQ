import * as actionTypes from "./actions/actionTypes";

const initState = { username: "Bishoy" };

const rootReducer = (state = initState, action) => {
  if (action.type === actionTypes.ADD_USERNAME) {
    // console.log(action);
    return { ...state, username: action.payload };
  }
  return state;
};

export default rootReducer;
