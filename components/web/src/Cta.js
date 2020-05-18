import React from 'react'

const Cta = () => <div id='cta'>
  <p>Ready to try Platter?</p>
  <button onClick={
    () => {
      window.location.href = 'https://app.platter.dev'
    }
  }>
  Start&nbsp;for&nbsp;free</button>
</div>

export default Cta