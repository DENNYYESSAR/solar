import React from 'react'

export default function About(){
  return (
    <section className="container section">
      <h2 className="fade-in">About BrightSun Solar</h2>
      <p className="fade-in" style={{animationDelay:'0.1s'}}>Leading the solar revolution since 2010 with innovative solutions and exceptional service.</p>
      
      <div className="fade-in" style={{maxWidth:'800px', margin:'2rem auto', lineHeight:'1.8', fontSize:'1.125rem', color:'var(--text-muted)', animationDelay:'0.2s'}}>
        <p style={{marginBottom:'1.5rem'}}>
          BrightSun Solar was founded with a simple mission: make clean energy accessible to everyone. Over the past 15 years, we've grown from a small startup to one of the region's most trusted solar providers, installing over 2,500 systems and helping customers save millions on their energy bills.
        </p>
        <p style={{marginBottom:'1.5rem'}}>
          Our team of certified engineers and installers brings decades of combined experience. We handle every aspect of your solar journey—from initial consultation and custom design to permitting, installation, and ongoing maintenance. We're not just installers; we're your long-term partners in sustainable energy.
        </p>
        <p>
          We believe in transparency, quality, and customer satisfaction. That's why we offer comprehensive warranties, flexible financing options, and 24/7 monitoring to ensure your system performs at its peak.
        </p>
      </div>

      {/* Image showcase */}
      <div style={{
        display:'grid',
        gridTemplateColumns:'1fr 1fr',
        gap:'2rem',
        marginTop:'3rem',
        marginBottom:'3rem'
      }}>
        <div className="fade-in-left" style={{
          borderRadius:'var(--radius)',
          overflow:'hidden',
          boxShadow:'var(--shadow-lg)',
          height:'300px'
        }}>
          <img 
            src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80"
            alt="Solar installation team"
            style={{width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s ease'}}
            onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.target.style.transform = 'scale(1)'}
          />
        </div>
        <div className="fade-in-right" style={{
          borderRadius:'var(--radius)',
          overflow:'hidden',
          boxShadow:'var(--shadow-lg)',
          height:'300px'
        }}>
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80"
            alt="Quality solar panels"
            style={{width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s ease'}}
            onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.target.style.transform = 'scale(1)'}
          />
        </div>
      </div>

      <div className="grid" style={{marginTop:'3rem'}}>
        <div className="card fade-in stagger-1">
          <h3>🏆 Certified Excellence</h3>
          <p>All our installers are NABCEP-certified and continuously trained on the latest solar technologies and safety standards.</p>
        </div>
        <div className="card fade-in stagger-2">
          <h3>⚡ Premium Equipment</h3>
          <p>We partner with tier-1 manufacturers to provide high-efficiency panels, inverters, and battery storage systems with industry-leading warranties.</p>
        </div>
        <div className="card fade-in stagger-3">
          <h3>🤝 Local Commitment</h3>
          <p>As a locally-owned business, we're invested in our community. We support local jobs and contribute to regional sustainability initiatives.</p>
        </div>
      </div>

      <div className="fade-in" style={{marginTop:'4rem', padding:'2.5rem', background:'linear-gradient(135deg, rgba(8,145,178,0.05) 0%, rgba(6,182,212,0.08) 100%)', borderRadius:'var(--radius)', animationDelay:'0.3s'}}>
        <h3 style={{textAlign:'center', fontSize:'1.75rem', marginBottom:'1rem', color:'var(--accent)'}}>Our Values</h3>
        <div className="grid">
          <div style={{textAlign:'center'}} className="fade-in stagger-1">
            <h4 style={{color:'var(--accent)', marginBottom:'0.5rem'}}>Integrity</h4>
            <p style={{color:'var(--text-muted)'}}>Honest advice, transparent pricing, no hidden fees</p>
          </div>
          <div style={{textAlign:'center'}} className="fade-in stagger-2">
            <h4 style={{color:'var(--accent)', marginBottom:'0.5rem'}}>Innovation</h4>
            <p style={{color:'var(--text-muted)'}}>Latest technology and best practices</p>
          </div>
          <div style={{textAlign:'center'}} className="fade-in stagger-3">
            <h4 style={{color:'var(--accent)', marginBottom:'0.5rem'}}>Sustainability</h4>
            <p style={{color:'var(--text-muted)'}}>Committed to a cleaner, greener future</p>
          </div>
        </div>
      </div>
    </section>
  )
}
