import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, COMPANY } from '@/data/company';
import Logo from './Logo';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-white'
      }`}
    >
      {/* Top utility bar */}
      <div className="hidden bg-navy-900 text-navy-100 lg:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <p className="font-medium tracking-wide">
            Service-Disabled Veteran-Owned Small Business &middot; SBA Certified HUBZone
          </p>
          <div className="flex items-center gap-5">
            <a href={COMPANY.phoneHref} className="hover:text-white transition-colors">
              {COMPANY.phone}
            </a>
            <span className="text-navy-600">|</span>
            <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
              {COMPANY.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-page flex h-16 items-center justify-between lg:h-20" aria-label="Primary">
        <Logo />

        <div className="hidden items-center gap-1 xl:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-navy-50 text-navy-900'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-navy-800'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <Link to="/procurement-portal" className="btn-outline text-sm">
            Procurement Portal
          </Link>
          <Link to="/contact" className="btn-accent text-sm">
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-navy-800 hover:bg-navy-50 xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white xl:hidden">
          <div className="container-page max-h-[calc(100vh-4rem)] overflow-y-auto py-4">
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-navy-50 text-navy-900'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                to="/procurement-portal"
                className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
              >
                Procurement Portal
              </NavLink>
            </div>
            <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
              <Link to="/contact" className="btn-accent w-full">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="flex flex-col gap-1 text-sm text-slate-500">
                <a href={COMPANY.phoneHref} className="font-medium text-navy-700">
                  {COMPANY.phone}
                </a>
                <a href={`mailto:${COMPANY.email}`} className="font-medium text-navy-700">
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
