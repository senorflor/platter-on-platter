import React, { Component } from 'react'
import throttle from 'lodash.throttle'

import Cta from './Cta'
import DemoVideo from './DemoVideo'
import Footer from './Footer'
import Gyro from './Gyro'
import Header from './Header'
import Instructions from './Instructions'
import './App.css'


class App extends Component {

  scrollThreshold = 6 // Pixels before we make header transition to opaque

  state = {
    scrolled: window.pageYOffset > 5,
  }

  handleScroll = throttle(
    (e) => {
      this.setState({
        scrolled: window.pageYOffset > this.scrollThreshold
      })
    },
    100,
    {
      leading: true,
      trailing: true,
    }
  )

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <>
        <Header scrolled={this.state.scrolled} />
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
    );
  }
}

export default App
