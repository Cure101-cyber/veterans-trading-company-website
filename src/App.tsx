import { lazy, Suspense } from 'react';
import Layout from '@/components/Layout';
import NotFound from '@/pages/NotFound';

const pages = {
  home: lazy(() => import('@/pages/Home')),
  about: lazy(() => import('@/pages/About')),
  services: lazy(() => import('@/pages/Services')),
  quality: lazy(() => import('@/pages/Quality')),
  leadership: lazy(() => import('@/pages/Leadership')),
  suppliers: lazy(() => import('@/pages/Suppliers')),
  news: lazy(() => import('@/pages/News')),
  contact: lazy(() => import('@/pages/Contact')),
  careers: lazy(() => import('@/pages/Careers')),
  notFound: NotFound,
} as const;

type PageKey = keyof typeof pages;

export default function App() {
  const pageKey = (document.body.dataset.page || 'notFound') as PageKey;
  const Page = pages[pageKey] || NotFound;

  return (
    <Layout>
      <Suspense fallback={null}>
        <Page />
      </Suspense>
    </Layout>
  );
}
