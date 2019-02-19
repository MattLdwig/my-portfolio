import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer>
    <div class="footer--social">
        <a href="#">github</a>
        <a href="#">twitter</a>
    </div>
    <p className="footer--copy">©2019 Matthieu Le Deuf. All rights reserved.</p>
    </footer>
  )
}


export default Footer
