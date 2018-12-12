import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import UseState from "./useState";
import UseEffect from "./useEffect";
import CustomizeHook from "./customizeHooks";
import UseReducer from "./useReducer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="content">
          <ul>
            <li>
              <Link to="/useState">useState</Link>
            </li>
            <li>
              <Link to="/useEffect">useEffect</Link>
            </li>
            <li>
              <Link to="/useReducer">useReducer</Link>
            </li>
            <li>
              <Link to="/customizeHook">customizeHook</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={UseState} />
            <Route path="/useState" component={UseState} />
            <Route path="/useEffect" component={UseEffect} />
            <Route path="/useReducer" component={UseReducer} />
            <Route path="/customizeHook" component={CustomizeHook} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
