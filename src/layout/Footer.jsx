import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Footer.css'



function Footer() {

  const year = new Date().getFullYear()

  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {year} Emre Koçak. Tüm hakları saklıdır.</p>
        <div >
          <Link className="footer-links">Hakkımda</Link>
          <Link className="footer-links">Projeler</Link>
          <Link className="footer-links">İletişim</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer