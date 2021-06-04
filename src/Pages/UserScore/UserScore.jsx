import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/actions";

const UserScore = ({
  username,
  score,
  questions,
  activeQuestionNdx,
  addAnswer,
  goToNextQuestion,
}) => {
  console.log(score);
  return !username || !username.length ? (
    <Redirect to={`/`} />
  ) : activeQuestionNdx !== questions.length ? (
    <Redirect to={`/question/${activeQuestionNdx}`} />
  ) : (
        <div>you scored {score}</div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    score: state.user.score,
    randomQueue: state.user.randomQueue,
    questions: state.questions,
    activeQuestionNdx: state.user.activeQuestionNdx,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAnswer: (value) => {
      dispatch(actionCreators.addAnswer(value));
    },
    goToNextQuestion: () => {
      dispatch(actionCreators.goToNextQuestion());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserScore);
