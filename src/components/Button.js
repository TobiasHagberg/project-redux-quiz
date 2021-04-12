import React from 'react'

const Button = ({ btnTxt, onClickAction }) => {
  return (
    <button
      type="button"
      className="btn button"
      onClick={onClickAction}
    >
      {btnTxt}
    </button>
  )
}

export default Button