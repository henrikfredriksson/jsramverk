import React, { useState } from 'react'


let endpoint = 'https://me-api.henrikfredriksson.me'

if (process.env.NODE_ENV === 'development') {
  endpoint = 'http://localhost:5000/register'
}

export default function SubmitButton({ data, setRegisterStatus }) {
  const [buttonClicked, setButtonClicked] = useState(false)

  const inputOK = data.email !== '' && data.password !== ''

  const handleOnClick = async (e) => {
    setButtonClicked(true)
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
            name: data.name,
            user: data.email,
            password: data.password,
            birthday: data.birthday
          })
        })
        .catch(function (res) { console.log(res) })

      setButtonClicked(false)

      setRegisterStatus(response.status)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <input
      disabled={buttonClicked || !inputOK}
      type="button"
      id="register-button"
      onClick={handleOnClick}
      value="Registrera användare"
    />
  )
}

