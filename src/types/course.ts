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

export type Exercise =
  | {
      id: string;
      type: 'dialogue';
      title: string;
      scenario: string; // e.g., В кафе, в аэропорту
      role?: string; // роль ученика (customer, candidate, passenger)
      goals?: string[]; // цели диалога
      level?: Level;
    }
  | {
      id: string;
      type: 'lexical_match';
      title: string;
      left: string[]; // e.g., make, do, have
      right: string[]; // e.g., a decision, homework, a break
      pairs: Array<[number, number]>; // индексные соответствия (правильные)
    }
  | {
      id: string;
      type: 'lexical_cloze';
      title: string;
      text: string; // Текст с плейсхолдерами __1__, __2__
      answers: string[]; // правильные ответы по индексам
    }
  | {
      id: string;
      type: 'grammar_discovery';
      title: string;
      examples: string[]; // набор предложений для наблюдения
      expectedRule?: string; // эталонное правило для показа
      checks?: { question: string; answer: string }[]; // мини-проверки
    }
  | {
      id: string;
      type: 'task_mission';
      title: string;
      brief: string; // описание задания
      checklist?: string[]; // шаги
      submissionType?: 'text' | 'link';
    };

export interface Resource {
  id: string;
  title: string;
  url: string;
  type: 'pdf' | 'doc' | 'link';
}
