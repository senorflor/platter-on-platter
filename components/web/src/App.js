import React, { useEffect, useState } from 'react'
import throttle from 'lodash.throttle'

import Cta from './Cta'
import DemoVideo from './DemoVideo'
import Footer from './Footer'
import Gyro from './Gyro'
import Header from './Header'
import Instructions from './Instructions'
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
      <div id='main'>
        <Gyro/>
        <div id='how-it-works'>
          <h2>how it works</h2>
          <Instructions/>
          <DemoVideo/>
          <Cta />
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
