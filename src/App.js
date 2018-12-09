import React, { Component } from 'react';
import { Router, Route } from 'react-router'
import logo from './logo.svg';
import './App.css';
import UseState from './main/hookComponent';
import UseEffect from './main/useEffect';
import Muso from './main/usestate';
import Sider from './main/sider';
let visible = true;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className='content'>
          {/* <Sider /> */}
          <Router>
            <Route path="/" exact component={UseState}>
              <Route path="/useState" component={UseState} />
              <Route path="/useEffect" component={UseEffect} />
              <Route path="/customizeHooks" component={UseEffect} />
            </Route>
          </Router>
          {/* {visible && <UseState visible={visible}/>}
          <UseEffect /> */}
        </div>
      </div>
    );
  }
}

export default App;
