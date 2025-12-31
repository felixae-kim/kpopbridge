
export interface DSP {
  name: string;
  icon: string;
  url: string;
  color: string;
  textColor: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  category: string;
}

export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  type: 'CONCERT' | 'FANMEETING' | 'MERCH' | 'LIVE';
}

export interface ArtistProfile {
  name: string;
  currentSong: string;
  heroImage: string;
  albumCovers: string[];
  dsps: DSP[];
  news: NewsItem[];
  videos: VideoItem[];
  events: EventItem[];
}
