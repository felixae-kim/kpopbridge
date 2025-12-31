
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface AlbumCoverCarouselProps {
  covers: string[]; // Fallback covers
}

const AlbumCoverCarousel: React.FC<AlbumCoverCarouselProps> = ({ covers: fallbackCovers }) => {
  const [generatedCovers, setGeneratedCovers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateGalleryImages = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        // 모든 슬롯이 K-pop 여자 아이돌 비주얼로 채워지도록 프롬프트 최적화
        const prompts = [
          "A stunning portrait of an elegant K-pop female idol with pink hair, wearing luxury silk jewelry, high fashion editorial style, 'RE:LOVE' concept, photorealistic.",
          "Full body shot of 5 K-pop girl group members in matching elegant pink outfits, posing in a high-end luxury marble hall, K-pop aesthetic, 8k.",
          "Profile shot of a beautiful K-pop female idol with dreamy expression, floating pink flower petals, soft cinematic lighting, masterpiece.",
          "Wide cinematic shot of 5 K-pop idols standing in a rose garden under a pastel pink sunset, fairytale vibe, high fashion outfits.",
          "A chic and sophisticated close-up of a K-pop idol group leader looking at camera, luxury pink makeup, glamorous jewelry, photorealistic."
        ];

        const results = await Promise.all(
          prompts.map(async (p) => {
            const resp = await ai.models.generateContent({
              model: 'gemini-2.5-flash-image',
              contents: { parts: [{ text: p }] },
              config: { imageConfig: { aspectRatio: "1:1" } }
            });
            const part = resp.candidates?.[0]?.content?.parts.find(p => p.inlineData);
            return part?.inlineData ? `data:image/png;base64,${part.inlineData.data}` : null;
          })
        );

        const validImages = results.filter((img): img is string => img !== null);
        setGeneratedCovers(validImages.length > 0 ? validImages : fallbackCovers);
      } catch (error) {
        console.error("Gallery generation failed:", error);
        setGeneratedCovers(fallbackCovers);
      } finally {
        setLoading(false);
      }
    };

    generateGalleryImages();
  }, []);

  const displayCovers = generatedCovers.length > 0 ? generatedCovers : Array(5).fill("");

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h3 className="text-pink-400/60 text-sm font-bold tracking-[0.3em] uppercase mb-1">Concept Gallery</h3>
          <h2 className="font-sync text-2xl md:text-3xl font-bold uppercase tracking-tighter">RE : LOVE COVERS</h2>
        </div>
        
        <div className="flex overflow-x-auto gap-6 custom-scrollbar pb-8 snap-x snap-mandatory">
          {displayCovers.map((cover, idx) => (
            <div 
              key={idx} 
              className={`min-w-[260px] md:min-w-[320px] snap-start aspect-square glass rounded-[40px] overflow-hidden group relative cursor-pointer shadow-2xl shadow-pink-500/10 transition-all duration-500 ${!cover ? 'animate-pulse bg-white/5' : ''}`}
            >
              {cover ? (
                <>
                  <img 
                    src={cover} 
                    alt={`Album Concept ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    <p className="text-[10px] font-black tracking-widest text-white uppercase bg-pink-500/50 backdrop-blur-md px-3 py-1 rounded-full">
                      MEMBER CONCEPT #{idx + 1}
                    </p>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white/20 text-xs font-bold tracking-widest animate-bounce">CREATING VISUAL...</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlbumCoverCarousel;
