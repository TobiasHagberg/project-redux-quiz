import React from "react";
import { useSelector } from "react-redux";

const DetailedSummary = () => {
  const answers = useSelector((store) => store.quiz.answers);

  return (
    <div className="detailed-summary">
      {answers.map((a) => (
        <div className="detailed-summary-item">
          <h3>{a.question.questionText}</h3>

          {a.isCorrect ? (
            <p className="green"><span className="bold">{a.answer}</span> is correct</p>
          ) : (
            <div>
              <p className="red">You answered <span className="bold">{a.answer}</span></p>
              <p className="green">
                The correct answer is <span className="bold">{a.question.options[a.question.correctAnswerIndex]}</span>
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default DetailedSummary;
