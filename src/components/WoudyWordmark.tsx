import React from "react";

interface WoudyWordmarkProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
}

/**
 * Woudy Authentic Hand-drawn Brush Script Wordmark
 * Faithfully vectorized from the brand photo (1000004010.png)
 * Features the distinctive energetic tall ascender, connected cursive loops,
 * and playful rounded descender terminal.
 */
export const WoudyWordmark: React.FC<WoudyWordmarkProps> = ({
  color = "#FF5400",
  className = "h-9 w-auto",
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 520 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Woudy"
      {...props}
    >
      <g
        stroke={color}
        strokeWidth="25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Letter W - Left lobe, middle lobe, and towering signature ascender */}
        <path d="
          M 46 88
          C 40 125, 34 168, 44 200
          C 50 220, 68 226, 80 205
          C 92 184, 98 135, 100 115
          C 102 142, 100 195, 114 216
          C 126 235, 145 228, 154 200
          C 170 148, 182 82, 192 34
        " />

        {/* Connection from base of W to "o" */}
        <path d="
          M 160 195
          C 174 212, 194 220, 214 206
        " />

        {/* Letter o - Oval loop with smooth counter-clockwise flow */}
        <path d="
          M 218 178
          C 204 150, 222 120, 246 122
          C 270 124, 276 154, 272 178
          C 268 204, 238 214, 220 186
          C 214 176, 218 152, 238 140
          C 255 130, 276 142, 282 165
        " />

        {/* Letter u - Continuous double trough connecting to d */}
        <path d="
          M 284 165
          C 290 195, 302 216, 318 214
          C 334 212, 342 185, 345 152
          C 346 178, 350 214, 368 214
          C 384 214, 396 188, 404 155
        " />

        {/* Letter d - Distinctive energetic arched hump */}
        <path d="
          M 404 155
          C 410 125, 424 106, 440 112
          C 454 118, 452 148, 444 180
          C 438 205, 448 218, 460 214
        " />

        {/* Letter y - Slanted body and sweeping below-baseline descender flick */}
        <path d="
          M 460 214
          C 475 192, 492 152, 498 128
          C 496 155, 480 205, 466 235
          C 448 274, 432 292, 420 278
          C 410 266, 422 248, 442 232
          C 462 216, 488 190, 508 168
        " />
      </g>
    </svg>
  );
};
