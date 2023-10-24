import React, { useState } from "react";
import questions from "../questions";
import Results from "./Results";

const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [checkedOption, setCheckedOption] = useState(0);
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    updateScore();
    if (questionNumber < questions.length - 1) {
      setQuestionNumber(questionNumber + 1);
      setCheckedOption(0);
    } else setShowResult(true);
  };

  const updateScore = (index) => {
    if (checkedOption === questions[questionNumber].answer) {
      setScore(score + 1);
    }
  };

  const resetQuiz = () => {
    setQuestionNumber(0);
    setShowResult(false);
    setCheckedOption(0);
    setScore(0);
  };

  return (
    <>
      <p className="heading-txt">Quiz App</p>
      <div className="container">
        {showResult ? (
          <Results
            resetQuiz={resetQuiz}
            score={score}
            totalScore={questions.length}
          />
        ) : (
          <>
            <div className="question">
              <span className="question-number">{questionNumber + 1}.</span>
              <span className="question-txt">
                {questions[questionNumber].question}
              </span>
            </div>
            <div className="option-container">
              {questions[questionNumber].options.map((option, index) => {
                return (
                  <button
                    className={`option-btn ${
                      checkedOption === index + 1 ? "checked" : null
                    }`}
                    key={index}
                    onClick={() => {
                      setCheckedOption(index + 1);
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <button className="next-button" onClick={handleNextQuestion}>
              Next
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
