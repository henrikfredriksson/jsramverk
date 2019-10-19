import React, { useState } from 'react'
import Navbar from './navbar'
import EmailField from './form/emailField'
import PasswordField from './form/passwordField'
import auth from '../models/auth'
import { Redirect } from 'react-router-dom'


export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const [loggedIn, setLoggedIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <div className="container">
      {loggedIn && <Redirect to='/reports/edit' />}
      <div className="content">
        <Navbar />
        <h1>Logga in</h1>
        <div className='input-icons'>

          <form className="form-input">
            <EmailField data={data} setData={setData} />
            <PasswordField data={data} setData={setData}
              showRequirements={false}
              showPreview={false}
              showStrength={false} />
            <br />
            <input
              type="button"
              id="register-button"
              onClick={async (e) => {
                e.preventDefault()
                try {
                  const loginResponse = await auth.login(data.email, data.password)

                  if (loginResponse.status === 200) {
                    setLoggedIn(true)
                  } else if (loginResponse.status === 401) {
                    setErrorMessage('Felaktigt lösenord')
                  } else {
                    setErrorMessage('Kunde ej hitta användare')
                  }
                } catch (e) {
                  console.error(e)
                }
              }}
              value="Logga in"
            />
            {errorMessage && <p>{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

