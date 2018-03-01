import React, { Component } from 'react';
import { injectGlobal } from 'styled-components'
import HomePage from './components/HomePage'

injectGlobal`
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  text-align: center;
}`

class App extends Component {
  render() {
    return (
      <div>
        <HomePage/>
      </div>
    );
  }
}

export default App;
