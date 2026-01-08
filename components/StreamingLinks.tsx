
import React from 'react';
import { DSP } from '../types';

interface StreamingLinksProps {
  dsps: DSP[];
}

const StreamingLinks: React.FC<StreamingLinksProps> = ({ dsps }) => {
  return (
    <div className="w-full max-w-xl mx-auto px-6 -mt-32 md:-mt-40 relative z-[45]">
      {/* Refined Comeback Banner - Higher Contrast */}
      <div className="flex justify-center mb-6 md:mb-8">
        <div className="glass px-6 py-3 md:px-8 md:py-4 rounded-3xl border border-white/60 flex flex-col items-center text-center gap-1.5 bg-white/50 shadow-[0_10px_30px_rgba(255,182,193,0.2)] backdrop-blur-2xl">
          <div className="flex items-center gap-2">
            <span className="flex h-1.5 w-1.5 rounded-full bg-pink-500 animate-ping"></span>
            <p className="text-[9px] md:text-[10px] font-black tracking-[0.5em] text-pink-500 uppercase">
              Official Comeback
            </p>
          </div>
          <p className="text-[11px] md:text-sm font-black tracking-[0.15em] text-zinc-800 uppercase whitespace-nowrap">
            2025.01.05 11TH MINI ALBUM
          </p>
        </div>
      </div>

      {/* Streaming Links Grid - Improved visibility and depth */}
      <div className="glass p-5 md:p-8 rounded-[35px] md:rounded-[45px] grid grid-cols-4 gap-3 md:gap-6 shadow-[0_25px_60px_rgba(255,182,193,0.35)] border-white/80 bg-white/40 backdrop-blur-3xl">
        {dsps.map((dsp) => (
          <a
            key={dsp.name}
            href={dsp.url}
            target="_blank"
            rel="noopener noreferrer"
            title={dsp.name}
            className={`${dsp.color} aspect-square flex items-center justify-center rounded-[20px] md:rounded-[28px] transition-all duration-500 hover:scale-110 hover:-translate-y-2 active:scale-95 shadow-md group relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <svg 
              viewBox="0 0 24 24" 
              className={`w-6 h-6 md:w-9 md:h-9 fill-current ${dsp.textColor} relative z-10 transition-transform duration-500 group-hover:rotate-6`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={dsp.icon} />
            </svg>
          </a>
        ))}
      </div>
      
      <div className="flex flex-col items-center mt-6 md:mt-8 gap-2">
        <p className="text-[9px] md:text-[10px] text-pink-500/60 font-black tracking-[0.5em] uppercase">
          ✦ Tap to Stream RE : LOVE ✦
        </p>
      </div>
    </div>
  );
};

export default StreamingLinks;
