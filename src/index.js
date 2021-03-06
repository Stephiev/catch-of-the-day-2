// let's go!
// Loads everything in the
// react library into the "React" variable
import React from 'react';
import { render } from 'react-dom'
import './css/style.css'
import { BrowserRouter, Match, Miss } from 'react-router'

import StorePicker from './components/StorePicker'

import App from './components/App'
import NotFound from './components/NotFound'

const Root = () => {
  return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={StorePicker}/>
          <Match pattern="/store/:storeId" component={App}/>
          <Miss component={NotFound}/>
        </div>
      </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
