import React from 'react'

export default function SubmitButton() {
  return (
    <input type="button" id="register-button" onClick={(e) => {
      e.preventDefault()
      console.log('Click')
    }}
    value="Registrera användare"
    />
  )
}
