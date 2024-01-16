import React from 'react'
import './ButtonWrapper.css';

export const ButtonWrapper = ({children}) => {
  return (
    <div className='button-wrapper'>
      Core wrapped:
      ------------------
      {children}
      ------------------
    </div>
  )
}