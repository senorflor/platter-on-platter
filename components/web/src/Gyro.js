import React, { Component } from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'
import Mouse from './Mouse'
import Rocket from './Rocket'

const Typed = styled.span`
  font-family: Inconsolata, monospace;
  font-weight: 900;
`

class Gyro extends Component {

  // TODO: Remove knowledge of #main-header from this component
  handleClickToScroll = () => {
    const scrollTarget =
      document.getElementById('gyro').clientHeight -
      document.getElementById('main-header').clientHeight
    window.scrollTo({
      top: scrollTarget,
      left: 0,
      behavior: 'smooth',
    })
  }

  render() {
    return <div id='gyro'>
      <div id='gyro-text'>
        <div>
          <h2>The fastest way to</h2>
          <h2><Typist cursor={{
            hideWhenDone: true,
            hideWhenDoneDelay: 0,
          }}>
            <Typed>create a website</Typed>
            <Typist.Backspace count={16} delay={900} />
            <Typist.Delay ms={500} />
            <Typed>build a full-stack app</Typed>
            <Typist.Backspace count={22} delay={900} />
            <Typist.Delay ms={500} />
            <Typed>share a slide deck</Typed>
            <Typist.Backspace count={18} delay={900} />
            <Typist.Delay ms={500} />
            ship your app
          </Typist></h2>
          <div id='gyro-emoji'>
            <Mouse />
            <Rocket />
          </div>
          <p>Platter gives you one-click templates to <span className='keyword'>create</span>, <span className='keyword'>deploy</span>, and <span class='keyword'>scale</span> new projects and products, right now.</p>
        </div>
      </div>
      <div id='gyro-down'><button onClick={this.handleClickToScroll }>▼</button></div>
    </div>
  }
}
export default Gyro
