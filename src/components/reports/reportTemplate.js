import React, { useState, useEffect } from 'react'
import Navbar from '../navbar'
import Markdown from 'markdown-to-jsx'
require('dotenv').config()



export default function Reports(props) {
  const [text, setText] = useState('')


  let endpoint = process.env.REACT_APP_DB_ENDPOINT



  useEffect(() => {
    fetch(endpoint.concat(`/reports/week/${props.match.params.id}`))
      .then(response => response.json())
      .then(data => {
        if (data.bodytext) {
          setText(data.bodytext)
        } else {
          setText('# Text not found')
        }
      })
      .catch(err => {
        setText('# Texten kunde inte hittas')
        console.error(err)
      })
  }, [endpoint, props.match.params.id])

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className="content">
          <Markdown>{text}</Markdown>
        </div>
      </div>
    </>)
}
