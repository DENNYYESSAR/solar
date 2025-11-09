import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  const year = new Date().getFullYear()
  
  return (
    <footer className="site-footer">
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'2rem', textAlign:'left', marginBottom:'2rem'}}>
          <div>
            <h4 style={{marginBottom:'1rem', fontSize:'1.125rem'}}>BrightSun Solar</h4>
            <p style={{opacity:0.9, lineHeight:'1.7', fontSize:'0.95rem'}}>
              Leading solar provider in the Pacific Northwest. Clean energy solutions for homes and businesses since 2010.
            </p>
          </div>
          <div>
            <h4 style={{marginBottom:'1rem', fontSize:'1.125rem'}}>Quick Links</h4>
            <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
              <Link to="/about" style={{color:'rgba(255,255,255,0.9)', textDecoration:'none', transition:'var(--transition)'}}>About Us</Link>
              <Link to="/services" style={{color:'rgba(255,255,255,0.9)', textDecoration:'none', transition:'var(--transition)'}}>Services</Link>
              <Link to="/projects" style={{color:'rgba(255,255,255,0.9)', textDecoration:'none', transition:'var(--transition)'}}>Projects</Link>
              <Link to="/contact" style={{color:'rgba(255,255,255,0.9)', textDecoration:'none', transition:'var(--transition)'}}>Contact</Link>
            </div>
          </div>
          <div>
            <h4 style={{marginBottom:'1rem', fontSize:'1.125rem'}}>Services</h4>
            <div style={{display:'flex', flexDirection:'column', gap:'0.5rem', fontSize:'0.95rem'}}>
              <span style={{opacity:0.9}}>Residential Solar</span>
              <span style={{opacity:0.9}}>Commercial Solar</span>
              <span style={{opacity:0.9}}>Battery Storage</span>
              <span style={{opacity:0.9}}>EV Charging</span>
            </div>
          </div>
          <div>
            <h4 style={{marginBottom:'1rem', fontSize:'1.125rem'}}>Contact</h4>
            <div style={{fontSize:'0.95rem', opacity:0.9, lineHeight:'1.7'}}>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@brightsun.example</p>
              <p>📍 Portland, OR 97204</p>
            </div>
          </div>
        </div>
        
        <div style={{borderTop:'1px solid rgba(255,255,255,0.2)', paddingTop:'1.5rem', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'1rem'}}>
          <p style={{margin:0}}>© {year} BrightSun Solar. All rights reserved.</p>
          <p className="small" style={{margin:0}}>Licensed & Insured • Financing Available • NABCEP Certified</p>
        </div>
      </div>
    </footer>
  )
}
