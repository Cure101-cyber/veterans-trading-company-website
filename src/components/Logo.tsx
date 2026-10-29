import { Shield } from 'lucide-react';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="/" className="flex items-center gap-3 group" aria-label="Veterans Trading Company Inc. home">
      <span className="flex h-11 w-16 items-center justify-center overflow-hidden rounded-lg bg-white shadow-md transition-transform group-hover:scale-105">
        <img src="/image.png" alt="Veterans Trading Company Inc. logo" className="h-full w-full object-contain" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-base font-bold tracking-tight text-navy-900 ${className}`}>
          Veterans Trading Company
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent-600">
          Inc.
        </span>
      </span>
    </a>
  );
}
