import { Home, ArrowLeft } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';

export default function NotFound() {
  useSeo({
    title: 'Page Not Found',
    description: 'The page you are looking for could not be found.',
    path: '/404',
  });

  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container-page relative py-20 text-center">
        <p className="font-display text-8xl font-bold text-accent-500 md:text-9xl">404</p>
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-navy-200">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="/" className="btn-accent">
            <Home className="h-4 w-4" />
            Back to Home
          </a>
          <a href="/contact/" className="btn-outline border-navy-500 bg-transparent text-white hover:bg-white/10">
            <ArrowLeft className="h-4 w-4" />
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
