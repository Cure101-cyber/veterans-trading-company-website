import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { NEWS_ITEMS } from '@/data/company';
import PageHeader from '@/components/PageHeader';

export default function News() {
  useSeo({
    title: 'News & Awards',
    description:
      "The latest news, awards, and community updates from Veterans Trading Company Inc., including recognition from Lockheed Martin, BAE Systems, and community initiatives.",
    path: '/news',
  });

  const [selected, setSelected] = useState<string | null>(null);

  const selectedItem = selected ? NEWS_ITEMS.find((n) => n.id === selected) : null;

  if (selectedItem) {
    return (
      <>
        <PageHeader
          title={selectedItem.title}
          eyebrow={selectedItem.category}
          description={selectedItem.excerpt}
          crumbs={[
            { label: 'Home', path: '/' },
            { label: 'News', path: '/news' },
            { label: selectedItem.title },
          ]}
        />
        <section className="section-pad">
          <div className="container-page max-w-3xl">
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {selectedItem.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                {selectedItem.category}
              </span>
            </div>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              {selectedItem.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mt-10 inline-flex items-center gap-2 font-semibold text-navy-700 hover:text-navy-900"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to all news
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="VTC News"
        eyebrow="News & Awards"
        description="The Veterans Trading Company news bulletin board — awards, recognition, and community updates."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'News' }]}
      />

      <section className="section-pad">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-2">
            {NEWS_ITEMS.map((item) => (
              <article key={item.id} className="card-hover overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-navy-800 to-navy-950">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Tag className="h-16 w-16 text-white/10" />
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy-950">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </div>
                  <h2 className="mt-3 text-xl font-bold text-navy-900">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.excerpt}</p>
                  <button
                    type="button"
                    onClick={() => setSelected(item.id)}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-navy-900"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
