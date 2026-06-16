import { useState } from 'react';
import { ChevronDown, ChevronUp, Train, Clock, MapPin } from 'lucide-react';
import { routes } from '../data';
import './Routes.css';

function RouteCard({ route }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="route-card">
      <div className="route-card__head" onClick={() => setOpen(o => !o)}>
        <div className="route-card__line-dot" style={{ background: route.color }} />
        <div className="route-card__meta">
          <div className="route-card__top">
            <h3 className="route-card__name">{route.line}</h3>
            <span className="badge badge--rail">{route.badge}</span>
          </div>
          <p className="route-card__journey">
            <MapPin size={13}/> {route.from} → {route.to}
          </p>
        </div>
        <div className="route-card__stats">
          <span><Train size={13}/> {route.stops} stops</span>
          <span><Clock size={13}/> {route.duration}</span>
        </div>
        <button className="route-card__toggle" aria-label={open ? 'Collapse' : 'Expand'}>
          {open ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
        </button>
      </div>

      {open && (
        <div className="route-card__body">
          <div className="route-card__section">
            <p className="route-card__section-label">Key stations</p>
            <div className="route-card__stops">
              {route.keyStations.map((s, i) => (
                <span key={s} className="stop-pill">
                  {i > 0 && <span className="stop-pill__line" style={{ background: route.color }}/>}
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="route-card__section">
            <p className="route-card__section-label">Frequency</p>
            <p className="route-card__freq">{route.freq}</p>
          </div>
          <div className="route-card__tip">
            <span className="route-card__tip-label">💡 Pro tip</span>
            <p>{route.tip}</p>
          </div>
        </div>
      )}
    </article>
  );
}

export default function Routes() {
  return (
    <main className="page routes-page">
      <div className="container">
        <header className="page-header">
          <span className="badge badge--rail">4 Lines</span>
          <h1 className="section-title" style={{marginTop:'.75rem'}}>Mumbai Local<br/>Train Routes</h1>
          <p className="section-sub">Tap any route to see key stations, frequency, and a tip from experienced commuters.</p>
        </header>

        <div className="routes-list">
          {routes.map(r => <RouteCard key={r.id} route={r}/>)}
        </div>

        <div className="routes-legend">
          <p className="routes-legend__title">Coach guide</p>
          <div className="legend-grid">
            {[
              { label: "Ladies' coach", desc: '1st & last coach — Women only at all times.' },
              { label: 'First class',   desc: 'Separate ticket required. Quieter & less crowded.' },
              { label: 'Disabled',      desc: 'Closest to footbridge. Accessible boarding.' },
              { label: 'General',       desc: 'All remaining coaches — open to everyone.' },
            ].map(l => (
              <div key={l.label} className="legend-item">
                <p className="legend-item__label">{l.label}</p>
                <p className="legend-item__desc">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
