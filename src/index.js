// let's go!
// Loads everything in the
// react library into the "React" variable
import React from 'react';
import { render } from 'react-dom'
import './css/style.css'

import App from './components/App'

render(<App/>, document.querySelector('#main'));
