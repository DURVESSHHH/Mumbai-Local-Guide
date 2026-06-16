import { useState } from 'react';
import { tips, faqs } from '../data';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Tips.css';

const categories = ['All', ...new Set(tips.map(t => t.category))];
const priorityOrder = { high: 0, medium: 1, low: 2 };
const priorityBadge = { high: 'badge--red', medium: 'badge--saffron', low: 'badge--green' };

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-item__q" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span>{q}</span>
        {open ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
      </button>
      {open && <p className="faq-item__a">{a}</p>}
    </div>
  );
}

export default function Tips() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = tips
    .filter(t => activeCategory === 'All' || t.category === activeCategory)
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return (
    <main className="page tips-page">
      <div className="container">
        <header className="page-header">
          <span className="badge badge--saffron">Commuter wisdom</span>
          <h1 className="section-title" style={{ marginTop: '.75rem' }}>
            Mumbai Local<br />Survival Tips
          </h1>
          <p className="section-sub">
            Hard-learned lessons from daily commuters — sorted by how much they'll save your life.
          </p>
        </header>

        {/* Filter bar */}
        <div className="tips-filters" role="group" aria-label="Filter by category">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn${activeCategory === cat ? ' filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tips grid */}
        <div className="tips-grid">
          {filtered.map(tip => (
            <article key={tip.id} className={`tip-card tip-card--${tip.priority}`}>
              <div className="tip-card__top">
                <span className="tip-card__icon">{tip.icon}</span>
                <span className={`badge ${priorityBadge[tip.priority]}`}>{tip.priority}</span>
              </div>
              <p className="tip-card__category">{tip.category}</p>
              <h3 className="tip-card__title">{tip.title}</h3>
              <p className="tip-card__body">{tip.body}</p>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="tips-empty">No tips for this category yet.</p>
        )}

        {/* FAQ */}
        <section className="faq-section">
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
            Frequently asked
          </h2>
          <div className="faq-list">
            {faqs.map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </section>
      </div>
    </main>
  );
}
