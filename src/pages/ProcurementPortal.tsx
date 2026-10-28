import { Link } from 'react-router-dom';
import { Lock, Mail, ArrowRight, ExternalLink, ShieldCheck, PackageCheck } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { COMPANY } from '@/data/company';
import PageHeader from '@/components/PageHeader';

export default function ProcurementPortal() {
  useSeo({
    title: 'Procurement Portal',
    description:
      'Access the VTC procurement portal for MRO supplies through our Authorized Grainger Reseller program. Contact us for account access and ordering support.',
    path: '/procurement-portal',
  });

  return (
    <>
      <PageHeader
        title="Procurement Portal"
        eyebrow="Customer Access"
        description="Veterans Trading Company provides procurement services through our Authorized Grainger Reseller program. Access to the ordering portal requires an authorized account."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Procurement Portal' }]}
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Portal access card */}
          <div className="card overflow-hidden">
            <div className="bg-navy-900 p-8">
              <Lock className="h-10 w-10 text-accent-500" />
              <h2 className="mt-4 text-2xl font-bold text-white">Authorized Portal Access</h2>
              <p className="mt-2 text-sm text-navy-200">
                The VTC procurement portal is available to authorized customers with an active account.
                If you have an existing account, please proceed to the portal.
              </p>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy-600" />
                  <div>
                    <p className="font-semibold text-navy-900">Secure &amp; Authorized</p>
                    <p className="text-sm text-slate-600">
                      Portal access is managed through authorized customer accounts only.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PackageCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy-600" />
                  <div>
                    <p className="font-semibold text-navy-900">MRO Supplies via Grainger</p>
                    <p className="text-sm text-slate-600">
                      Access Grainger's full catalog through VTC's Authorized Reseller program.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy-600" />
                  <div>
                    <p className="font-semibold text-navy-900">Need Access?</p>
                    <p className="text-sm text-slate-600">
                      Email{' '}
                      <a
                        href={`mailto:${COMPANY.procurementPortalEmail}`}
                        className="font-semibold text-navy-700 hover:underline"
                      >
                        {COMPANY.procurementPortalEmail}
                      </a>{' '}
                      and one of our account managers will get in touch.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="https://www.grainger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  Visit Grainger
                  <ExternalLink className="h-4 w-4" />
                </a>
                <Link to="/contact" className="btn-outline w-full">
                  Contact Us for Access
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Info column */}
          <div>
            <h2 className="text-2xl font-bold text-navy-900">
              Authorized Grainger Reseller Program
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Veterans Trading Company is an Authorized Grainger Reseller. Through this program, VTC helps
              your organization:
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Save time and money by consolidating suppliers',
                'Manage inventory effectively',
                'Operate a safer and more sustainable facility with dependable products',
                'Integrate and automate your procurement processes',
                'Capture and report diversity spend by line item detail',
                'Meet your socioeconomic procurement goals',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy-600" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl bg-slate-50 p-6">
              <h3 className="font-bold text-navy-900">Benefits of Ordering Through VTC</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                  Direct order placement through our team
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                  Access to Grainger's large selection of MRO supplies
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                  Access to Grainger's logistics network
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                  24/7 customer support and training resources
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                  Competitively priced contracts
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                  Auditable and reportable diversity spend by line item
                </li>
              </ul>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-slate-400">
              Authorized Grainger Resellers are solely responsible for obtaining and maintaining their
              respective Diverse Business Enterprise certification(s) with federal, state, and/or local
              government certifying entities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
