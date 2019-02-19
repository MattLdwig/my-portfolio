import React from 'react'
import styled from "styled-components";
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Home from './Home'
import About from './About'


function Container() {

  return (
    <Wrapper>
        <TransitionGroup>
        <CSSTransition
         key={window.location.key}
         timeout={{ enter: 3000, exit: 3000 }}
         className={'fade'}
         >
            <Switch location={window.location}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </CSSTransition>
        </TransitionGroup>  
    </Wrapper>
  )
}

const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.face-enter-active {
        opacity: 1;
        transition: opacity 3000ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
    .fade-exit.face-exit-active {
        opacity: 0.01;
        transition: opacity 3000ms ease-in;
    }
`;


export default withRouter(Container);
