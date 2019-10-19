import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'


import './App.css'
import './components/navbar.css'

import Home from './components/home'
import About from './components/about'
// import Reports from './components/reports'
import ReportsTemplate from './components/reports/reportTemplate'
import Edit from './components/reports/edit'
import EditReport from './components/reports/editReport'
import NewReport from './components/reports/newReport'
import Register from './components/register'
import Login from './components/login'



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
    content: ReportsTemplate,
    route: '/reports/week/:id'
  },
  {
    content: Register,
    route: '/register'
  },
  {
    content: Login,
    route: '/login'
  },
  // {
  //   content: Reports,
  //   route: '/reports'
  // },
  {
    content: Edit,
    route: '/reports/edit'
  },
  {
    content: EditReport,
    route: '/reports/edit/:id'
  },

  {
    content: NewReport,
    route: '/reports/new/'
  }
]

function App() {
  return (
    <Router>
      <Switch>
        {pages.map((page, index) => (
          <Route exact key={index} path={page.route} component={page.content} />
        ))}

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
