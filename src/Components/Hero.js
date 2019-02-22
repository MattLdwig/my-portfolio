import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Arrow from './SVG/Arrow'
import './Home.css'


class Hero extends React.Component {
  
  render() {
    return (
      <section className="header--main">
        <div className="header--welcome">
          <span className="header--hello">Hello <span className="accent--color dot-animated">.</span></span>
        </div>
        <div className="header--name">
          <span className="header--name-animate"></span><h2 className="header--hello-name">Je suis Matthieu Le Deuf.</h2>
        </div>
        <div className="header--pres">
          <span className="header--pres-animate"></span>
          <p>Un <h1 className="header--seo-title">développeur Front-End freelance</h1> spécialisé dans la création d'interfaces sobres,
          intuitives et fonctionnelles.</p>      
        </div>
        <div className="header--contact">
          <span className="header--pres-animate"></span>
          <p>Un projet en tête ? Une envie de discuter ? <span className="accent--color contact">Contactez moi</span></p>
        </div>
       <div onClick={this.updateStateAbout} className="arrow-container"><Arrow /></div>
      </section>
  )
  }
}

export default Hero
