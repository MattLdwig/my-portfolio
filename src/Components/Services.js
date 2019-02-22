import React from 'react'

import Responsive from './SVG/Responsive'
import Development from './SVG/Development'
import Wordpress from './SVG/Wordpress'
import SEO from './SVG/SEO'

import './Services.css'

class Services extends React.Component {
  render() {
    return (
    <section className="services--container">
        <h2 className="services--title">SERVICES</h2>
        <div className="service--frontend">
            <div className="service--image dev"><Development /></div>
            <div className="service--desc-container">
            <h3 className="service--title">Développement web</h3>
            <p className="service--desc">
               En tant que développeur, je sais comment créer des sites qui fonctionne sur un vaste pannel de devices en utilisant les 
               dernières technologies disponibles. Que vous ayez besoin d'un simple site vitrine, d'une boutique e-commerce ou d'une application
               web complexe, mes compétences me permettent de vous apporter la réponse dont vous avez besoin.
            </p>
            </div>
        </div>
        <div className="service--design">
            <div className="service--image design"><Responsive /></div>
            <div className="service--desc-container">
            <h3 className="service--title">Web Design</h3>
            <p className="service--desc">
               J'aime garder les choses simples. Mon objectif est de me concentrer sur la typographie, l'harmonie des couleurs et la mise
               en valeur du contenu pour mettre en avant les forces de votre entreprise tout en assurant la meilleure expérience possible à vos utilisateurs.
            </p>
            </div>
        </div>
        <div className="service--wordpress">
            <div className="service--image wordpress"><Wordpress /></div>
            <div className="service--desc-container">
            <h3 className="service--title">Développement WordPress</h3>
            <p className="service--desc">
                WordPress est un CMS disposant d'une interface de gestion simple à utiliser. Création de thèmes sur-mesure ou simple personnalisation,
                installation et maintenance, je vous fournirai les services nécessaire afin que vous disposiez rapidement d'un site adapté à
                vos besoins.
            </p>
            </div>
        </div>
        <div className="service--seo">
            <div className="service--image seo"><SEO /></div>
            <div className="service--desc-container">
            <h3 className="service--title">SEO (Search Engine Optimisation)</h3>
            <p className="service--desc">
                La mise en ligne d'un site ne suffit pas à lui assurer une pleine visibilité. Pour maximiser le nombre de visiteurs qu'il reçoit,
                il est essentiel de se concentrer sur l'optimisation de chacun de ses aspects. Le placement et la densité des mots-clé, l'optimisation 
                des meta-descriptions ou la réduction du poid des images sont quelques un des facteurs déterminant qui déterminent votre niveau de visibilité. 
            </p>
            </div>
        </div>
    </section>
  )
  }
}


export default Services
