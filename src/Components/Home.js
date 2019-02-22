import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Header from './Header'

import './Home.css'


class Home extends React.Component {
  render() {
    return (
     <Header />
  )
  }
}



export default Home
