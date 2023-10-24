import React from "react";

const Results = ({ score, totalScore, resetQuiz }) => {
  return (
    <>
      <div className="show-score">
        Your Score : {score}
        <br />
        Total Score : {totalScore}
      </div>
      <button className="next-button" onClick={resetQuiz}>
        Try Again
      </button>
    </>
  );
};

export default Results;
