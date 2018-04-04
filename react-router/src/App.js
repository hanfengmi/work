import React, { Component } from 'react';
import logo from './img/logo.svg';
import './css/App.css';
import BottomComponent from './component/BottomComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <BottomComponent />
        
      </div>
    );
  }
}

export default App;
