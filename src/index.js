// let's go!
// Loads everything in the
// react library into the "React" variable
import React from 'react';
import { render } from 'react-dom'

import StorePicker from './components/StorePicker'

render(<StorePicker/>, document.querySelector('#main'));
