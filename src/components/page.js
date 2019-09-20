import React from 'react'
import Navbar from './navbar'


export default function Page(props) {
  return (
    <>
      <Navbar />
      {props.content}
    </>
  )
}

