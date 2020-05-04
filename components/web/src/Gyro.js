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

const TypedNoteWrapper = styled.div`
  margin: 1rem 0 0 0;
  text-align: center;
`

const SmallNote = styled.span`
  font-family: Inconsolata, monospace;
  font-weight: 900;
`

class Gyro extends Component {

  state = {
    readyForNote: false
  }

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

  handleFinishType = () => {
    this.setState({
      readyForNote: true
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
          }} onTypingDone={this.handleFinishType}>
            <Typed>create a website</Typed>
            <Typist.Backspace count={16} delay={900} />
            <Typist.Delay ms={500} />
            <Typed>build a full-stack app</Typed>
            <Typist.Backspace count={22} delay={900} />
            <Typist.Delay ms={500} />
            <Typed>share a slide deck</Typed>
            <Typist.Backspace count={18} delay={900} />
            <Typist.Delay ms={500} />
            ship anything
          </Typist></h2>
          {this.state.readyForNote ? (
            <TypedNoteWrapper><Typist cursor={{
              hideWhenDone: true,
              hideWhenDoneDelay: 0,
            }} >
              <SmallNote className="parenthetical">(custom templates coming soon!)</SmallNote>
            </Typist></TypedNoteWrapper>
          ) : null
          }
          <div id='gyro-emoji'>
            <Mouse />
            <Rocket />
          </div>
          <p>Platter gives you one-click templates to <span className='keyword'>create</span>, <span className='keyword'>deploy</span>, and <span class='keyword'>scale</span> new projects and products, now.</p>
        </div>
      </div>
      <div id='gyro-down'><button onClick={this.handleClickToScroll }>▼</button></div>
    </div>
  }
}
export default Gyro
