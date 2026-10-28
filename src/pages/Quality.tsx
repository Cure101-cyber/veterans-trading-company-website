import {
  ShieldCheck,
  CheckCircle2,
  Award,
  TrendingUp,
  Users,
  ClipboardCheck,
} from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { COMPANY } from '@/data/company';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';

const PILLARS = [
  {
    icon: Users,
    title: 'Our Employees',
    description:
      'VTC employees take pride and ownership of the work they perform. They have a clear understanding of their individual roles within the organization and know how critical they are to the overall success of our company. Our employees are our most valuable asset.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Management',
    description:
      'Our Quality Management Team monitors, measures, and evaluates the efficacy and effectiveness of all our company processes, policies, and procedures. By regularly collecting and analyzing data, this team develops and implements innovative methodologies to significantly enhance our day-to-day business operations.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description:
      'Quality Controls and DMAIC Six Sigma methods of analysis are part of all operational processes for the continual improvement of products and service performance levels. We are committed to a culture of continuous improvement across every level of the organization.',
  },
];

export default function Quality() {
  useSeo({
    title: 'Quality & Certifications',
    description:
      "VTC's Total Quality Management system is built on ISO 9001:2015 and AS9100D certification, with DMAIC Six Sigma methods integrated into all operational processes for continuous improvement.",
    path: '/quality',
  });

  return (
    <>
      <PageHeader
        title="Total Quality Management"
        eyebrow="Quality & Certifications"
        description="Veterans Trading Company was founded on the guiding principle of providing customers with 'Best In Class' services. That conviction still resonates passionately across our organization to this day."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Quality & Certifications' }]}
      />

      {/* Certifications */}
      <section className="section-pad">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Certified &amp; Compliant</span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 md:text-4xl">
              Our Certifications
            </h2>
            <p className="mt-4 prose-paragraph">
              VTC maintains industry-leading certifications and complies with the highest standards
              in aerospace and defense supply chain management.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COMPANY.certifications.map((cert) => (
              <div key={cert} className="card-hover flex items-start gap-4 p-6">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-bold text-navy-900">{cert}</p>
                  <p className="mt-1 text-sm text-slate-500">Certified and maintained in good standing</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality pillars */}
      <section className="bg-slate-50 section-pad">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How We Operate</span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 md:text-4xl">
              Foundation of Our Quality System
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="card p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-800 text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-navy-900">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-pad">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Recognition</span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 md:text-4xl">
              Awards &amp; Recognition
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="card-hover p-8">
              <Award className="h-10 w-10 text-accent-500" />
              <h3 className="mt-4 text-lg font-bold text-navy-900">
                Lockheed Martin Outstanding Small Business Award — 2021
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                VTC was selected as one of 12 recipients of the Outstanding Small Business Award from
                Lockheed Martin Missiles and Fire Control.
              </p>
            </div>
            <div className="card-hover p-8">
              <Award className="h-10 w-10 text-accent-500" />
              <h3 className="mt-4 text-lg font-bold text-navy-900">
                BAE Systems Silver Tier Supplier Award — 2022
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Recognized for exceptional performance and contributions to supply chain success, having
                processed over 390,000 deliveries meeting performance challenges for delivery and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AS9100 callout */}
      <section className="bg-navy-900 py-16">
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-xl border border-navy-700 bg-navy-800 p-8 text-center md:p-12">
            <CheckCircle2 className="mx-auto h-12 w-12 text-accent-500" />
            <h2 className="mt-4 text-2xl font-bold text-white">
              ISO 9001:2015 and AS9100D Certified
            </h2>
            <p className="mt-3 text-navy-200">
              Certificate Number 15144 — Our Quality Management System is certified to the highest
              international standards for quality and aerospace requirements.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Questions about our quality systems?"
        description="Reach out to learn more about our certifications, quality processes, and how we can support your requirements."
      />
    </>
  );
}
