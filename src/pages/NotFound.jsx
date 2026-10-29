import { Link } from 'react-router-dom';
import usePageTitle from '../lib/usePageTitle';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <div className="page">
      <header className="page-header">
        <div className="container">
          <h1>Page not found</h1>
          <p className="lead">The page you are looking for does not exist.</p>
          <p>
            <Link to="/">Back to DashRush</Link>
          </p>
        </div>
      </header>
    </div>
  );
}
