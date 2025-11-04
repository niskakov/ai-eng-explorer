import { Link } from 'react-router-dom';
import { tracks } from '@/data/mockData';
import { ArrowRight } from 'lucide-react';

const Tracks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            Изучайте английский язык
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите направление обучения и начните своё путешествие к свободному владению английским
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tracks.map((track) => (
            <Link
              key={track.id}
              to={`/track/${track.slug}`}
              className="group"
            >
              <div className="lesson-card p-8 h-full hover:scale-105 transition-transform duration-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{track.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {track.name}
                    </h2>
                    <p className="text-muted-foreground">{track.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary font-medium mt-4">
                  <span>Выбрать уровень</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted rounded-full">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">
              ИИ-помощник готов ответить на ваши вопросы на каждом уроке
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
