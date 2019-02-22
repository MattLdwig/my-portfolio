import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Hero from './Hero'

import Logo from './SVG/Logo'
import Arrow from './SVG/Arrow'
import './Home.css'


class Header extends React.Component {
  render() {
    return (
      <header className="header--container">
        <nav className="header--nav">
          <Logo />
          <ul className="header--items">
            <li className="header--item">Services</li>
            <li className="header--item">Portfolio</li>
            <li className="header--item active"><span className="accent--color">About</span></li>
          </ul>
        </nav>
      <Hero />
    </header>
  )
  }
}

export default Header
