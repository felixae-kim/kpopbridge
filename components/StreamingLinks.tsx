
import React from 'react';
import { DSP } from '../types';

interface StreamingLinksProps {
  dsps: DSP[];
}

const StreamingLinks: React.FC<StreamingLinksProps> = ({ dsps }) => {
  return (
    <div className="w-full max-w-md mx-auto px-6 -mt-10 relative z-10">
      <div className="glass p-5 md:p-6 rounded-[36px] grid grid-cols-4 gap-4 md:gap-5 shadow-[0_25px_60px_rgba(236,72,153,0.5)] border-pink-500/40">
        {dsps.map((dsp) => (
          <a
            key={dsp.name}
            href={dsp.url}
            target="_blank"
            rel="noopener noreferrer"
            title={dsp.name}
            className={`${dsp.color} aspect-square flex items-center justify-center rounded-2xl transition-all duration-300 hover:scale-115 hover:-translate-y-2 active:scale-90 shadow-xl group overflow-hidden`}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <svg 
              viewBox="0 0 24 24" 
              className={`w-6 h-6 md:w-8 md:h-8 fill-current ${dsp.textColor} relative z-10 transition-transform group-hover:rotate-12`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={dsp.icon} />
            </svg>
          </a>
        ))}
      </div>
      <p className="text-center text-[10px] text-pink-300/80 font-black tracking-[0.4em] uppercase mt-5 animate-pulse drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">
        ✦ Tap to Stream RE : LOVE ✦
      </p>
    </div>
  );
};

export default StreamingLinks;
