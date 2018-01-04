import React from 'react';
// if it's just in strings, es6
// will look in the node_modules folder

class StorePicker extends React.Component {
  render() {
    return (
      <form action="" className="store-selector">
      <h2>Please Enter A Store</h2>
      <input type="text" required placeholder="Store Name"/>
      <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker
