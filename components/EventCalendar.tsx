
import React from 'react';
import { EventItem } from '../types';

interface EventCalendarProps {
  events: EventItem[];
}

const EventCalendar: React.FC<EventCalendarProps> = ({ events }) => {
  return (
    <section className="py-20 md:py-28 px-6 max-w-5xl mx-auto relative">
      <div className="text-center mb-16">
        <h3 className="text-pink-400 text-sm font-bold tracking-[0.3em] uppercase mb-2">Connect in Person</h3>
        <h2 className="font-sync text-3xl md:text-5xl font-bold uppercase tracking-tighter text-zinc-800">UPCOMING EVENTS</h2>
      </div>

      <div className="flex flex-col gap-6">
        {events.map((event) => (
          <div 
            key={event.id}
            className="glass p-8 md:p-10 rounded-[45px] flex flex-col md:flex-row items-center gap-8 md:gap-12 hover:bg-white/80 transition-all duration-500 group cursor-pointer border-white shadow-xl"
          >
            <div className="flex flex-col items-center justify-center min-w-[120px] bg-pink-50 rounded-[30px] p-6 group-hover:bg-pink-500 transition-colors duration-500">
              <span className="text-pink-500 text-xs font-black uppercase tracking-widest mb-1 group-hover:text-white transition-colors">
                {new Date(event.date).toLocaleString('default', { month: 'short' })}
              </span>
              <span className="text-4xl font-sync font-bold leading-none text-zinc-800 group-hover:text-white transition-colors">
                {new Date(event.date).getDate()}
              </span>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block text-[10px] font-black tracking-[0.2em] bg-white border border-pink-100 text-pink-500 px-4 py-1.5 rounded-full mb-4 uppercase shadow-sm">
                {event.type}
              </span>
              <h4 className="text-2xl md:text-3xl font-bold mb-2 text-zinc-800 group-hover:text-pink-600 transition-colors">
                {event.title}
              </h4>
              <p className="text-zinc-500 font-medium tracking-tight">
                {event.location} • {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>

            <button className="px-10 py-4 rounded-full bg-zinc-900 text-white hover:bg-pink-500 transition-all font-black text-xs tracking-widest shadow-xl hover:shadow-pink-200 uppercase">
              GET TICKETS
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCalendar;
