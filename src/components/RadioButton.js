import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from 'reducers/quiz'

const RadioButton = () => {
  const dispatch = useDispatch()
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])

  const handleAnswerChange = (props) => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: props }))
  }

  return (
    <div>
      {question.options.map((item, index) => (
        <label htmlFor={item} key={item}>
          <input
            id={item}
            name={question.id}
            type="radio"
            value={item}
            onChange={() => handleAnswerChange(index)}
            // checked={item === item.index}
            required
          >
          </input>
          {item}
        </label> 
      ))}
    </div>
  )
}

export default RadioButton