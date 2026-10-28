import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Shield, ArrowUpRight } from 'lucide-react';
import { COMPANY, NAV_ITEMS } from '@/data/company';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-700 text-white">
                <Shield className="h-6 w-6" strokeWidth={2.5} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-bold tracking-tight text-white">
                  Veterans Trading Company
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent-500">
                  Inc.
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-navy-300">
              {COMPANY.description}
            </p>
            <a
              href={COMPANY.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy-200 hover:text-white transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-navy-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Resources</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  to="/procurement-portal"
                  className="text-sm text-navy-300 hover:text-white transition-colors"
                >
                  Procurement Portal
                </Link>
              </li>
              <li>
                <Link
                  to="/suppliers"
                  className="text-sm text-navy-300 hover:text-white transition-colors"
                >
                  Supplier Documents
                </Link>
              </li>
              <li>
                <Link
                  to="/quality"
                  className="text-sm text-navy-300 hover:text-white transition-colors"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-sm text-navy-300 hover:text-white transition-colors"
                >
                  News &amp; Awards
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-start gap-3 text-navy-300 hover:text-white transition-colors"
                >
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 text-navy-300 hover:text-white transition-colors"
                >
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-navy-300">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500" />
                  <address className="not-italic leading-relaxed">
                    <span className="block font-medium text-navy-200">{COMPANY.name}</span>
                    {COMPANY.address.line1}
                    <br />
                    {COMPANY.address.line2}
                    <br />
                    {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-navy-400 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>ISO 9001:2015 &middot; AS9100D Certified</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Get in Touch
              <ArrowUpRight className="ml-1 inline h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
