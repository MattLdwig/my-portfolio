import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import logo from './logo.svg';

import Container from './Components/Container'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Container />
      </Router>
    );
  }
}

export default App;
