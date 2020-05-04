import React from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* Classic browser detection hack. If we got this far, we are almost
surely in IE 10, which can render React as transpiled here, but in
which Flexbox is so time-consuming to get right that we forego it. We
could also be in Safari 5.1 on Windows XP. Let us hope we are not.*/
const isOldIE = eval("/*@cc_on!@*/false"); // eslint-disable-line
const Oldies = () => <h1 style={{color: 'white', textAlign: 'center'}}>
  Platter relies on code that only works and is tested in Internet Explorer 11+, IE Edge, or recent Firefox/Chrome/Safari/mobile browsers.<br />
  Please visit again using one of them if you can. Cheers!
</h1>;

const root = document.getElementById('root')
if (isOldIE) {
  ReactDOM.render(<Oldies />, root)
} else {
  // Set up polyfill for smooth scrolling in Safari
  smoothscroll.polyfill()
  ReactDOM.render(<App />, root)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
