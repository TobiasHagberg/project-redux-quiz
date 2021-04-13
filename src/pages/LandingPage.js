import React from "react";

import QuizButtons from "../components/QuizButtons";

const LandingPage = () => {
  return (
    <section className="background">
      <img
        className="landing-image"
        src="http://mediabank.visitstockholm.com/assets/deployedFiles/c5dae6d54c05b4bc3c65ca31c0f67556.jpg"
        alt="View from Stockholm City Hall"
        width="100%"
        height="100%"
      />
      <h1 className="main-heading">
        WELCOME TO THE ULTIMATE <span>STOCKHOLM</span> QUIZ
      </h1>
      <QuizButtons />
    </section>
  );
};

export default LandingPage;
