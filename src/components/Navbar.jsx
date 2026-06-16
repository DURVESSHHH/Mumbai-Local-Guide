import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Train } from 'lucide-react';
import './Navbar.css';

const links = [
  { to: '/',        label: 'Home'   },
  { to: '/routes',  label: 'Routes' },
  { to: '/tips',    label: 'Tips'   },
  { to: '/about',   label: 'About'  },
  { to: '/contact', label: 'Contact'},
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
            <Train size={22} strokeWidth={2.2} />
            <span>Mumbai<strong>Local</strong></span>
          </Link>

          <ul className="navbar__links" role="list">
            {links.map(l => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    'navbar__link' + (isActive ? ' navbar__link--active' : '')
                  }
                  end={l.to === '/'}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link to="/contact" className="navbar__cta desktop-only">
            Plan my trip
          </Link>

          <button
            className="navbar__burger"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`drawer${open ? ' drawer--open' : ''}`} aria-hidden={!open}>
        <ul role="list">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  'drawer__link' + (isActive ? ' drawer__link--active' : '')
                }
                end={l.to === '/'}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="drawer__cta" onClick={() => setOpen(false)}>
          Plan my trip →
        </Link>
      </div>
      {open && <div className="drawer__overlay" onClick={() => setOpen(false)} />}
    </>
  );
}
