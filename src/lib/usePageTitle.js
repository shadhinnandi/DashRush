import { useEffect } from 'react';

const SITE = 'DashRush';
const DEFAULT_TITLE = SITE;

const defaultDescription =
  typeof document !== 'undefined' ? document.querySelector('meta[name="description"]')?.getAttribute('content') : '';

export default function usePageTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : DEFAULT_TITLE;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description || defaultDescription || '');
  }, [title, description]);
}
