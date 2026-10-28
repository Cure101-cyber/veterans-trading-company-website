import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  PackageCheck,
  Users,
  Truck,
  Warehouse,
  ClipboardCheck,
  Award,
  CheckCircle2,
  Quote,
} from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { COMPANY, SERVICES } from '@/data/company';
import CtaBand from '@/components/CtaBand';

const WAREHOUSE_IMG =
  'https://images.pexels.com/photos/4487383/pexels-photo-4487383.jpeg?auto=compress&cs=tinysrgb&w=1600';

const SERVICE_ICONS: Record<string, typeof PackageCheck> = {
  smi: Warehouse,
  osp: Users,
  cdp: Truck,
  mro: PackageCheck,
};

const STATS = [
  { value: '2005', label: 'Founded' },
  { value: '9', label: 'Locations across 7 states' },
  { value: '390K+', label: 'Delivers processed for BAE Systems' },
  { value: 'ISO 9001', label: '& AS9100D Certified' },
];

const PARTNERS = ['Lockheed Martin', 'The Boeing Company', 'Northrop Grumman', 'BAE Systems'];

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Service-Disabled Veteran-Owned',
    description:
      'Proudly designated as an SDVOSB and SBA Certified HUBZone company, supporting diversity in federal procurement.',
  },
  {
    icon: Award,
    title: 'Award-Winning Performance',
    description:
      'Recognized by Lockheed Martin and BAE Systems for outstanding supply chain performance and delivery excellence.',
  },
  {
    icon: ClipboardCheck,
    title: 'Certified Quality Systems',
    description:
      'ISO 9001:2015 and AS9100D certified with DMAIC Six Sigma methods integrated into all operational processes.',
  },
];

export default function Home() {
  useSeo({
    title: 'Supply Chain Solutions and Procurement Support',
    description: COMPANY.description,
    path: '/',
  });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] overflow-hidden lg:min-h-[680px]">
        <div className="absolute inset-0">
          <img
            src={WAREHOUSE_IMG}
            alt="Warehouse workers handling supply chain inventory"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 hero-gradient opacity-95" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>

        <div className="container-page relative flex min-h-[600px] flex-col justify-center py-20 lg:min-h-[680px]">
          <div className="max-w-3xl">
            <span className="eyebrow text-accent-400">{COMPANY.tagline}</span>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white text-balance md:text-5xl lg:text-6xl">
              Veterans Trading Company Inc.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100 md:text-xl">
              {COMPANY.description}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link to="/services" className="btn-accent">
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="btn-outline border-navy-500 bg-white/5 text-white hover:bg-white/10"
              >
                Our History
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-navy-700 bg-navy-950/60 backdrop-blur">
          <div className="container-page grid grid-cols-2 gap-4 py-6 md:grid-cols-4 md:py-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="font-display text-2xl font-bold text-white md:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs text-navy-300 md:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro / About preview */}
      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 md:text-4xl">
              Delivering the right product, to the right place, at the right time.
            </h2>
            <p className="mt-5 prose-paragraph">
              Veterans Trading Company (VTC) was established in {COMPANY.founded}. Our founders
              brought extensive experience in supply chain management and industrial distribution,
              focusing on meticulous attention to detail in on-time performance, order accuracy, and
              level of service.
            </p>
            <p className="mt-4 prose-paragraph">
              Today, VTC has forged strong strategic partnerships with several prominent aerospace
              business organizations and received multiple awards for designing and implementing
              innovative supply chain models.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 font-semibold text-navy-800 hover:text-navy-900">
              Learn More About VTC
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card-hover p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-slate-50 section-pad">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Services</span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 md:text-4xl">
              Explore What We Are Doing Better
            </h2>
            <p className="mt-4 prose-paragraph">
              Our programs and services offer measurable improvements in productivity and operational
              efficiency. Clients realize direct cost savings and indirect savings from recovered floor
              space and reduced inventory.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.id] || PackageCheck;
              return (
                <Link
                  key={service.id}
                  to="/services"
                  className="card-hover group flex flex-col p-6"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-800 text-white transition-transform group-hover:scale-110">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </span>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wide text-accent-600">
                    {service.shortName}
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-navy-900">{service.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {service.description.slice(0, 100)}...
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy-700 group-hover:text-navy-900">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-pad">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Strategic Partnerships</span>
            <h2 className="mt-3 text-2xl font-bold text-navy-900 md:text-3xl">
              Trusted by Leading Aerospace &amp; Defense Organizations
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner}
                className="flex items-center gap-2 text-xl font-bold text-slate-400 md:text-2xl"
              >
                <ShieldCheck className="h-6 w-6 text-slate-300" />
                {partner}
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <Quote className="h-8 w-8 text-accent-500" />
            <p className="mt-3 text-lg italic leading-relaxed text-navy-800">
              &ldquo;VTC has had the privilege of being a partner with BAE Systems for twelve years. The
              work that went into attaining the Silver Supplier recognition has been extraordinary. The VTC
              Team processed over 390,000 deliveries while reaching the performance challenges for both
              delivery and quality.&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-500">
              — George Smith, President, Veterans Trading Company
            </p>
          </div>
        </div>
      </section>

      {/* Quality band */}
      <section className="bg-navy-900 section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow text-accent-400">Quality &amp; Certifications</span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Total Quality Management
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-200">
              VTC was founded on the guiding principle of providing customers with &ldquo;Best In
              Class&rdquo; services. Our Quality Management System is the foundation of our integrated
              business methodologies, with DMAIC Six Sigma methods integrated into all operational
              processes.
            </p>
            <div className="mt-6 space-y-3">
              {COMPANY.certifications.slice(0, 4).map((cert) => (
                <div key={cert} className="flex items-center gap-3 text-navy-100">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent-500" />
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
            </div>
            <Link to="/quality" className="mt-8 inline-flex items-center gap-2 font-semibold text-white hover:text-accent-400">
              Learn More About Our Quality
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'ISO 9001:2015', sub: 'Quality Management' },
              { label: 'AS9100D', sub: 'Aerospace Standard' },
              { label: 'SDVOSB', sub: 'Veteran-Owned' },
              { label: 'HUBZone', sub: 'SBA Certified' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-navy-700 bg-navy-800 p-6 text-center"
              >
                <ShieldCheck className="mx-auto h-10 w-10 text-accent-500" />
                <p className="mt-3 font-display text-xl font-bold text-white">{item.label}</p>
                <p className="mt-1 text-xs text-navy-300">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
