import React from "react";

import { shuffleArray } from "../../Helpers/helperFunctions";

import * as styles from "./QuestionCard.module.scss";

const QuestionCard = ({
  question,
  answers,
  activeQuestionNdx,
  totalQuestions,
  onChoose,
}) => {
  const randomQueue = shuffleArray(Array.from(Array(answers.length).keys()));
  return (
    <div className={styles.QuestionCard}>
      <header>
        {activeQuestionNdx+1}
        <span>of</span>
        {totalQuestions}
      </header>
      <main>
        <div>{question}</div>
        {randomQueue.map((ndx) => (
          <button key={ndx} onClick={() => onChoose(ndx)}>
            {answers[ndx]}
          </button>
        ))}
      </main>
      <footer>choose an answer to go to the next question</footer>
    </div>
  );
};

export default QuestionCard;
