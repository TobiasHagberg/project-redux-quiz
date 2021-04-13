import React from 'react'

const ShowProgress = ({ questionNumber }) => {
  return (
    <p className="show-progress-text">{questionNumber} / 5</p>
  )
}

export default ShowProgress