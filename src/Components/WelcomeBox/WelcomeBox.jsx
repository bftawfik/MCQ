import React from "react";
import { withRouter } from "react-router-dom";

import * as styles from "./WelcomeBox.module.scss";

const WelcomeBox = ({ username, history }) => {
  const gotoMCQ = () => {
    history.push("/question")
  }
  return (
    <div className={styles.WelcomeBox}>
      <p>Welcome "{username}"</p>
      <button onClick={gotoMCQ}>Start MCQ exam</button>
    </div>
  );
};
export default withRouter(WelcomeBox);
