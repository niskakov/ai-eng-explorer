import { Lesson } from '@/types/course';
import ReactMarkdown from 'react-markdown';
import { Card } from '@/components/ui/card';

interface LessonContentProps {
  lesson: Lesson;
}

const LessonContent = ({ lesson }: LessonContentProps) => {
  const getVideoEmbedUrl = (url: string, type?: string) => {
    if (type === 'youtube') {
      return url;
    }
    return url;
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">{lesson.title}</h1>
        <p className="text-lg text-muted-foreground">{lesson.description}</p>
      </div>

      {lesson.videoUrl && (
        <Card className="overflow-hidden">
          <div className="aspect-video">
            <iframe
              src={getVideoEmbedUrl(lesson.videoUrl, lesson.videoType)}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Card>
      )}

      <Card className="p-8">
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold mb-4 text-foreground">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold mb-3 mt-6 text-foreground">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold mb-2 mt-4 text-foreground">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="mb-4 text-foreground leading-relaxed">{children}</p>
              ),
              ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
              li: ({ children }) => <li className="text-foreground">{children}</li>,
              strong: ({ children }) => <strong className="font-semibold text-primary">{children}</strong>,
            }}
          >
            {lesson.content}
          </ReactMarkdown>
        </div>
      </Card>

      {lesson.exercises && lesson.exercises.length > 0 && (
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6">Упражнения</h2>
          <div className="space-y-6">
            {lesson.exercises.map((exercise, index) => (
              <div key={exercise.id} className="border-l-4 border-primary pl-4">
                <p className="font-medium mb-2">
                  {index + 1}. {exercise.question}
                </p>
                <div className="text-sm text-muted-foreground">
                  Тип: {exercise.type === 'fill' ? 'Заполнить пропуск' : 'Текстовый ответ'}
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

export default LessonContent;
