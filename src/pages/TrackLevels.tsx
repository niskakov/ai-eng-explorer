import { useParams, Link, useNavigate } from 'react-router-dom';
import { getTrackBySlug, levels, getLessonsByTrackAndLevel } from '@/data/mockData';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TrackLevels = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const track = slug ? getTrackBySlug(slug) : undefined;

  if (!track) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Направление не найдено</h1>
          <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Назад к направлениям</span>
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{track.icon}</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">{track.name}</h1>
              <p className="text-lg text-muted-foreground">{track.description}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Выберите свой уровень</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {levels.map((level) => {
              const lessonsCount = getLessonsByTrackAndLevel(track.id, level).length;
              const hasLessons = lessonsCount > 0;

              return (
                <Link
                  key={level}
                  to={hasLessons ? `/track/${slug}/${level}` : '#'}
                  className={`group ${!hasLessons && 'pointer-events-none opacity-50'}`}
                >
                  <div className="lesson-card p-6 text-center hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-primary mb-2">{level}</div>
                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span>{lessonsCount} {lessonsCount === 1 ? 'урок' : 'уроков'}</span>
                    </div>
                    {hasLessons && (
                      <div className="mt-3 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Открыть →
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Уровни владения языком:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <span className="font-medium text-foreground">A1-A2 (Beginner):</span> Базовый уровень
            </div>
            <div>
              <span className="font-medium text-foreground">B1-B2 (Intermediate):</span> Средний уровень
            </div>
            <div>
              <span className="font-medium text-foreground">C1-C2 (Advanced):</span> Продвинутый уровень
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackLevels;
