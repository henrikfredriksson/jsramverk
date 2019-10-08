import React, { useState } from 'react'
import Navbar from './navbar'
import EmailField from './form/emailField'
import PasswordField from './form/passwordField'

const endpoint = process.env.REACT_APP_DB_ENDPOINT + '/login'



export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  console.log(data)

  return (
    <div className="container">
      <div className="content">
        <Navbar />
        <h1>Logga in</h1>
        <div className='input-icons'>

          <form className="form-input">
            <EmailField data={data} setData={setData} />
            <PasswordField data={data} setData={setData}
              showRequirements={false}
              showPreview={false} />
            <br />
            <input
              type="button"
              id="register-button"
              onClick={async (e) => {
                e.preventDefault()
                try {
                  const response = await fetch(endpoint,
                    {
                      headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                      },
                      method: 'POST',
                      body: JSON.stringify({
                        user: data.email,
                        password: data.password
                      })
                    })
                    .catch(function (res) { console.log(res) })

                  const d = await response.json()

                  console.log(d)
                } catch (e) {
                  console.error(e)
                }
              }}
              value="Logga in"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

