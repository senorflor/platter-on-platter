import React, { Component } from 'react'
import throttle from 'lodash.throttle'

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
    signupShown: false,
  }

  handleSignupToggle = () => {
    const delay = this.state.signupShown ? 150 : 0 // HACK: don't hide that Mailchimp stuff too fast
    setTimeout(() => this.setState((prevState) => ({ signupShown: !prevState.signupShown })), delay)
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

  handleClickAway = (e) => {
    if (!e.target.closest('header') && !e.target.closest('#cta')) {
      this.setState({
        signupShown: false,
      })
    }
  }

  focusEmailInput = () => {
    // All the hacks
    const emailInput = document.getElementById('mce-EMAIL')
    emailInput && emailInput.focus()
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true)
    document.body.addEventListener('click', this.handleClickAway)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    document.body.removeEventListener('click', this.handleClickAway)
  }

  render() {
    return (
      <>
        <Header
          scrolled={this.state.scrolled}
          handleSignupToggle={this.handleSignupToggle}
          signupShown={this.state.signupShown}
        />
        { /* This is where we will introduce router when we have internet to download deps again. */ }
        <div id='main'>
          <Gyro/>
          <div id='how-it-works'>
            <h2>how it works</h2>
            <Instructions/>
            <DemoVideo/>
            
            <div id='cta'>
              <p>Ready to try Platter?</p>
              <button onClick={
                () => {
                  window.location.href = 'https://app.platter.dev'
                }
              }>Start&nbsp;for&nbsp;free</button>
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}

export default App
