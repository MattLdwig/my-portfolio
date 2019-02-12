import React from 'react'
import styled from "styled-components";
import { Switch, Route } from 'react-router-dom';

import Home from './Home'
import About from './About'


function Container() {
  return (
    <Wrapper>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
      </Switch>
    </Wrapper>
  )
}

const Wrapper = styled.div`
/* omitted */
`;


export default Container
