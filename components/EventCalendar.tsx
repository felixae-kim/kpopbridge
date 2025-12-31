
import React from 'react';
import { EventItem } from '../types';

interface EventCalendarProps {
  events: EventItem[];
}

const EventCalendar: React.FC<EventCalendarProps> = ({ events }) => {
  return (
    <section className="py-12 md:py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-zinc-500 text-sm font-bold tracking-widest uppercase mb-1">Connect in Person</h3>
        <h2 className="font-sync text-3xl md:text-4xl font-bold uppercase tracking-tighter">UPCOMING EVENTS</h2>
      </div>

      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div 
            key={event.id}
            className="glass p-6 md:p-8 rounded-[32px] flex flex-col md:flex-row items-center gap-6 md:gap-10 hover:bg-white/5 transition-colors group cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center min-w-[100px]">
              <span className="text-pink-400 text-sm font-bold uppercase tracking-widest mb-1">
                {new Date(event.date).toLocaleString('default', { month: 'short' })}
              </span>
              <span className="text-4xl font-sync font-bold leading-none">
                {new Date(event.date).getDate()}
              </span>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block text-[10px] font-black tracking-widest bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full mb-3 uppercase">
                {event.type}
              </span>
              <h4 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-pink-400 transition-colors">
                {event.title}
              </h4>
              <p className="text-zinc-400 font-medium">
                {event.location} • {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>

            <button className="px-8 py-3 rounded-full border border-pink-500/20 hover:bg-pink-500 hover:text-white transition-all font-bold text-sm shadow-lg shadow-pink-500/5">
              GET TICKETS
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCalendar;
