import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import Markdown from 'markdown-to-jsx'
import Loader from 'react-loader-spinner'
import logo from '../logo.svg'


export default function About() {
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  let endpoint = 'https://me-api.henrikfredriksson.me'

  if (process.env.NODE_ENV === 'development') {
    endpoint = 'http://localhost:5000'
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      console.log('loading')
      const response = await fetch(endpoint.concat('/about'))
      const data = await response.json()


      await setText(data.bodytext)
      setIsLoading(false)
    }

    fetchData()
  }, [text, endpoint])

  const content = (
    <div className='content'>
      <Markdown options={{ forceInline: true }}>{text}</Markdown>
      <div className='app-logo'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  )

  return (
    <>
      <Navbar />
      <div className='container'>
        {isLoading ?
          <>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={20}
              width={20}
            /> Loading content...
          </>
          : content}
      </div>
    </>)
}
