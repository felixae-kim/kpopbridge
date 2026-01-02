
import React from 'react';

interface HeroProps {
  name: string;
  songTitle: string;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ name, songTitle, imageUrl }) => {
  return (
    <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden bg-white">
      {/* 
        Precision Crop Adjusted: 
        - scale-110: 사진이 잘리지 않도록 크기를 유지
        - -translate-y-[6%]: 상단 크롭 범위를 줄여 멤버들의 모습이 더 잘 보이도록 조정
      */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out transform scale-110 -translate-y-[6%] md:-translate-y-[8%]"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'center top', 
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Soft Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#fffafa] via-transparent to-transparent opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100/10 via-transparent to-transparent" />

      {/* Fade to content */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#fffafa] to-transparent" />

      {/* Floating Artist Name */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-32 md:pt-44 px-6 text-center pointer-events-none">
        <h1 className="font-sync text-[10px] md:text-xs font-black tracking-[2.5em] text-pink-600/20 uppercase select-none pl-[2.5em] drop-shadow-sm">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
