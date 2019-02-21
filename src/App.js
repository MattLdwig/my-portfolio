import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import posed, { PoseGroup } from 'react-pose';


import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'

import SelectedWork from './Components/SelectedWork'

import './App.css';
  
  class App extends React.Component {
    render () {
      return (
        <div className="app">
          <Home />
          <Services />
          <SelectedWork />
          <About />
        </div>
      )
    }
  };

export default App;
