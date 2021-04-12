import React from 'react'
import { useDispatch } from 'react-redux'

import { quiz } from 'reducers/quiz'

const LandingPage = () => {
  const dispatch = useDispatch()
  const handleButtonPress = () => {
    dispatch(quiz.actions.startQuestion())
  }

  return (
    <section className="background">
      <h1 className="main-heading">WELCOME TO QUIZ</h1>
      <button type="button" onClick={handleButtonPress}>ENTER QUIZ</button>
    </section>
  )
}

export default LandingPage