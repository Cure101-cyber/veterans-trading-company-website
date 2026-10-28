import { Linkedin, Phone } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { LEADERS, COMPANY } from '@/data/company';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';

const GROUPS = ['Executive Leadership', 'Profit Center Directors', 'Cost Center Directors'] as const;

export default function Leadership() {
  useSeo({
    title: 'Leadership Team',
    description:
      "Meet the VTC leadership team — executives, profit center directors, and cost center directors guiding Veterans Trading Company's supply chain solutions and procurement programs.",
    path: '/leadership',
  });

  return (
    <>
      <PageHeader
        title="VTC Leadership"
        eyebrow="Our Team"
        description="To speak directly with any member of the VTC Leadership Team, please call us and provide the name of the leader you'd like to reach. You may also send us an email via our contact page."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Leadership' }]}
      >
        <div className="flex flex-wrap gap-4">
          <a href={COMPANY.phoneHref} className="btn-accent">
            <Phone className="h-4 w-4" />
            {COMPANY.phone}
          </a>
        </div>
      </PageHeader>

      {GROUPS.map((group) => {
        const leaders = LEADERS.filter((l) => l.group === group);
        return (
          <section key={group} className="section-pad">
            <div className="container-page">
              <h2 className="text-2xl font-bold text-navy-900 md:text-3xl">{group}</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {leaders.map((leader) => (
                  <div key={leader.name} className="card-hover overflow-hidden">
                    <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-navy-800 to-navy-950">
                      <span className="font-display text-5xl font-bold text-white/20">
                        {leader.name
                          .split(' ')
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join('')}
                      </span>
                      <span className="absolute bottom-0 left-0 right-0 h-1 bg-accent-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-navy-900">{leader.name}</h3>
                      <p className="text-sm font-semibold text-accent-600">{leader.title}</p>
                      <ul className="mt-4 space-y-1.5">
                        {leader.responsibilities.map((r) => (
                          <li key={r} className="text-xs leading-relaxed text-slate-500">
                            {r}
                          </li>
                        ))}
                      </ul>
                      {leader.linkedin && (
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 hover:text-navy-900"
                        >
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand />
    </>
  );
}
