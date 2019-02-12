import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import logo from './logo.svg';

import Home from './Components/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Home />
      </Router>
    );
  }
}

export default App;
