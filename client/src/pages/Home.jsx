import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  const [visibleElements, setVisibleElements] = useState(new Set())
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const heroImages = [
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80',
    'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&q=80',
    'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1920&q=80',
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80',
    'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1920&q=80'
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.dataset.animate]))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Auto-change hero background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change every 5 seconds
    
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <>
      <section className="hero" style={{position:'relative', overflow:'hidden', minHeight:'600px'}}>
        {/* Background image carousel */}
        {heroImages.map((img, idx) => (
          <div 
            key={idx}
            style={{
              position:'absolute',
              top:0,
              left:0,
              right:0,
              bottom:0,
              backgroundImage:`url(${img})`,
              backgroundSize:'cover',
              backgroundPosition:'center',
              opacity: idx === currentImageIndex ? 1 : 0,
              transition:'opacity 2s ease-in-out',
              zIndex:0
            }}
          ></div>
        ))}
        {/* Light overlay for text readability */}
        <div style={{
          position:'absolute',
          top:0,
          left:0,
          right:0,
          bottom:0,
          background:'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.4) 100%)',
          zIndex:1
        }}></div>
        <div className="container" style={{position:'relative', zIndex:2, paddingTop:'2rem', paddingBottom:'2rem'}}>
          <h1 style={{animation:'fadeInUp 0.8s ease', textShadow:'2px 2px 8px rgba(0,0,0,0.8)', color:'white', fontWeight:'900'}}>Power Your Future with Clean Solar Energy</h1>
          <p style={{animation:'fadeInUp 1s ease', textShadow:'1px 1px 4px rgba(0,0,0,0.8)', fontSize:'1.25rem', color:'white', fontWeight:'500'}}>Join thousands of homeowners and businesses saving money while protecting the planet. Our expert team designs, installs, and maintains premium solar systems tailored to your needs.</p>
          <p className="hero-ctas" style={{animation:'fadeInUp 1.2s ease'}}>
            <Link className="btn primary" to="/contact">Get a free quote</Link>
            <Link className="btn" to="/projects">See our work</Link>
          </p>
          {/* Image indicator dots */}
          <div style={{display:'flex', gap:'0.5rem', justifyContent:'center', marginTop:'2rem'}}>
            {heroImages.map((_, idx) => (
              <div 
                key={idx}
                style={{
                  width: idx === currentImageIndex ? '30px' : '10px',
                  height:'10px',
                  borderRadius:'5px',
                  background: idx === currentImageIndex ? 'white' : 'rgba(255,255,255,0.5)',
                  transition:'all 0.3s ease',
                  cursor:'pointer',
                  boxShadow:'0 2px 4px rgba(0,0,0,0.3)'
                }}
                onClick={() => setCurrentImageIndex(idx)}
              ></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats" data-animate="stats">
            <div className="grid">
              <div className="stat-item fade-in stagger-1">
                <h3>2,500+</h3>
                <p>Systems Installed</p>
              </div>
              <div className="stat-item fade-in stagger-2">
                <h3>$12M</h3>
                <p>Saved by Customers</p>
              </div>
              <div className="stat-item fade-in stagger-3">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item fade-in stagger-4">
                <h3>98%</h3>
                <p>Customer Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Visual Showcase Section */}
          <div style={{marginTop:'5rem'}} data-animate="showcase">
            <h2 className="fade-in">Transform Your Energy Future</h2>
            <div style={{
              display:'grid',
              gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',
              gap:'2rem',
              marginTop:'3rem'
            }}>
              <div className="fade-in-left" style={{
                borderRadius:'var(--radius)',
                overflow:'hidden',
                boxShadow:'var(--shadow-lg)',
                height:'450px',
                position:'relative'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80"
                  alt="Residential solar panels"
                  style={{width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s ease'}}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position:'absolute',
                  bottom:0,
                  left:0,
                  right:0,
                  padding:'1.5rem',
                  background:'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color:'white'
                }}>
                  <h3 style={{margin:0, fontSize:'1.5rem'}}>Residential Solutions</h3>
                  <p style={{margin:'0.5rem 0 0', opacity:0.9}}>Beautiful, efficient rooftop installations</p>
                </div>
              </div>

              <div className="fade-in" style={{
                borderRadius:'var(--radius)',
                overflow:'hidden',
                boxShadow:'var(--shadow-lg)',
                height:'450px',
                position:'relative',
                animationDelay:'0.2s'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80"
                  alt="Commercial solar installation"
                  style={{width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s ease'}}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position:'absolute',
                  bottom:0,
                  left:0,
                  right:0,
                  padding:'1.5rem',
                  background:'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color:'white'
                }}>
                  <h3 style={{margin:0, fontSize:'1.5rem'}}>Commercial Projects</h3>
                  <p style={{margin:'0.5rem 0 0', opacity:0.9}}>Large-scale energy solutions</p>
                </div>
              </div>

              <div className="fade-in-right" style={{
                borderRadius:'var(--radius)',
                overflow:'hidden',
                boxShadow:'var(--shadow-lg)',
                height:'450px',
                position:'relative',
                animationDelay:'0.4s'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80"
                  alt="Solar farm"
                  style={{width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s ease'}}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position:'absolute',
                  bottom:0,
                  left:0,
                  right:0,
                  padding:'1.5rem',
                  background:'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color:'white'
                }}>
                  <h3 style={{margin:0, fontSize:'1.5rem'}}>Ground Mount Systems</h3>
                  <p style={{margin:'0.5rem 0 0', opacity:0.9}}>Maximum power generation</p>
                </div>
              </div>
            </div>
          </div>

          <h2 style={{marginTop:'5rem'}} className="fade-in">Why Choose BrightSun Solar?</h2>
          <div className="grid" style={{marginTop:'2rem'}} data-animate="benefits">
            <div className="card fade-in stagger-1">
              <h3>💰 Save Money</h3>
              <p>Reduce your energy bills by up to 90%. Our systems pay for themselves in 5-7 years with significant long-term savings.</p>
            </div>
            <div className="card fade-in stagger-2">
              <h3>🌍 Go Green</h3>
              <p>Cut your carbon footprint and contribute to a sustainable future. Each system prevents tons of CO₂ emissions annually.</p>
            </div>
            <div className="card fade-in stagger-3">
              <h3>🔧 Full Service</h3>
              <p>From consultation to installation and maintenance, we handle everything. Hassle-free permits, financing, and support.</p>
            </div>
          </div>

          {/* Technology Showcase */}
          <div style={{
            marginTop:'5rem',
            padding:'3rem',
            background:'linear-gradient(135deg, rgba(8,145,178,0.05) 0%, rgba(6,182,212,0.08) 100%)',
            borderRadius:'var(--radius)',
            display:'grid',
            gridTemplateColumns:'1fr 1fr',
            gap:'3rem',
            alignItems:'center'
          }} data-animate="tech">
            <div className="fade-in-left">
              <h3 style={{fontSize:'2rem', marginBottom:'1rem', color:'var(--accent)'}}>Cutting-Edge Technology</h3>
              <p style={{color:'var(--text-muted)', lineHeight:'1.8', marginBottom:'1.5rem'}}>
                We use only tier-1 solar panels with industry-leading efficiency ratings. Our smart inverters and monitoring systems ensure you get maximum performance from every ray of sunshine.
              </p>
              <ul style={{listStyle:'none', padding:0, margin:0}}>
                <li style={{padding:'0.75rem 0', borderBottom:'1px solid rgba(8,145,178,0.1)', color:'var(--text-muted)'}}>
                  ✓ 25-year manufacturer warranties
                </li>
                <li style={{padding:'0.75rem 0', borderBottom:'1px solid rgba(8,145,178,0.1)', color:'var(--text-muted)'}}>
                  ✓ 22%+ panel efficiency ratings
                </li>
                <li style={{padding:'0.75rem 0', borderBottom:'1px solid rgba(8,145,178,0.1)', color:'var(--text-muted)'}}>
                  ✓ Real-time production monitoring
                </li>
                <li style={{padding:'0.75rem 0', color:'var(--text-muted)'}}>
                  ✓ Smart home integration
                </li>
              </ul>
            </div>
            <div className="fade-in-right" style={{borderRadius:'var(--radius)', overflow:'hidden', boxShadow:'var(--shadow-md)', height:'450px'}}>
              <img 
                src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&q=80"
                alt="Solar technology"
                style={{width:'100%', height:'100%', objectFit:'cover'}}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
