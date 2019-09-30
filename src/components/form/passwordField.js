import React, { useState, createRef } from 'react'

import {
  validatePassword,
  passwordContainsNNumbers,
  passwordContainsUppperCaseLetter,
  passwordContainslowerCaseLetter
} from './password'

import PasswordStrength from './passwordStrength'


export default function PasswordField({ data, setData }) {
  const [passwordChanged, setpasswordChanged] = useState(false)
  const [showPassword, setShowPassword] = useState(true)
  const [validPassword, setvalidPassword] = useState(false)
  const [passwordEmpty, setpasswordEmpty] = useState(false)
  const [password, setPassword] = useState('')


  const passwordRef = createRef()
  const requirements = createRef()

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }


  const handleOnChangePassword = e => {
    setpasswordChanged(true)

    setPassword(e.target.value)


    setpasswordEmpty(false)
    setvalidPassword(false)

    if (e.target.value === '') {
      setpasswordEmpty(true)
      setData({ ...data, password: '' })
      return
    }


    if (!validatePassword(e.target.value)) {
      setData({ ...data, password: '' })
      return
    }

    if (validatePassword(e.target.value)) {
      setData({ ...data, password: e.target.value })
      setvalidPassword(true)
    }
  }

  const handleOnFocus = () => {
    requirements.current.style.opacity = 1
  }

  const handleOnBlur = e => {
    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active')
    }

    if (validPassword || e.target.value === '') {
      requirements.current.style.opacity = 0
    }
  }


  return (

    <>
      <div>
        <label htmlFor='password'>Lösenord:
          <br />
          <i className="fa fa-key icon" />
          <input
            className={passwordChanged ?
              validPassword ? 'input-field validField'
                : 'input-field invalidField'
              : 'input-field '}
            type={showPassword ? 'password' : 'text'}
            name="password"
            onChange={handleOnChangePassword}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            ref={passwordRef}
            required
          />
          {passwordChanged ?
            passwordEmpty ? '' :
              <a style={{ color: 'black' }} href="#show" onClick={togglePassword}>
                {showPassword ?
                  <i className="fa fa-eye fa-2x preview" ></i> :
                  <i className=" fa fa-eye-slash fa-2x preview"></i>}
              </a>
            : ''}
        </label>
        <div id='password-strength-meter'>
          <PasswordStrength password={data.password} />
        </div>
      </div>
      <div
        ref={requirements}
        style={{ fontSize: '16px', color: '#333' }}
        className='password-requirements'>
        <ul style={{ paddingTop: '0' }}>Lösenord måste:
          <li style={password.length >= 4
            ? { color: 'green ' } : { color: 'red' }}>innehålla minst 4 tecken</li>
          <li style={passwordContainsUppperCaseLetter(password)
            ? { color: 'green ' } : { color: 'red' }}>innehålla minst en versal (A-Z)</li>
          <li style={passwordContainslowerCaseLetter(password)
            ? { color: 'green ' } : { color: 'red' }}>innehålla minst en gemen (a-z)</li>
          <li style={passwordContainsNNumbers(password)
            ? { color: 'green ' } : { color: 'red' }}>innehålla minst en en siffra (0-9).</li>
        </ul>
      </div >
    </>
  )
}
