import React, {useState, useEffect} from 'react'
import Markdown from 'markdown-to-jsx'
import logo from '../logo.svg'


export default function About(props) {
  const [text, setText] = useState('')

  useEffect(() => {
    try {
      const readmePath = require(`../texts/about.md`)

      fetch(readmePath)
        .then(response => response.text())
        .then(text => setText(text))
        .catch(err => console.error(err))
    } catch (e) {
      setText('not found')
      console.error(e)
    }
  }, [props.match.params.id])

  return (
    <>
      <div className='report'>
        <Markdown children={text} />
        <div className='app-logo'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

      </div>
    </>)
}
