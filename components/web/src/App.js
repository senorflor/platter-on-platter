import React, { useEffect, useState } from 'react'
import throttle from 'lodash.throttle'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import './App.css'

// Pixels before we make header transition to opaque
const scrollThreshold = 6

const App = () => {

  const [ scrolled, updateScrolled ] = useState(window.pageYOffset > scrollThreshold)

  useEffect(() => {
    const handleScroll = throttle(
      (e) => {
        updateScrolled(
          window.pageYOffset > scrollThreshold
        )
      },
      100,
      {
        leading: true,
        trailing: true,
      }
    )
    window.addEventListener('scroll', handleScroll, true)
    return function cleanupScrollListener() {
      window.removeEventListener('scroll', handleScroll)
    }
  }) 

  return (
    <>
      <Header scrolled={scrolled} />
      <Main />
      <Footer/>
    </>
  )
}

export default App
