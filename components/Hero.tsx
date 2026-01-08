
import React, { useState, useRef, useEffect } from 'react';

interface HeroProps {
  name: string;
  songTitle: string;
  imageUrl: string;
  videoUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ name, songTitle, imageUrl, videoUrl }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // 비디오가 마운트될 때 수동 재생 시도 (자동 재생 차단 대응)
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay blocked, waiting for user interaction:", error);
      });
    }
  }, [videoUrl]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden bg-white">
      {/* 
        Fallback Background Image: 
        비디오가 준비되지 않았을 때 표시되며, 비디오 로드 시 투명해짐
      */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform scale-110 -translate-y-[4%] md:-translate-y-[6%] z-0 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'center top', 
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* 
        Video Background: 
        src를 직접 사용하여 호환성을 높이고, 여러 이벤트로 로딩 감지
      */}
      {videoUrl && (
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          onCanPlay={handleVideoLoad}
          onPlaying={handleVideoLoad}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out transform scale-110 -translate-y-[4%] md:-translate-y-[6%] z-10 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#fffafa] via-transparent to-transparent opacity-60 z-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100/10 via-transparent to-transparent opacity-30 z-20" />

      {/* Fade to content - 이 레이어보다 버튼들이 높아야 함(z-30) */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-44 bg-gradient-to-t from-[#fffafa] to-transparent z-30" />

      {/* Floating Artist Name Only */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-28 md:pt-40 px-6 text-center pointer-events-none z-40">
        <h1 className="font-sync text-[10px] md:text-xs font-black tracking-[2.5em] text-pink-600/40 uppercase select-none pl-[2.5em] drop-shadow-sm">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
