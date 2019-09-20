import React, { useState, useEffect } from 'react'
import Markdown from 'markdown-to-jsx'

import Me from '../me.jpg'

export default function Home() {
  const [text, setText] = useState('')

  useEffect(() => {
    try {
      const file = require(`../texts/home.md`)

      fetch(file)
        .then(response => response.text())
        .then(text => setText(text))
        .catch(err => console.error(err))
    } catch (e) {
      setText(`File  not found`)
    }
  }, [])


  return (
    <>
       <div className='report'>
         <Markdown children={text} />
       </div>
      <div className="me-img">
        <img id='me' src={Me} alt='' />
      </div>


    </>
  )
}
