import React from 'react'
import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom'
import Logo from './Logo'

import './About.css'

function About() {
  return (
      <section className="page about">
      <div className="align-center">
      <h1 className="about--title">About me.</h1>
        <p className="about--welcome">
          Je suis Matthieu Le Deuf, un <span className="accent--color">développeur web Freelance</span> de 31 ans.</p>
        <p className="about--welcome">
          Spécialisé dans le devéloppement Front-end, j'ai également une passion dévorante pour le design
          et tout ce qui s'y rapporte. J'aime résoudre des problèmes avec élégance, créer des interfaces
          sobres et respectueuse de l'utilisateur et développer des expériences riches et interractives.</p>
      </div>
      <div className="about--call">
        <h2>&#x1F917;</h2>
        <h3>Je suis actuellement disponible pour du travail freelance.</h3>
        <p>
          Si vous avez un projet que vous aimeriez démarrer, que vous pensez que 
          je pourrais vous aider à sa réalisation, ou que vous avez simplement envie 
          de me dire bonjour, contacter moi.
        </p>
        <button>Contacter moi</button>
      </div>  
      </section>
  )
}

export default About
