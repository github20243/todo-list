import React from 'react'

export const Button = ({children,onClick,...rest}) => {
  return (
    <button onClick={onClick} {...rest}>{children}</button>
  )
}
