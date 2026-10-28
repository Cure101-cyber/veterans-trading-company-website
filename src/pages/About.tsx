import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Award, HandshakeIcon, Building2 } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { COMPANY } from '@/data/company';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';

const HISTORY_IMG =
  'https://images.pexels.com/photos/4483775/pexels-photo-4483775.jpeg?auto=compress&cs=tinysrgb&w=1200';

const TIMELINE = [
  {
    year: '2005',
    title: 'Founded',
    description:
      'Veterans Trading Company (VTC) was established by founders with extensive experience in supply chain management and industrial distribution.',
  },
  {
    year: 'Growth',
    title: 'Strategic Partnerships',
    description:
      'VTC forged strong strategic partnerships with prominent aerospace organizations including Lockheed Martin, The Boeing Company, Northrop Grumman, and BAE Systems.',
  },
  {
    year: '2021',
    title: 'Lockheed Martin Outstanding Small Business Award',
    description:
      'Lockheed Martin selected VTC as a recipient of their Outstanding Small Business Award, one of 12 given to Outstanding Small Business Suppliers.',
  },
  {
    year: '2022',
    title: 'BAE Systems Silver Tier Award',
    description:
      'VTC received a Silver Tier Award for exceptional performance and contributions to supply chain success, processing over 390,000 deliveries.',
  },
];

export default function About() {
  useSeo({
    title: 'About Us',
    description:
      'Founded in 2005, Veterans Trading Company Inc. is a Service-Disabled Veteran-Owned Small Business providing integrated supply chain solutions to commercial firms and Federal prime contractors.',
    path: '/about',
  });

  return (
    <>
      <PageHeader
        title="Our History"
        eyebrow="About Veterans Trading Company"
        description="A Service-Disabled Veteran-Owned Small Business delivering integrated supply chain solutions and procurement support programs to commercial firms and Federal prime contractors."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'About Us' }]}
      />

      {/* Story */}
      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-900">
              Delivering on what we promised, time after time.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Veterans Trading Company (VTC) was originally established in {COMPANY.founded}. Its
                founders, all with extensive experience in the supply chain management and industrial
                distribution industry, focused their energies on providing meticulous attention to detail in
                the areas of on-time performance, order accuracy, and level of service.
              </p>
              <p>
                Their goal was straightforward: deliver the product the customer needed, to the location
                where it was needed, at the precise time it was needed.
              </p>
              <p>
                It didn't take long for VTC to earn the reputation of being a competent, reliable, and
                trustworthy company — one that delivered on what it promised, time after time.
              </p>
              <p>
                Today, VTC has forged strong strategic partnerships with several prominent aerospace
                business organizations, including Lockheed Martin, The Boeing Company, Northrop Grumman,
                and BAE Systems. Industry peers have taken note of VTC's accomplishments, with several
                awards for designing and implementing innovative supply chain models.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={HISTORY_IMG}
              alt="VTC warehouse operations"
              className="h-full w-full rounded-2xl object-cover shadow-lg"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-navy-900 p-6 text-white shadow-xl md:block">
              <Building2 className="h-8 w-8 text-accent-500" />
              <p className="mt-2 font-display text-2xl font-bold">{COMPANY.founded}</p>
              <p className="text-sm text-navy-300">Year Founded</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 section-pad">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="card p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-800 text-white">
                <Target className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy-900">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To provide affordable supply chain solutions while serving as a trusted partner that
                ensures enhanced services to our customers through innovation and quality.
              </p>
            </div>
            <div className="card p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-800 text-white">
                <Eye className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy-900">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To be the most trusted and respected supply chain partner for commercial firms and Federal
                prime contractors, recognized for quality, innovation, and service-disabled veteran
                leadership.
              </p>
            </div>
            <div className="card p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-800 text-white">
                <HandshakeIcon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy-900">Our Values</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Integrity, reliability, and meticulous attention to detail in everything we do. Our
                employees take pride and ownership of their work — they are our most valuable asset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Milestones</span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 md:text-4xl">
              A Legacy of Excellence
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative">
                <div className="card-hover h-full p-6">
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-accent-500" />
                    <span className="font-display text-lg font-bold text-navy-900">{item.year}</span>
                  </div>
                  <h3 className="mt-3 text-base font-bold text-navy-800">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to learn more about VTC?"
        description="Explore our services, quality systems, or reach out directly to our team."
      />
    </>
  );
}
