import React, { Component } from 'react'

import Mouse from './Mouse'
import Rocket from './Rocket'


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
          <h2>Click once,<br />build anything</h2>
          <div id='gyro-emoji'>
            <Mouse />
            <Rocket />
          </div>
          <p>Platter helps developers and businesses quickly <span className='keyword'>ship</span>, <span className='keyword'>operate</span>, and <span className='keyword'>scale</span> products across clouds and user platforms.</p>
        </div>
      </div>
      <div id='gyro-down'><button onClick={this.handleClickToScroll }>▼</button></div>
    </div>
  }
}
export default Gyro
