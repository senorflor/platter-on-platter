import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import './App.css'
import useScrolledState from './useScrolledState'

const App = () => {
  const scrolled = useScrolledState()

  return (
    <Router>
      <Header scrolled={scrolled} />
      <Switch>
        <Route path='/' component={Main} />
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App
