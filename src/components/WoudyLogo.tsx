import React from 'react';
import { WoudyWordmark } from './WoudyWordmark';

interface WoudyLogoMarkProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
}

/**
 * Official Woudy Logomark
 * Vector reproduction based on brand identity asset
 */
export const WoudyLogoMark: React.FC<WoudyLogoMarkProps> = ({
  color = '#FF5400',
  className = 'w-9 h-9',
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 160 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Logo Woudy"
      {...props}
    >
      {/* Outer sculpted body with symmetrical eye cutouts */}
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="
          M 44 14
          L 116 14
          C 134 14 148 28 148 46
          C 148 64 134 82 114 82
          C 100 82 92 71 80 58
          C 68 71 60 82 46 82
          C 26 82 12 64 12 46
          C 12 28 26 14 44 14
          Z
          M 47 30
          C 38.5 30 32.5 36 32.5 44.5
          L 32.5 51.5
          C 32.5 60 38.5 66 47 66
          C 55.5 66 61.5 60 61.5 51.5
          L 61.5 44.5
          C 61.5 36 55.5 30 47 30
          Z
          M 113 30
          C 104.5 30 98.5 36 98.5 44.5
          L 98.5 51.5
          C 98.5 60 104.5 66 113 66
          C 121.5 66 127.5 60 127.5 51.5
          L 127.5 44.5
          C 127.5 36 121.5 30 113 30
          Z
        "
      />
      {/* Bottom central anchor dot */}
      <circle cx="80" cy="78" r="9.5" fill={color} />
    </svg>
  );
};

interface WoudyLogoProps {
  variant?: 'navbar' | 'footer' | 'compact' | 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const WoudyLogo: React.FC<WoudyLogoProps> = ({
  variant = 'navbar',
  className = '',
  showSubtitle = false
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <WoudyWordmark className="h-9 sm:h-10 w-auto" color="#FF5400" />
    </div>
  );
};
