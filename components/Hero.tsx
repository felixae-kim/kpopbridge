
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface HeroProps {
  name: string;
  songTitle: string;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ name, songTitle, imageUrl }) => {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateIdolImage = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        // 에이핑크의 성숙하고 우아한 'RE : LOVE' 컨셉을 반영한 프롬프트
        const prompt = `A cinematic, high-fashion group portrait of 5 elegant K-pop female idols, wearing sophisticated pink and white silk outfits, warm dreamy lighting, background filled with soft pink petals and white drapes, 'RE : LOVE' album concept, photorealistic, 8k resolution, masterpiece.`;
        
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: prompt }],
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9"
            }
          },
        });

        const parts = response.candidates?.[0]?.content?.parts || [];
        for (const part of parts) {
          if (part.inlineData) {
            setGeneratedImage(`data:image/png;base64,${part.inlineData.data}`);
            break;
          }
        }
      } catch (error) {
        console.error("Hero image generation failed:", error);
      } finally {
        setLoading(false);
      }
    };

    generateIdolImage();
  }, []);

  return (
    <div className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${loading ? 'opacity-40 animate-pulse bg-zinc-900' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${generatedImage || imageUrl})` }}
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
      <div className="absolute inset-0 bg-pink-500/10 mix-blend-overlay" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 md:pb-32 px-6 text-center">
        <div className="bg-white/10 backdrop-blur-xl px-8 py-3 rounded-3xl border border-white/20 mb-8 shadow-2xl shadow-pink-500/30 transition-all flex flex-col gap-1 items-center">
          <span className="text-[10px] md:text-xs font-black tracking-[0.6em] text-pink-300 uppercase">
            OFFICIAL COMEBACK
          </span>
          <span className="text-[12px] md:text-sm font-black tracking-[0.2em] text-white uppercase opacity-90">
            2025.01.05 11th Mini Album
          </span>
        </div>
        
        <h2 className="font-sync text-6xl md:text-9xl font-black mb-4 text-white drop-shadow-[0_0_50px_rgba(236,72,153,1)] tracking-tighter leading-none select-none">
          {songTitle}
        </h2>
        <h1 className="font-sync text-xl md:text-3xl font-light tracking-[0.8em] text-pink-100/90 uppercase mt-2 select-none">
          {name}
        </h1>
      </div>

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        .bg-cover {
          animation: kenburns 30s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Hero;
