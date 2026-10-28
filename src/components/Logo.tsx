import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className="flex items-center gap-3 group" aria-label="Veterans Trading Company Inc. home">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-800 text-white shadow-md transition-transform group-hover:scale-105">
        <Shield className="h-6 w-6" strokeWidth={2.5} />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-base font-bold tracking-tight text-navy-900 ${className}`}>
          Veterans Trading Company
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent-600">
          Inc.
        </span>
      </span>
    </Link>
  );
}
