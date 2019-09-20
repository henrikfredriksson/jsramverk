import React, { useState, useEffect } from 'react'
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
      setText('not found')
    }
  }, [props.match.params.id])

  return (
    <>
      <div className='report'>
        <Markdown children={text} />
      </div>
    </>)
}
