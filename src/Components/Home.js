import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import logo from '../img/SVG/logo.svg'
import Logo from './Logo'
import RightArrow from './RightArrow'
import './Home.css'


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isRevealed : false
    }
  }

  render() {
    return (
      <Wrapper>
      <header className="header--container">
        <nav className="header--nav">
          <span className="header--nav-animate"></span>
          <Logo />
          <ul className="header--items">
            <li className="header--item active"><span className="accent--color">A propos</span></li>
            <li className="header--item">Services</li>
            <li className="header--item">Portfolio</li>
          </ul>
        </nav>
      <section className="header--main">
        <div className="header--welcome">
          <span className="header--hello-animate"></span><h1 className="header--hello">Hello <span className="accent--color dot-animated">.</span></h1>
        </div>
        <div className="header--name">
          <span className="header--name-animate"></span><h2 className="header--hello-name">Je suis Matthieu Le Deuf.</h2>
        </div>
        <div className="header--pres">
          <span className="header--pres-animate"></span>
          <p>Un développeur Front-End freelance spécialisé dans la création d'interfaces sobres,
          intuitives et fonctionnelles.</p>      
        </div>
        <div className="header--contact">
          <span className="header--pres-animate"></span>
          <p>Un projet en tête ? Une envie de discuter ? <span className="accent--color contact">Contactez moi</span></p>
        </div>
        <Link to="/about" className="arrow-animated"><RightArrow /></Link>
      </section>
      <nav className={`pagenav revealer ${this.state.isRevealed ? 'active' : 'hidden'}`}>
          <div className="reavealer-layer"></div>
          <div className="reavealer-layer"></div>
          <div className="reavealer-layer"></div>
      </nav>
    </header>
    </Wrapper>
  )
  }
}

const Wrapper = styled.div`
/* omitted */
`;


export default Home
