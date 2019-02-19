import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Header from './Header'

import Logo from './Logo'

import './Home.css'


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isAbout: false
    }
    this.setAbout = this.setAbout.bind(this);
  }

  setAbout() {
    this.setState({ isAbout: true })
  }
  render() {
    return (
    <Wrapper>
     <Header setAbout={this.setAbout}/>
    </Wrapper>
  )
  }
}

const Wrapper = styled.div`
/* omitted */
`;


export default Home
