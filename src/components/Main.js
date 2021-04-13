import React from 'react'
import { useSelector } from 'react-redux'

import LandingPage from 'pages/LandingPage'
import Summary from 'pages/Summary'
import { CurrentQuestion } from 'components/CurrentQuestion'

const Main = () => {
  const quizBegin = useSelector((store) => store.quiz.quizBegin)
  const quizOver = useSelector((store) => store.quiz.quizOver)

  return (
    <main className="main">
      {quizBegin === false && <LandingPage />}
      {quizBegin === true && quizOver === false && <CurrentQuestion />}
      {quizOver === true && <Summary />}
    </main>
  )
}

export default Main
