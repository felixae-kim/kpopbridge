
import React from 'react';
import Hero from './components/Hero';
import StreamingLinks from './components/StreamingLinks';
import AlbumCoverCarousel from './components/AlbumCoverCarousel';
import NewsCarousel from './components/NewsCarousel';
import VideoCarousel from './components/VideoCarousel';
import EventCalendar from './components/EventCalendar';
import { ARTIST_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-pink-500 selection:text-white overflow-x-hidden">
      {/* Ambient Pink Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-[15%] -right-[15%] w-[60vw] h-[60vw] bg-pink-600/15 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute top-1/4 -left-[10%] w-[40vw] h-[40vw] bg-rose-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-pink-900/10 via-transparent to-transparent" />
      </div>

      <main className="relative z-10">
        {/* Minimalist Floating Header */}
        <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
          <div className="font-sync font-black text-2xl md:text-3xl tracking-tighter text-white hover:text-pink-400 transition-all cursor-pointer drop-shadow-lg">
            {ARTIST_DATA.name}
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden md:block bg-white/10 hover:bg-pink-500/20 text-white border border-white/20 px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] transition-all uppercase backdrop-blur-md">
              Official Site
            </button>
            <button className="glass p-3 rounded-full hover:bg-pink-500/30 transition-all group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </button>
          </div>
        </header>

        {/* 1. Hero Section */}
        <Hero 
          name={ARTIST_DATA.name}
          songTitle={ARTIST_DATA.currentSong}
          imageUrl={ARTIST_DATA.heroImage}
        />

        {/* 2. DSP Links Section */}
        <StreamingLinks dsps={ARTIST_DATA.dsps} />

        {/* 3. Album Cover Carousel (New) */}
        <div className="mt-8">
          <AlbumCoverCarousel covers={ARTIST_DATA.albumCovers} />
        </div>

        <div className="space-y-12">
          {/* 4. Featured Videos Section */}
          <VideoCarousel videos={ARTIST_DATA.videos} />
          
          {/* 5. Latest News Section (Moved here below videos) */}
          <NewsCarousel news={ARTIST_DATA.news} />
          
          {/* 6. Upcoming Events Section */}
          <EventCalendar events={ARTIST_DATA.events} />
        </div>

        <footer className="py-32 text-center relative mt-20 border-t border-white/5 bg-gradient-to-b from-transparent to-pink-950/20">
          <div className="font-sync text-7xl md:text-[14rem] font-black opacity-[0.03] absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none w-full">
            {ARTIST_DATA.name}
          </div>
          <div className="flex justify-center gap-10 mb-10 relative z-10">
             {['Instagram', 'Twitter', 'TikTok', 'YouTube'].map(social => (
               <a key={social} href="#" className="text-zinc-500 hover:text-pink-400 text-xs font-black tracking-[0.3em] transition-colors uppercase">
                 {social}
               </a>
             ))}
          </div>
          <p className="text-zinc-600 text-[10px] tracking-[0.4em] font-bold relative z-10 uppercase">
            © 2025 CHOI CREATIVE LAB & Apink. ALL RIGHTS RESERVED.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
