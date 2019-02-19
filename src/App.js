import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import posed, { PoseGroup } from 'react-pose';


import Home from './Components/Home'
import About from './Components/About'
import SelectedWork from './Components/SelectedWork'

import logo from './logo.svg';

import Container from './Components/Container'
import './App.css';
import { dilate } from 'popmotion/lib/calc';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

const App = () => (
  render() {
    return (
    <Wrapper>
     <Header setAbout={this.setAbout}/>
     <About />
    </Wrapper>
  )
  }
);

export default App;
