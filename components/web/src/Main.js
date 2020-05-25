import React from 'react'

import Cta from './Cta'
import DemoVideo from './DemoVideo'
import Gyro from './Gyro'
import Instructions from './Instructions'

const Main = () => <div id='main'>
  <Gyro/>
  <div id='how-it-works'>
    <h2>how it works</h2>
    <Instructions/>
    <DemoVideo/>
    <Cta />
  </div>
</div>

export default Main