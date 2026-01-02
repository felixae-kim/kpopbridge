
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
    <div className="min-h-screen bg-[#fffafa] text-zinc-800 selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden">
      {/* 
        Dreamy Animated Background Layer 
        Using high-blur blobs with distinct pink/peach/white tones
      */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-pink-100/60 blur-[120px] rounded-full animate-dreamy" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[20%] right-[-15%] w-[60vw] h-[60vw] bg-rose-50/80 blur-[100px] rounded-full animate-dreamy" style={{ animationDelay: '-5s' }} />
        <div className="absolute bottom-[-10%] left-[10%] w-[80vw] h-[80vw] bg-orange-50/50 blur-[150px] rounded-full animate-dreamy" style={{ animationDelay: '-10s' }} />
        <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-white blur-[80px] rounded-full animate-dreamy" style={{ animationDelay: '-15s' }} />
      </div>

      <main className="relative z-10">
        {/* Minimalist Floating Header - Adjusted for light theme */}
        <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center bg-gradient-to-b from-white/40 to-transparent backdrop-blur-sm">
          <div className="font-sync font-black text-2xl md:text-3xl tracking-tighter text-pink-600 hover:text-pink-400 transition-all cursor-pointer drop-shadow-[0_2px_4px_rgba(255,182,193,0.5)]">
            {ARTIST_DATA.name}
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden md:block bg-white/60 hover:bg-pink-500 hover:text-white text-pink-600 border border-pink-200 px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] transition-all uppercase backdrop-blur-md shadow-sm">
              Official Site
            </button>
            <button className="glass p-3 rounded-full hover:bg-white transition-all group border-pink-100 shadow-sm text-pink-400">
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

        {/* 3. Member Gallery */}
        <div className="mt-8">
          <AlbumCoverCarousel covers={ARTIST_DATA.albumCovers} />
        </div>

        <div className="space-y-12">
          {/* 4. Featured Videos Section */}
          <VideoCarousel videos={ARTIST_DATA.videos} />
          
          {/* 5. Latest News Section */}
          <NewsCarousel news={ARTIST_DATA.news} />
          
          {/* 6. Upcoming Events Section */}
          <EventCalendar events={ARTIST_DATA.events} />
        </div>

        <footer className="py-32 text-center relative mt-20 border-t border-pink-100 bg-gradient-to-b from-transparent to-pink-50/50">
          <div className="font-sync text-7xl md:text-[14rem] font-black text-pink-500 opacity-[0.05] absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none w-full">
            {ARTIST_DATA.name}
          </div>
          <div className="flex justify-center gap-10 mb-10 relative z-10">
             {['Instagram', 'Twitter', 'TikTok', 'YouTube'].map(social => (
               <a key={social} href="#" className="text-zinc-400 hover:text-pink-500 text-xs font-black tracking-[0.3em] transition-colors uppercase">
                 {social}
               </a>
             ))}
          </div>
          <p className="text-zinc-400 text-[10px] tracking-[0.4em] font-bold relative z-10 uppercase">
            © 2025 CHOI CREATIVE LAB & Apink. ALL RIGHTS RESERVED.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
