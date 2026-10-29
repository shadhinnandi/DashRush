import GameCard from '../components/games/GameCard.jsx';
import { games } from '../data/games';
import usePageTitle from '../lib/usePageTitle';
import '../components/games/games.css';

export default function Games() {
  usePageTitle('All Games', 'Seven browser games: a top-down arena shooter, 8-ball pool, an endless runner, arcade flying, racing, an exploration adventure and a train journey.');
  return (
    <div className="page">
      <header className="page-header">
        <div className="container">
          <p className="label">All Games</p>
          <h1>The Game Room</h1>
          <p className="lead">
            Seven games built for the browser, each against AI enemies or a computer opponent. Pick one and play straight away.
          </p>
          <ul className="game-hub__notes">
            <li>Runs in your browser</li>
            <li>No account or download</li>
            <li>Best scores stay on this device</li>
          </ul>
        </div>
      </header>

      <div className="container">
        <section aria-labelledby="games-title">
          <h2 id="games-title" className="visually-hidden">All games</h2>
          <div className="game-grid">
            {games.map((g, i) => (
              <GameCard key={g.slug} game={g} index={i} featured={i === 0} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
