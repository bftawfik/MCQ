import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";

import * as styles from "./UserScore.module.scss";

const UserScore = ({ username, score, questions, activeQuestionNdx }) => {
  return !username || !username.length ? (
    <Redirect to={`/`} />
  ) : activeQuestionNdx !== questions.length ? (
    <Redirect to={`/question/${activeQuestionNdx}`} />
  ) : (
    <FulscrnWrpr
      className={styles.UserScore}
      containerClassName={styles.container}
    >
      <div>you scored: {score}</div>
    </FulscrnWrpr>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    score: state.user.score,
    questions: state.questions,
    activeQuestionNdx: state.user.activeQuestionNdx,
  };
};

export default connect(mapStateToProps)(UserScore);
