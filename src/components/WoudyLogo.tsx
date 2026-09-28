import React from 'react';
import { WoudyWordmark } from './WoudyWordmark';

interface WoudyLogoMarkProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
}

/**
 * Official Woudy Logomark
 * Exact vector reproduction of the cursive initial 'W' from 1000004010.png
 * Features the signature energetic double scoop and towering ascender.
 */
export const WoudyLogoMark: React.FC<WoudyLogoMarkProps> = ({
  color = '#FF5400',
  className = 'w-9 h-9',
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 240 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Logo Woudy"
      {...props}
    >
      <g
        stroke={color}
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Left scoop */}
        <path d="M 40 95 C 32 135 28 175 42 205 C 52 225 72 225 86 195 C 98 170 106 125 110 105" />
        {/* Right scoop & towering signature ascender */}
        <path d="M 110 105 C 112 135 114 185 128 208 C 140 228 162 225 174 190 C 190 140 205 75 214 26" />
      </g>
    </svg>
  );
};

interface WoudyLogoProps {
  variant?: 'navbar' | 'footer' | 'compact' | 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const WoudyLogo: React.FC<WoudyLogoProps> = ({
  className = '',
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <WoudyWordmark className="h-9 sm:h-11 w-auto" color="#FF5400" />
    </div>
  );
};

export default WoudyLogo;
