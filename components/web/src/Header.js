import React from 'react'

const H1 = () => <h1 className={'gold'}>
  <a href="/"><span className="pad">p</span>la<span className="tighten">tt</span>er</a>
</h1>

const Header = ({scrolled}) =>
  <header className={scrolled ? 'scrolled' : 'not-scrolled'} id='main-header'>
    <div className='inner'>
      <H1 scrolled={scrolled} />
      <a className="sign-in"href='https://app.platter.dev'>Go to app →</a>
    </div>
  </header>

export default Header
