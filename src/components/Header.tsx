import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { NAV_ITEMS, ABOUT_NAV_ITEMS, COMPANY } from '@/data/company';
import Logo from './Logo';

function isCurrent(path: string): boolean {
  return window.location.pathname === path || (path !== '/' && window.location.pathname.startsWith(path));
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const aboutActive = ABOUT_NAV_ITEMS.some((item) => isCurrent(item.path));

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-white'}`}>
      <div className="hidden bg-navy-900 text-navy-100 lg:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <p className="font-medium tracking-wide">Service-Disabled Veteran-Owned Small Business &middot; SBA Certified HUBZone</p>
          <div className="flex items-center gap-5">
            <a href={COMPANY.phoneHref} className="hover:text-white transition-colors">{COMPANY.phone}</a>
            <span className="text-navy-600">|</span>
            <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">{COMPANY.email}</a>
          </div>
        </div>
      </div>

      <nav className="container-page flex h-16 items-center justify-between lg:h-20" aria-label="Primary">
        <Logo />
        <div className="hidden items-center gap-1 xl:flex">
          {NAV_ITEMS.slice(0, 1).map((item) => (
            <a key={item.path} href={item.path} className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${isCurrent(item.path) ? 'bg-navy-50 text-navy-900' : 'text-slate-600 hover:bg-slate-50 hover:text-navy-800'}`}>{item.label}</a>
          ))}
          <div className="relative" onMouseLeave={() => setAboutOpen(false)}>
            <button type="button" onClick={() => setAboutOpen((value) => !value)} className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${aboutActive ? 'bg-navy-50 text-navy-900' : 'text-slate-600 hover:bg-slate-50 hover:text-navy-800'}`} aria-expanded={aboutOpen}>
              About Us <ChevronDown className={`h-4 w-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
            </button>
            {aboutOpen && (
              <div className="absolute left-0 top-full w-60 rounded-lg border border-slate-200 bg-white p-2 shadow-xl">
                {ABOUT_NAV_ITEMS.map((item) => <a key={item.path} href={item.path} className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-navy-50 hover:text-navy-900">{item.label}</a>)}
              </div>
            )}
          </div>
          {NAV_ITEMS.slice(1).map((item) => (
            <a key={item.path} href={item.path} className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${isCurrent(item.path) ? 'bg-navy-50 text-navy-900' : 'text-slate-600 hover:bg-slate-50 hover:text-navy-800'}`}>{item.label}</a>
          ))}
        </div>
        <div className="hidden items-center gap-3 xl:flex">
          <a href="/careers/" className="btn-outline text-sm">Careers</a>
          <a href="/contact/" className="btn-accent text-sm">Get in Touch <ArrowRight className="h-4 w-4" /></a>
        </div>
        <button type="button" className="flex h-10 w-10 items-center justify-center rounded-md text-navy-800 hover:bg-navy-50 xl:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && <div className="border-t border-slate-100 bg-white xl:hidden"><div className="container-page max-h-[calc(100vh-4rem)] overflow-y-auto py-4"><div className="flex flex-col gap-1">
        {NAV_ITEMS.slice(0, 1).map((item) => <a key={item.path} href={item.path} className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50">{item.label}</a>)}
        <button type="button" onClick={() => setAboutOpen((value) => !value)} className="flex items-center justify-between rounded-lg px-4 py-3 text-left text-base font-medium text-slate-700 hover:bg-slate-50">About Us <ChevronDown className={`h-4 w-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} /></button>
        {aboutOpen && <div className="ml-4 border-l-2 border-navy-100 pl-3">{ABOUT_NAV_ITEMS.map((item) => <a key={item.path} href={item.path} className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50">{item.label}</a>)}</div>}
        {NAV_ITEMS.slice(1).map((item) => <a key={item.path} href={item.path} className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50">{item.label}</a>)}
      </div><div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4"><a href="/contact/" className="btn-accent w-full">Get in Touch <ArrowRight className="h-4 w-4" /></a><div className="flex flex-col gap-1 text-sm"><a href={COMPANY.phoneHref} className="font-medium text-navy-700">{COMPANY.phone}</a><a href={`mailto:${COMPANY.email}`} className="font-medium text-navy-700">{COMPANY.email}</a></div></div></div></div>}
    </header>
  );
}
