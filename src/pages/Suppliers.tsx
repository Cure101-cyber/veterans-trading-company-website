import { FileText, Download, ShieldAlert, FileCheck, Lock, Mail } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { SUPPLIER_DOCS, COMPANY } from '@/data/company';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';

const POLICIES = [
  {
    icon: ShieldAlert,
    title: 'Cyber Security Statement',
    description:
      'VTC is committed to cybersecurity across the supply chain, protecting sensitive information and systems.',
  },
  {
    icon: FileCheck,
    title: 'Human Trafficking Policy',
    description:
      'VTC maintains a zero-tolerance policy on human trafficking and forced labor in any form.',
  },
  {
    icon: Lock,
    title: 'Conflict Mineral Policy',
    description:
      "VTC's policy on conflict minerals ensures responsible sourcing and supply chain transparency.",
  },
];

export default function Suppliers() {
  useSeo({
    title: 'Suppliers',
    description:
      "VTC supplier resources: terms and conditions, standard PO flowdowns, code of conduct, cyber security statement, human trafficking policy, and conflict mineral policy.",
    path: '/suppliers',
  });

  return (
    <>
      <PageHeader
        title="Suppliers"
        eyebrow="Supplier Resources"
        description="VTC is committed to strong supplier partnerships. Below are our corporate documents, policies, and resources for current and prospective suppliers."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Suppliers' }]}
      />

      {/* Corporate documents */}
      <section className="section-pad">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">VTC Corporate Documents</span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 md:text-4xl">
              Supplier Documentation
            </h2>
            <p className="mt-4 prose-paragraph">
              Download the documents and policies required to do business with Veterans Trading Company.
              If you need a document that is not listed here, please contact us.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {SUPPLIER_DOCS.map((doc) => (
              <div key={doc.title} className="card-hover flex items-start gap-4 p-6">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                  <FileText className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-navy-900">{doc.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{doc.description}</p>
                  <button
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-navy-900"
                    type="button"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 flex-shrink-0 text-accent-500" />
              <div>
                <h3 className="text-lg font-bold text-navy-900">
                  Need a document that isn't listed?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Some supplier documents may require direct authorization. Please email us and our team
                  will assist you with the documentation you need.
                </p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="mt-3 inline-flex items-center gap-1.5 font-semibold text-navy-700 hover:text-navy-900"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="bg-slate-50 section-pad">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Commitments</span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 md:text-4xl">
              Ethics &amp; Compliance Policies
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {POLICIES.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="card p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-800 text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy-900">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
