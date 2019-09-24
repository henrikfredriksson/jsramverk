import React, { useState, createRef } from 'react'

import './forms.css'

export default function Forms() {
  const [data, setData] = useState({})
  const [showPassword, setShowPassword] = useState(true)
  const [passwordEmpty, setPasswordEmpty] = useState(true)

  const passwordRef = createRef()

  const handleOnChangeName = e => {
    if (e.target.name === 'password') {
      if (e.target.value !== '') {
        setPasswordEmpty(false)
      } else {
        setPasswordEmpty(true)
      }
    }

    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleOnFocus = e => {
    e.target.classList.add('active')
  }

  const handleOnBlur = e => {
    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active')
    }
  }

  const togglePassword = () => {
    console.log(passwordRef.current.value)
    setShowPassword(!showPassword)
  }


  return (
    <>
      <h1>Forms</h1>
      <div className='report'>
        <form>
          <label htmlFor="first_name">Namn:</label>
          <br />
          <input type="text" name="first_name"
            onChange={handleOnChangeName}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur} />
          <br />
          <br />

          <label htmlFor="email">E-post:</label>
          <br />
          <input type="text" name="email"
            onChange={handleOnChangeName}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur} />
          <br />
          <br />
          <label>Lösenord:</label>
          <br />
          <input
            type={showPassword ? 'password' : 'text'}
            name="password"
            onChange={handleOnChangeName}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            ref={passwordRef}
          />
          <br />
          {passwordEmpty ? '' :
            <a href="#show" onClick={togglePassword}>
              {showPassword ? 'Show password' : 'Hide password'}
            </a>
          }
          <br />

          <br />
          <button onClick={(e) => {
            e.preventDefault()
            console.log('Click')
          }}>Ok</button>
        </form>

      </div>
      <div>
        <hr />
        <h4>Input</h4>
        <pre>
          {JSON.stringify(data, undefined, 2)}
        </pre>
      </div>
    </>
  )
}

