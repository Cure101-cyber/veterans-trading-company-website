import {
  Warehouse,
  Users,
  Truck,
  PackageCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { SERVICES } from '@/data/company';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';

const SERVICE_ICONS: Record<string, typeof Warehouse> = {
  smi: Warehouse,
  osp: Users,
  cdp: Truck,
  mro: PackageCheck,
};

const SERVICE_IMAGES: Record<string, string> = {
  smi: 'https://images.pexels.com/photos/163125/board-printed-circuit-board-computer-electronics-163125.jpeg?auto=compress&cs=tinysrgb&w=1200',
  osp: 'https://images.pexels.com/photos/1181738/pexels-photo-1181738.jpeg?auto=compress&cs=tinysrgb&w=1200',
  cdp: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1200',
  mro: 'https://images.pexels.com/photos/4487363/pexels-photo-4487363.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export default function Services() {
  useSeo({
    title: 'Services — SMI, OSP, CDP & MRO',
    description:
      'VTC offers Supplier Managed Inventory (SMI), On-Site Procurement (OSP), Customer Direct Procurement (CDP), and Industrial Products and Supplies (MRO) for commercial firms and Federal prime contractors.',
    path: '/services',
  });

  return (
    <>
      <PageHeader
        title="Explore What We Are Doing Better"
        eyebrow="Our Services"
        description="Our programs and services offer measurable improvements in productivity and operational efficiency. Clients realize direct cost savings and indirect savings from recovered floor space and reduced inventory."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Services' }]}
      />

      {/* Service cards nav */}
      <section className="bg-slate-50 py-12">
        <div className="container-page">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.id] || PackageCheck;
              return (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="card-hover group flex items-start gap-4 p-5"
                >
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-navy-800 text-white transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-accent-600">
                      {service.shortName}
                    </p>
                    <h3 className="mt-0.5 text-sm font-bold text-navy-900">{service.name}</h3>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service sections */}
      {SERVICES.map((service, i) => {
        const Icon = SERVICE_ICONS[service.id] || PackageCheck;
        const image = SERVICE_IMAGES[service.id];
        const reversed = i % 2 === 1;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-24 section-pad ${i % 2 === 1 ? 'bg-slate-50' : ''}`}
          >
            <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className={reversed ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-800 text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wide text-accent-600">
                      {service.shortName}
                    </span>
                    <h2 className="text-2xl font-bold text-navy-900">{service.name}</h2>
                  </div>
                </div>
                <p className="mt-5 text-base leading-relaxed text-slate-600">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy-600" />
                      <span className="text-sm font-medium text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact/"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-navy-700 hover:text-navy-900"
                >
                  Request a consultation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className={reversed ? 'lg:order-1' : ''}>
                <img
                  src={image}
                  alt={service.name}
                  className="h-72 w-full rounded-2xl object-cover shadow-lg lg:h-96"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand />
    </>
  );
}
