import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
 
import { Plus, Edit, Trash2, Save, X, LogOut } from 'lucide-react';
import { toast } from 'sonner';
import { Level, Lesson } from '@/types/course';
import { useLessons } from '@/contexts/LessonsContext';
import { useAuth } from '@/contexts/AuthContext';

const levels: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const Admin = () => {
  const { lessons, tracks, addLesson, updateLesson, deleteLesson, isLoading, error } = useLessons();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('lessons');
  const [editingLesson, setEditingLesson] = useState<Lesson | null>(null);
  
  // Filters & sorting
  const [trackFilter, setTrackFilter] = useState<string>('all');
  const [levelFilter, setLevelFilter] = useState<Level | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState<'order' | 'title' | 'level'>('order');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const [isCreatingNew, setIsCreatingNew] = useState(false);

  // Редирект, если не авторизован
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  // Не показываем контент, если не авторизован
  if (!isAuthenticated) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="container mx-auto p-8">
        <div className="text-center py-12">
          <p className="text-muted-foreground">Загрузка данных...</p>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    toast.success('Выход выполнен');
    navigate('/admin/login');
  };

  const [lessonForm, setLessonForm] = useState({
    title: '',
    description: '',
    content: '',
    trackId: '',
    level: 'A1' as Level,
    videoUrl: '',
    videoType: 'youtube' as 'youtube' | 'gdrive',
    order: 1,
  });

  const resetForm = () => {
    setLessonForm({
      title: '',
      description: '',
      content: '',
      trackId: '',
      level: 'A1',
      videoUrl: '',
      videoType: 'youtube',
      order: 1,
    });
    setEditingLesson(null);
    setIsCreatingNew(false);
  };

  const handleEdit = (lesson: Lesson) => {
    setEditingLesson(lesson);
    setIsCreatingNew(false);
    setLessonForm({
      title: lesson.title,
      description: lesson.description,
      content: lesson.content,
      trackId: lesson.trackId,
      level: lesson.level,
      videoUrl: lesson.videoUrl || '',
      videoType: lesson.videoType || 'youtube',
      order: lesson.order,
    });
    document.getElementById('lesson-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSave = async () => {
    if (!lessonForm.title || !lessonForm.trackId) {
      toast.error('Заполните обязательные поля: название и направление');
      return;
    }

    try {
      if (editingLesson) {
        await updateLesson(editingLesson.id, {
          ...lessonForm,
          videoUrl: lessonForm.videoUrl || undefined,
          videoType: lessonForm.videoType || undefined,
        });
        toast.success('Урок обновлён!');
      } else {
        const newLesson = await addLesson({
          ...lessonForm,
          videoUrl: lessonForm.videoUrl || undefined,
          videoType: lessonForm.videoType || undefined,
        });
        if (newLesson) {
          toast.success('Урок создан!');
        } else {
          toast.error('Ошибка при создании урока');
          return;
        }
      }
      resetForm();
    } catch (err) {
      toast.error('Ошибка при сохранении урока');
      console.error(err);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (confirm(`Вы уверены, что хотите удалить урок "${title}"?`)) {
      try {
        await deleteLesson(id);
        toast.success('Урок удалён!');
        if (editingLesson?.id === id) {
          resetForm();
        }
      } catch (err) {
        toast.error('Ошибка при удалении урока');
        console.error(err);
      }
    }
  };

  const handleNewLesson = () => {
    resetForm();
    setIsCreatingNew(true);
    document.getElementById('lesson-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  // (упражнения отключены)

  const filteredSortedLessons = useMemo(() => {
    const byFilters = lessons.filter((l) => {
      const trackOk = trackFilter === 'all' ? true : l.trackId === trackFilter;
      const levelOk = levelFilter === 'all' ? true : l.level === levelFilter;
      const q = searchQuery.trim().toLowerCase();
      const searchOk = q
        ? l.title.toLowerCase().includes(q) ||
          (l.description || '').toLowerCase().includes(q) ||
          (l.content || '').toLowerCase().includes(q)
        : true;
      return trackOk && levelOk && searchOk;
    });

    const levelsOrder = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

    const cmp = (a: Lesson, b: Lesson) => {
      // Always keep global grouping: by track, then by level (stable)
      if (a.trackId !== b.trackId) return a.trackId.localeCompare(b.trackId);
      if (a.level !== b.level) return levelsOrder.indexOf(a.level) - levelsOrder.indexOf(b.level);

      // Then apply selected sort key within group
      let res = 0;
      if (sortKey === 'order') res = (a.order || 0) - (b.order || 0);
      if (sortKey === 'title') res = a.title.localeCompare(b.title);
      if (sortKey === 'level') res = levelsOrder.indexOf(a.level) - levelsOrder.indexOf(b.level);
      return sortDir === 'asc' ? res : -res;
    };

    return byFilters.slice().sort(cmp);
  }, [lessons, trackFilter, levelFilter, searchQuery, sortKey, sortDir]);

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Админ-панель</h1>
          <p className="text-muted-foreground">
            Управление контентом платформы
          </p>
        </div>
        <Button variant="outline" onClick={handleLogout} className="gap-2">
          <LogOut className="w-4 h-4" />
          Выйти
        </Button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-destructive/10 text-destructive rounded-md">
          Ошибка: {error}
        </div>
      )}

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="lessons">Уроки ({lessons.length})</TabsTrigger>
          <TabsTrigger value="tracks">Направления ({tracks.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="lessons" className="space-y-6">
          {/* Панель фильтров и список уроков */}
          <Card className="p-6">
            <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-2xl font-semibold">Все уроки</h2>
                <div className="text-sm text-muted-foreground mt-1">
                  Показано: {filteredSortedLessons.length} из {lessons.length}
                </div>
              </div>
              <Button onClick={handleNewLesson} className="gap-2">
                <Plus className="w-4 h-4" />
                Создать новый урок
              </Button>
            </div>

            {/* Controls */}
            <div className="grid md:grid-cols-4 gap-3 mb-6">
              <div>
                <Label>Направление</Label>
                <Select value={trackFilter} onValueChange={setTrackFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Все направления" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все направления</SelectItem>
                    {tracks.map((t) => (
                      <SelectItem key={t.id} value={t.id}>
                        {t.icon} {t.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Уровень</Label>
                <Select value={levelFilter} onValueChange={(v) => setLevelFilter(v as any)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Все уровни" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все уровни</SelectItem>
                    {levels.map((lv) => (
                      <SelectItem key={lv} value={lv}>
                        {lv}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Поиск</Label>
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Название, описание, текст..."
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label>Сортировка</Label>
                  <Select value={sortKey} onValueChange={(v) => setSortKey(v as any)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="order">По порядку</SelectItem>
                      <SelectItem value="title">По названию</SelectItem>
                      <SelectItem value="level">По уровню</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Направление</Label>
                  <Select value={sortDir} onValueChange={(v) => setSortDir(v as any)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asc">Возр.</SelectItem>
                      <SelectItem value="desc">Убыв.</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {filteredSortedLessons.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  Не найдено уроков по выбранным фильтрам
                </div>
              ) : (
                filteredSortedLessons.map((lesson, idx) => {
                  const track = tracks.find((t) => t.id === lesson.trackId);
                  const prev = filteredSortedLessons[idx - 1];
                  const showTrackHeader = !prev || prev.trackId !== lesson.trackId;
                  const showLevelHeader = showTrackHeader || (prev && prev.level !== lesson.level);
                  return (
                    <div key={lesson.id}>
                      {showTrackHeader && track && (
                        <div className="mt-6 mb-2 text-sm font-semibold text-foreground/80 flex items-center gap-2">
                          <span className="text-base">{track.icon}</span> {track.name}
                          <span className="text-xs px-2 py-0.5 bg-muted rounded-full">
                            {lessons.filter((l) => l.trackId === track.id).length} уроков
                          </span>
                        </div>
                      )}
                      {showLevelHeader && (
                        <div className="mb-2 text-xs px-2 py-1 bg-primary/10 text-primary rounded inline-block">
                          Уровень {lesson.level}
                        </div>
                      )}
                      <Card
                        className={`p-4 hover:shadow-md transition-all ${
                          editingLesson?.id === lesson.id ? 'ring-2 ring-primary' : ''
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-semibold">{lesson.title}</h3>
                              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                                {lesson.level}
                              </span>
                              {track && (
                                <span className="text-sm text-muted-foreground">
                                  {track.icon} {track.name}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {lesson.description}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>Порядок: {lesson.order}</span>
                              {lesson.videoUrl && <span>🎥 Есть видео</span>}
                              
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEdit(lesson)}
                              className="gap-2"
                            >
                              <Edit className="w-4 h-4" />
                              Редактировать
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDelete(lesson.id, lesson.title)}
                              className="gap-2 text-destructive hover:text-destructive"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </div>
                  );
                })
              )}
            </div>
          </Card>

          {/* Форма создания/редактирования */}
          {(isCreatingNew || editingLesson) && (
            <Card id="lesson-form" className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">
                  {editingLesson ? 'Редактировать урок' : 'Создать новый урок'}
                </h2>
                <div className="flex gap-2">
                  <Button onClick={handleSave} className="gap-2">
                    <Save className="w-4 h-4" />
                    Сохранить
                  </Button>
                  <Button variant="outline" onClick={resetForm} className="gap-2">
                    <X className="w-4 h-4" />
                    Отмена
                  </Button>
                </div>
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

                <div className="grid md:grid-cols-3 gap-4">
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
                    <Label htmlFor="order">Порядок</Label>
                    <Input
                      id="order"
                      type="number"
                      value={lessonForm.order}
                      onChange={(e) =>
                        setLessonForm({ ...lessonForm, order: parseInt(e.target.value) || 1 })
                      }
                      min="1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="videoType">Тип видео</Label>
                    <Select
                      value={lessonForm.videoType}
                      onValueChange={(value) =>
                        setLessonForm({ ...lessonForm, videoType: value as 'youtube' | 'gdrive' })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="gdrive">Google Drive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="videoUrl">Видео URL (YouTube/Google Drive)</Label>
                  <Input
                    id="videoUrl"
                    value={lessonForm.videoUrl}
                    onChange={(e) =>
                      setLessonForm({ ...lessonForm, videoUrl: e.target.value })
                    }
                    placeholder="https://www.youtube.com/embed/..."
                  />
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
          )}
        </TabsContent>

        <TabsContent value="tracks">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Направления обучения</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {tracks.map((track) => (
                <Card key={track.id} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">{track.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{track.name}</h3>
                      <p className="text-sm text-muted-foreground">{track.description}</p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Уроков: {lessons.filter((l) => l.trackId === track.id).length}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      
    </div>
  );
};

export default Admin;