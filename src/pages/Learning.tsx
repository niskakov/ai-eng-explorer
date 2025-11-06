import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLessons } from '@/contexts/LessonsContext';
import LessonContent from '@/components/LessonContent';
import AIAssistant from '@/components/AIAssistant';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, List, ArrowLeft } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';

const Learning = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { lessons, tracks, getLessonById } = useLessons();
  const [showLessonList, setShowLessonList] = useState(false);
  const currentLesson = id ? getLessonById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!currentLesson) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Урок не найден</h2>
          <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  // Получаем уроки того же уровня и трека
  const sameLevelLessons = lessons
    .filter((l) => l.trackId === currentLesson.trackId && l.level === currentLesson.level)
    .sort((a, b) => a.order - b.order);

  const currentIndex = sameLevelLessons.findIndex((l) => l.id === currentLesson.id);
  const prevLesson = currentIndex > 0 ? sameLevelLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < sameLevelLessons.length - 1 ? sameLevelLessons[currentIndex + 1] : null;

  const track = tracks.find((t) => t.id === currentLesson.trackId);

  return (
    <div className="h-full flex">
      {/* Lesson List Sidebar */}
      {showLessonList && (
        <Card className="w-80 flex-shrink-0 border-r border-border m-4 mr-0">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold">Уроки {currentLesson.level}</h3>
          </div>
          <ScrollArea className="h-[calc(100%-60px)]">
            <div className="p-2">
              {sameLevelLessons.map((lesson, idx) => (
                <button
                  key={lesson.id}
                  onClick={() => {
                    navigate(`/lesson/${lesson.id}`);
                    setShowLessonList(false);
                  }}
                  className={`w-full text-left p-3 rounded-lg mb-1 transition-colors ${
                    lesson.id === currentLesson.id
                      ? 'bg-primary-light text-primary font-medium'
                      : 'hover:bg-muted'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light flex items-center justify-center text-xs font-semibold text-primary">
                      {idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{lesson.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                        {lesson.description}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </Card>
      )}

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Lesson Content */}
        <div className="flex-1 overflow-auto">
          <div className="container mx-auto px-8 py-8 max-w-4xl">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/')}
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Назад
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowLessonList(!showLessonList)}
                  className="gap-2"
                >
                  <List className="w-4 h-4" />
                  {showLessonList ? 'Скрыть' : 'Показать'} список уроков
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Урок {currentIndex + 1} из {sameLevelLessons.length}
                </span>
                {track && (
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                    {track.icon} {track.name} • {currentLesson.level}
                  </span>
                )}
              </div>
            </div>

            <LessonContent lesson={currentLesson} />

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
              {prevLesson ? (
                <Button
                  variant="outline"
                  onClick={() => navigate(`/lesson/${prevLesson.id}`)}
                  className="gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Предыдущий</div>
                    <div className="text-sm font-medium">{prevLesson.title}</div>
                  </div>
                </Button>
              ) : (
                <div />
              )}

              {nextLesson ? (
                <Button
                  onClick={() => navigate(`/lesson/${nextLesson.id}`)}
                  className="gap-2"
                >
                  <div className="text-right">
                    <div className="text-xs opacity-90">Следующий</div>
                    <div className="text-sm font-medium">{nextLesson.title}</div>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button onClick={() => navigate('/')} className="gap-2">
                  Завершить обучение
                  <ChevronRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* AI Assistant */}
        <div className="w-96 flex-shrink-0 border-l border-border hidden lg:block">
          <AIAssistant lesson={currentLesson} />
        </div>
      </div>
    </div>
  );
};

export default Learning;
