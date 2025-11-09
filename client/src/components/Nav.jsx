import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/">BrightSun</Link>
        <nav className="site-nav">
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
