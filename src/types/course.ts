export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface Track {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface Lesson {
  id: string;
  trackId: string;
  level: Level;
  title: string;
  description: string;
  content: string;
  videoUrl?: string;
  videoType?: 'youtube' | 'gdrive';
  exercises?: Exercise[];
  resources?: Resource[];
  order: number;
}

export interface Exercise {
  id: string;
  question: string;
  answer: string;
  type: 'text' | 'choice' | 'fill';
}

export interface Resource {
  id: string;
  title: string;
  url: string;
  type: 'pdf' | 'doc' | 'link';
}
