import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { tracks, levels } from '@/data/mockData';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Play, Clock, Eye, ExternalLink } from 'lucide-react';
import { Track, Level } from '@/types/course';
import { useLessons } from '@/contexts/LessonsContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import ReactMarkdown from 'react-markdown';

const Dashboard = () => {
  const { lessons } = useLessons();
  const navigate = useNavigate();
  const [selectedTrack, setSelectedTrack] = useState<Track>(tracks[0]);
  const [selectedLevel, setSelectedLevel] = useState<Level>('A1');
  const [previewLesson, setPreviewLesson] = useState<string | null>(null);

  const previewLessonData = previewLesson
    ? lessons.find((l) => l.id === previewLesson)
    : null;

  // Функция для получения уроков по треку и уровню
  const getLessonsForLevel = (trackId: string, level: Level) => {
    return lessons
      .filter((lesson) => lesson.trackId === trackId && lesson.level === level)
      .sort((a, b) => a.order - b.order);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Добро пожаловать на Skyline English!</h1>
        <p className="text-lg text-muted-foreground">
          Выберите направление и уровень для просмотра уроков
        </p>
      </div>

      {/* Track Selection */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Направления обучения</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tracks.map((track) => {
            const trackLessonsCount = lessons.filter((l) => l.trackId === track.id).length;
            return (
              <Card
                key={track.id}
                className={`p-6 cursor-pointer transition-all duration-200 hover:scale-105 ${
                  selectedTrack.id === track.id
                    ? 'ring-2 ring-primary shadow-lg'
                    : 'hover:shadow-md'
                }`}
                onClick={() => setSelectedTrack(track)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{track.icon}</div>
                  <h3 className="font-semibold mb-1">{track.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                    {track.description}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    {trackLessonsCount} уроков
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Level and Lessons */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{selectedTrack.icon}</span>
            <div>
              <h2 className="text-2xl font-bold">{selectedTrack.name}</h2>
              <p className="text-sm text-muted-foreground">{selectedTrack.description}</p>
            </div>
          </div>
        </div>

        <Tabs value={selectedLevel} onValueChange={(v) => setSelectedLevel(v as Level)}>
          <TabsList className="mb-6">
            {levels.map((level) => {
              const count = lessons.filter(
                (l) => l.trackId === selectedTrack.id && l.level === level
              ).length;
              return (
                <TabsTrigger key={level} value={level} disabled={count === 0}>
                  {level}
                  {count > 0 && (
                    <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                      {count}
                    </span>
                  )}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {levels.map((level) => {
            const levelLessons = getLessonsForLevel(selectedTrack.id, level);
            return (
              <TabsContent key={level} value={level}>
                {levelLessons.length === 0 ? (
                  <div className="text-center py-12">
                    <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      Уроки для этого уровня скоро появятся
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {levelLessons.map((lesson, index) => (
                      <Card
                        key={lesson.id}
                        className="p-6 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
                            <p className="text-muted-foreground mb-4">{lesson.description}</p>
                            <div className="flex items-center gap-4 text-sm">
                              {lesson.videoUrl && (
                                <div className="flex items-center gap-1 text-muted-foreground">
                                  <Play className="w-4 h-4" />
                                  <span>Видео</span>
                                </div>
                              )}
                              {lesson.exercises && lesson.exercises.length > 0 && (
                                <div className="flex items-center gap-1 text-muted-foreground">
                                  <BookOpen className="w-4 h-4" />
                                  <span>{lesson.exercises.length} упражнений</span>
                                </div>
                              )}
                              <div className="flex items-center gap-1 text-muted-foreground">
                                <Clock className="w-4 h-4" />
                                <span>~15 мин</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              onClick={() => setPreviewLesson(lesson.id)}
                              className="gap-2"
                            >
                              <Eye className="w-4 h-4" />
                              Быстрый просмотр
                            </Button>
                            <Button
                              onClick={() => navigate(`/lesson/${lesson.id}`)}
                              className="gap-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Открыть урок
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </Card>

      {/* Диалог просмотра урока */}
      <Dialog open={!!previewLesson} onOpenChange={() => setPreviewLesson(null)}>
        <DialogContent className="max-w-5xl max-h-[95vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="text-2xl">{previewLessonData?.title}</DialogTitle>
          </DialogHeader>
          {previewLessonData && (
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              <div>
                <p className="text-muted-foreground text-lg mb-3">{previewLessonData.description}</p>
                <div className="flex gap-2">
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {previewLessonData.level}
                  </span>
                  <span className="text-xs px-3 py-1 bg-muted rounded-full">
                    {tracks.find((t) => t.id === previewLessonData.trackId)?.icon} {tracks.find((t) => t.id === previewLessonData.trackId)?.name}
                  </span>
                </div>
              </div>
              {previewLessonData.videoUrl && (
                <div className="aspect-video rounded-lg overflow-hidden border">
                  <iframe
                    src={previewLessonData.videoUrl}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              )}
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <ReactMarkdown>{previewLessonData.content}</ReactMarkdown>
              </div>
            </div>
          )}
          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setPreviewLesson(null)}>
              Закрыть
            </Button>
            <Button
              onClick={() => {
                setPreviewLesson(null);
                navigate(`/lesson/${previewLessonData?.id}`);
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Открыть полный урок
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
