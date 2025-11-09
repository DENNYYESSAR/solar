import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav(){
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  React.useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/">BrightSun</Link>
        
        {/* Hamburger Button */}
        <button 
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? 'active' : ''}></span>
          <span className={menuOpen ? 'active' : ''}></span>
          <span className={menuOpen ? 'active' : ''}></span>
        </button>

        <nav className={`site-nav ${menuOpen ? 'active' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact" className="cta">Get a Quote</Link>
        </nav>
      </div>
    </header>
  )
}
