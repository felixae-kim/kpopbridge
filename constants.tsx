
import { ArtistProfile } from './types';

export const ARTIST_DATA: ArtistProfile = {
  name: "Apink",
  currentSong: "RE : LOVE",
  // 아티스트가 제공한 공식 앨범 커버 이미지 (RE : LOVE)
  heroImage: "https://m.en.sound-wave.co.kr/web/product/big/202512/255711f519e0acd2a794e5acaf88d2f7.jpg",
  albumCovers: [
    "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1514525253361-bee8718a7439?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800"
  ],
  dsps: [
    {
      name: "Melon",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z",
      url: "https://www.melon.com",
      color: "bg-[#00cd3c]",
      textColor: "text-white"
    },
    {
      name: "Spotify",
      icon: "M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.508 17.302c-.226.371-.71.493-1.08.267-3.003-1.835-6.783-2.251-11.237-1.233-.424.097-.843-.171-.94-.595-.097-.424.171-.843.595-.94 4.887-1.117 9.049-.636 12.395 1.41.371.226.493.71.267 1.09zm1.467-3.26c-.284.463-.889.61-1.352.327-3.438-2.113-8.679-2.725-12.743-1.491-.523.159-1.077-.144-1.236-.667-.159-.523.144-1.077.667-1.236 4.643-1.409 10.428-.733 14.337 1.666.463.284.61.889.327 1.352zm.126-3.414C15.82 8.52 8.78 8.286 4.706 9.524c-.65.197-1.332-.178-1.53-.828-.197-.65.178-1.332.828-1.53 4.67-1.417 12.458-1.144 17.323 1.745.584.347.777 1.096.43 1.68-.347.584-1.096.777-1.68.43z",
      url: "https://www.spotify.com",
      color: "bg-[#1DB954]",
      textColor: "text-black"
    },
    {
      name: "YouTube Music",
      icon: "M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 18.912c-3.816 0-6.912-3.096-6.912-6.912 0-3.816 3.096-6.912 6.912-6.912 3.816 0 6.912 3.096 6.912 6.912 0 3.816-3.096 6.912-6.912 6.912zm0-11.856c-2.736 0-4.944 2.208-4.944 4.944s2.208 4.944 4.944 4.944 4.944-2.208 4.944-4.944-2.208-4.944-4.944-4.944zm-1.92 7.512v-5.136l4.416 2.568-4.416 2.568z",
      url: "https://music.youtube.com",
      color: "bg-[#FF0000]",
      textColor: "text-white"
    },
    {
      name: "FLO",
      icon: "M7 4h10c0 4.5-10 4.5-10 9s10 4.5 10 9H7v-3c0-4.5 10-4.5 10-9s-10-4.5-10-9V4z",
      url: "https://www.music-flo.com",
      color: "bg-[#3F3FFF]",
      textColor: "text-white"
    }
  ],
  news: [
    {
      id: "1",
      title: "Apink 11th Mini Album 'RE : LOVE' Concept Photos Revealed",
      date: "2025.01.01",
      image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&q=80&w=600",
      category: "CONCEPT"
    },
    {
      id: "2",
      title: "Comeback Special Live: Dear PANDA on January 5th",
      date: "2025.01.05",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=600",
      category: "LIVE"
    },
    {
      id: "3",
      title: "RE : LOVE Tracklist Unveiled",
      date: "2024.12.28",
      image: "https://images.unsplash.com/photo-1514525253361-bee8718a7439?auto=format&fit=crop&q=80&w=600",
      category: "NEWS"
    }
  ],
  videos: [
    {
      id: "v1",
      title: "RE : LOVE Official MV",
      thumbnail: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800",
      videoUrl: "#"
    },
    {
      id: "v2",
      title: "Visual Film: Love & Peace",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
      videoUrl: "#"
    }
  ],
  events: [
    {
      id: "e1",
      title: "RE : LOVE Comeback Showcase",
      date: "2025.01.05",
      location: "Yes24 Live Hall",
      type: "CONCERT"
    },
    {
      id: "e2",
      title: "11th Mini Album Fansign Event",
      date: "2025.01.12",
      location: "Starfield Coex",
      type: "FANMEETING"
    }
  ]
};
