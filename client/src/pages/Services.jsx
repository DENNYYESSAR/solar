import React from 'react'
import { Link } from 'react-router-dom'

export default function Services(){
  return (
    <section className="container section">
      <h2 className="fade-in">Our Services</h2>
      <p className="fade-in" style={{animationDelay:'0.1s'}}>Comprehensive solar solutions designed for your unique energy needs</p>
      
      <div className="grid" style={{marginTop:'3rem'}}>
        <div className="card fade-in stagger-1">
          <h3>🏠 Residential Solar</h3>
          <p>Custom rooftop systems designed to maximize your home's energy production. Reduce monthly bills by up to 90% and increase your property value by 4-6%.</p>
          <ul style={{marginTop:'1rem', color:'var(--text-muted)', lineHeight:'1.8'}}>
            <li>Free site assessment & energy audit</li>
            <li>Custom system design</li>
            <li>25-year performance warranty</li>
            <li>Financing from 0% APR</li>
          </ul>
        </div>
        
        <div className="card fade-in stagger-2">
          <h3>🏢 Commercial Solar</h3>
          <p>Scaled solutions for businesses, warehouses, and industrial facilities. Boost your bottom line while demonstrating corporate environmental responsibility.</p>
          <ul style={{marginTop:'1rem', color:'var(--text-muted)', lineHeight:'1.8'}}>
            <li>ROI analysis & financial modeling</li>
            <li>Tax incentive optimization</li>
            <li>Minimal operational disruption</li>
            <li>Fleet & project management</li>
          </ul>
        </div>
        
        <div className="card fade-in stagger-3">
          <h3>🔋 Battery Storage</h3>
          <p>Store excess energy for use during peak hours or outages. Achieve energy independence and maximize your solar investment with cutting-edge battery systems.</p>
          <ul style={{marginTop:'1rem', color:'var(--text-muted)', lineHeight:'1.8'}}>
            <li>Tesla Powerwall & LG Chem</li>
            <li>Backup power during outages</li>
            <li>Time-of-use optimization</li>
            <li>Seamless integration</li>
          </ul>
        </div>
        
        <div className="card fade-in stagger-4">
          <h3>📊 Monitoring & Maintenance</h3>
          <p>Real-time system monitoring and proactive maintenance to ensure peak performance. Track your production, savings, and environmental impact 24/7.</p>
          <ul style={{marginTop:'1rem', color:'var(--text-muted)', lineHeight:'1.8'}}>
            <li>Mobile app & web dashboard</li>
            <li>Automatic alerts & diagnostics</li>
            <li>Annual inspections included</li>
            <li>Rapid response service</li>
          </ul>
        </div>
        
        <div className="card fade-in stagger-5">
          <h3>🔌 EV Charging Stations</h3>
          <p>Integrate electric vehicle charging with your solar system. Power your car with clean energy and reduce transportation costs.</p>
          <ul style={{marginTop:'1rem', color:'var(--text-muted)', lineHeight:'1.8'}}>
            <li>Level 2 home chargers</li>
            <li>Commercial charging stations</li>
            <li>Smart scheduling integration</li>
            <li>Federal tax credits available</li>
          </ul>
        </div>
        
        <div className="card fade-in stagger-6">
          <h3>💡 Energy Efficiency</h3>
          <p>Complete energy audits and efficiency upgrades to reduce consumption before going solar. Maximize your return on investment.</p>
          <ul style={{marginTop:'1rem', color:'var(--text-muted)', lineHeight:'1.8'}}>
            <li>LED lighting upgrades</li>
            <li>Insulation improvements</li>
            <li>Smart thermostat installation</li>
            <li>Appliance recommendations</li>
          </ul>
        </div>
      </div>

      <div className="fade-in" style={{textAlign:'center', marginTop:'4rem', padding:'3rem', background:'linear-gradient(135deg, #0c4a6e 0%, #0e7490 100%)', borderRadius:'var(--radius)', color:'white', animationDelay:'0.4s'}}>
        <h3 style={{fontSize:'2rem', marginBottom:'1rem'}}>Ready to Go Solar?</h3>
        <p style={{fontSize:'1.125rem', marginBottom:'2rem', opacity:0.95}}>Get a free consultation and custom quote today</p>
        <Link to="/contact" className="btn" style={{background:'var(--secondary)', color:'white', border:'none'}}>
          Schedule Consultation
        </Link>
      </div>
    </section>
  )
}
