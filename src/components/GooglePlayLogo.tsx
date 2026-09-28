import React from 'react';

interface GooglePlayLogoProps {
  className?: string;
  variant?: 'badge' | 'full' | 'icon';
}

/**
 * Official Google Play Logo
 * Matches the user-provided asset (Image 1) with the authentic multi-color triangle
 * and official 'Google Play' wordmark.
 */
export const GooglePlayLogo: React.FC<GooglePlayLogoProps> = ({
  className = 'h-10 w-auto',
  variant = 'badge'
}) => {
  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 380 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Google Play Icon"
      >
        <defs>
          <linearGradient id="gp_cyan_i" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C3FF" />
            <stop offset="100%" stopColor="#0077F5" />
          </linearGradient>
          <linearGradient id="gp_green_i" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E676" />
            <stop offset="100%" stopColor="#00B0FF" />
          </linearGradient>
          <linearGradient id="gp_yellow_i" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD600" />
            <stop offset="100%" stopColor="#FF9100" />
          </linearGradient>
          <linearGradient id="gp_red_i" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF334C" />
            <stop offset="100%" stopColor="#BA000D" />
          </linearGradient>
        </defs>

        <path d="M 42 28 C 30 35 24 48 24 64 L 24 336 C 24 352 30 365 42 372 L 210 200 Z" fill="url(#gp_cyan_i)" />
        <path d="M 264 146 L 42 28 C 50 24 60 25 72 32 L 282 153 Z" fill="url(#gp_green_i)" />
        <path d="M 282 153 L 340 186 C 358 196 358 204 340 214 L 282 247 L 210 200 Z" fill="url(#gp_yellow_i)" />
        <path d="M 42 372 C 32 367 25 358 24 346 L 210 200 L 282 247 L 72 368 C 60 375 50 376 42 372 Z" fill="url(#gp_red_i)" />
      </svg>
    );
  }

  if (variant === 'full') {
    // Exact vertical reproduction matching uploaded Image 1
    return (
      <svg
        viewBox="0 0 460 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Google Play"
      >
        <defs>
          <linearGradient id="gp_cyan_f" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C3FF" />
            <stop offset="100%" stopColor="#0077F5" />
          </linearGradient>
          <linearGradient id="gp_green_f" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E676" />
            <stop offset="100%" stopColor="#00B0FF" />
          </linearGradient>
          <linearGradient id="gp_yellow_f" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD600" />
            <stop offset="100%" stopColor="#FF9100" />
          </linearGradient>
          <linearGradient id="gp_red_f" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF334C" />
            <stop offset="100%" stopColor="#BA000D" />
          </linearGradient>
        </defs>

        <g transform="translate(45, 10)">
          <path d="M 42 28 C 30 35 24 48 24 64 L 24 336 C 24 352 30 365 42 372 L 210 200 Z" fill="url(#gp_cyan_f)" />
          <path d="M 264 146 L 42 28 C 50 24 60 25 72 32 L 282 153 Z" fill="url(#gp_green_f)" />
          <path d="M 282 153 L 340 186 C 358 196 358 204 340 214 L 282 247 L 210 200 Z" fill="url(#gp_yellow_f)" />
          <path d="M 42 372 C 32 367 25 358 24 346 L 210 200 L 282 247 L 72 368 C 60 375 50 376 42 372 Z" fill="url(#gp_red_f)" />
        </g>

        <g fill="#202124" fontFamily="'Google Sans', 'Product Sans', 'Nunito', system-ui, sans-serif">
          <text x="230" y="468" textAnchor="middle" fontSize="62" fontWeight="600" letterSpacing="-0.5">Google Play</text>
        </g>
      </svg>
    );
  }

  // Horizontal badge variant
  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 380 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 shrink-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gp_cyan_b" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C3FF" />
            <stop offset="100%" stopColor="#0077F5" />
          </linearGradient>
          <linearGradient id="gp_green_b" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E676" />
            <stop offset="100%" stopColor="#00B0FF" />
          </linearGradient>
          <linearGradient id="gp_yellow_b" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD600" />
            <stop offset="100%" stopColor="#FF9100" />
          </linearGradient>
          <linearGradient id="gp_red_b" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF334C" />
            <stop offset="100%" stopColor="#BA000D" />
          </linearGradient>
        </defs>

        <path d="M 42 28 C 30 35 24 48 24 64 L 24 336 C 24 352 30 365 42 372 L 210 200 Z" fill="url(#gp_cyan_b)" />
        <path d="M 264 146 L 42 28 C 50 24 60 25 72 32 L 282 153 Z" fill="url(#gp_green_b)" />
        <path d="M 282 153 L 340 186 C 358 196 358 204 340 214 L 282 247 L 210 200 Z" fill="url(#gp_yellow_b)" />
        <path d="M 42 372 C 32 367 25 358 24 346 L 210 200 L 282 247 L 72 368 C 60 375 50 376 42 372 Z" fill="url(#gp_red_b)" />
      </svg>
      <div className="text-left">
        <span className="text-[10px] text-neutral-400 block uppercase leading-none font-semibold">Disponible sur</span>
        <span className="text-sm font-extrabold text-white">Google Play</span>
      </div>
    </div>
  );
};
