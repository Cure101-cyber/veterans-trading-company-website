import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Quality from '@/pages/Quality';
import Leadership from '@/pages/Leadership';
import Suppliers from '@/pages/Suppliers';
import News from '@/pages/News';
import Contact from '@/pages/Contact';
import ProcurementPortal from '@/pages/ProcurementPortal';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/procurement-portal" element={<ProcurementPortal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
