import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { tracks, lessons, levels } from '@/data/mockData';
import { Plus, Edit, Trash2, Save } from 'lucide-react';
import { toast } from 'sonner';
import { Level } from '@/types/course';

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState('lessons');

  // Lesson Form State
  const [lessonForm, setLessonForm] = useState({
    title: '',
    description: '',
    content: '',
    trackId: '',
    level: 'A1' as Level,
    videoUrl: '',
    videoType: 'youtube' as 'youtube' | 'gdrive',
  });

  const handleSaveLesson = () => {
    if (!lessonForm.title || !lessonForm.trackId) {
      toast.error('Заполните обязательные поля');
      return;
    }
    
    // Here you would save to database with Lovable Cloud
    toast.success('Урок сохранён! (Подключите Lovable Cloud для реального сохранения)');
    
    // Reset form
    setLessonForm({
      title: '',
      description: '',
      content: '',
      trackId: '',
      level: 'A1',
      videoUrl: '',
      videoType: 'youtube',
    });
  };

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Админ-панель</h1>
        <p className="text-muted-foreground">
          Управление контентом платформы
        </p>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="lessons">Уроки</TabsTrigger>
          <TabsTrigger value="tracks">Направления</TabsTrigger>
          <TabsTrigger value="settings">Настройки</TabsTrigger>
        </TabsList>

        <TabsContent value="lessons" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Создать новый урок</h2>
              <Button onClick={handleSaveLesson} className="gap-2">
                <Save className="w-4 h-4" />
                Сохранить урок
              </Button>
            </div>

            <div className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Название урока *</Label>
                  <Input
                    id="title"
                    value={lessonForm.title}
                    onChange={(e) =>
                      setLessonForm({ ...lessonForm, title: e.target.value })
                    }
                    placeholder="Например: Present Simple"
                  />
                </div>

                <div>
                  <Label htmlFor="track">Направление *</Label>
                  <Select
                    value={lessonForm.trackId}
                    onValueChange={(value) =>
                      setLessonForm({ ...lessonForm, trackId: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите направление" />
                    </SelectTrigger>
                    <SelectContent>
                      {tracks.map((track) => (
                        <SelectItem key={track.id} value={track.id}>
                          {track.icon} {track.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="level">Уровень</Label>
                  <Select
                    value={lessonForm.level}
                    onValueChange={(value) =>
                      setLessonForm({ ...lessonForm, level: value as Level })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {levels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="videoUrl">Видео URL (YouTube/Google Drive)</Label>
                  <Input
                    id="videoUrl"
                    value={lessonForm.videoUrl}
                    onChange={(e) =>
                      setLessonForm({ ...lessonForm, videoUrl: e.target.value })
                    }
                    placeholder="https://youtube.com/embed/..."
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Описание</Label>
                <Textarea
                  id="description"
                  value={lessonForm.description}
                  onChange={(e) =>
                    setLessonForm({ ...lessonForm, description: e.target.value })
                  }
                  placeholder="Краткое описание урока"
                  rows={2}
                />
              </div>

              <div>
                <Label htmlFor="content">Контент урока (Markdown)</Label>
                <Textarea
                  id="content"
                  value={lessonForm.content}
                  onChange={(e) =>
                    setLessonForm({ ...lessonForm, content: e.target.value })
                  }
                  placeholder="# Заголовок урока&#10;&#10;Текст урока с **форматированием**"
                  rows={12}
                  className="font-mono text-sm"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Существующие уроки</h2>
            <div className="space-y-2">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="font-medium">{lesson.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {tracks.find((t) => t.id === lesson.trackId)?.name} • {lesson.level}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Edit className="w-4 h-4" />
                      Редактировать
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="tracks">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Направления обучения</h2>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Добавить направление
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {tracks.map((track) => (
                <Card key={track.id} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">{track.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{track.name}</h3>
                      <p className="text-sm text-muted-foreground">{track.description}</p>
                      <div className="mt-3 flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-destructive">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Настройки платформы</h2>
            <div className="space-y-4">
              <div>
                <Label>Подключение к Lovable Cloud</Label>
                <p className="text-sm text-muted-foreground mb-3">
                  Для сохранения данных, работы ИИ-помощника и отслеживания прогресса учеников
                </p>
                <Button variant="outline">Подключить Lovable Cloud</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
