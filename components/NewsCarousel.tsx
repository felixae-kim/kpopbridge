
import React from 'react';
import { NewsItem } from '../types';

interface NewsCarouselProps {
  news: NewsItem[];
}

const NewsCarousel: React.FC<NewsCarouselProps> = ({ news }) => {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h3 className="text-pink-400 text-sm font-bold tracking-[0.3em] uppercase mb-2">Stay Updated</h3>
            <h2 className="font-sync text-2xl md:text-4xl font-bold uppercase tracking-tighter text-zinc-800">LATEST NEWS</h2>
          </div>
          <button className="text-pink-500 text-xs font-black hover:underline tracking-widest uppercase">VIEW ALL</button>
        </div>
        
        <div className="flex overflow-x-auto gap-8 custom-scrollbar pb-8 snap-x snap-mandatory">
          {news.map((item) => (
            <div 
              key={item.id} 
              className="min-w-[300px] md:min-w-[400px] snap-start glass rounded-[40px] overflow-hidden group cursor-pointer border-white bg-white/40 shadow-lg"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-pink-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-pink-200">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <span className="text-pink-400 text-xs font-black tracking-widest">{item.date}</span>
                <h4 className="text-xl font-bold mt-3 leading-tight text-zinc-800 group-hover:text-pink-500 transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
