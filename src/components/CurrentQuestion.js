import React from 'react'
import { useSelector } from 'react-redux'

import Button from './Button'

export const CurrentQuestion = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <section>
      <h1>Question: {question.questionText}</h1>
      <Button />
    </section>
  )
}
