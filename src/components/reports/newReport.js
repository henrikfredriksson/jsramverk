import React, { useState, useEffect } from 'react'
import Navbar from '../navbar'
import { Link, Redirect } from 'react-router-dom'
// import Markdown from 'markdown-to-jsx'
import auth from '../../models/auth'


require('dotenv').config()



export default function EditReport() {
  const [data, setData] = useState('')
  const [week, setWeek] = useState('')
  const [redirect, setDirect] = useState(false)


  let endpoint = 'https://me-api.henrikfredriksson.me'

  if (process.env.NODE_ENV === 'development') {
    endpoint = 'http://localhost:5000'
  }


  useEffect(() => {
    fetch(endpoint.concat('/reports/'))
      .then(response => response.json())
      .then(data => {
        setWeek(data.length + 1)
      })
  }, [endpoint])

  const handleOnChange = e => {
    setData(e.target.value)
  }



  const content = (
    <>
      <h1>Skapa ny redovisningstext för vecka {week}</h1>
      <form>

        <label htmlFor="name">Text:</label>
        <textarea
          className="reportArea"
          type="text"
          id="name"
          name="name"
          cols="40"
          rows="30"
          onChange={handleOnChange}
          value={data}
          size="20" />
        <input
          type="button"
          id="register-button"
          onClick={async (e) => {
            e.preventDefault()

            await fetch(endpoint.concat('/reports/'), {
              method: 'POST', // or 'PUT'
              body: JSON.stringify(
                {
                  week: week,
                  bodytext: data
                }
              ),
              headers: {
                'Content-Type': 'application/json',
                'x-access-token': auth.token
              }
            })
            setDirect(true)
          }}
          value="Ny redovisningstext"
        />
      </form>
    </>
  )


  const login = (
    <p><Link to='/login'>Logga in</Link> för att kunna redigera texter</p>
  )

  return (
    <>
      {redirect && <Redirect to='/reports/edit' />}

      <Navbar />
      <div className='container'>
        <div className="content">
          {auth.token ? content : login}
        </div>
      </div>
    </>)
}
