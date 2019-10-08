import React, { useState } from 'react'
import NameField from './form/nameField'
import EmailField from './form/emailField'
import PasswordField from './form/passwordField'
import SubmitButton from './form/submitButton'
import BirthdayField from './form/birthdayField'
import GDPRBox from './form/gdpr'
import Navbar from './navbar'
import { Redirect } from 'react-router-dom'

import './forms.css'




export default function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    birthday: '',
    gdpr: false
  })

  const [registerStatus, setRegisterStatus] = useState(0)


  return (


    <>
      {registerStatus === 200 && <Redirect to='/login' />}

      <Navbar />

      <div className="container">
        <div className="content">
          <h1>Skapa ny användare</h1>

          <h2 className='subtitle'>Registrera för att kunna redigera texter</h2>

          <div className='input-icons'>
            <form className="form-input">
              <NameField data={data} setData={setData} />
              <EmailField data={data} setData={setData} />
              <PasswordField data={data} setData={setData} />
              <BirthdayField data={data} setData={setData} />
              <GDPRBox data={data} setData={setData} />
              <br />

              <SubmitButton data={data} setRegisterStatus={setRegisterStatus} />
              <br />
              {registerStatus !== 0 && registerStatus === 500 && <p style={{ color: 'red', paddingLeft: '40px' }}>Användare finns redan registrerad</p>}

            </form>

          </div>

          <div>
            <hr />
            <h4>Debug</h4>
            <pre>
              {JSON.stringify(data, undefined, 2)}
            </pre>
          </div>
        </div>
      </div>
    </>
  )
}


