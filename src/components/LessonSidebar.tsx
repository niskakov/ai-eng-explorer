import { Link, useParams } from 'react-router-dom';
import { getLessonsByTrackAndLevel, getTrackBySlug } from '@/data/mockData';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import { Level } from '@/types/course';

interface LessonSidebarProps {
  currentLessonId: string;
}

const LessonSidebar = ({ currentLessonId }: LessonSidebarProps) => {
  const { slug, level } = useParams<{ slug?: string; level?: Level }>();
  
  // Получаем трек и уроки из текущего урока
  const currentLesson = currentLessonId;
  const track = slug ? getTrackBySlug(slug) : undefined;
  const lessons = track && level ? getLessonsByTrackAndLevel(track.id, level) : [];

  if (!track) return null;

  return (
    <div className="h-full flex flex-col bg-sidebar border-r border-sidebar-border">
      <div className="p-4 border-b border-sidebar-border">
        <Link
          to={`/track/${slug}/${level}`}
          className="flex items-center gap-2 text-sm text-sidebar-foreground hover:text-sidebar-primary transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Назад к урокам</span>
        </Link>
        <div className="mt-4">
          <h3 className="font-semibold text-sidebar-foreground">{track.name}</h3>
          <p className="text-sm text-sidebar-foreground/70">{level} уровень</p>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2">
          {lessons.map((lesson, index) => {
            const isActive = lesson.id === currentLessonId;
            return (
              <Link
                key={lesson.id}
                to={`/lesson/${lesson.id}`}
                className={`block mb-1 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'hover:bg-sidebar-accent/50 text-sidebar-foreground'
                }`}
              >
                <div className="p-3 flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light flex items-center justify-center text-xs font-semibold text-primary">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm truncate">{lesson.title}</div>
                    <div className="text-xs text-sidebar-foreground/70 mt-0.5 line-clamp-2">
                      {lesson.description}
                    </div>
                  </div>
                  {isActive && <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />}
                </div>
              </Link>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default LessonSidebar;
