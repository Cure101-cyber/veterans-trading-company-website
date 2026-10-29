import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { NAV_ITEMS, ABOUT_NAV_ITEM, ABOUT_SUB_NAV_ITEMS, COMPANY } from '@/data/company';
import Logo from './Logo';

function isCurrent(path: string): boolean {
  return window.location.pathname === path || (path !== '/' && window.location.pathname.startsWith(path));
}

const LINK_BASE = 'rounded-md px-3 py-2 text-sm font-medium transition-colors';
const LINK_ACTIVE = 'bg-navy-50 text-navy-900';
const LINK_IDLE = 'text-slate-600 hover:bg-slate-50 hover:text-navy-800';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
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

  const [homeItem, ...otherItems] = NAV_ITEMS;
  const aboutActive = [ABOUT_NAV_ITEM, ...ABOUT_SUB_NAV_ITEMS].some((item) => isCurrent(item.path));

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
          <a href={homeItem.path} className={`${LINK_BASE} ${isCurrent(homeItem.path) ? LINK_ACTIVE : LINK_IDLE}`}>{homeItem.label}</a>
          <div className="relative" onMouseLeave={() => setAboutOpen(false)}>
            <div className={`flex items-center rounded-md transition-colors ${aboutActive ? LINK_ACTIVE : LINK_IDLE}`}>
              <a href={ABOUT_NAV_ITEM.path} className="rounded-l-md py-2 pl-3 pr-1 text-sm font-medium">{ABOUT_NAV_ITEM.label}</a>
              <button type="button" onClick={() => setAboutOpen((value) => !value)} className="rounded-r-md py-2 pl-1 pr-2.5" aria-expanded={aboutOpen} aria-label="Show About Us pages">
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {aboutOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-60 rounded-lg border border-slate-200 bg-white p-2 shadow-xl">
                  {ABOUT_SUB_NAV_ITEMS.map((item) => (
                    <a key={item.path} href={item.path} className={`block rounded-md px-3 py-2.5 text-sm font-medium ${isCurrent(item.path) ? LINK_ACTIVE : 'text-slate-700 hover:bg-navy-50 hover:text-navy-900'}`}>{item.label}</a>
                  ))}
                </div>
              </div>
            )}
          </div>
          {otherItems.map((item) => (
            <a key={item.path} href={item.path} className={`${LINK_BASE} ${isCurrent(item.path) ? LINK_ACTIVE : LINK_IDLE}`}>{item.label}</a>
          ))}
        </div>
        <div className="hidden items-center gap-3 xl:flex">
          <a href="/contact/" className="btn-accent text-sm">Get in Touch <ArrowRight className="h-4 w-4" /></a>
        </div>
        <button type="button" className="flex h-10 w-10 items-center justify-center rounded-md text-navy-800 hover:bg-navy-50 xl:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white xl:hidden">
          <div className="container-page max-h-[calc(100vh-4rem)] overflow-y-auto py-4">
            <div className="flex flex-col gap-1">
              <a href={homeItem.path} className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50">{homeItem.label}</a>
              <div className="flex items-center justify-between rounded-lg hover:bg-slate-50">
                <a href={ABOUT_NAV_ITEM.path} className="flex-1 px-4 py-3 text-base font-medium text-slate-700">{ABOUT_NAV_ITEM.label}</a>
                <button type="button" onClick={() => setMobileAboutOpen((value) => !value)} className="px-4 py-3 text-slate-600" aria-expanded={mobileAboutOpen} aria-label="Show About Us pages">
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {mobileAboutOpen && (
                <div className="ml-4 border-l-2 border-navy-100 pl-3">
                  {ABOUT_SUB_NAV_ITEMS.map((item) => <a key={item.path} href={item.path} className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50">{item.label}</a>)}
                </div>
              )}
              {otherItems.map((item) => <a key={item.path} href={item.path} className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50">{item.label}</a>)}
            </div>
            <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
              <a href="/contact/" className="btn-accent w-full">Get in Touch <ArrowRight className="h-4 w-4" /></a>
              <div className="flex flex-col gap-1 text-sm">
                <a href={COMPANY.phoneHref} className="font-medium text-navy-700">{COMPANY.phone}</a>
                <a href={`mailto:${COMPANY.email}`} className="font-medium text-navy-700">{COMPANY.email}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
