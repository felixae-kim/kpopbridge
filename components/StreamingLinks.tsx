
import React from 'react';
import { DSP } from '../types';

interface StreamingLinksProps {
  dsps: DSP[];
}

const StreamingLinks: React.FC<StreamingLinksProps> = ({ dsps }) => {
  return (
    <div className="w-full max-w-xl mx-auto px-6 -mt-40 md:-mt-48 relative z-20">
      {/* Refined Comeback Banner - Light Theme Optimized */}
      <div className="flex justify-center mb-8">
        <div className="glass px-8 py-4 rounded-3xl border border-white flex flex-col items-center text-center gap-2 bg-white/40 shadow-xl backdrop-blur-2xl">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-pink-400 animate-ping"></span>
            <p className="text-[10px] font-black tracking-[0.5em] text-pink-500 uppercase">
              Official Comeback
            </p>
          </div>
          <p className="text-[12px] md:text-sm font-black tracking-[0.2em] text-zinc-800 uppercase whitespace-nowrap">
            2025.01.05 11TH MINI ALBUM
          </p>
        </div>
      </div>

      {/* Streaming Links Grid - Milky White Glass */}
      <div className="glass p-6 md:p-8 rounded-[40px] grid grid-cols-4 gap-4 md:gap-6 shadow-[0_20px_50px_rgba(255,182,193,0.3)] border-white bg-white/30 backdrop-blur-3xl">
        {dsps.map((dsp) => (
          <a
            key={dsp.name}
            href={dsp.url}
            target="_blank"
            rel="noopener noreferrer"
            title={dsp.name}
            className={`${dsp.color} aspect-square flex items-center justify-center rounded-[24px] transition-all duration-500 hover:scale-110 hover:-translate-y-2 active:scale-95 shadow-lg group relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <svg 
              viewBox="0 0 24 24" 
              className={`w-7 h-7 md:w-9 md:h-9 fill-current ${dsp.textColor} relative z-10 transition-transform duration-500 group-hover:rotate-6`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={dsp.icon} />
            </svg>
          </a>
        ))}
      </div>
      
      <div className="flex flex-col items-center mt-8 gap-2">
        <p className="text-[10px] text-pink-500/50 font-black tracking-[0.5em] uppercase">
          ✦ Tap to Stream RE : LOVE ✦
        </p>
      </div>
    </div>
  );
};

export default StreamingLinks;
