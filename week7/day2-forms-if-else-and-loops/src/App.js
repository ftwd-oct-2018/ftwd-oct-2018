import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heroes  from './Lists';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Working with lists & keys</p>
        <Heroes />
      </div>
    );
  }
}

export default App;
