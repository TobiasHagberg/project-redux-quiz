import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from 'reducers/quiz'
import Button from './Button'

const QuizButtons = () => {
  const dispatch = useDispatch()
  const quizBegin = useSelector((store) => store.quiz.quizBegin)
  const quizOver = useSelector((store) => store.quiz.quizOver)
  const currentQuestionIndex = useSelector((store) => store.quiz.currentQuestionIndex)

  const handleButtonPress = (props) => {
    dispatch(props)
  }

  return (
    <div className="buttons-container">
      {quizBegin === false && (
        <Button
          btnTxt="Start"
          onClickAction={() => handleButtonPress(quiz.actions.startQuestion())}
        />
      )}
      {quizBegin === true && currentQuestionIndex >= 1 && (
        <Button
          btnTxt="Previous"
          onClickAction={() => handleButtonPress(quiz.actions.goToPreviousQuestion())}
        />
      )}
      {quizBegin === true && currentQuestionIndex <= 3 && (
        <Button
          btnTxt="Next"
          onClickAction={() => handleButtonPress(quiz.actions.goToNextQuestion())}
        />
      )}
      {quizOver === true && (
        <Button
          btnTxt="Finish"
          onClickAction={() => handleButtonPress(quiz.actions.goToNextQuestion())}
        />
      )}
      {quizOver === true && (
        <Button
          btnTxt="Restart"
          onClickAction={() => handleButtonPress(quiz.actions.restart())}
        />
      )}
    </div>
  )
}

export default QuizButtons