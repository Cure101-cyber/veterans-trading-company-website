import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { COMPANY } from '@/data/company';

type CtaBandProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryPath?: string;
};

export default function CtaBand({
  title = 'Ready to optimize your supply chain?',
  description = 'Get in touch to learn how Veterans Trading Company can deliver measurable improvements in productivity and operational efficiency for your organization.',
  primaryLabel = 'Get in Touch',
  primaryPath = '/contact',
}: CtaBandProps) {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-2xl bg-navy-900 px-8 py-12 md:px-14 md:py-16">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white text-balance md:text-4xl">{title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-navy-200">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to={primaryPath} className="btn-accent">
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={COMPANY.phoneHref}
                className="btn-outline border-navy-600 bg-transparent text-white hover:bg-navy-800"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
