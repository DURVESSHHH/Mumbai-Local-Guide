import { Link } from 'react-router-dom';
import { Train, ExternalLink, Share2, Link2 } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <Train size={20} strokeWidth={2.2} />
            Mumbai<strong>Local</strong>
          </Link>
          <p className="footer__tagline">
            Your pocket guide to surviving — and thriving — in the city that never stops.
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="GitHub"><ExternalLink size={18}/></a>
            <a href="#" aria-label="Twitter"><Share2 size={18}/></a>
            <a href="#" aria-label="Instagram"><Link2 size={18}/></a>
          </div>
        </div>

        <div className="footer__nav">
          <div className="footer__col">
            <p className="footer__col-head">Explore</p>
            <Link to="/">Home</Link>
            <Link to="/routes">Train Routes</Link>
            <Link to="/tips">Survival Tips</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer__col">
            <p className="footer__col-head">Lines</p>
            <a href="#">Western Line</a>
            <a href="#">Central Line</a>
            <a href="#">Harbour Line</a>
            <a href="#">Trans Harbour</a>
          </div>
          <div className="footer__col">
            <p className="footer__col-head">Resources</p>
            <a href="#">CSMT Timetable</a>
            <a href="#">Pass Types</a>
            <a href="#">Peak Hours</a>
            <a href="#">Emergency Info</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} MumbaiLocal Guide. Built for commuters, by commuters.</p>
        </div>
      </div>
    </footer>
  );
}
