import React from "react";

interface WoudyWordmarkProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
}

/**
 * Woudy Authentic Hand-drawn Brush Script Wordmark
 * Faithfully vectorized from the user brand asset (1000004010.png)
 * Features the signature energetic tall ascender on 'W', fluid connected cursive 'o', 'u', 'd',
 * and the graceful descending loop tail on 'y'.
 */
export const WoudyWordmark: React.FC<WoudyWordmarkProps> = ({
  color = "#FF5400",
  className = "h-9 w-auto",
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 640 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Woudy"
      {...props}
    >
      <g
        stroke={color}
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Letter W - Scoop 1, Scoop 2, and towering right ascender from 1000004010.png */}
        <path d="
          M 52 110
          C 44 145, 38 185, 48 214
          C 56 236, 76 238, 92 210
          C 106 182, 114 135, 118 112
        " />
        <path d="
          M 118 112
          C 120 148, 122 198, 138 222
          C 152 242, 175 238, 188 200
          C 205 145, 222 75, 232 24
        " />

        {/* Fluid connection from W to 'o' */}
        <path d="
          M 218 135
          C 214 175, 206 205, 196 226
          C 192 235, 202 240, 214 235
          C 228 228, 238 212, 246 195
        " />

        {/* Letter 'o' - Round counter-clockwise loop */}
        <path d="
          M 246 195
          C 232 170, 244 135, 268 135
          C 292 135, 305 165, 305 195
          C 305 225, 280 238, 258 234
          C 240 230, 232 208, 242 185
          C 252 162, 275 148, 295 152
          C 310 156, 318 172, 324 186
        " />

        {/* Letter 'u' - Double scoop flowing smoothly */}
        <path d="
          M 324 186
          C 328 208, 334 236, 354 236
          C 372 236, 380 212, 386 186
        " />
        <path d="
          M 386 186
          C 390 208, 396 236, 416 236
          C 434 236, 442 212, 448 186
        " />

        {/* Letter 'd' - Round belly + tall straight ascender */}
        <path d="
          M 448 186
          C 438 208, 432 236, 452 236
          C 472 236, 482 210, 486 186
          C 486 162, 472 152, 456 156
          C 442 160, 438 180, 442 205
        " />
        <path d="
          M 486 86
          L 486 232
          C 488 238, 498 240, 506 234
        " />

        {/* Letter 'y' - Trough + elegant curved descender loop */}
        <path d="
          M 508 186
          C 512 208, 518 236, 536 236
          C 552 236, 560 212, 566 186
        " />
        <path d="
          M 566 186
          L 548 268
          C 538 312, 516 332, 492 330
          C 470 328, 462 308, 478 285
          C 498 256, 545 228, 592 208
        " />
      </g>
    </svg>
  );
};

export default WoudyWordmark;
