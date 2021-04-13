import React from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import QuizButtons from "../components/QuizButtons";
import DetailedSummary from "../components/DetailedSummary";

const Summary = () => {
  const score = useSelector((store) => store.quiz.score);
  const showDetails = useSelector((store) => store.quiz.showDetails);

  return (
    <>
      <section className="summary-section">
        <div className="summary-section-div">
          <Header />
          <p>You answered {score} out of 5 questions correctly.</p>

          <QuizButtons />
          {showDetails ? <DetailedSummary /> : ""}
        </div>
      </section>
    </>
  );
};

export default Summary;
