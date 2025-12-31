
import React from 'react';
import { VideoItem } from '../types';

interface VideoCarouselProps {
  videos: VideoItem[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  return (
    <section className="py-12 md:py-20 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h3 className="text-zinc-500 text-sm font-bold tracking-widest uppercase mb-1">Visual Content</h3>
          <h2 className="font-sync text-2xl md:text-3xl font-bold uppercase tracking-tighter">FEATURED VIDEOS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col gap-4 group cursor-pointer">
              <div className="relative aspect-video rounded-3xl overflow-hidden glass">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:opacity-60 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-pink-500/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-pink-500/40 transition-all">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1 shadow-pink-500/50" />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg group-hover:text-pink-400 transition-colors">
                  {video.title}
                </h4>
                <p className="text-zinc-500 text-sm uppercase font-bold tracking-tighter mt-1">Official Premiere</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
