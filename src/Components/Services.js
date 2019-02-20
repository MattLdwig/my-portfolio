import React from 'react'

import './Services.css'

class Services extends React.Component {
  constructor() {
    super();
    this.state = {
      isAbout: false
    }
    this.setAbout = this.setAbout.bind(this);
  }

  setAbout() {
    this.setState({ isAbout: true })
  }
  render() {
    return (
    <section className="services--container">
        <h2 className="services--title">SERVICES</h2>
        <div className="service--frontend">
            <div className="service--image dev"></div>
            <div className="service--desc-container">
            <h3 className="service--title">Développement web</h3>
            <p className="service--desc">
                I'm a developer, so I know how to create your website to run across devices using the latest technologies available.
            </p>
            </div>
        </div>
        <div className="service--design">
            <div className="service--image design"></div>
            <div className="service--desc-container">
            <h3 className="service--title">Web Design</h3>
            <p className="service--desc">
                I'm a developer, so I know how to create your website to run across devices using the latest technologies available.
            </p>
            </div>
        </div>
        <div className="service--wordpress">
            <div className="service--image wordpress"></div>
            <div className="service--desc-container">
            <h3 className="service--title">Développement Wordpress</h3>
            <p className="service--desc">
                I'm a developer, so I know how to create your website to run across devices using the latest technologies available.
            </p>
            </div>
        </div>
        <div className="service--seo">
            <div className="service--image seo"></div>
            <div className="service--desc-container">
            <h3 className="service--title">SEO (Search Engine Optimisation)</h3>
            <p className="service--desc">
                I'm a developer, so I know how to create your website to run across devices using the latest technologies available.
            </p>
            </div>
        </div>
    </section>
  )
  }
}


export default Services
