import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

type Crumb = {
  label: string;
  path?: string;
};

type PageHeaderProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
};

export default function PageHeader({ title, eyebrow, description, crumbs, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 to-navy-900/95" />
      <div className="container-page relative py-16 md:py-24">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-navy-300">
              {crumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.path ? (
                    <Link to={crumb.path} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                  {i < crumbs.length - 1 && <ChevronRight className="h-4 w-4 text-navy-500" />}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow text-accent-400">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold text-white text-balance md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-200">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
