import { Train, Users, MapPin, Heart } from 'lucide-react';
import './About.css';

const team = [
  { initials: 'AR', name: 'Aarav Rao', role: 'Founder & Design', color: '#0066CC' },
  { initials: 'PS', name: 'Priya Sharma', role: 'Content & Research', color: '#CC3300' },
  { initials: 'MK', name: 'Mihail Kulkarni', role: 'Development', color: '#008055' },
];

const values = [
  { icon: <Train size={20}/>, title: 'Accuracy first', desc: 'Every tip is verified by actual daily commuters — not scraped from forums.' },
  { icon: <Users size={20}/>, title: 'Community driven', desc: 'Built by Mumbaikars, for Mumbaikars. We welcome contributions.' },
  { icon: <MapPin size={20}/>, title: 'Hyperlocal', desc: 'We go deep on Mumbai and skip the generic travel-guide filler.' },
  { icon: <Heart size={20}/>, title: 'Always free', desc: 'No paywalls. No ads. Just useful information, open for everyone.' },
];

export default function About() {
  return (
    <main className="page about-page">
      <div className="container">
        {/* Hero */}
        <section className="about-hero">
          <span className="badge badge--rail">Our story</span>
          <h1 className="section-title" style={{ marginTop: '.75rem' }}>
            Built on daily commutes<br />and missed trains.
          </h1>
          <p className="about-hero__body">
            MumbaiLocal Guide was born out of frustration. When one of our founders moved to
            Mumbai for work, she spent her first two weeks getting on the wrong train,
            standing in the wrong coach, and paying way too much for daily tickets.
            There was no single, clear, honest guide. So we built one.
          </p>
        </section>

        {/* Values */}
        <section className="about-values">
          <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>What we stand for</h2>
          <div className="values-grid">
            {values.map(v => (
              <div key={v.title} className="value-card">
                <div className="value-card__icon">{v.icon}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="about-disclaimer">
          <p>
            <strong>Disclaimer:</strong> MumbaiLocal Guide is an independent community project.
            We are not affiliated with Indian Railways, Mumbai Railway Vikas Corporation (MRVC),
            or any government body. Always verify times and fares on the official IRCTC or UTS app.
          </p>
        </div>
      </div>
    </main>
  );
}
