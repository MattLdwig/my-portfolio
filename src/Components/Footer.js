import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer--social">
          <a href="#" className="footer--item">github</a>
          <a href="#" className="footer--item">twitter</a>
      </div>
      <p className="footer--copy">©2019 Matthieu Le Deuf. All rights reserved.</p>
    </footer>
  )
}


export default Footer
