
import React from 'react';
import { NewsItem } from '../types';

interface NewsCarouselProps {
  news: NewsItem[];
}

const NewsCarousel: React.FC<NewsCarouselProps> = ({ news }) => {
  return (
    <section className="py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h3 className="text-zinc-500 text-sm font-bold tracking-widest uppercase mb-1">Stay Updated</h3>
            <h2 className="font-sync text-2xl md:text-3xl font-bold uppercase tracking-tighter">LATEST NEWS</h2>
          </div>
          <button className="text-pink-400 text-xs font-bold hover:underline tracking-widest">VIEW ALL</button>
        </div>
        
        <div className="flex overflow-x-auto gap-6 custom-scrollbar pb-6 snap-x snap-mandatory">
          {news.map((item) => (
            <div 
              key={item.id} 
              className="min-w-[280px] md:min-w-[350px] snap-start glass rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-pink-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-zinc-500 text-xs font-medium">{item.date}</span>
                <h4 className="text-lg font-bold mt-2 leading-snug group-hover:text-pink-400 transition-colors">
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
