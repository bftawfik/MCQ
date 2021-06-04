import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import QuestionCard from "../../Components/QuestionCard/QuestionCard";

import * as actionCreators from "../../store/actions/actions";

const SingleQuestion = ({
  username,
  randomQueue,
  questions,
  activeQuestionNdx,
  addAnswer,
  goToNextQuestion,
}) => {
  return activeQuestionNdx === questions.length ? (
    <Redirect to="/score" />
  ) : username?.length ? (
    <FulscrnWrpr>
      <QuestionCard
        {...questions[randomQueue[activeQuestionNdx]]}
        onChoose={(answerNdx) => {
          addAnswer(answerNdx);
          goToNextQuestion();
        }}
      />
    </FulscrnWrpr>
  ) : (
    <Redirect to="/" />
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleQuestion);
