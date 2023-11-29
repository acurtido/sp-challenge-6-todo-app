import React from 'react'

export  function useColorSelector() {
  const [color, setColor] = React.useState('dark')

  function toggleColor() {
    setColor(color === 'dark' ? 'light' : 'dark')
  }

  return [color, toggleColor]
}
