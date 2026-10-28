import { useEffect } from 'react';

type SeoOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

const BASE_URL = 'https://vtcusa.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-default.jpg`;

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function useSeo({ title, description, path = '', image }: SeoOptions) {
  useEffect(() => {
    const fullTitle = `${title} | Veterans Trading Company Inc.`;
    const url = `${BASE_URL}${path}`;

    document.title = fullTitle;
    setMeta('description', description);
    setMeta('canonical', url, 'name');

    // Open Graph
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:site_name', 'Veterans Trading Company Inc.', 'property');
    setMeta('og:image', image || DEFAULT_OG_IMAGE, 'property');

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image', 'name');
    setMeta('twitter:title', fullTitle, 'name');
    setMeta('twitter:description', description, 'name');
    setMeta('twitter:image', image || DEFAULT_OG_IMAGE, 'name');
  }, [title, description, path, image]);
}
