import React from 'react'

const Button = ({ btnTxt, onClickAction, className }) => {
  return (
    <button
      type="button"
      className={className}
      onClick={onClickAction}
    >
      {btnTxt}
    </button>
  )
}

export default Button