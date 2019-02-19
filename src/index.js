import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import posed, { PoseGroup } from 'react-pose';


import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import SelectedWork from './Components/SelectedWork'

import './App.css';

const RouteContainer = posed.div({
    enter: { opacity: 1, delay: 300, beforeChildren: true },
    exit: { opacity: 0 }
  });
  
  class App extends React.Component {
    render () {
      return (
        <div>
          <Home />
          <Services />
          <SelectedWork />
          <About />
        </div>
      )
    }
  };


ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
