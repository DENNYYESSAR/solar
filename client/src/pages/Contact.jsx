import React, { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    const data = new FormData(e.target)
    const body = Object.fromEntries(data.entries())
    setStatus('pending');
    try {
      const res = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if(res.ok){
        setStatus('sent');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch(err){
      setStatus('error');
    }
  };

  return (
    <section className="section" style={{paddingTop:'3rem', paddingBottom:'4rem'}}>
      <div className="container">
        <div style={{textAlign:'center', marginBottom:'3rem'}}>
          <h2 className="fade-in">Get Your Free Solar Quote</h2>
          <p className="fade-in" style={{fontSize:'1.125rem', color:'var(--text-muted)', maxWidth:'600px', margin:'1rem auto', animationDelay:'0.1s'}}>
            Ready to start saving? Fill out the form below and our solar experts will contact you within 24 hours with a custom quote.
          </p>
        </div>

        <div className="contact fade-in" style={{animationDelay:'0.2s'}}>
          <form onSubmit={handleSubmit} className="contact-form">{/* rest of form stays the same */}
            <label>
              Full Name *
              <input name="name" required placeholder="John Smith" />
            </label>
            <label>
              Email Address *
              <input name="email" type="email" required placeholder="john@example.com" />
            </label>
            <label>
              Phone Number
              <input name="phone" type="tel" placeholder="(555) 123-4567" />
            </label>
            <label>
              Property Type
              <select name="propertyType" style={{padding:'0.875rem', border:'2px solid #e2e8f0', borderRadius:'8px', fontSize:'1rem'}}>
                <option value="">Select...</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
              </select>
            </label>
            <label>
              Tell us about your project
              <textarea name="message" rows="4" placeholder="Average monthly electric bill, roof size, any specific requirements..."></textarea>
            </label>
            
            {status === 'pending' && (
              <div style={{padding:'1rem', background:'#fef3c7', borderRadius:'8px', color:'#92400e', textAlign:'center'}}>
                ⏳ Sending your message...
              </div>
            )}
            {status === 'sent' && (
              <div style={{padding:'1rem', background:'#d1fae5', borderRadius:'8px', color:'#065f46', textAlign:'center'}}>
                ✅ Thank you! We'll be in touch within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div style={{padding:'1rem', background:'#fee2e2', borderRadius:'8px', color:'#991b1b', textAlign:'center'}}>
                ❌ There was an error. Please try again or call us directly.
              </div>
            )}
            
            <button className="btn primary" type="submit" disabled={status === 'pending'}>
              {status === 'pending' ? 'Sending...' : 'Get Free Quote'}
            </button>
          </form>
        </div>

        <div style={{marginTop:'4rem', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:'2rem', textAlign:'center'}}>
          <div className="fade-in stagger-1">
            <div style={{fontSize:'2rem', marginBottom:'0.5rem'}}>📞</div>
            <h4 style={{marginBottom:'0.5rem', color:'var(--accent)'}}>Call Us</h4>
            <p style={{color:'var(--text-muted)'}}>
              (555) 123-4567<br/>
              Mon-Fri 8am-6pm<br/>
              Sat 9am-4pm
            </p>
          </div>
          <div className="fade-in stagger-2">
            <div style={{fontSize:'2rem', marginBottom:'0.5rem'}}>✉️</div>
            <h4 style={{marginBottom:'0.5rem', color:'var(--accent)'}}>Email Us</h4>
            <p style={{color:'var(--text-muted)'}}>
              <a href="mailto:info@brightsun.example" style={{color:'var(--accent)', textDecoration:'none'}}>
                info@brightsun.example
              </a><br/>
              We respond within 24 hours
            </p>
          </div>
          <div className="fade-in stagger-3">
            <div style={{fontSize:'2rem', marginBottom:'0.5rem'}}>📍</div>
            <h4 style={{marginBottom:'0.5rem', color:'var(--accent)'}}>Visit Us</h4>
            <p style={{color:'var(--text-muted)'}}>
              123 Solar Boulevard<br/>
              Portland, OR 97204<br/>
              By appointment
            </p>
          </div>
        </div>

        <div className="fade-in" style={{marginTop:'3rem', padding:'2rem', background:'linear-gradient(135deg, rgba(8,145,178,0.05) 0%, rgba(6,182,212,0.08) 100%)', borderRadius:'var(--radius)', textAlign:'center', animationDelay:'0.3s'}}>
          <h4 style={{marginBottom:'1rem', color:'var(--accent)', fontSize:'1.25rem'}}>What Happens Next?</h4>
          <div style={{display:'flex', gap:'2rem', justifyContent:'center', flexWrap:'wrap', marginTop:'1.5rem'}}>
            <div style={{flex:'1', minWidth:'200px', maxWidth:'250px'}} className="fade-in stagger-1">
              <div style={{fontSize:'1.5rem', fontWeight:'bold', color:'var(--accent)', marginBottom:'0.5rem'}}>1</div>
              <p style={{color:'var(--text-muted)', fontSize:'0.95rem'}}>We'll call within 24 hours to discuss your needs</p>
            </div>
            <div style={{flex:'1', minWidth:'200px', maxWidth:'250px'}} className="fade-in stagger-2">
              <div style={{fontSize:'1.5rem', fontWeight:'bold', color:'var(--accent)', marginBottom:'0.5rem'}}>2</div>
              <p style={{color:'var(--text-muted)', fontSize:'0.95rem'}}>Schedule a free site assessment at your convenience</p>
            </div>
            <div style={{flex:'1', minWidth:'200px', maxWidth:'250px'}} className="fade-in stagger-3">
              <div style={{fontSize:'1.5rem', fontWeight:'bold', color:'var(--accent)', marginBottom:'0.5rem'}}>3</div>
              <p style={{color:'var(--text-muted)', fontSize:'0.95rem'}}>Receive a custom quote with financing options</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
