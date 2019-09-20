import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './home'
import About from './about'
import Reports from './reports'

import './navbar.css'

const pages = [
  {
    content: Home,
    route: '/'
  },
  {
    content: About,
    route: '/about'
  },
  {
    content: Reports,
    route: '/reports/week/:id'
  }
]

export default function Navbar() {
  const [reportOpen, setReportOpen] = useState(false)

  const handleOnClick = () => {
    setReportOpen(!reportOpen)
  }


  return (
    <Router>
      {pages.map((page, index) => (
        <Route exact key={index} path={page.route} component={page.content} />
      ))}

      <div className='navbar'>
        <h3>jsramverk</h3>
        <ul>
          <li>
            <Link to='/'>Hem</Link>
          </li>
          <li>
            <Link to='/about'>Om</Link>
          </li>
          <li>
            <Link onClick={handleOnClick} to='#'>Redovisning {reportOpen ? '-' : '+'}</Link>
            {reportOpen && (
              <>
                <Link to='/reports/week/1'>Vecka 1</Link>
                <Link to='/reports/week/2'>Vecka 2</Link>
              </>
            )}

          </li>
        </ul>
      </div>
    </Router>
  )
}
