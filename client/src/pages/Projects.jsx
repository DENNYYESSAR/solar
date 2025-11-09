import React from 'react'

export default function Projects(){
  const projects = [
    {
      title: 'Suburban Family Home',
      location: 'Portland, OR',
      size: '8.5 kW',
      description: 'Rooftop installation with 24 premium panels, reducing energy bills by 85%',
      img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80'
    },
    {
      title: 'Downtown Retail Center',
      location: 'Seattle, WA',
      size: '125 kW',
      description: 'Commercial flat-roof system with battery storage for peak shaving',
      img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80'
    },
    {
      title: 'Mountain Lodge',
      location: 'Bend, OR',
      size: '12 kW',
      description: 'Off-grid system with battery backup for complete energy independence',
      img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80'
    },
    {
      title: 'Manufacturing Facility',
      location: 'Tacoma, WA',
      size: '250 kW',
      description: 'Large-scale ground mount with real-time monitoring and optimization',
      img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80'
    },
    {
      title: 'Historic Townhouse',
      location: 'Eugene, OR',
      size: '6 kW',
      description: 'Elegant design maintaining architectural integrity while maximizing output',
      img: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80'
    },
    {
      title: 'Agricultural Complex',
      location: 'Spokane, WA',
      size: '180 kW',
      description: 'Barn and silo installation powering irrigation and processing equipment',
      img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80'
    }
  ]

  const testimonials = [
    {
      text: "BrightSun made the entire process seamless. From the initial consultation to installation, their team was professional, knowledgeable, and responsive. Our energy bills dropped by 90% in the first month!",
      author: "Sarah M., Portland"
    },
    {
      text: "As a business owner, I was concerned about upfront costs. Their financing options made solar affordable, and the ROI has exceeded our projections. Highly recommend!",
      author: "Mike T., Seattle"
    },
    {
      text: "The monitoring system is fantastic. I can see exactly how much energy we're producing and how much money we're saving in real-time. Best investment we've made for our home.",
      author: "Jennifer L., Bend"
    }
  ]

  return (
    <section className="container section">
      <h2>Featured Projects</h2>
      <p>Real installations delivering real results for homeowners and businesses across the Pacific Northwest</p>
      
      <div className="grid" style={{marginTop:'3rem'}}>
        {projects.map((project, idx) => (
          <div key={idx} className={`project fade-in stagger-${(idx % 6) + 1}`}>
            <img alt={project.title} src={project.img}/>
            <div style={{padding:'1.5rem'}}>
              <h4 style={{fontSize:'1.25rem', fontWeight:700, marginBottom:'0.5rem', color:'var(--accent)'}}>{project.title}</h4>
              <p style={{fontSize:'0.9rem', color:'var(--text-light)', marginBottom:'0.75rem'}}>📍 {project.location} • ⚡ {project.size}</p>
              <p style={{color:'var(--text-muted)', lineHeight:'1.6'}}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{marginTop:'5rem'}}>
        <h2 className="fade-in">What Our Customers Say</h2>
        <div className="grid" style={{marginTop:'2rem'}}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className={`testimonial fade-in stagger-${idx + 1}`}>
              <p>"{testimonial.text}"</p>
              <p className="author">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{marginTop:'4rem', textAlign:'center', padding:'2.5rem', background:'linear-gradient(135deg, rgba(8,145,178,0.05) 0%, rgba(6,182,212,0.08) 100%)', borderRadius:'var(--radius)'}}>
        <h3 style={{fontSize:'1.75rem', marginBottom:'1rem', color:'var(--accent)'}}>Join Our Growing List of Satisfied Customers</h3>
        <p style={{fontSize:'1.125rem', color:'var(--text-muted)', marginBottom:'1.5rem'}}>Over 2,500 successful installations and counting</p>
        <div style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap'}}>
          <span style={{padding:'0.5rem 1rem', background:'white', borderRadius:'8px', fontWeight:600}}>⭐ 4.9/5 Rating</span>
          <span style={{padding:'0.5rem 1rem', background:'white', borderRadius:'8px', fontWeight:600}}>✅ 98% Satisfaction</span>
          <span style={{padding:'0.5rem 1rem', background:'white', borderRadius:'8px', fontWeight:600}}>🏆 Award-Winning</span>
        </div>
      </div>
    </section>
  )
}
