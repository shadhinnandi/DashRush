import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SiteHeader from './components/layout/SiteHeader.jsx';
import SiteFooter from './components/layout/SiteFooter.jsx';
import RouteEffects from './components/layout/RouteEffects.jsx';
import Home from './pages/Home.jsx';

const Games = lazy(() => import('./pages/Games.jsx'));
const Game = lazy(() => import('./pages/Game.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export default function App() {
  return (
    <>
      <RouteEffects />
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Suspense fallback={<div className="page-loading" aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/:slug" element={<Game />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
