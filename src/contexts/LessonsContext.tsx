import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Lesson, Track } from '@/types/course';
import { supabase } from '@/lib/supabase';

interface LessonsContextType {
  lessons: Lesson[];
  tracks: Track[];
  isLoading: boolean;
  error: string | null;
  addLesson: (lesson: Omit<Lesson, 'id'>) => Promise<Lesson | null>;
  updateLesson: (id: string, lesson: Partial<Lesson>) => Promise<void>;
  deleteLesson: (id: string) => Promise<void>;
  getLessonById: (id: string) => Lesson | undefined;
  refreshLessons: () => Promise<void>;
}

const LessonsContext = createContext<LessonsContextType | undefined>(undefined);

export const LessonsProvider = ({ children }: { children: ReactNode }) => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLessons = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const { data, error: lessonsError } = await supabase
        .from('lessons')
        .select('*')
        .order('order', { ascending: true });

      if (lessonsError) throw lessonsError;

      const formattedLessons: Lesson[] = (data || []).map((item) => ({
        id: item.id,
        trackId: item.track_id,
        level: item.level,
        title: item.title,
        description: item.description || '',
        content: item.content,
        videoUrl: item.video_url || undefined,
        videoType: item.video_type || undefined,
        order: item.order || 1,
      }));

      setLessons(formattedLessons);
    } catch (err) {
      console.error('Error fetching lessons:', err);
      setError(err instanceof Error ? err.message : 'Failed to load lessons');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTracks = async () => {
    try {
      const { data, error: tracksError } = await supabase
        .from('tracks')
        .select('*')
        .order('name', { ascending: true });

      if (tracksError) throw tracksError;

      const formattedTracks: Track[] = (data || []).map((item) => ({
        id: item.id,
        slug: item.slug,
        name: item.name,
        description: item.description || '',
        icon: item.icon || '📚',
        color: item.color || 'hsl(217 91% 60%)',
      }));

      setTracks(formattedTracks);
    } catch (err) {
      console.error('Error fetching tracks:', err);
      // Не критично, если tracks не загрузились
    }
  };

  useEffect(() => {
    fetchLessons();
    fetchTracks();
  }, []);

  const addLesson = async (lessonData: Omit<Lesson, 'id'>): Promise<Lesson | null> => {
    try {
      setError(null);
      const id = `lesson-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;

      const { data, error: insertError } = await supabase
        .from('lessons')
        .insert({
          id,
          track_id: lessonData.trackId,
          level: lessonData.level,
          title: lessonData.title,
          description: lessonData.description || null,
          content: lessonData.content,
          video_url: lessonData.videoUrl || null,
          video_type: lessonData.videoType || null,
          order: lessonData.order || 1,
        })
        .select()
        .single();

      if (insertError) throw insertError;

      const newLesson: Lesson = {
        id: data.id,
        trackId: data.track_id,
        level: data.level,
        title: data.title,
        description: data.description || '',
        content: data.content,
        videoUrl: data.video_url || undefined,
        videoType: data.video_type || undefined,
        order: data.order || 1,
      };

      setLessons((prev) => [...prev, newLesson]);
      return newLesson;
    } catch (err) {
      console.error('Error adding lesson:', err);
      setError(err instanceof Error ? err.message : 'Failed to add lesson');
      return null;
    }
  };

  const updateLesson = async (id: string, lessonData: Partial<Lesson>): Promise<void> => {
    try {
      setError(null);

      const updateData: any = {};
      if (lessonData.trackId !== undefined) updateData.track_id = lessonData.trackId;
      if (lessonData.level !== undefined) updateData.level = lessonData.level;
      if (lessonData.title !== undefined) updateData.title = lessonData.title;
      if (lessonData.description !== undefined) updateData.description = lessonData.description || null;
      if (lessonData.content !== undefined) updateData.content = lessonData.content;
      if (lessonData.videoUrl !== undefined) updateData.video_url = lessonData.videoUrl || null;
      if (lessonData.videoType !== undefined) updateData.video_type = lessonData.videoType || null;
      if (lessonData.order !== undefined) updateData.order = lessonData.order;

      const { error: updateError } = await supabase
        .from('lessons')
        .update(updateData)
        .eq('id', id);

      if (updateError) throw updateError;

      setLessons((prev) =>
        prev.map((lesson) => {
          if (lesson.id === id) {
            return {
              ...lesson,
              ...lessonData,
              videoUrl: lessonData.videoUrl !== undefined ? lessonData.videoUrl : lesson.videoUrl,
              videoType: lessonData.videoType !== undefined ? lessonData.videoType : lesson.videoType,
            };
          }
          return lesson;
        })
      );
    } catch (err) {
      console.error('Error updating lesson:', err);
      setError(err instanceof Error ? err.message : 'Failed to update lesson');
      throw err;
    }
  };

  const deleteLesson = async (id: string): Promise<void> => {
    try {
      setError(null);

      const { error: deleteError } = await supabase
        .from('lessons')
        .delete()
        .eq('id', id);

      if (deleteError) throw deleteError;

      setLessons((prev) => prev.filter((lesson) => lesson.id !== id));
    } catch (err) {
      console.error('Error deleting lesson:', err);
      setError(err instanceof Error ? err.message : 'Failed to delete lesson');
      throw err;
    }
  };

  const getLessonById = (id: string) => {
    return lessons.find((lesson) => lesson.id === id);
  };

  const refreshLessons = async () => {
    await fetchLessons();
  };

  return (
    <LessonsContext.Provider
      value={{
        lessons,
        tracks,
        isLoading,
        error,
        addLesson,
        updateLesson,
        deleteLesson,
        getLessonById,
        refreshLessons,
      }}
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
