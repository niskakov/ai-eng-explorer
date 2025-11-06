-- Схема базы данных для платформы изучения английского
-- Выполните этот SQL в Supabase SQL Editor

-- Таблица направлений (tracks)
CREATE TABLE IF NOT EXISTS tracks (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  color TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Таблица уроков (lessons)
CREATE TABLE IF NOT EXISTS lessons (
  id TEXT PRIMARY KEY,
  track_id TEXT NOT NULL REFERENCES tracks(id) ON DELETE CASCADE,
  level TEXT NOT NULL CHECK (level IN ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
  title TEXT NOT NULL,
  description TEXT,
  content TEXT NOT NULL,
  video_url TEXT,
  video_type TEXT CHECK (video_type IN ('youtube', 'gdrive')),
  "order" INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Индексы для быстрого поиска
CREATE INDEX IF NOT EXISTS idx_lessons_track_id ON lessons(track_id);
CREATE INDEX IF NOT EXISTS idx_lessons_level ON lessons(level);
CREATE INDEX IF NOT EXISTS idx_lessons_order ON lessons("order");

-- Включить Row Level Security (RLS)
ALTER TABLE tracks ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;

-- Политики безопасности: разрешить всем читать
CREATE POLICY "Anyone can read tracks" ON tracks
  FOR SELECT USING (true);

CREATE POLICY "Anyone can read lessons" ON lessons
  FOR SELECT USING (true);

-- Политики для админов (нужно будет настроить аутентификацию)
-- Пока разрешаем всем писать (для разработки)
-- В продакшене нужно будет добавить проверку роли админа
CREATE POLICY "Anyone can insert tracks" ON tracks
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can update tracks" ON tracks
  FOR UPDATE USING (true);

CREATE POLICY "Anyone can delete tracks" ON tracks
  FOR DELETE USING (true);

CREATE POLICY "Anyone can insert lessons" ON lessons
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can update lessons" ON lessons
  FOR UPDATE USING (true);

CREATE POLICY "Anyone can delete lessons" ON lessons
  FOR DELETE USING (true);

-- Функция для автоматического обновления updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Триггеры для автоматического обновления updated_at
CREATE TRIGGER update_tracks_updated_at
  BEFORE UPDATE ON tracks
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_lessons_updated_at
  BEFORE UPDATE ON lessons
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

