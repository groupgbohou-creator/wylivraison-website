import type { ReactNode } from 'react';

function StatusBar({ tone }: { tone: 'dark' | 'light' }) {
  return (
    <div
      className={`absolute inset-x-0 top-0 z-20 flex h-11 items-center justify-between px-7 pt-1 text-[12px] font-semibold ${
        tone === 'dark' ? 'text-ink' : 'text-white'
      }`}
    >
      <span>9:41</span>
      <span className="flex items-center gap-1.5" aria-hidden="true">
        <svg viewBox="0 0 18 12" className="h-[10px] w-auto" fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="0.8" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="0.8" />
          <rect x="10" y="3" width="3" height="9" rx="0.8" />
          <rect x="15" y="0" width="3" height="12" rx="0.8" />
        </svg>
        <svg viewBox="0 0 16 12" className="h-[10px] w-auto" fill="currentColor">
          <path d="M8 2.4c2.3 0 4.4.9 6 2.4l1.2-1.3A10.4 10.4 0 0 0 8 .6 10.4 10.4 0 0 0 .8 3.5L2 4.8a8.6 8.6 0 0 1 6-2.4Zm0 3.6c1.3 0 2.5.5 3.4 1.3l1.2-1.3A6.6 6.6 0 0 0 8 4.2 6.6 6.6 0 0 0 3.4 6l1.2 1.3c.9-.8 2.1-1.3 3.4-1.3Zm0 3.5-2.2-1.6c.6-.5 1.4-.8 2.2-.8s1.6.3 2.2.8L8 9.5Z" />
        </svg>
        <span className="relative h-[11px] w-[22px] rounded-[3.5px] border border-current/40 p-[1.5px]">
          <span className="block h-full w-[75%] rounded-[1.5px] bg-current" />
        </span>
      </span>
    </div>
  );
}

export function PhoneFrame({
  children,
  /** Doit contenir la largeur du téléphone (la hauteur suit le ratio). */
  className = 'w-[290px]',
  statusTone = 'dark',
  screenClassName = 'bg-cream',
}: {
  children: ReactNode;
  className?: string;
  statusTone?: 'dark' | 'light';
  screenClassName?: string;
}) {
  return (
    <div
      className={`relative aspect-[9/19.4] shrink-0 rounded-[48px] bg-ink p-[9px] shadow-[0_60px_120px_-40px_rgba(22,14,9,0.6),0_30px_80px_-50px_rgba(255,84,0,0.65)] ring-1 ring-white/10 ${className}`}
    >
      <span aria-hidden="true" className="absolute -left-[3px] top-[110px] h-9 w-[3px] rounded-l bg-ink-700" />
      <span aria-hidden="true" className="absolute -left-[3px] top-[165px] h-14 w-[3px] rounded-l bg-ink-700" />
      <span aria-hidden="true" className="absolute -right-[3px] top-[140px] h-20 w-[3px] rounded-r bg-ink-700" />
      <div className={`relative isolate h-full w-full overflow-hidden rounded-[40px] text-left text-ink ${screenClassName}`}>
        <StatusBar tone={statusTone} />
        <div aria-hidden="true" className="absolute left-1/2 top-2.5 z-30 h-[26px] w-[90px] -translate-x-1/2 rounded-full bg-black" />
        {children}
        <div aria-hidden="true" className="absolute bottom-1.5 left-1/2 z-30 h-1 w-24 -translate-x-1/2 rounded-full bg-ink/80" />
      </div>
    </div>
  );
}
