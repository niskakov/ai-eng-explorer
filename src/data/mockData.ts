import { Track, Lesson, Level } from '@/types/course';

export const tracks: Track[] = [
  {
    id: '1',
    slug: 'grammar',
    name: 'Grammar',
    description: 'Изучите основы грамматики английского языка от базового до продвинутого уровня',
    icon: '📚',
    color: 'hsl(217 91% 60%)',
  },
  {
    id: '2',
    slug: 'speaking',
    name: 'Speaking',
    description: 'Развивайте разговорные навыки через практические диалоги и упражнения',
    icon: '💬',
    color: 'hsl(142 71% 45%)',
  },
  {
    id: '3',
    slug: 'vocabulary',
    name: 'Vocabulary',
    description: 'Расширяйте словарный запас по тематическим блокам',
    icon: '📖',
    color: 'hsl(25 95% 53%)',
  },
  {
    id: '4',
    slug: 'listening',
    name: 'Listening',
    description: 'Тренируйте восприятие английской речи на слух',
    icon: '🎧',
    color: 'hsl(271 81% 56%)',
  },
];

export const lessons: Lesson[] = [
  {
    id: '1',
    trackId: '1',
    level: 'A1',
    title: 'Verb "To Be"',
    description: 'Изучите основной глагол английского языка',
    order: 1,
    content: `# Глагол To Be

Глагол **to be** является одним из самых важных глаголов в английском языке. Он имеет три формы в настоящем времени:

## Формы глагола to be:

- **I am** (Я есть)
- **You are** (Ты/Вы есть)
- **He/She/It is** (Он/Она/Оно есть)
- **We are** (Мы есть)
- **They are** (Они есть)

## Примеры использования:

1. I **am** a student. (Я студент)
2. You **are** happy. (Ты счастлив)
3. She **is** a teacher. (Она учитель)
4. We **are** friends. (Мы друзья)
5. They **are** at home. (Они дома)

## Отрицательная форма:

- I am **not** (I'm not)
- You are **not** (You aren't / You're not)
- He/She/It is **not** (isn't / 's not)
- We are **not** (We aren't / We're not)
- They are **not** (They aren't / They're not)

## Вопросительная форма:

- **Am** I...?
- **Are** you...?
- **Is** he/she/it...?
- **Are** we...?
- **Are** they...?`,
    videoUrl: 'https://www.youtube.com/embed/B1BLu7BtIXU',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e1',
        question: 'I ___ a student.',
        answer: 'am',
        type: 'fill',
      },
      {
        id: 'e2',
        question: 'She ___ happy.',
        answer: 'is',
        type: 'fill',
      },
      {
        id: 'e3',
        question: 'They ___ at home.',
        answer: 'are',
        type: 'fill',
      },
    ],
  },
  {
    id: '2',
    trackId: '1',
    level: 'A1',
    title: 'Present Simple',
    description: 'Настоящее простое время для описания привычек и фактов',
    order: 2,
    content: `# Present Simple

**Present Simple** используется для описания:
- Регулярных действий и привычек
- Постоянных ситуаций
- Общих фактов и истин

## Образование:

### Утвердительная форма:
- I/You/We/They + глагол
- He/She/It + глагол + **-s/-es**

**Примеры:**
- I work every day. (Я работаю каждый день)
- She works at a bank. (Она работает в банке)

### Отрицательная форма:
- I/You/We/They + **do not (don't)** + глагол
- He/She/It + **does not (doesn't)** + глагол

**Примеры:**
- I don't like coffee. (Я не люблю кофе)
- He doesn't speak English. (Он не говорит по-английски)

### Вопросительная форма:
- **Do** + I/you/we/they + глагол?
- **Does** + he/she/it + глагол?

**Примеры:**
- Do you like music? (Ты любишь музыку?)
- Does she work here? (Она здесь работает?)

## Слова-маркеры:
- always (всегда)
- usually (обычно)
- often (часто)
- sometimes (иногда)
- never (никогда)
- every day/week/month (каждый день/неделю/месяц)`,
    videoUrl: 'https://www.youtube.com/embed/5_GKHvM5YX8',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e4',
        question: 'She ___ (play) tennis every weekend.',
        answer: 'plays',
        type: 'fill',
      },
      {
        id: 'e5',
        question: 'They ___ (not go) to school on Sundays.',
        answer: "don't go",
        type: 'fill',
      },
    ],
  },
  {
    id: '3',
    trackId: '2',
    level: 'B1',
    title: 'Talking about Work',
    description: 'Разговоры о работе и карьере',
    order: 1,
    content: `# Talking about Work

В этом уроке мы изучим полезные фразы и выражения для разговоров о работе.

## Useful Phrases:

### Describing your job:
- I work as a... (Я работаю в качестве...)
- I'm a... (Я...)
- I work in... (Я работаю в...)
- My job involves... (Моя работа включает...)

### Talking about responsibilities:
- I'm responsible for... (Я отвечаю за...)
- I deal with... (Я имею дело с...)
- I manage... (Я управляю...)
- My main duties are... (Мои основные обязанности...)

### Work conditions:
- I work full-time/part-time (Я работаю полный/неполный рабочий день)
- I work from home/in an office (Я работаю из дома/в офисе)
- My working hours are... (Мой рабочий график...)
- I have flexible hours (У меня гибкий график)

## Example Dialogue:

**A:** What do you do for a living?  
**B:** I work as a software developer for a tech company.

**A:** That sounds interesting! What does your job involve?  
**B:** I'm responsible for developing mobile applications. My main duties are coding, testing, and debugging.

**A:** Do you work in an office?  
**B:** No, I work from home. I have flexible hours, which is great.`,
    exercises: [
      {
        id: 'e6',
        question: 'How would you describe your current job or studies in English?',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },
];

export const levels: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export const getLessonsByTrackAndLevel = (trackId: string, level: Level): Lesson[] => {
  return lessons
    .filter((lesson) => lesson.trackId === trackId && lesson.level === level)
    .sort((a, b) => a.order - b.order);
};

export const getLessonById = (id: string): Lesson | undefined => {
  return lessons.find((lesson) => lesson.id === id);
};

export const getTrackBySlug = (slug: string): Track | undefined => {
  return tracks.find((track) => track.slug === slug);
};
