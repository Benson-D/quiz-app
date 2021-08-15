import React from "react";
import "./App.css";
import questions from "./questions";

function App() {
  const [current, setCurrent] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);
  const [countRight, setCountRight] = React.useState(0);

  const handleClick = (isCorrect) => {
    const next = current + 1;
    next < questions.length ? setCurrent(next) : setShowScore(true);

    if (isCorrect) setCountRight(countRight + 1);
  };

  return (
    <div className="app">
      {showScore ? (
        <p className="score">You scored {countRight} out of 3</p>
      ) : (
        <React.Fragment>
          <section className="question__section">
            <div className="question__tab">
              <span>Question {current + 1}</span>/{questions.length}
            </div>
            <p className="question">{questions[current].question}</p>
          </section>
          <section className="answers">
            {questions[current].options.map((answer, idx) => (
              <button
                key={idx}
                className="answer__btn"
                onClick={() => handleClick(answer.isCorrect)}
              >
                {answer.answerOption}
              </button>
            ))}
          </section>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
