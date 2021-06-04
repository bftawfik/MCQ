import React, { Component } from "react";
import { connect } from "react-redux";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import WelcomeBox from "../../Components/WelcomeBox/WelcomeBox";
import AddUsernameBox from "../../Components/AddUsernameBox/AddUsernameBox";

import * as actionCreators from "../../store/actions/actions";
class Home extends Component {
  onInput = (e) => {
    const { tempUsername, addTempUsername } = this.props;
    if (e.target.value !== tempUsername) {
      addTempUsername(e.target.value);
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { tempUsername, addUsername, resetUsername } = this.props;
    addUsername(tempUsername);
    resetUsername();
  };

  render() {
    const { username, tempUsername, resetUsername } = this.props;
    return (
      <FulscrnWrpr>
        {username ? (
          <WelcomeBox username={username} />
        ) : (
          <AddUsernameBox
            tempUsername={tempUsername}
            onInputHandler={this.onInput}
            onSubmitHandler={this.onSubmit}
            onResetHandler={resetUsername}
          />
        )}
      </FulscrnWrpr>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    tempUsername: state.tempUsername,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUsername: (value) => {
      dispatch(actionCreators.addUsername(value));
    },
    addTempUsername: (value) => {
      dispatch(actionCreators.addTempUsername(value));
    },
    resetUsername: () => {
      dispatch(actionCreators.resetUsername());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
