import React from 'react'

const endpoint = 'http://localhost:5000/register'

export default function SubmitButton({ data, setRedirect }) {
  return (
    <input type="button" id="register-button" onClick={async (e) => {
      e.preventDefault()
      await fetch(endpoint,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({ user: data.email, password: data.password })
        })
        .catch(function (res) { console.log(res) })

      setRedirect(true)
    }}
    value="Registrera användare"
    />
  )
}
