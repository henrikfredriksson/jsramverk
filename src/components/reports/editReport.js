import React, { useState, useEffect } from 'react'
import Navbar from '../navbar'
import { Link } from 'react-router-dom'
import auth from '../../models/auth'
require('dotenv').config()


export default function EditReport(props) {
  const [data, setData] = useState('')
  const [saved, setSaved] = useState('')

  let endpoint = 'https://me-api.henrikfredriksson.me'

  if (process.env.NODE_ENV === 'development') {
    endpoint = 'http://localhost:5000'
  }

  useEffect(() => {
    fetch(endpoint.concat(`/reports/week/${props.match.params.id}`))
      .then(response => response.json())
      .then(data => {
        setData(data.bodytext)
      })
      .catch(err => {
        console.error(err)
      })
  }, [endpoint, props.match.params.id])

  const handleOnChange = e => {
    setData(e.target.value)
    setSaved(false)
  }


  // Save every 2 seconds
  useEffect(() => {
    const save = async () => {
      fetch(
        endpoint.concat('/reports/week/3'), {
          method: 'PUT', // or 'PUT'
          body: JSON.stringify(
            {
              week: props.match.params.id,
              bodytext: data
            }
          ), // data can be `string` or {object}!
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': auth.token
          }
        }).then(() => {

      })
    }

    const interval = setInterval(async () => {
      await save()
      setSaved(true)
    }, 2000)

    return () => clearInterval(interval)
  }, [data, endpoint, props.match.params.id])

  const content = (
    <>
      <h1>Redigera</h1>
      <form>
        <label htmlFor="name">Redigera text för vecka {props.match.params.id}:</label>
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
        {!saved && 'Ändringar ej sparade'}
      </form>
    </>
  )


  const login = (
    <p><Link to='/login'>Logga in</Link> för att kunna redigera texter</p>
  )

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className="content">
          {auth.token ? content : login}


        </div>
      </div>
    </>)
}
