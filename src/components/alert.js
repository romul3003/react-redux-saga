import React from 'react'

const Alert = ({ text, className }) => {
  return (
    <div className={`alert alert-${className}`} role="alert">
      {text}
    </div>
  )
}

export default Alert
