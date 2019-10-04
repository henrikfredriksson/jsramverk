import React from 'react'

import {
  BrowserRouter as Router,
  Route, Redirect, Switch,
} from 'react-router-dom'


import './App.css'
import './components/navbar.css'

import Home from './components/home'
import About from './components/about'
import Reports from './components/reports'
import Forms from './components/forms'

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
  },
  {
    content: Forms,
    route: '/forms'
  }
]





function App() {
  console.log(process.env.NODE_ENV)
  return (
    <Router>
      <Switch>
        {pages.map((page, index) => (
          <Route exact key={index} path={page.route} component={page.content} />
        ))}

        <Route path='/reports' exact render={() => <Redirect to='/' />} />
        <Route path='/reports/week' exact render={() => <Redirect to='/' />} />
        <Route component={() => (
          <>
            <h1>404 Not Found</h1>
            <p>The requested url {window.location.href} can not be found</p>
          </>
        )} />
      </Switch>
    </Router >
  )
}

export default App
