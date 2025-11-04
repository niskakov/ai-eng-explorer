import { useParams, Link, useNavigate } from 'react-router-dom';
import { getTrackBySlug, getLessonsByTrackAndLevel } from '@/data/mockData';
import { ArrowLeft, Play, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Level } from '@/types/course';

const LessonsList = () => {
  const { slug, level } = useParams<{ slug: string; level: Level }>();
  const navigate = useNavigate();
  const track = slug ? getTrackBySlug(slug) : undefined;
  const lessons = track && level ? getLessonsByTrackAndLevel(track.id, level) : [];

  if (!track || !level) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Страница не найдена</h1>
          <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link
          to={`/track/${slug}`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Назад к уровням</span>
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{track.icon}</span>
            <div>
              <h1 className="text-3xl font-bold mb-1">
                {track.name} • {level}
              </h1>
              <p className="text-muted-foreground">{track.description}</p>
            </div>
          </div>
        </div>

        {lessons.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Уроки для этого уровня скоро появятся</p>
          </div>
        ) : (
          <div className="space-y-4 max-w-4xl">
            {lessons.map((lesson, index) => (
              <Link key={lesson.id} to={`/lesson/${lesson.id}`} className="block group">
                <div className="lesson-card p-6 hover:scale-[1.02] transition-transform">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {lesson.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">{lesson.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        {lesson.videoUrl && (
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Play className="w-4 h-4" />
                            <span>Видео</span>
                          </div>
                        )}
                        {lesson.exercises && lesson.exercises.length > 0 && (
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <FileText className="w-4 h-4" />
                            <span>{lesson.exercises.length} упражнений</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonsList;
