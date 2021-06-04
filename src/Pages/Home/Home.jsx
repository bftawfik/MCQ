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
    const {
      tempUsername,
      addUsername,
      questions,
      createRandomQueue,
      resetActiveQuestionNdx,
      resetTempUsername,
    } = this.props;
    addUsername(tempUsername);
    createRandomQueue(questions.length);
    resetActiveQuestionNdx();
    resetTempUsername();
  };

  render() {
    const { username, tempUsername, resetTempUsername } = this.props;
    return (
      <FulscrnWrpr>
        {username ? (
          <WelcomeBox username={username} />
        ) : (
          <AddUsernameBox
            tempUsername={tempUsername}
            onInputHandler={this.onInput}
            onSubmitHandler={this.onSubmit}
            onResetHandler={resetTempUsername}
          />
        )}
      </FulscrnWrpr>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    tempUsername: state.tempUsername,
    questions: state.questions,
    activeQuestionNdx: state.user.activeQuestionNdx,
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
    resetTempUsername: () => {
      dispatch(actionCreators.resetTempUsername());
    },
    createRandomQueue: (length) => {
      dispatch(actionCreators.createRandomQueue(length));
    },
    resetActiveQuestionNdx: () => {
      dispatch(actionCreators.changeActiveQuestionNdx(0));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
