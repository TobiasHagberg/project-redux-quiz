import React from 'react'
import { useSelector } from 'react-redux'

import LandingPage from 'pages/LandingPage'
import { CurrentQuestion } from 'components/CurrentQuestion'

const Main = () => {
  const quizBegin = useSelector((store) => store.quiz.quizBegin)

  return (
    <main>
      {quizBegin === false ? <LandingPage /> : <CurrentQuestion />}
    </main>
  )
}

export default Main