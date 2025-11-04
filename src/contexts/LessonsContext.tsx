import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Lesson } from '@/types/course';
import { lessons as initialLessons } from '@/data/mockData';

interface LessonsContextType {
  lessons: Lesson[];
  addLesson: (lesson: Omit<Lesson, 'id'>) => Lesson;
  updateLesson: (id: string, lesson: Partial<Lesson>) => void;
  deleteLesson: (id: string) => void;
  getLessonById: (id: string) => Lesson | undefined;
}

const LessonsContext = createContext<LessonsContextType | undefined>(undefined);

export const LessonsProvider = ({ children }: { children: ReactNode }) => {
  const [lessons, setLessons] = useState<Lesson[]>(() => {
    try {
      const saved = localStorage.getItem('lessons');
      return saved ? JSON.parse(saved) : initialLessons;
    } catch (error) {
      console.error('Error loading lessons from localStorage:', error);
      return initialLessons;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('lessons', JSON.stringify(lessons));
    } catch (error) {
      console.error('Error saving lessons to localStorage:', error);
    }
  }, [lessons]);

  const addLesson = (lessonData: Omit<Lesson, 'id'>): Lesson => {
    const newLesson: Lesson = {
      ...lessonData,
      id: `lesson-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`,
    };
    setLessons((prev) => [...prev, newLesson]);
    return newLesson;
  };

  const updateLesson = (id: string, lessonData: Partial<Lesson>) => {
    setLessons((prev) =>
      prev.map((lesson) => (lesson.id === id ? { ...lesson, ...lessonData } : lesson))
    );
  };

  const deleteLesson = (id: string) => {
    setLessons((prev) => prev.filter((lesson) => lesson.id !== id));
  };

  const getLessonById = (id: string) => {
    return lessons.find((lesson) => lesson.id === id);
  };

  return (
    <LessonsContext.Provider
      value={{ lessons, addLesson, updateLesson, deleteLesson, getLessonById }}
    >
      {children}
    </LessonsContext.Provider>
  );
};

export const useLessons = () => {
  const context = useContext(LessonsContext);
  if (context === undefined) {
    throw new Error('useLessons must be used within a LessonsProvider');
  }
  return context;
};
