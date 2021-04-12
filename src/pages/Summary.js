import React from 'react'
import { useSelector } from 'react-redux'

import QuizButtons from '../components/QuizButtons'

const Summary = () => {
  const score = useSelector((store) => store.quiz.score)

  return (
    <section>
      <h2>HEJ</h2>
      <p>You answered {score} out of 5 questions correctly.</p>
      <QuizButtons />
    </section>
  )
}

export default Summary;