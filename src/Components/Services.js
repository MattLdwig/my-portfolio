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
            <h3 className="service--title">Développement web</h3>
            <p className="service--desc">
                I'm a developer, so I know how to create your website to run across devices using the latest technologies available.
            </p>
        </div>
        <div className="service--design">
            <h3 className="service--title">Web Design</h3>
            <p className="service--desc">
                I'm a developer, so I know how to create your website to run across devices using the latest technologies available.
            </p>
        </div>
        <div className="service--wordpress">
            <h3 className="service--title">Développement Wordpress</h3>
            <p className="service--desc">
                I'm a developer, so I know how to create your website to run across devices using the latest technologies available.
            </p>
        </div>
        <div className="service--seo">
            <h3 className="service--title">SEO (Search Engine Optimisation)</h3>
            <p className="service--desc">
                I'm a developer, so I know how to create your website to run across devices using the latest technologies available.
            </p>
        </div>
    </section>
  )
  }
}


export default Services
