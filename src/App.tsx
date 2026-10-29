import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Quality from '@/pages/Quality';
import Leadership from '@/pages/Leadership';
import Suppliers from '@/pages/Suppliers';
import News from '@/pages/News';
import Contact from '@/pages/Contact';
import Careers from '@/pages/Careers';
import NotFound from '@/pages/NotFound';

const pages = {
  home: Home,
  about: About,
  services: Services,
  quality: Quality,
  leadership: Leadership,
  suppliers: Suppliers,
  news: News,
  contact: Contact,
  careers: Careers,
  notFound: NotFound,
} as const;

type PageKey = keyof typeof pages;

export default function App() {
  const pageKey = (document.body.dataset.page || 'notFound') as PageKey;
  const Page = pages[pageKey] || NotFound;

  return (
    <Layout>
      <Page />
    </Layout>
  );
}
