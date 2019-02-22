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
                I'm a developer, so I know how to create your website to run across devices using the latest technologies available.
                I'm a developer, so I know how to create your website to run across devices using the latest technologies available.
            </p>
            </div>
        </div>
        <div className="service--design">
            <div className="service--image design"><Responsive /></div>
            <div className="service--desc-container">
            <h3 className="service--title">Web Design</h3>
            <p className="service--desc">
                I'm a developer, so I know how to create your website to run across devices using the latest technologies available.
                I'm a developer, so I know how to create your website to run across devices using the latest technologies available.
            </p>
            </div>
        </div>
        <div className="service--wordpress">
            <div className="service--image wordpress"><Wordpress /></div>
            <div className="service--desc-container">
            <h3 className="service--title">Développement Wordpress</h3>
            <p className="service--desc">
                I'm a developer, so I know how to create your website to run across devices using the latest technologies available.
                I'm a developer, so I know how to create your website to run across devices using the latest technologies available.
            </p>
            </div>
        </div>
        <div className="service--seo">
            <div className="service--image seo"><SEO /></div>
            <div className="service--desc-container">
            <h3 className="service--title">SEO (Search Engine Optimisation)</h3>
            <p className="service--desc">
                I'm a developer, so I know how to create your website to run across devices using the latest technologies available.
                I'm a developer, so I know how to create your website to run across devices using the latest technologies available.
            </p>
            </div>
        </div>
    </section>
  )
  }
}


export default Services
