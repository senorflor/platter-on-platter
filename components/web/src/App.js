import React from 'react'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import './App.css'
import useScrolledState from './useScrolledState'

const App = () => {
  const scrolled = useScrolledState()

  return (
    <>
      <Header scrolled={scrolled} />
      <Main />
      <Footer/>
    </>
  )
}

export default App
