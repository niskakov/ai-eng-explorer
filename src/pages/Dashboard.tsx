import { useState } from 'react';
import { tracks, levels, getLessonsByTrackAndLevel } from '@/data/mockData';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Track, Level } from '@/types/course';

const Dashboard = () => {
  const [selectedTrack, setSelectedTrack] = useState<Track>(tracks[0]);
  const [selectedLevel, setSelectedLevel] = useState<Level>('A1');

  const lessons = getLessonsByTrackAndLevel(selectedTrack.id, selectedLevel);

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Добро пожаловать на EnglishPro!</h1>
        <p className="text-lg text-muted-foreground">
          Выберите направление и начните обучение с ИИ-помощником
        </p>
      </div>

      {/* Track Selection */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Направления обучения</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tracks.map((track) => (
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
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {track.description}
                </p>
              </div>
            </Card>
          ))}
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
              const count = getLessonsByTrackAndLevel(selectedTrack.id, level).length;
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

          {levels.map((level) => (
            <TabsContent key={level} value={level}>
              {lessons.length === 0 ? (
                <div className="text-center py-12">
                  <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    Уроки для этого уровня скоро появятся
                  </p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {lessons.map((lesson, index) => (
                    <Link key={lesson.id} to={`/learning/${lesson.id}`}>
                      <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary font-bold text-lg">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2">
                              {lesson.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              {lesson.description}
                            </p>
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
                          <Button className="btn-primary">
                            Начать урок
                          </Button>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </div>
  );
};

export default Dashboard;
