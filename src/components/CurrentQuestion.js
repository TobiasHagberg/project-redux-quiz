import React from "react";
import { useSelector } from "react-redux";

import Header from "./Header";
import ShowProgress from "./ShowProgress";
import RadioButton from "./RadioButton";
import QuizButtons from "./QuizButtons";

export const CurrentQuestion = () => {
  const question = useSelector(
    (store) => store.quiz.questions[store.quiz.currentQuestionIndex]
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <section className="question-section">
      <div className="question-section-text">
        <Header />
        <ShowProgress questionNumber={question.id} />
        <form className="form">
          <h1>Question: {question.questionText}</h1>
          <RadioButton />
          <QuizButtons />
        </form>
      </div>
      <img className="question-image" src={question.image} alt=""/>
    </section>
  );
};
