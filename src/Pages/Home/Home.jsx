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
      resetUsername,
    } = this.props;
    addUsername(tempUsername);
    createRandomQueue(questions.length);
    resetActiveQuestionNdx();
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
    questions: state.questions,
    activeQuestionNdx: state.activeQuestionNdx,
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
    createRandomQueue: (length) => {
      dispatch(actionCreators.createRandomQueue(length));
    },
    resetActiveQuestionNdx: () => {
      dispatch(actionCreators.changeActiveQuestionNdx(0));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
