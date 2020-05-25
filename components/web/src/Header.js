import React, { Component } from 'react'

class H1 extends Component {
  render() {
    return <h1 className={'gold'}>
      <a href="/"><span className="pad">p</span>la<span className="tighten">tt</span>er</a>
    </h1>
  }
}

class Header extends Component {
  render() {
    return (
      <header className={this.props.scrolled ? 'scrolled' : 'not-scrolled'} id='main-header'>
        <div className='inner'>
          <H1 scrolled={this.props.scrolled} />
          <a className="sign-in"href='https://app.platter.dev'>Go to app →</a>
        </div>
      </header>
    )
  }
}

export default Header
