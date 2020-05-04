import React, { Component } from 'react'


class H1 extends Component {
  render() {
    return <h1 className={'gold'}>
      <a href="/"><span className="pad">p</span>la<span className="tighten">tt</span>er</a>
    </h1>
  }
}

class Header extends Component {
  constructor(props) {
    super(props)
    this.formRef = React.createRef()
  }

  state = {
    emailInputHighlighted: false,
    nameInputHighlighted: false,
  }

  handleFocus = (e, name) => {
    this.setState({
      [`${name}InputHighlighted`]: true,
    })
    setTimeout(() => { this.setState({ [`${name}InputHighlighted`]: false }) }, 350)
  }

  handleKeyPress = (e) => {
    // This works on desktop without handler, but not on iOS keyboard "GO" button.
    if (e.key === 'Enter') {
      this.formRef.current && this.formRef.current.submit()
    }
  }

  render() {
    const { signupShown } = this.props
    return (
      <header className={this.props.scrolled ? 'scrolled' : 'not-scrolled'} id='main-header'>
        <div className='inner'>
          <H1 scrolled={this.props.scrolled} />


          { signupShown
            ? <>
              <div id='signup-wrapper'>
                <form ref={this.formRef} action='https://dev.us20.list-manage.com/subscribe/post?u=76ee70d8edf8399adbcd4f2a0&amp;id=17c6bf5388' method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' className='validate' target='_blank' noValidate>
                  <div id='signup-form-wrapper'>
                    <h2>Get early access and pre-launch news:</h2>
                    <div className='input-wrapper'>
                      <input onFocus={(e) => this.handleFocus(e, 'email')} onKeyPress={this.handleKeyPress} type='email' name='EMAIL' placeholder='email' className={`required email ${this.state.emailInputHighlighted ? 'highlighted' : ''}`} id='mce-EMAIL' autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"></input>
                      <input onFocus={(e) => this.handleFocus(e, 'name')} onKeyPress={this.handleKeyPress} type='text' name='FNAME' placeholder='first name (optional)' className={`fname ${this.state.nameInputHighlighted ? 'highlighted' : ''}`} id='mce-FNAME' autoComplete="off" autoCorrect="off" autoCapitalize="on" spellCheck="false"></input>
                    </div>
                    <button id='mc-embedded-subscribe' type='submit'>Subscribe</button>

                    <button type='button' className='cancel-signup' onClick={this.props.handleSignupToggle}>✕</button>
                    <div id='mce-responses' className='clear'>
                      <div className='response' id='mce-error-response' style={{display: 'none'}}></div>
                      <div className='response' id='mce-success-response' style={{display: 'none'}}></div>
                    </div>
                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true'><input type='text' name='b_76ee70d8edf8399adbcd4f2a0_17c6bf5388' tabIndex='-1' value='' readOnly /></div>
                  </div>
                </form>
              </div>
              </>
            : <a className="sign-in"href='https://app.platter.dev'>Go to app →</a>
          }

        </div>
      </header>
    )
  }
}

export default Header
