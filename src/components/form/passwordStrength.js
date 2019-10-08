import React from 'react'

import {
  validatePassword,
  passwordContainsNNumbers,
  specialCharacter,
} from './password'

const PasswordStrength = ({ password }) => {
  if (!validatePassword(password)) {
    return (
      <>
        <div
          id="password-strength"
          style={{
            width: '0%',
            backgroundColor: 'white',
            height: '8px'
          }}>
        </div>
      </>
    )
  }


  let _passwordStrength = 50
  let backgroundColor = 'red'

  if (password.length >= 8) {
    _passwordStrength += 10
  }


  if (password.length >= 12) {
    _passwordStrength += 10
  }


  if (passwordContainsNNumbers(password, 2)) {
    console.log(passwordContainsNNumbers(password, 2))
    _passwordStrength += 10
  }


  if (specialCharacter(password)) {
    _passwordStrength += 10
  }

  const twoSpecialChar = /(?=(.*\W){2})/

  if (twoSpecialChar.test(password)) {
    _passwordStrength += 10
  }


  if (_passwordStrength >= 60) {
    backgroundColor = 'OrangeRed'
  }

  if (_passwordStrength >= 70) {
    backgroundColor = 'Orange'
  }

  if (_passwordStrength >= 78) {
    backgroundColor = 'yellow'
  }

  if (_passwordStrength >= 90) {
    backgroundColor = 'LawnGreen'
  }



  return (
    <>
      <div
        id="password-strength"
        style={{
          width: `${_passwordStrength}%`,
          backgroundColor: backgroundColor,
          height: '8px',
          maxWidth: '400px',
          position: 'relative'
        }}>
      </div>
    </>
  )
}


export default PasswordStrength
