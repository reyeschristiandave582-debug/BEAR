"use client";

import React from 'react';
import { Star } from 'lucide-react';

/**
 * CTAButton Component (Halloween Edition)
 * 
 * High-converting primary CTA button styled with rich Halloween orange gradients,
 * gold/orange star accents, continuous shine animation, and a thumb-friendly layout.
 */
export default function CTAButton() {
  const url = "https://giftclick.org/aff_c?offer_id=4664&aff_id=200438&source=BEAR";

  const handleClick = (e: React.MouseEvent) => {
    // For Orchids preview environment
    if (typeof window !== 'undefined' && window.parent) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
    }
  };

  return (
    <div className="relative z-10 w-full max-w-md mx-auto px-4 flex flex-col items-center mt-5 mb-2">
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group relative w-full h-[52px] sm:h-[58px] bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white rounded-full flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(249,115,22,0.45)] hover:shadow-[0_12px_30px_rgba(249,115,22,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden no-underline border border-amber-300/40 animate-pulse"
      >
        {/* Continuous Shine Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -left-full group-hover:animate-shine pointer-events-none" />

        <div className="flex items-center justify-center gap-2.5 sm:gap-3 relative z-10">
          <Star 
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#FFD700] text-[#FFD700] flex-shrink-0" 
            style={{ filter: 'drop-shadow(0 0 6px rgba(255,215,0,0.8))' }}
          />

          <span className="text-[14px] sm:text-[16px] font-black uppercase text-white tracking-[0.14em] drop-shadow-md">
            START REVIEW
          </span>

          <Star 
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#FFD700] text-[#FFD700] flex-shrink-0" 
            style={{ filter: 'drop-shadow(0 0 6px rgba(255,215,0,0.8))' }}
          />
        </div>
      </a>

      {/* Ambient Floor Glow (Orange Theme) */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-orange-500/30 blur-xl -z-10 rounded-full pointer-events-none" />
    </div>
  );
}
