import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Hero from './Hero'

import logo from '../img/SVG/logo.svg'
import Logo from './Logo'
import RightArrow from './RightArrow'
import './Home.css'


class Header extends React.Component {
  constructor() {
    super();
    
    this.state = {
      initialLoading: true
    }
  }

  componentWillMount() {
    this.setState({
      initialLoading : false
    })
  }

  render() {
    return (
      <Wrapper>
      <header className={`header--container ${this.state.initialLoading ? null : `no-animation`}`}>
        <nav className="header--nav">
          <span className="header--nav-animate"></span>
          <Logo />
          <ul className="header--items">
            <li className="header--item active"><span className="accent--color">A propos</span></li>
            <li className="header--item"><Link to="/about">Services</Link></li>
            <li className="header--item">Portfolio</li>
          </ul>
        </nav>
      <Hero />
    </header>
    </Wrapper>
  )
  }
}

const Wrapper = styled.div`
/* omitted */
`;


export default Header
