import React from 'react'

import './Selected.css';

const selected = [
    {
        project: 'Amande et Basilic',
        img: '',
        pitch: 'La nouvelle maison des amoureux de la nature'
    },
    {
        project: 'Amande et Basilic',
        img: '',
        pitch: 'La nouvelle maison des amoureux de la nature'
    },
    {
        project: 'Amande et Basilic',
        img: '',
        pitch: 'La nouvelle maison des amoureux de la nature'
    }
]


function SelectedWork() {
  return (
    <section className="selected--container">
        <div className="selected--page">
            <div className="selected--img"></div>
            <h2 className="selected--title">Amande et Basilic</h2>
            <p className="selected--sub">Wordpress Theme / React / Web Design</p>
            <p className="selected--case">
            I worked on the communication site for Realtii, a reimagining of how people search for real estate. 
            The site called for lots of illustrations to convey its purpose, with a big focus on creating a welcoming feel.
            </p>
            <button className="selected--btn">Voir le site</button>
        </div>
        <div className="selected--page">
            <div className="selected--img"></div>
            <h2 className="selected--title">Amande et Basilic</h2>
            <p className="selected--sub">Wordpress Theme / React / Web Design</p>
            <p className="selected--case">
            I worked on the communication site for Realtii, a reimagining of how people search for real estate. 
            The site called for lots of illustrations to convey its purpose, with a big focus on creating a welcoming feel.
            </p>
            <button className="selected--btn">Voir le site</button>
        </div>
        <div className="selected--page">
            <div className="selected--img"></div>
            <h2 className="selected--title">Amande et Basilic</h2>
            <p className="selected--sub">Wordpress Theme / React / Web Design</p>
            <p className="selected--case">
            I worked on the communication site for Realtii, a reimagining of how people search for real estate. 
            The site called for lots of illustrations to convey its purpose, with a big focus on creating a welcoming feel.
            </p>
            <button className="selected--btn">Voir le site</button>
        </div>
    </section>
  )
}



export default SelectedWork
