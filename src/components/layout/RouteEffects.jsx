import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteEffects() {
  const { pathname, hash } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      if (!hash) return;
    }
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let tries = 0;
      let frame;
      const find = () => {
        const target = document.getElementById(id);
        if (target) target.scrollIntoView();
        else if (tries++ < 60) frame = requestAnimationFrame(find);
      };
      find();
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo(0, 0);
    document.getElementById('main')?.focus({ preventScroll: true });
  }, [pathname, hash]);

  return null;
}
