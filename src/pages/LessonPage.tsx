import { useParams, useNavigate } from 'react-router-dom';
import { getLessonById } from '@/data/mockData';
import LessonContent from '@/components/LessonContent';
import AIAssistant from '@/components/AIAssistant';
import LessonSidebar from '@/components/LessonSidebar';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const LessonPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const lesson = id ? getLessonById(id) : undefined;
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Урок не найден</h1>
          <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-80' : 'w-0'
        } transition-all duration-300 overflow-hidden flex-shrink-0`}
      >
        <LessonSidebar currentLessonId={lesson.id} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Lesson Content */}
        <div className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="gap-2"
              >
                <Menu className="w-4 h-4" />
                {sidebarOpen ? 'Скрыть' : 'Показать'} навигацию
              </Button>
            </div>
            <LessonContent lesson={lesson} />
          </div>
        </div>

        {/* AI Assistant */}
        <div className="w-96 flex-shrink-0 hidden lg:block border-l border-border">
          <AIAssistant lesson={lesson} />
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
