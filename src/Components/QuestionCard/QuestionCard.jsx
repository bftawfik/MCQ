import React from "react";

import { shuffleArray } from "../../Helpers/helperFunctions";

const QuestionCard = ({ question, answers, onChoose }) => {
  const randomQueue = shuffleArray(Array.from(Array(answers.length).keys()));
  return (
    <div>
      <header>QuestionCard</header>
      <main>
        <div>{question}</div>
        {randomQueue.map((ndx) => (
          <button key={ndx} onClick={() => onChoose(ndx)}>
            {answers[ndx]}
          </button>
        ))}
      </main>
      <footer>QuestionCard</footer>
    </div>
  );
};

export default QuestionCard;
