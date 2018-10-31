import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main/Main';
import Nav from './components/nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
