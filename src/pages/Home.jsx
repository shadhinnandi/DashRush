import { Link } from 'react-router-dom';
import GameCard from '../components/games/GameCard.jsx';
import Icon from '../components/ui/Icon.jsx';
import { games } from '../data/games';
import usePageTitle from '../lib/usePageTitle';
import '../components/games/games.css';

export default function Home() {
  usePageTitle(null);
  return (
    <div className="page">
      <header className="page-header dashrush-hero">
        <div className="container">
          <p className="label">Browser Gaming Platform</p>
          <h1>DashRush</h1>
          <p className="lead">
            Your next game starts here. Seven browser games, ready to play — no download, no account.
          </p>
          <div className="dashrush-hero__actions">
            <Link to="/games" className="btn btn--primary">
              Browse all games
              <Icon name="arrowRight" />
            </Link>
          </div>
        </div>
      </header>

      <div className="container">
        <section aria-labelledby="featured-title">
          <h2 id="featured-title" className="visually-hidden">Featured games</h2>
          <div className="game-grid">
            {games.slice(0, 3).map((g, i) => (
              <GameCard key={g.slug} game={g} index={i} featured={i === 0} />
            ))}
          </div>

          <div className="dashrush-more">
            <Link to="/games" className="btn btn--ghost">
              See all {games.length} games
              <Icon name="arrowRight" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
