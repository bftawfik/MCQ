import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import QuestionCard from "../../Components/QuestionCard/QuestionCard";

const SingleQuestion = ({
  username,
  randomQueue,
  questions,
  activeQuestionNdx,
}) => {
  return username?.length ? (
    <FulscrnWrpr>
      <QuestionCard
        {...questions[randomQueue[activeQuestionNdx]]}
        onChoose={(answer) => {
          console.log(answer);
        }}
      />
    </FulscrnWrpr>
  ) : (
    <Redirect to="/" />
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.username,
    randomQueue: state.randomQueue,
    questions: state.questions,
    activeQuestionNdx: state.activeQuestionNdx,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleQuestion);
