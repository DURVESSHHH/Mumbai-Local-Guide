import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Shield, Smartphone } from 'lucide-react';
import { stats } from '../data';
import './Home.css';

const features = [
  { icon: <MapPin size={22}/>, title: 'All 4 lines mapped', desc: 'Western, Central, Harbour, and Trans-Harbour — every route, stop, and key station.' },
  { icon: <Clock size={22}/>,  title: 'Peak-hour guidance', desc: 'Know exactly when to travel, which coach to board, and how to save time.' },
  { icon: <Shield size={22}/>, title: 'Safety first', desc: 'RPF contacts, designated coaches, emergency numbers — all in one place.' },
  { icon: <Smartphone size={22}/>, title: 'Apps & passes', desc: 'From the UTS app to season passes — we tell you the tools that actually work.' },
];

export default function Home() {
  return (
    <main className="page">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__track-bg" aria-hidden="true">
          {Array.from({length: 12}).map((_,i) => <div key={i} className="hero__rail-line"/>)}
        </div>
        <div className="container hero__content">
          <span className="badge badge--saffron hero__eyebrow">Mumbai Local · Survival Guide</span>
          <h1 className="hero__h1">
            Navigate Mumbai<br/>
            <span className="hero__h1-accent">like a local.</span>
          </h1>
          <p className="hero__desc">
            7.5 million people ride Mumbai's local trains every day.
            This guide gives students, professionals, and first-timers everything
            they need to travel smart, safe, and confidently.
          </p>
          <div className="hero__actions">
            <Link to="/routes" className="btn btn--primary">
              Explore routes <ArrowRight size={16}/>
            </Link>
            <Link to="/tips" className="btn btn--ghost">
              Read survival tips
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-strip">
        <div className="container stats-strip__grid">
          {stats.map(s => (
            <div key={s.value} className="stat-card">
              <p className="stat-card__value">{s.value}</p>
              <p className="stat-card__label">{s.label}</p>
              <p className="stat-card__sub">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features">
        <div className="container">
          <div className="features__header">
            <h2 className="section-title">Everything you need<br/>to know.</h2>
            <p className="section-sub">No jargon. No outdated info. Just the stuff that matters for your daily commute.</p>
          </div>
          <div className="features__grid">
            {features.map(f => (
              <div key={f.title} className="feature-card">
                <div className="feature-card__icon">{f.icon}</div>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2 className="cta-banner__heading">Not sure which line to take?</h2>
            <p className="cta-banner__sub">Check our full route guide with stops, frequencies, and insider tips.</p>
          </div>
          <Link to="/routes" className="btn btn--light">
            View all routes <ArrowRight size={16}/>
          </Link>
        </div>
      </section>

    </main>
  );
}
