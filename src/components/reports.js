import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import Markdown from 'markdown-to-jsx'

export default function Reports(props) {
  const [text, setText] = useState('')

  useEffect(() => {
    try {
      const readmePath = require(`../reports/${props.match.params.id}.md`)

      fetch(readmePath)
        .then(response => response.text())
        .then(text => setText(text))
        .catch(err => console.error(err))
    } catch (e) {
      setText('# File not found')
    }
  }, [props.match.params.id])

  return (
    <>
      <Navbar />
      <div className='container'>
        <Markdown>{text}</Markdown>
      </div>
    </>)
}
