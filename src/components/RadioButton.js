import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from 'reducers/quiz'

const RadioButton = () => {
  const dispatch = useDispatch()
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  //const answeredIndex = useSelector((store) => store.quiz.answers[store.quiz.currentQuestionIndex])

  const handleAnswerChange = (props) => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: props }))
  }

  return (
    <div className="radio-div">
      {question.options.map((item, index) => (
        // <div className="radio-btn">
          <label htmlFor={item} key={item}>
            <input
              id={item}
              name={question.id}
              type="radio"
              value={item}
              onChange={() => handleAnswerChange(index)}
              //checked={item === answeredIndex.answer}
              required
            >
            </input>
            {item}
          </label>
        // </div>
      ))}
    </div>
  )
}

export default RadioButton