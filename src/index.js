// let's go!
// Loads everything in the
// react library into the "React" variable
import React from 'react';
import { render } from 'react-dom'

class StorePicker extends React.Component {
  render() {
    return <p>Hello from index.js</p>
  }
}
render(<StorePicker/>, document.querySelector('#main'));
