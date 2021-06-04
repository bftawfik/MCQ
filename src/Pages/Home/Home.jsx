import React from "react";
import { connect } from "react-redux";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import WelcomeBox from "../../Components/WelcomeBox/WelcomeBox";
import AddUsernameBox from "../../Components/AddUsernameBox/AddUsernameBox";

import * as actionCreators from "../../store/actions/actions";

const Home = ({ username, addUsername }) => {
  return (
    <FulscrnWrpr>
      <WelcomeBox username={username} />
      <AddUsernameBox onSubmitHandler={addUsername} />
    </FulscrnWrpr>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUsername: (value) => {
      dispatch(actionCreators.addUsername(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
