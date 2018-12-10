import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UseState from './main/hookComponent';
import UseEffect from './main/useEffect';
import Muso from './main/usestate';
let visible = true;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className='content'>
          {visible && <UseState visible={visible}/>}
          <UseEffect />
        </div>
      </div>
    );
  }
}

export default App;
