import React, { useState } from 'react'
import { createBrowserHistory as createHistory } from 'history'


import {
  Link
} from 'react-router-dom'

import './navbar.css'


export default function Navbar() {
  const [reportOpen, setReportOpen] = useState(false)


  const handleOnClick = () => {
    setReportOpen(!reportOpen)
  }

  const history = createHistory()
  const route = history.location.pathname


  const pages = [
    {
      route: '/',
      description: 'Hem'
    },
    {
      route: '/about',
      description: 'Om'
    },
    {
      route: '/forms',
      description: 'Formulär'
    },
  ]

  return (

    <div className='navbar'>
      <h3>jsramverk</h3>
      <nav>
        <ul>
          {pages.map((page, index) =>
            (
              <li key={index}>
                <Link
                  to={page.route}
                  className={page.route === route ? 'currentRoute' : ''}>
                  {page.description}
                </Link>
              </li>
            ))
          }

          <li>
            <Link onClick={handleOnClick} to='#'>
              Redovisning {reportOpen ? '-' : '+'}
            </Link>
            {reportOpen && (
              <>
                {[...Array(6).keys()].map(key =>
                  (
                    <Link key={key} to={`/reports/week/${key + 1}`}
                      className={`/reports/week/${key}` === route ? 'currentRoute' : ''}>
                      Vecka {key + 1}
                    </Link>
                  )
                )}
              </>
            )}

          </li>
        </ul>
      </nav>
    </div >

  )
}
