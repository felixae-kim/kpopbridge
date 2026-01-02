
import React from 'react';
import { VideoItem } from '../types';

interface VideoCarouselProps {
  videos: VideoItem[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  return (
    <section className="py-20 md:py-28 bg-pink-50/30 backdrop-blur-sm relative overflow-hidden">
      {/* Subtle decorative blob */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-white/40 blur-[100px] rounded-full -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <h3 className="text-pink-400 text-sm font-bold tracking-[0.3em] uppercase mb-2">Visual Content</h3>
          <h2 className="font-sync text-2xl md:text-4xl font-bold uppercase tracking-tighter text-zinc-800">FEATURED VIDEOS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col gap-6 group cursor-pointer">
              <div className="relative aspect-video rounded-[35px] overflow-hidden glass shadow-xl border-white transition-transform duration-500 group-hover:-translate-y-2">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/40 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-pink-500 group-hover:border-pink-300 transition-all shadow-2xl">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-pink-600 border-b-[12px] border-b-transparent ml-2 transition-colors group-hover:border-l-white" />
                  </div>
                </div>
              </div>
              <div className="px-2">
                <h4 className="font-bold text-xl text-zinc-800 group-hover:text-pink-500 transition-colors">
                  {video.title}
                </h4>
                <p className="text-pink-400 text-xs uppercase font-black tracking-[0.2em] mt-2">Official Premiere</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
