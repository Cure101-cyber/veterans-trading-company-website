import { BriefcaseBusiness, Mail, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { COMPANY } from '@/data/company';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';

export default function Careers() {
  useSeo({
    title: 'Careers',
    description: 'Explore career opportunities with Veterans Trading Company Inc. Job openings will be listed here as they become available.',
    path: '/careers/',
  });

  return <>
    <PageHeader title="Build What Matters" eyebrow="Careers at VTC" description="Join a team focused on quality, reliability, and better supply chain outcomes for the organizations we serve." crumbs={[{ label: 'Home', path: '/' }, { label: 'Careers' }]} />
    <section className="section-pad"><div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
      <div><span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-800 text-white"><BriefcaseBusiness className="h-7 w-7" /></span><h2 className="mt-5 text-3xl font-bold text-navy-900">Opportunities coming soon</h2><p className="mt-4 text-base leading-relaxed text-slate-600">We are preparing this page to share open positions and future opportunities with Veterans Trading Company Inc. Check back soon for available roles.</p><p className="mt-4 text-base leading-relaxed text-slate-600">If you would like to introduce yourself to our team, send your resume and a brief note about your interests to our general contact email.</p><a href={`mailto:${COMPANY.email}`} className="btn-primary mt-7">Email Our Team <Mail className="h-4 w-4" /></a></div>
      <div className="grid gap-4 sm:grid-cols-2"><div className="card p-6"><Users className="h-8 w-8 text-accent-500" /><h3 className="mt-4 font-bold text-navy-900">People first</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">Our employees take pride and ownership in the work they perform.</p></div><div className="card p-6"><ShieldCheck className="h-8 w-8 text-accent-500" /><h3 className="mt-4 font-bold text-navy-900">Quality driven</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">We build lasting partnerships through dependable service and continuous improvement.</p></div><div className="card bg-navy-900 p-6 sm:col-span-2"><p className="text-sm font-semibold uppercase tracking-wide text-accent-400">Interested in VTC?</p><p className="mt-2 text-lg font-bold text-white">Connect with our team to learn more.</p><a href="/contact/" className="mt-4 inline-flex items-center gap-2 font-semibold text-white hover:text-accent-400">Contact Us <ArrowRight className="h-4 w-4" /></a></div></div>
    </div></section><CtaBand title="Have a question about working with VTC?" description="Reach out to our team and we will keep you informed as opportunities become available." />
  </>;
}
