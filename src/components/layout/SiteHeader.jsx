import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from '../ui/Icon.jsx';
import ThemeToggle from './ThemeToggle.jsx';

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container">
        <div className="nav-bar">
          <Link to="/" className="brand" aria-label="DashRush, home">
            <span className="brand__name">DashRush</span>
          </Link>

          <nav className="nav" aria-label="Primary">
            <ul>
              <li>
                <NavLink to="/games" end={false}>
                  All Games
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
