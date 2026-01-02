
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface AlbumCoverCarouselProps {
  covers: string[]; 
}

const AlbumCoverCarousel: React.FC<AlbumCoverCarouselProps> = ({ covers: fallbackCovers }) => {
  const [generatedCovers, setGeneratedCovers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateGalleryImages = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const prompts = [
          "A stunning close-up of a K-pop female idol with elegant pink hairstyle, wearing luxury rose gold earrings, soft focus cinematic photography.",
          "Full body shot of 5 K-pop girl group members in matching sophisticated pink silk outfits, posing for a fashion magazine, 'RE:LOVE' concept.",
          "Profile view of a beautiful K-pop female idol leader, dreamy lighting, floating pink petals, high fashion concept photo.",
          "Group shot of 5 K-pop idols standing elegantly in a grand palace hall with pink lighting, luxury K-pop aesthetic, 8k resolution.",
          "A chic and glamorous close-up of a K-pop idol group member with glittery makeup, looking confidently into the camera, photorealistic."
        ];

        const results = await Promise.all(
          prompts.map(async (p) => {
            try {
              const resp = await ai.models.generateContent({
                model: 'gemini-2.5-flash-image',
                contents: { parts: [{ text: p }] },
                config: { imageConfig: { aspectRatio: "1:1" } }
              });
              const part = resp.candidates?.[0]?.content?.parts.find(p => p.inlineData);
              return part?.inlineData ? `data:image/png;base64,${part.inlineData.data}` : null;
            } catch (err) {
              console.error("Individual image generation failed:", err);
              return null;
            }
          })
        );

        const validImages = results.filter((img): img is string => img !== null);
        if (validImages.length > 0) {
          setGeneratedCovers(validImages);
        } else {
          setGeneratedCovers(fallbackCovers);
        }
      } catch (error) {
        console.error("Gallery generation failed:", error);
        setGeneratedCovers(fallbackCovers);
      } finally {
        setLoading(false);
      }
    };

    generateGalleryImages();
  }, [fallbackCovers]);

  // Display empty slots while generating
  const displayCovers = generatedCovers.length > 0 ? generatedCovers : Array(5).fill("");

  return (
    <section className="py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h3 className="text-pink-400/60 text-sm font-bold tracking-[0.4em] uppercase mb-2">Member Concept Gallery</h3>
            <h2 className="font-sync text-3xl md:text-5xl font-bold uppercase tracking-tighter">RE : LOVE VISUALS</h2>
          </div>
          <div className="h-[2px] flex-1 bg-white/10 hidden md:block mb-3 ml-10"></div>
        </div>
        
        <div className="flex overflow-x-auto gap-8 custom-scrollbar pb-10 snap-x snap-mandatory">
          {displayCovers.map((cover, idx) => (
            <div 
              key={idx} 
              className={`min-w-[280px] md:min-w-[360px] snap-start aspect-[4/5] glass rounded-[48px] overflow-hidden group relative cursor-pointer shadow-2xl shadow-pink-500/10 transition-all duration-700 hover:-translate-y-4 ${!cover ? 'animate-pulse bg-white/5' : ''}`}
            >
              {cover ? (
                <>
                  <img 
                    src={cover} 
                    alt={`Member Concept ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-all translate-y-6 group-hover:translate-y-0 duration-500">
                    <p className="text-[12px] font-black tracking-[0.3em] text-white uppercase bg-pink-500 px-6 py-2 rounded-full shadow-xl">
                      MEMBER #{idx + 1}
                    </p>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-zinc-900/50">
                  <div className="w-12 h-12 border-2 border-pink-500/30 border-t-pink-500 rounded-full animate-spin"></div>
                  <span className="text-white/30 text-[10px] font-black tracking-[0.5em] uppercase">Generating Visual...</span>
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
