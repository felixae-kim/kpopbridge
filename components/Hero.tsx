
import React from 'react';

interface HeroProps {
  name: string;
  songTitle: string;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ name, songTitle, imageUrl }) => {
  return (
    <div className="relative w-full h-[85vh] md:h-[95vh] overflow-hidden bg-white">
      {/* 
        Artist's Provided Image
      */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'center 25%', 
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Soft Overlays for Light Theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#fffafa] via-transparent to-transparent opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100/20 via-transparent to-transparent" />

      {/* Dreamy Bottom Fade Out - Transitions to the pinkish background */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#fffafa] to-transparent" />

      {/* Floating Artist Name - Minimalist Pink Accent */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-32 md:pt-44 px-6 text-center">
        <h1 className="font-sync text-[10px] md:text-xs font-black tracking-[2.5em] text-pink-600/30 uppercase select-none pl-[2.5em] drop-shadow-sm">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
