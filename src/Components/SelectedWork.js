import React from 'react'

import './Selected.css';

function SelectedWork() {
  return (
    <section className="selected--case-studies">
    <div className="selected-container intro">
    <h2 className="selected--title">Derniers projets</h2>
    <p className="selected--case">Voici une sélection de quelques uns de mes travaux récents.</p>
    </div>
      <div className="selected--container  case-one">
          <div className="selected--page">
              <div className="selected--img"></div>
              <h2 className="selected--title">Amande et Basilic</h2>
              <p className="selected--sub">Wordpress Theme / React / Web design / SEO</p>
              <p className="selected--case">
                J'ai travaillé sur la conception du thème Wordpress d'amandebasilic.com. Des wireframes jusqu'à la mise en ligne,
                j'ai pris en charge l'UI design du site, la réalisation du thème élaboré avec React et utilisant l'API Wordpress, 
                ainsi que l'optimisation de son SEO.
              </p>
              <button className="selected--btn">Voir le site</button>
          </div>
      </div>
      <div className="selected--container case-two">
          <div className="selected--page">
              <div className="selected--img"></div>
              <h2 className="selected--title">React Drum Machine</h2>
              <p className="selected--sub">Développement Front-end / React </p>
              <p className="selected--case">
                Dans le cadre de ma certification Front-end, j'ai réalisé une drum machine
              </p>
              <button className="selected--btn">Voir le site</button>
          </div>
      </div>
      <div className="selected--container  case-three">
          <div className="selected--page">
              <div className="selected--img"></div>
              <h2 className="selected--title">Minimalist Pomodoro</h2>
              <p className="selected--sub">Développement Front-end / React</p>
              <p className="selected--case">
                J'ai travaillé sur la réalisation de minipomo.co.
              </p>
              <button className="selected--btn">Voir le site</button>
          </div>
      </div>
    </section>
  )
}



export default SelectedWork
