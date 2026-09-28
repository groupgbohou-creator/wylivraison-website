import React from 'react';

interface AppStoreLogoProps {
  className?: string;
  variant?: 'badge' | 'full' | 'icon';
  theme?: 'dark' | 'light';
}

/**
 * Official Apple App Store Logo
 * Matches user-provided asset (Image 2) with the iconic blue squircle,
 * white 'A' symbol, and Apple logo + 'App Store' wordmark.
 */
export const AppStoreLogo: React.FC<AppStoreLogoProps> = ({
  className = 'h-10 w-auto',
  variant = 'badge',
  theme = 'dark'
}) => {
  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 340 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="App Store Icon"
      >
        <defs>
          <linearGradient id="as_blue_icon" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22B0FF" />
            <stop offset="100%" stopColor="#0867F5" />
          </linearGradient>
        </defs>

        <rect width="340" height="340" rx="76" fill="url(#as_blue_icon)" />
        <g stroke="#ffffff" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
          <line x1="115" y1="255" x2="170" y2="130" />
          <line x1="170" y1="130" x2="225" y2="255" />
          <line x1="85" y1="215" x2="255" y2="215" />
          <line x1="155" y1="95" x2="170" y2="130" />
        </g>
      </svg>
    );
  }

  if (variant === 'full') {
    // Exact vertical reproduction matching uploaded Image 2
    return (
      <svg
        viewBox="0 0 500 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Apple App Store"
      >
        <defs>
          <linearGradient id="as_blue_f" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22B0FF" />
            <stop offset="100%" stopColor="#0867F5" />
          </linearGradient>
        </defs>

        <g transform="translate(80, 20)">
          <rect width="340" height="340" rx="76" fill="url(#as_blue_f)" />
          <g stroke="#ffffff" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
            <line x1="115" y1="255" x2="170" y2="130" />
            <line x1="170" y1="130" x2="225" y2="255" />
            <line x1="85" y1="215" x2="255" y2="215" />
            <line x1="155" y1="95" x2="170" y2="130" />
          </g>
        </g>

        <g fill="#000000">
          <path
            transform="translate(88, 435) scale(0.72)"
            d="M29.5 24.5C29.4 18.2 34.6 15.1 34.9 14.9C31.9 10.6 27.3 10 25.7 9.9C21.8 9.5 18 12.2 16 12.2C14 12.2 10.9 9.9 7.7 10C3.5 10.1 -0.4 12.6 -2.5 16.3C-6.8 23.8 -3.6 34.9 0.5 40.8C2.5 43.7 4.8 46.9 8 46.8C11 46.7 12.2 44.8 15.8 44.8C19.4 44.8 20.4 46.8 23.6 46.7C26.9 46.6 28.9 43.8 30.9 40.9C33.2 37.5 34.1 34.2 34.3 34C34.1 33.9 29.6 32.2 29.5 24.5ZM21.4 6.7C23.1 4.6 24.2 1.7 23.9 -1.2C21.4 -1.1 18.3 0.5 16.6 2.5C15.1 4.2 13.8 7.2 14.2 10C16.9 10.2 19.8 8.8 21.4 6.7Z"
          />
          <text
            x="162"
            y="478"
            fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Nunito', system-ui, sans-serif"
            fontSize="56"
            fontWeight="700"
            letterSpacing="-1"
          >
            App Store
          </text>
        </g>
      </svg>
    );
  }

  // Horizontal badge variant
  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 340 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 shrink-0 rounded-xl"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="as_blue_b" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22B0FF" />
            <stop offset="100%" stopColor="#0867F5" />
          </linearGradient>
        </defs>

        <rect width="340" height="340" rx="76" fill="url(#as_blue_b)" />
        <g stroke="#ffffff" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
          <line x1="115" y1="255" x2="170" y2="130" />
          <line x1="170" y1="130" x2="225" y2="255" />
          <line x1="85" y1="215" x2="255" y2="215" />
          <line x1="155" y1="95" x2="170" y2="130" />
        </g>
      </svg>
      <div className="text-left">
        <span className={`text-[10px] block uppercase leading-none font-semibold ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
          Télécharger sur
        </span>
        <span className={`text-sm font-extrabold ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
          App Store
        </span>
      </div>
    </div>
  );
};
