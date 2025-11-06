import { Lesson } from '@/types/course';
import ReactMarkdown from 'react-markdown';
import { Card } from '@/components/ui/card';

interface LessonContentProps {
  lesson: Lesson;
}

const LessonContent = ({ lesson }: LessonContentProps) => {
  const getVideoEmbedUrl = (url: string, type?: string) => {
    const normalizedUrl = url.trim();

    // YouTube handling (auto-convert watch/share links to embed)
    const isYouTube =
      type === 'youtube' || /youtube\.com|youtu\.be/.test(normalizedUrl);
    if (isYouTube) {
      try {
        const u = new URL(normalizedUrl);
        let videoId = '';
        let startSeconds: number | undefined;

        // Parse start time from common params (t or start)
        const tParam = u.searchParams.get('t') || u.searchParams.get('start');
        if (tParam) {
          // Supports formats like 90, 1m30s
          const match = /^(?:(\d+)m)?(?:(\d+)s)?$/.exec(tParam);
          if (match) {
            const mins = match[1] ? parseInt(match[1], 10) : 0;
            const secs = match[2] ? parseInt(match[2], 10) : (!match[1] ? parseInt(tParam, 10) : 0);
            if (!Number.isNaN(mins) || !Number.isNaN(secs)) {
              startSeconds = mins * 60 + (Number.isNaN(secs) ? 0 : secs);
            }
          } else {
            const secs = parseInt(tParam, 10);
            if (!Number.isNaN(secs)) startSeconds = secs;
          }
        }

        if (u.hostname.includes('youtu.be')) {
          // https://youtu.be/<id>
          videoId = u.pathname.replace('/', '');
        } else if (u.hostname.includes('youtube.com')) {
          // https://www.youtube.com/watch?v=<id>
          if (u.pathname.startsWith('/watch')) {
            videoId = u.searchParams.get('v') || '';
          } else if (u.pathname.startsWith('/shorts/')) {
            videoId = u.pathname.split('/')[2] || '';
          } else if (u.pathname.startsWith('/embed/')) {
            // already embed
            return normalizedUrl;
          }
        }

        if (videoId) {
          const base = `https://www.youtube.com/embed/${videoId}`;
          return startSeconds ? `${base}?start=${startSeconds}` : base;
        }
      } catch {
        // fallthrough to return original URL
      }
      return normalizedUrl;
    }

    // Google Drive preview links
    const isGDrive = type === 'gdrive' || /drive\.google\.com/.test(normalizedUrl);
    if (isGDrive) {
      try {
        const u = new URL(normalizedUrl);
        // Formats:
        // - https://drive.google.com/file/d/<id>/view?usp=sharing -> /file/d/<id>/preview
        // - https://drive.google.com/open?id=<id> -> /file/d/<id>/preview
        if (u.pathname.startsWith('/file/d/')) {
          const parts = u.pathname.split('/');
          const id = parts[3];
          if (id) return `https://drive.google.com/file/d/${id}/preview`;
        }
        const id = u.searchParams.get('id');
        if (id) return `https://drive.google.com/file/d/${id}/preview`;
      } catch {
        // ignore
      }
      return normalizedUrl;
    }

    return normalizedUrl;
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
    </div>
  );
};

export default LessonContent;
