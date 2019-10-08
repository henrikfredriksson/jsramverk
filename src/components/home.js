import React, { useState, useEffect } from 'react'
import Markdown from 'markdown-to-jsx'
import Loader from 'react-loader-spinner'
import Navbar from './navbar'

import Me from '../me.jpg'

export default function Home() {
  // const [text, setText] = useState('')
  const [me, setMe] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  let endpoint = 'https://me-api.henrikfredriksson.me/'

  if (process.env.NODE_ENV === 'development') {
    endpoint = 'http://localhost:5000/'
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await fetch(endpoint)
      const data = await response.json()

      await setMe(data.description)
      setIsLoading(false)
    }

    fetchData()
  }, [me, endpoint])


  const content = (

    <div className="content">
      <Markdown options={{ forceInline: true }}>{me}</Markdown>
      <div className="me-img">
        <img id='me' src={Me} alt='' />
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

      {/* {
        isLoading ?

          </div>
          :
          content
      } */}
    </>
  )
}
