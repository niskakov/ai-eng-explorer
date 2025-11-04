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
  // ========== A1 LEVEL ==========
  
  // A1 Grammar
  {
    id: 'a1-gr-1',
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
- **Are** they...?

## Упражнения:

1. Complete: I ___ a doctor. (am)
2. Complete: They ___ students. (are)
3. Make negative: She is happy. → She isn't happy.`,
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
    id: 'a1-gr-2',
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
    id: 'a1-gr-3',
    trackId: '1',
    level: 'A1',
    title: 'Articles: A, An, The',
    description: 'Изучите артикли в английском языке',
    order: 3,
    content: `# Артикли: A, An, The

## Неопределенный артикль A/An

**A** используется перед словами, начинающимися с согласной:
- a book (книга)
- a car (машина)
- a student (студент)

**An** используется перед словами, начинающимися с гласной:
- an apple (яблоко)
- an hour (час)
- an umbrella (зонт)

**Использование:**
- Когда говорим о чем-то впервые
- Когда предмет не определен
- Когда предмет один из многих

## Определенный артикль The

**The** используется:
- Когда предмет уже упоминался
- Когда предмет единственный в своем роде (the sun, the moon)
- С географическими названиями (the United States, the Black Sea)
- С музыкальными инструментами (play the piano)

**Не используется:**
- С общими понятиями (I like music)
- С названиями стран (I live in Russia)
- С именами (My name is John)`,
    videoUrl: 'https://www.youtube.com/embed/s2rJt5PR9W0',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e6',
        question: 'I need ___ apple.',
        answer: 'an',
        type: 'fill',
      },
      {
        id: 'e7',
        question: '___ sun is very bright today.',
        answer: 'The',
        type: 'fill',
      },
    ],
  },

  // A1 Speaking
  {
    id: 'a1-sp-1',
    trackId: '2',
    level: 'A1',
    title: 'Introducing Yourself',
    description: 'Как представиться и познакомиться',
    order: 1,
    content: `# Introducing Yourself

## Основные фразы для знакомства:

### Представление:
- **Hello, my name is...** (Привет, меня зовут...)
- **Hi, I'm...** (Привет, я...)
- **Nice to meet you!** (Приятно познакомиться!)
- **Pleased to meet you!** (Рад знакомству!)

### Вопросы:
- **What's your name?** (Как вас зовут?)
- **Where are you from?** (Откуда вы?)
- **How old are you?** (Сколько вам лет?)
- **What do you do?** (Чем вы занимаетесь?)

### Диалог:

**A:** Hello! My name is Anna. What's your name?
**B:** Hi Anna! I'm Mike. Nice to meet you!
**A:** Nice to meet you too! Where are you from?
**B:** I'm from London. And you?
**A:** I'm from Moscow.`,
    videoUrl: 'https://www.youtube.com/embed/9qN5akJmJ8I',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e8',
        question: 'Practice introducing yourself. Say your name, where you are from, and your age.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },
  {
    id: 'a1-sp-2',
    trackId: '2',
    level: 'A1',
    title: 'Asking for Directions',
    description: 'Как спросить дорогу',
    order: 2,
    content: `# Asking for Directions

## Полезные фразы:

### Вопросы:
- **Excuse me, where is...?** (Извините, где находится...?)
- **How do I get to...?** (Как добраться до...?)
- **Is it far?** (Далеко ли это?)
- **Can you help me?** (Можете помочь?)

### Ответы:
- **Go straight ahead** (Идите прямо)
- **Turn left/right** (Поверните налево/направо)
- **It's on your left/right** (Это слева/справа от вас)
- **It's next to...** (Это рядом с...)
- **It's opposite...** (Это напротив...)

### Диалог:

**Tourist:** Excuse me, where is the train station?
**Local:** Go straight ahead, then turn left. It's on your right.
**Tourist:** Is it far?
**Local:** No, it's about 5 minutes walk.
**Tourist:** Thank you very much!
**Local:** You're welcome!`,
    videoUrl: 'https://www.youtube.com/embed/vZ5r1f0z3yw',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e9',
        question: 'Practice asking for directions to a place near you.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },

  // A1 Vocabulary
  {
    id: 'a1-voc-1',
    trackId: '3',
    level: 'A1',
    title: 'Family Members',
    description: 'Названия членов семьи',
    order: 1,
    content: `# Family Members

## Основные слова:

- **mother / mum / mom** (мама)
- **father / dad** (папа)
- **parents** (родители)
- **brother** (брат)
- **sister** (сестра)
- **son** (сын)
- **daughter** (дочь)
- **grandmother / grandma** (бабушка)
- **grandfather / grandpa** (дедушка)
- **uncle** (дядя)
- **aunt** (тётя)
- **cousin** (двоюродный брат/сестра)
- **husband** (муж)
- **wife** (жена)

## Примеры предложений:

- My mother is a teacher.
- I have two brothers and one sister.
- My grandparents live in the country.
- She is my cousin.`,
    videoUrl: 'https://www.youtube.com/embed/FHaObkHEkHQ',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e10',
        question: 'Describe your family using the vocabulary from this lesson.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },
  {
    id: 'a1-voc-2',
    trackId: '3',
    level: 'A1',
    title: 'Daily Routines',
    description: 'Слова и фразы для описания ежедневных дел',
    order: 2,
    content: `# Daily Routines

## Ежедневные действия:

- **wake up** (просыпаться)
- **get up** (вставать)
- **brush teeth** (чистить зубы)
- **have breakfast/lunch/dinner** (завтракать/обедать/ужинать)
- **go to work/school** (идти на работу/в школу)
- **work** (работать)
- **have a break** (делать перерыв)
- **come home** (приходить домой)
- **do homework** (делать домашнее задание)
- **watch TV** (смотреть телевизор)
- **go to bed** (ложиться спать)

## Пример распорядка дня:

I wake up at 7 o'clock. I get up and brush my teeth. Then I have breakfast. I go to work at 8:30. I work until 5 PM. I come home at 6 PM and have dinner. In the evening, I watch TV. I go to bed at 11 PM.`,
    videoUrl: 'https://www.youtube.com/embed/c5a4f6B2M8c',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e11',
        question: 'Describe your daily routine using the phrases from this lesson.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },

  // A1 Listening
  {
    id: 'a1-li-1',
    trackId: '4',
    level: 'A1',
    title: 'Listening: Basic Conversations',
    description: 'Понимание простых разговоров',
    order: 1,
    content: `# Listening: Basic Conversations

## Цель урока:
Развить навыки понимания простых диалогов на английском языке.

## Полезные советы:

1. **Слушайте внимательно** - не пытайтесь понять каждое слово
2. **Слушайте ключевые слова** - существительные, глаголы, числа
3. **Слушайте несколько раз** - повторное прослушивание помогает
4. **Читайте транскрипт** - после прослушивания читайте текст

## Практические упражнения:

### Упражнение 1:
Прослушайте диалог и ответьте:
- Where are the speakers?
- What are they talking about?

### Упражнение 2:
Прослушайте и заполните пропуски:
- "Hello, my name is ___"
- "I'm from ___"`,
    videoUrl: 'https://www.youtube.com/embed/xyMrLQ4ZI-4',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e12',
        question: 'Listen to the audio and write down three key words you heard.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },

  // ========== A2 LEVEL ==========
  
  // A2 Grammar
  {
    id: 'a2-gr-1',
    trackId: '1',
    level: 'A2',
    title: 'Past Simple',
    description: 'Прошедшее простое время',
    order: 1,
    content: `# Past Simple

**Past Simple** используется для описания:
- Завершенных действий в прошлом
- Событий, которые произошли в определенное время
- Привычек в прошлом

## Образование правильных глаголов:

### Утвердительная форма:
**Глагол + -ed**

- work → worked
- play → played
- study → studied (y меняется на i)

### Примеры:
- I worked yesterday. (Я работал вчера)
- She played tennis last week. (Она играла в теннис на прошлой неделе)
- They studied English for 3 years. (Они изучали английский 3 года)

## Неправильные глаголы:

- go → went
- see → saw
- have → had
- do → did
- be → was/were

## Отрицательная форма:
**did not (didn't) + глагол в начальной форме**

- I didn't work yesterday.
- She didn't go to school.

## Вопросительная форма:
**Did + подлежащее + глагол в начальной форме?**

- Did you work yesterday?
- Did she go to the party?

## Слова-маркеры:
- yesterday (вчера)
- last week/month/year (на прошлой неделе/месяце/году)
- ago (назад)
- in 2020 (в 2020 году)`,
    videoUrl: 'https://www.youtube.com/embed/_8ObuO5neR0',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e13',
        question: 'I ___ (go) to the cinema yesterday.',
        answer: 'went',
        type: 'fill',
      },
      {
        id: 'e14',
        question: 'She ___ (not study) for the exam.',
        answer: "didn't study",
        type: 'fill',
      },
    ],
  },
  {
    id: 'a2-gr-2',
    trackId: '1',
    level: 'A2',
    title: 'Future: Will and Going to',
    description: 'Будущее время',
    order: 2,
    content: `# Future: Will and Going to

## Will

**Will** используется для:
- Спонтанных решений (I'll help you!)
- Предсказаний (It will rain tomorrow)
- Обещаний (I will call you)

**Форма:**
- I/You/He/She/It/We/They **will** + глагол
- Сокращение: **'ll**

### Примеры:
- I'll meet you at 5 PM.
- She will come tomorrow.
- They won't be late. (will not = won't)

## Going to

**Going to** используется для:
- Планов и намерений (I'm going to study)
- Предсказаний с доказательствами (Look at those clouds! It's going to rain)

**Форма:**
- I **am going to** + глагол
- You/We/They **are going to** + глагол
- He/She/It **is going to** + глагол

### Примеры:
- I'm going to visit my friend tomorrow.
- She's going to start university next year.
- They're going to buy a new car.

## Разница:

**Will:** спонтанное решение
- "I'm hungry" → "I'll make a sandwich"

**Going to:** план
- "I'm going to make a sandwich" (планировал заранее)`,
    videoUrl: 'https://www.youtube.com/embed/2LSBcJN4_5o',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e15',
        question: 'I think it ___ (rain) tomorrow.',
        answer: 'will rain',
        type: 'fill',
      },
      {
        id: 'e16',
        question: 'We ___ (visit) Paris next month.',
        answer: "are going to visit",
        type: 'fill',
      },
    ],
  },
  {
    id: 'a2-gr-3',
    trackId: '1',
    level: 'A2',
    title: 'Present Continuous',
    description: 'Настоящее длительное время',
    order: 3,
    content: `# Present Continuous

**Present Continuous** используется для:
- Действий, происходящих в момент речи
- Временных ситуаций
- Планов на ближайшее будущее

## Образование:

**am/is/are + глагол + -ing**

### Примеры:
- I am reading a book now.
- She is watching TV.
- They are playing football.

## Отрицательная форма:
- I am **not** reading.
- She **isn't** watching.
- They **aren't** playing.

## Вопросительная форма:
- **Am** I reading?
- **Is** she watching?
- **Are** they playing?

## Правила написания -ing:

1. Обычные глаголы: play → playing
2. Глаголы на -e: make → making (убираем e)
3. Короткие гласные: sit → sitting (удваиваем согласную)
4. Глаголы на -ie: lie → lying (ie → y)

## Слова-маркеры:
- now (сейчас)
- at the moment (в данный момент)
- currently (в настоящее время)
- right now (прямо сейчас)`,
    videoUrl: 'https://www.youtube.com/embed/3j3lzO16a4Y',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e17',
        question: 'I ___ (study) English now.',
        answer: 'am studying',
        type: 'fill',
      },
      {
        id: 'e18',
        question: 'They ___ (not work) at the moment.',
        answer: "aren't working",
        type: 'fill',
      },
    ],
  },

  // A2 Speaking
  {
    id: 'a2-sp-1',
    trackId: '2',
    level: 'A2',
    title: 'Making Plans',
    description: 'Как строить планы и договариваться',
    order: 1,
    content: `# Making Plans

## Полезные фразы:

### Предложения:
- **Would you like to...?** (Хотели бы вы...?)
- **How about...?** (Как насчет...?)
- **Why don't we...?** (Почему бы нам не...?)
- **Let's...** (Давайте...)

### Ответы:
- **That sounds great!** (Звучит отлично!)
- **I'd love to, but...** (Я бы с радостью, но...)
- **Sorry, I can't. I'm busy.** (Извините, не могу. Я занят)
- **Maybe another time.** (Может быть, в другой раз)

### Диалог:

**A:** Would you like to go to the cinema this weekend?
**B:** That sounds great! What film do you want to see?
**A:** How about the new action movie?
**B:** Perfect! When should we meet?
**A:** Let's meet at 7 PM on Saturday.
**B:** Great! See you then!`,
    videoUrl: 'https://www.youtube.com/embed/qFQ5jT3Q5kE',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e19',
        question: 'Practice making a plan with a friend. Use the phrases from this lesson.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },
  {
    id: 'a2-sp-2',
    trackId: '2',
    level: 'A2',
    title: 'Talking about Past Experiences',
    description: 'Рассказ о прошлом опыте',
    order: 2,
    content: `# Talking about Past Experiences

## Полезные фразы:

### Начало рассказа:
- **Last year/month/week...** (В прошлом году/месяце/неделе...)
- **A few days ago...** (Несколько дней назад...)
- **When I was...** (Когда я был...)
- **I remember when...** (Я помню, когда...)

### Описание:
- **It was amazing/incredible/terrible** (Это было потрясающе/невероятно/ужасно)
- **I enjoyed it very much** (Мне очень понравилось)
- **I had a great/wonderful time** (Я отлично провел время)

### Пример рассказа:

**A:** Have you ever been to Paris?
**B:** Yes, I went there last year. It was amazing!
**A:** What did you do there?
**B:** I visited the Eiffel Tower and the Louvre. I had a wonderful time!
**A:** That sounds great!`,
    videoUrl: 'https://www.youtube.com/embed/kdDSRRCK_MI',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e20',
        question: 'Tell about one of your past experiences using the phrases from this lesson.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },

  // A2 Vocabulary
  {
    id: 'a2-voc-1',
    trackId: '3',
    level: 'A2',
    title: 'Travel and Tourism',
    description: 'Словарь для путешествий',
    order: 1,
    content: `# Travel and Tourism

## Основные слова:

### Транспорт:
- **airport** (аэропорт)
- **flight** (рейс)
- **train station** (вокзал)
- **ticket** (билет)
- **luggage/baggage** (багаж)
- **passport** (паспорт)
- **visa** (виза)

### Размещение:
- **hotel** (отель)
- **hostel** (хостел)
- **booking/reservation** (бронирование)
- **check-in/check-out** (регистрация/выезд)
- **room** (номер)

### Достопримечательности:
- **sightseeing** (осмотр достопримечательностей)
- **museum** (музей)
- **monument** (памятник)
- **tourist attraction** (туристическая достопримечательность)
- **guide** (гид)

### Полезные фразы:
- **I'd like to book a room** (Я хотел бы забронировать номер)
- **How much does it cost?** (Сколько это стоит?)
- **Can I have a map?** (Можно карту?)`,
    videoUrl: 'https://www.youtube.com/embed/I-vHr6oWnQw',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e21',
        question: 'Describe your ideal vacation using the vocabulary from this lesson.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },
  {
    id: 'a2-voc-2',
    trackId: '3',
    level: 'A2',
    title: 'Food and Cooking',
    description: 'Еда и готовка',
    order: 2,
    content: `# Food and Cooking

## Типы еды:

- **appetizer/starter** (закуска)
- **main course** (основное блюдо)
- **dessert** (десерт)
- **snack** (перекус)

## Приготовление:

- **cook** (готовить)
- **bake** (печь)
- **fry** (жарить)
- **boil** (варить)
- **grill** (жарить на гриле)
- **chop** (рубить)
- **mix** (смешивать)

## Вкус:

- **sweet** (сладкий)
- **sour** (кислый)
- **salty** (соленый)
- **bitter** (горький)
- **spicy** (острый)
- **delicious** (вкусный)
- **tasty** (вкусный)

## Полезные фразы:

- **I'm hungry/thirsty** (Я голоден/хочу пить)
- **What would you like to eat?** (Что бы вы хотели съесть?)
- **I'd like...** (Я бы хотел...)
- **Can I have the bill, please?** (Можно счет?)`,
    videoUrl: 'https://www.youtube.com/embed/8mkOfyOZvqw',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e22',
        question: 'Describe your favorite dish and how to cook it.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },

  // A2 Listening
  {
    id: 'a2-li-1',
    trackId: '4',
    level: 'A2',
    title: 'Listening: Understanding Instructions',
    description: 'Понимание инструкций и указаний',
    order: 1,
    content: `# Listening: Understanding Instructions

## Цель урока:
Развить навыки понимания инструкций и указаний на английском языке.

## Типы инструкций:

### Рецепты:
- "First, chop the vegetables..."
- "Then, add the salt..."
- "Finally, cook for 20 minutes..."

### Указания:
- "Turn left at the traffic lights..."
- "Go straight ahead..."
- "It's on your right..."

## Стратегии:

1. **Слушайте ключевые слова:** first, then, next, finally
2. **Обращайте внимание на числа:** время, количество, порядок
3. **Слушайте команды:** turn, go, stop, add, mix

## Практика:

Прослушайте инструкцию и выполните следующие задания:
1. Запишите порядок действий
2. Отметьте ключевые слова
3. Ответьте на вопросы о содержании`,
    videoUrl: 'https://www.youtube.com/embed/2LSBcJN4_5o',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e23',
        question: 'Listen to instructions and write down the sequence of actions.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },

  // ========== B1 LEVEL ==========
  
  // B1 Grammar
  {
    id: 'b1-gr-1',
    trackId: '1',
    level: 'B1',
    title: 'Present Perfect',
    description: 'Настоящее совершенное время',
    order: 1,
    content: `# Present Perfect

**Present Perfect** используется для:
- Действий, которые произошли в прошлом, но связаны с настоящим
- Опыта жизни (без указания времени)
- Действий, которые начались в прошлом и продолжаются до сих пор

## Образование:

**have/has + Past Participle (3-я форма глагола)**

### Правильные глаголы:
- work → worked
- play → played

### Неправильные глаголы:
- go → gone
- see → seen
- do → done

### Примеры:
- I have worked here for 5 years.
- She has seen this film.
- They have been to London.

## Отрицательная форма:
- I **haven't** worked here.
- She **hasn't** seen it.

## Вопросительная форма:
- **Have** you been to Paris?
- **Has** she finished her homework?

## Слова-маркеры:
- **already** (уже)
- **yet** (еще, уже)
- **just** (только что)
- **ever** (когда-либо)
- **never** (никогда)
- **for** (в течение)
- **since** (с тех пор как)

## Разница с Past Simple:

**Past Simple:** действие в прошлом с указанием времени
- I went to Paris **last year**.

**Present Perfect:** действие в прошлом без указания времени
- I **have been** to Paris (не важно когда)`,
    videoUrl: 'https://www.youtube.com/embed/I0QNbLP8KGI',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e24',
        question: 'I ___ (never see) such a beautiful sunset.',
        answer: 'have never seen',
        type: 'fill',
      },
      {
        id: 'e25',
        question: 'She ___ (work) here for 3 years.',
        answer: 'has worked',
        type: 'fill',
      },
    ],
  },
  {
    id: 'b1-gr-2',
    trackId: '1',
    level: 'B1',
    title: 'First and Second Conditionals',
    description: 'Условные предложения первого и второго типа',
    order: 2,
    content: `# First and Second Conditionals

## First Conditional (Реальное условие)

Используется для реальных ситуаций в будущем.

**Структура:**
**If + Present Simple, will + глагол**

### Примеры:
- If it rains, I will stay at home.
- If you study hard, you will pass the exam.
- I will call you if I have time.

## Second Conditional (Нереальное условие)

Используется для нереальных или маловероятных ситуаций в настоящем или будущем.

**Структура:**
**If + Past Simple, would + глагол**

### Примеры:
- If I won the lottery, I would buy a house.
- If I were you, I would study more.
- She would travel the world if she had money.

## Разница:

**First Conditional:** реальная ситуация
- If it rains tomorrow, I will take an umbrella. (может пойти дождь)

**Second Conditional:** нереальная ситуация
- If I were rich, I would buy a yacht. (я не богат, это мечта)`,
    videoUrl: 'https://www.youtube.com/embed/3j3lzO16a4Y',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e26',
        question: 'If I ___ (have) time, I ___ (visit) you.',
        answer: 'have, will visit',
        type: 'fill',
      },
      {
        id: 'e27',
        question: 'If I ___ (be) you, I ___ (study) harder.',
        answer: 'were, would study',
        type: 'fill',
      },
    ],
  },
  {
    id: 'b1-gr-3',
    trackId: '1',
    level: 'B1',
    title: 'Past Continuous',
    description: 'Прошедшее длительное время',
    order: 3,
    content: `# Past Continuous

**Past Continuous** используется для:
- Действий, которые длились в определенный момент в прошлом
- Действий, которые происходили, когда что-то другое случилось
- Описания атмосферы в прошлом

## Образование:

**was/were + глагол + -ing**

### Примеры:
- I was reading a book at 8 PM yesterday.
- She was cooking when I arrived.
- They were playing football when it started to rain.

## Отрицательная форма:
- I **wasn't** reading.
- They **weren't** playing.

## Вопросительная форма:
- **Was** she cooking?
- **Were** they playing?

## Использование с Past Simple:

**Past Continuous** - длительное действие в прошлом
**Past Simple** - короткое действие, которое прервало длительное

- I **was watching** TV when the phone **rang**.
- She **was studying** when her friend **called**.`,
    videoUrl: 'https://www.youtube.com/embed/xyMrLQ4ZI-4',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e28',
        question: 'I ___ (watch) TV when you ___ (call).',
        answer: 'was watching, called',
        type: 'fill',
      },
    ],
  },

  // B1 Speaking
  {
    id: 'b1-sp-1',
    trackId: '2',
    level: 'B1',
    title: 'Talking about Work',
    description: 'Разговоры о работе и карьере',
    order: 1,
    content: `# Talking about Work

В этом уроке мы изучим полезные фразы и выражения для разговоров о работе.

## Useful Phrases:

### Describing your job:
- **I work as a...** (Я работаю в качестве...)
- **I'm a...** (Я...)
- **I work in...** (Я работаю в...)
- **My job involves...** (Моя работа включает...)

### Talking about responsibilities:
- **I'm responsible for...** (Я отвечаю за...)
- **I deal with...** (Я имею дело с...)
- **I manage...** (Я управляю...)
- **My main duties are...** (Мои основные обязанности...)

### Work conditions:
- **I work full-time/part-time** (Я работаю полный/неполный рабочий день)
- **I work from home/in an office** (Я работаю из дома/в офисе)
- **My working hours are...** (Мой рабочий график...)
- **I have flexible hours** (У меня гибкий график)

## Example Dialogue:

**A:** What do you do for a living?
**B:** I work as a software developer for a tech company.

**A:** That sounds interesting! What does your job involve?
**B:** I'm responsible for developing mobile applications. My main duties are coding, testing, and debugging.

**A:** Do you work in an office?
**B:** No, I work from home. I have flexible hours, which is great.`,
    videoUrl: 'https://www.youtube.com/embed/kdDSRRCK_MI',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e29',
        question: 'How would you describe your current job or studies in English?',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },
  {
    id: 'b1-sp-2',
    trackId: '2',
    level: 'B1',
    title: 'Giving Opinions and Agreeing/Disagreeing',
    description: 'Выражение мнения и согласие/несогласие',
    order: 2,
    content: `# Giving Opinions and Agreeing/Disagreeing

## Выражение мнения:

### Начало:
- **I think that...** (Я думаю, что...)
- **In my opinion...** (По моему мнению...)
- **I believe that...** (Я верю, что...)
- **From my point of view...** (С моей точки зрения...)
- **As far as I'm concerned...** (Насколько я понимаю...)

### Согласие:
- **I agree with you** (Я согласен с вами)
- **That's exactly what I think** (Именно так я и думаю)
- **You're absolutely right** (Вы абсолютно правы)
- **I couldn't agree more** (Полностью согласен)

### Несогласие (вежливо):
- **I see what you mean, but...** (Понимаю, что вы имеете в виду, но...)
- **I'm not sure I agree** (Не уверен, что согласен)
- **That's a good point, however...** (Хороший момент, однако...)
- **I disagree because...** (Я не согласен, потому что...)

### Диалог:

**A:** I think online learning is better than traditional education.
**B:** I see what you mean, but I believe face-to-face interaction is important.
**A:** That's a good point. However, online learning offers more flexibility.
**B:** You're absolutely right about flexibility, but I still prefer traditional classes.`,
    videoUrl: 'https://www.youtube.com/embed/qFQ5jT3Q5kE',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e30',
        question: 'Give your opinion on a topic and practice agreeing/disagreeing.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },

  // B1 Vocabulary
  {
    id: 'b1-voc-1',
    trackId: '3',
    level: 'B1',
    title: 'Environment and Ecology',
    description: 'Окружающая среда и экология',
    order: 1,
    content: `# Environment and Ecology

## Основные слова:

### Экологические проблемы:
- **pollution** (загрязнение)
- **global warming** (глобальное потепление)
- **climate change** (изменение климата)
- **deforestation** (вырубка лесов)
- **recycling** (переработка)
- **waste** (отходы)
- **greenhouse effect** (парниковый эффект)

### Решения:
- **renewable energy** (возобновляемая энергия)
- **solar power** (солнечная энергия)
- **wind energy** (ветровая энергия)
- **reduce, reuse, recycle** (сокращать, использовать повторно, перерабатывать)
- **eco-friendly** (экологически чистый)

### Полезные фразы:
- **We need to protect the environment** (Нам нужно защищать окружающую среду)
- **We should reduce our carbon footprint** (Мы должны сократить наш углеродный след)
- **Climate change is a serious issue** (Изменение климата - серьезная проблема)`,
    videoUrl: 'https://www.youtube.com/embed/I0QNbLP8KGI',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e31',
        question: 'What environmental issues concern you? How can we solve them?',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },
  {
    id: 'b1-voc-2',
    trackId: '3',
    level: 'B1',
    title: 'Health and Medicine',
    description: 'Здоровье и медицина',
    order: 2,
    content: `# Health and Medicine

## Симптомы и болезни:

- **headache** (головная боль)
- **fever** (лихорадка)
- **cough** (кашель)
- **sore throat** (больное горло)
- **flu** (грипп)
- **cold** (простуда)
- **injury** (травма)
- **pain** (боль)

## Лечение:

- **medicine** (лекарство)
- **prescription** (рецепт)
- **treatment** (лечение)
- **surgery** (хирургия)
- **recovery** (выздоровление)
- **therapy** (терапия)

## Полезные фразы:

- **I feel sick** (Я чувствую себя больным)
- **I have a headache** (У меня болит голова)
- **I need to see a doctor** (Мне нужно к врачу)
- **Take this medicine twice a day** (Принимайте это лекарство дважды в день)
- **Get well soon!** (Выздоравливайте!)`,
    videoUrl: 'https://www.youtube.com/embed/2LSBcJN4_5o',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e32',
        question: 'Describe a time when you were sick. What were your symptoms?',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },

  // B1 Listening
  {
    id: 'b1-li-1',
    trackId: '4',
    level: 'B1',
    title: 'Listening: News and Current Events',
    description: 'Понимание новостей и текущих событий',
    order: 1,
    content: `# Listening: News and Current Events

## Цель урока:
Развить навыки понимания новостных программ и обсуждений текущих событий.

## Типы новостей:

### Структура новостей:
1. **Headline** (заголовок)
2. **Lead** (вступление)
3. **Body** (основная часть)
4. **Conclusion** (заключение)

### Ключевые слова:
- **breaking news** (срочные новости)
- **according to** (согласно)
- **it was reported that** (сообщалось, что)
- **sources say** (источники сообщают)

## Стратегии:

1. **Слушайте заголовки** - они дают общее представление
2. **Обращайте внимание на даты и места**
3. **Слушайте ключевые слова:** who, what, when, where, why
4. **Различайте факты и мнения**

## Практика:

Прослушайте новостной сюжет и ответьте:
- What is the main topic?
- Who is involved?
- When did it happen?
- Where did it happen?`,
    videoUrl: 'https://www.youtube.com/embed/xyMrLQ4ZI-4',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e33',
        question: 'Listen to a news report and summarize the main points.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },

  // ========== B2 LEVEL ==========
  
  // B2 Grammar
  {
    id: 'b2-gr-1',
    trackId: '1',
    level: 'B2',
    title: 'Passive Voice',
    description: 'Пассивный залог',
    order: 1,
    content: `# Passive Voice

**Passive Voice** используется когда:
- Действие важнее, чем тот, кто его выполняет
- Исполнитель действия неизвестен или неважен
- Мы говорим о процессах

## Образование:

**be + Past Participle (3-я форма глагола)**

### Времена в пассивном залоге:

**Present Simple:** am/is/are + Past Participle
- The car is repaired every month.

**Past Simple:** was/were + Past Participle
- The car was repaired yesterday.

**Present Perfect:** have/has been + Past Participle
- The car has been repaired.

**Future:** will be + Past Participle
- The car will be repaired tomorrow.

**Present Continuous:** am/is/are being + Past Participle
- The car is being repaired now.

## Примеры:

- **Active:** They built this house in 1990.
- **Passive:** This house was built in 1990.

- **Active:** Someone stole my bike.
- **Passive:** My bike was stolen.

## Употребление "by":

Используем "by" когда хотим указать исполнителя:
- The Mona Lisa was painted **by** Leonardo da Vinci.`,
    videoUrl: 'https://www.youtube.com/embed/9qN5akJmJ8I',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e34',
        question: 'The book ___ (write) by a famous author.',
        answer: 'was written',
        type: 'fill',
      },
      {
        id: 'e35',
        question: 'The bridge ___ (build) last year.',
        answer: 'was built',
        type: 'fill',
      },
    ],
  },
  {
    id: 'b2-gr-2',
    trackId: '1',
    level: 'B2',
    title: 'Third Conditional',
    description: 'Условные предложения третьего типа',
    order: 2,
    content: `# Third Conditional

**Third Conditional** используется для:
- Разговоров о прошлом, которое не изменить
- Сожаления о прошлом
- Гипотетических ситуаций в прошлом

## Структура:

**If + Past Perfect, would have + Past Participle**

### Примеры:
- If I had studied harder, I would have passed the exam.
- If she had left earlier, she wouldn't have missed the train.
- If they had called me, I would have helped them.

## Варианты:

Можно использовать **could have** или **might have**:
- If I had known, I could have helped.
- If you had asked, I might have said yes.

## Сокращенные формы:

- If I **had** known → If I **'d** known
- I **would have** gone → I **'d have** gone

## Примеры предложений:

- If I had taken the job, I would have earned more money.
- She would have come if she had been invited.
- If we had left on time, we wouldn't have been late.`,
    videoUrl: 'https://www.youtube.com/embed/vZ5r1f0z3yw',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e36',
        question: 'If I ___ (know) about the party, I ___ (come).',
        answer: 'had known, would have come',
        type: 'fill',
      },
    ],
  },
  {
    id: 'b2-gr-3',
    trackId: '1',
    level: 'B2',
    title: 'Reported Speech',
    description: 'Косвенная речь',
    order: 3,
    content: `# Reported Speech

**Reported Speech** используется для передачи чужих слов.

## Изменения времени:

**Present Simple → Past Simple**
- "I work here" → He said he worked there.

**Present Continuous → Past Continuous**
- "I am working" → He said he was working.

**Past Simple → Past Perfect**
- "I worked there" → He said he had worked there.

**Will → Would**
- "I will come" → He said he would come.

## Изменения местоимений:

- "I am tired" → He said **he** was tired.
- "We are ready" → They said **they** were ready.

## Изменения указателей времени:

- now → then
- today → that day
- tomorrow → the next day
- yesterday → the day before
- here → there
- this → that

## Глаголы введения:

- **said** (сказал)
- **told** (сказал кому-то)
- **asked** (спросил)
- **wanted to know** (хотел узнать)

### Примеры:

- **Direct:** "I love this book," she said.
- **Reported:** She said she loved that book.

- **Direct:** "Are you coming?" he asked.
- **Reported:** He asked if I was coming.`,
    videoUrl: 'https://www.youtube.com/embed/8mkOfyOZvqw',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e37',
        question: 'Convert: "I will help you," she said. → She said...',
        answer: 'She said she would help me.',
        type: 'fill',
      },
    ],
  },

  // B2 Speaking
  {
    id: 'b2-sp-1',
    trackId: '2',
    level: 'B2',
    title: 'Debating and Expressing Complex Ideas',
    description: 'Дебаты и выражение сложных идей',
    order: 1,
    content: `# Debating and Expressing Complex Ideas

## Полезные фразы для дебатов:

### Представление аргументов:
- **First of all...** (Прежде всего...)
- **Another point is...** (Еще один момент...)
- **Furthermore...** (Более того...)
- **Moreover...** (Кроме того...)
- **In addition...** (В дополнение...)

### Подтверждение:
- **This proves that...** (Это доказывает, что...)
- **This demonstrates...** (Это демонстрирует...)
- **Evidence shows that...** (Доказательства показывают, что...)

### Возражение:
- **I see your point, but...** (Понимаю вашу точку, но...)
- **That's not entirely true because...** (Это не совсем верно, потому что...)
- **However, I would argue that...** (Однако, я бы утверждал, что...)

### Пример дебата:

**Speaker 1:** First of all, I believe that technology improves education. Evidence shows that students learn better with interactive tools.

**Speaker 2:** I see your point, but I would argue that technology can be distracting. Furthermore, it reduces face-to-face interaction.

**Speaker 1:** However, technology provides access to unlimited resources. Moreover, it prepares students for the digital world.`,
    videoUrl: 'https://www.youtube.com/embed/kdDSRRCK_MI',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e38',
        question: 'Practice debating a topic using the phrases from this lesson.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },
  {
    id: 'b2-sp-2',
    trackId: '2',
    level: 'B2',
    title: 'Job Interviews',
    description: 'Собеседования на работу',
    order: 2,
    content: `# Job Interviews

## Типичные вопросы:

### О себе:
- **Tell me about yourself.** (Расскажите о себе)
- **What are your strengths?** (Какие у вас сильные стороны?)
- **What are your weaknesses?** (Какие у вас слабые стороны?)
- **Why do you want this job?** (Почему вы хотите эту работу?)

### Опыт:
- **What experience do you have?** (Какой у вас опыт?)
- **Can you give an example of...?** (Можете привести пример...?)
- **How do you handle stress?** (Как вы справляетесь со стрессом?)

## Полезные ответы:

### Сильные стороны:
- **I'm organized and detail-oriented.** (Я организован и внимателен к деталям)
- **I work well in a team.** (Я хорошо работаю в команде)
- **I'm a quick learner.** (Я быстро учусь)

### Слабости (честно, но позитивно):
- **I sometimes take on too much, but I'm learning to prioritize.** (Я иногда беру на себя слишком много, но учусь расставлять приоритеты)

### Вопросы к интервьюеру:
- **What are the main challenges in this role?** (Какие основные вызовы в этой роли?)
- **What opportunities are there for professional development?** (Какие возможности для профессионального развития?)`,
    videoUrl: 'https://www.youtube.com/embed/qFQ5jT3Q5kE',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e39',
        question: 'Practice answering common job interview questions.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },

  // B2 Vocabulary
  {
    id: 'b2-voc-1',
    trackId: '3',
    level: 'B2',
    title: 'Business and Finance',
    description: 'Бизнес и финансы',
    order: 1,
    content: `# Business and Finance

## Основные понятия:

### Бизнес:
- **profit** (прибыль)
- **revenue** (доход)
- **expenses** (расходы)
- **investment** (инвестиция)
- **shareholder** (акционер)
- **stakeholder** (заинтересованная сторона)
- **market share** (доля рынка)

### Финансы:
- **loan** (заем)
- **mortgage** (ипотека)
- **interest rate** (процентная ставка)
- **budget** (бюджет)
- **expenditure** (расходы)
- **savings** (сбережения)

### Полезные фразы:
- **to make a profit** (получать прибыль)
- **to break even** (выйти в ноль)
- **to go bankrupt** (обанкротиться)
- **to cut costs** (сократить расходы)
- **to invest in** (инвестировать в)`,
    videoUrl: 'https://www.youtube.com/embed/I0QNbLP8KGI',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e40',
        question: 'Describe a business idea and discuss its financial aspects.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },
  {
    id: 'b2-voc-2',
    trackId: '3',
    level: 'B2',
    title: 'Academic Vocabulary',
    description: 'Академическая лексика',
    order: 2,
    content: `# Academic Vocabulary

## Академические слова:

### Анализ:
- **analyze** (анализировать)
- **evaluate** (оценивать)
- **assess** (оценивать)
- **examine** (исследовать)
- **investigate** (расследовать)

### Аргументация:
- **argue** (утверждать)
- **claim** (утверждать)
- **contend** (утверждать)
- **maintain** (поддерживать)
- **assert** (утверждать)

### Доказательства:
- **evidence** (доказательство)
- **proof** (доказательство)
- **data** (данные)
- **research** (исследование)
- **findings** (результаты)

### Структура:
- **introduction** (введение)
- **body** (основная часть)
- **conclusion** (заключение)
- **thesis** (тезис)
- **hypothesis** (гипотеза)`,
    videoUrl: 'https://www.youtube.com/embed/2LSBcJN4_5o',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e41',
        question: 'Write a short academic paragraph using the vocabulary from this lesson.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },

  // B2 Listening
  {
    id: 'b2-li-1',
    trackId: '4',
    level: 'B2',
    title: 'Listening: Academic Lectures',
    description: 'Понимание академических лекций',
    order: 1,
    content: `# Listening: Academic Lectures

## Цель урока:
Развить навыки понимания академических лекций и презентаций.

## Структура лекции:

1. **Introduction** - тема и цели
2. **Main points** - основные пункты
3. **Examples** - примеры
4. **Conclusion** - выводы

## Стратегии:

1. **Слушайте сигнальные слова:**
   - "First, let's discuss..."
   - "Another important point..."
   - "In conclusion..."

2. **Делайте заметки:**
   - Используйте сокращения
   - Записывайте ключевые слова
   - Структурируйте информацию

3. **Обращайте внимание на:**
   - Определения терминов
   - Примеры
   - Повторы важной информации

## Практика:

Прослушайте лекцию и выполните:
- Запишите основные пункты
- Найдите примеры
- Сформулируйте выводы`,
    videoUrl: 'https://www.youtube.com/embed/xyMrLQ4ZI-4',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e42',
        question: 'Listen to a lecture and take notes on the main points.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },

  // ========== C1 LEVEL ==========
  
  // C1 Grammar
  {
    id: 'c1-gr-1',
    trackId: '1',
    level: 'C1',
    title: 'Advanced Conditionals: Mixed Conditionals',
    description: 'Смешанные условные предложения',
    order: 1,
    content: `# Advanced Conditionals: Mixed Conditionals

**Mixed Conditionals** соединяют разные времена для выражения сложных ситуаций.

## Тип 1: Past → Present

**If + Past Perfect, would + глагол**

Используется когда прошлое действие влияет на настоящее.

### Примеры:
- If I had studied medicine, I would be a doctor now.
- If she had accepted that job, she would be living in London today.

## Тип 2: Present → Past

**If + Past Simple, would have + Past Participle**

Используется когда настоящее состояние влияет на прошлое действие.

### Примеры:
- If I were more confident, I would have applied for that position.
- If she weren't so busy, she would have called you earlier.

## Примеры в контексте:

**Past → Present:**
- If I had learned Spanish as a child, I would speak it fluently now.

**Present → Past:**
- If I were better at time management, I would have finished the project on time.`,
    videoUrl: 'https://www.youtube.com/embed/9qN5akJmJ8I',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e43',
        question: 'If I ___ (study) harder in university, I ___ (have) better opportunities now.',
        answer: 'had studied, would have',
        type: 'fill',
      },
    ],
  },
  {
    id: 'c1-gr-2',
    trackId: '1',
    level: 'C1',
    title: 'Inversion',
    description: 'Инверсия в английском языке',
    order: 2,
    content: `# Inversion

**Inversion** - изменение порядка слов для усиления или формальности.

## Типы инверсии:

### 1. С отрицательными словами:
- **Never** have I seen such beauty.
- **Rarely** does she make mistakes.
- **Seldom** do we go to the cinema.
- **Hardly** had I arrived when it started raining.

### 2. С условными предложениями (формальный стиль):
- **Had I known**, I would have come.
- **Were I you**, I would accept the offer.
- **Should you need help**, please call me.

### 3. С "so" и "such":
- **So beautiful was the sunset** that we stopped to watch.
- **Such was the impact** that everyone was shocked.

### 4. С "not only... but also":
- **Not only did he win**, but he also broke the record.

## Использование:
Инверсия используется в:
- Формальном письме
- Литературе
- Для создания эффекта`,
    videoUrl: 'https://www.youtube.com/embed/vZ5r1f0z3yw',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e44',
        question: 'Rewrite: I have never seen such a thing. → Never...',
        answer: 'Never have I seen such a thing.',
        type: 'fill',
      },
    ],
  },
  {
    id: 'c1-gr-3',
    trackId: '1',
    level: 'C1',
    title: 'Cleft Sentences',
    description: 'Расчлененные предложения',
    order: 3,
    content: `# Cleft Sentences

**Cleft Sentences** используются для выделения информации.

## Типы:

### 1. It-clefts:
**It is/was + выделяемая часть + that/who**

- **It was John who** called me.
- **It is English that** I'm studying.
- **It was yesterday that** I saw her.

### 2. What-clefts:
**What + подлежащее/дополнение + is/was + выделяемая часть**

- **What I need is** more time.
- **What bothers me is** the noise.
- **What happened was** unexpected.

### 3. All-clefts:
**All + подлежащее + need/want + is/was**

- **All I need is** a good night's sleep.
- **All we want is** peace.

## Использование:
- Для выделения информации
- Для создания контраста
- Для акцента на важности`,
    videoUrl: 'https://www.youtube.com/embed/8mkOfyOZvqw',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e45',
        question: 'Rewrite using cleft: I need more time. → What...',
        answer: 'What I need is more time.',
        type: 'fill',
      },
    ],
  },

  // C1 Speaking
  {
    id: 'c1-sp-1',
    trackId: '2',
    level: 'C1',
    title: 'Advanced Presentation Skills',
    description: 'Продвинутые навыки презентации',
    order: 1,
    content: `# Advanced Presentation Skills

## Структура презентации:

### Введение:
- **I'd like to begin by...** (Я хотел бы начать с...)
- **Let me start with an overview...** (Позвольте начать с обзора...)
- **The purpose of this presentation is...** (Цель этой презентации...)

### Основная часть:
- **Moving on to...** (Переходя к...)
- **Another aspect to consider is...** (Еще один аспект для рассмотрения...)
- **It's worth noting that...** (Стоит отметить, что...)
- **This brings me to...** (Это подводит меня к...)

### Заключение:
- **To sum up...** (Подводя итог...)
- **In conclusion...** (В заключение...)
- **To wrap up...** (Завершая...)
- **The key takeaway is...** (Ключевой вывод...)

## Взаимодействие с аудиторией:

- **I'd like to open the floor to questions.** (Я хотел бы открыть вопросы)
- **Does anyone have any questions?** (У кого-нибудь есть вопросы?)
- **That's an interesting point...** (Это интересный момент...)

## Пример:

**Good morning, everyone. I'd like to begin by giving you an overview of our project. Moving on to the financial aspects, it's worth noting that we've exceeded our targets. To sum up, the key takeaway is that we need to maintain this momentum.**`,
    videoUrl: 'https://www.youtube.com/embed/kdDSRRCK_MI',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e46',
        question: 'Prepare and deliver a short presentation on any topic using the phrases from this lesson.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },
  {
    id: 'c1-sp-2',
    trackId: '2',
    level: 'C1',
    title: 'Negotiating and Persuading',
    description: 'Переговоры и убеждение',
    order: 2,
    content: `# Negotiating and Persuading

## Полезные фразы:

### Предложение:
- **I'd like to propose...** (Я хотел бы предложить...)
- **What if we...?** (Что если мы...?)
- **How about...?** (Как насчет...?)

### Убеждение:
- **I'm convinced that...** (Я убежден, что...)
- **I strongly believe...** (Я твердо верю...)
- **The evidence suggests...** (Доказательства указывают...)
- **It would be in your interest to...** (Было бы в ваших интересах...)

### Компромисс:
- **Let's meet halfway...** (Давайте встретимся посередине...)
- **I'm willing to compromise on...** (Я готов пойти на компромисс по...)
- **Can we find a middle ground?** (Можем ли мы найти компромисс?)

### Отказ (вежливо):
- **I appreciate your offer, but...** (Я ценю ваше предложение, но...)
- **I'm afraid I can't agree to...** (Боюсь, я не могу согласиться на...)
- **That's not quite what I had in mind...** (Это не совсем то, что я имел в виду...)

### Пример переговоров:

**A:** I'd like to propose a 10% discount for bulk orders.
**B:** I appreciate your offer, but we were hoping for at least 15%.
**A:** I'm willing to compromise. What if we meet halfway at 12.5%?
**B:** That sounds reasonable. Let's move forward with that.`,
    videoUrl: 'https://www.youtube.com/embed/qFQ5jT3Q5kE',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e47',
        question: 'Practice a negotiation scenario using the phrases from this lesson.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },

  // C1 Vocabulary
  {
    id: 'c1-voc-1',
    trackId: '3',
    level: 'C1',
    title: 'Idioms and Collocations',
    description: 'Идиомы и устойчивые словосочетания',
    order: 1,
    content: `# Idioms and Collocations

## Популярные идиомы:

### О работе:
- **to pull strings** (использовать связи)
- **to get the ball rolling** (начать процесс)
- **to think outside the box** (мыслить нестандартно)
- **to be on the same wavelength** (быть на одной волне)

### О трудностях:
- **to hit the nail on the head** (попасть в точку)
- **to be in hot water** (быть в беде)
- **to break the ice** (разбить лед)
- **to be a piece of cake** (быть легким делом)

### О времени:
- **once in a blue moon** (очень редко)
- **in the nick of time** (в самый последний момент)
- **time flies** (время летит)

## Устойчивые словосочетания:

### С глаголами:
- **to make a decision** (принять решение)
- **to take into account** (принять во внимание)
- **to pay attention** (обращать внимание)
- **to have an impact** (оказывать влияние)

### С прилагательными:
- **highly likely** (очень вероятно)
- **widely recognized** (широко признанный)
- **deeply concerned** (глубоко обеспокоенный)`,
    videoUrl: 'https://www.youtube.com/embed/I0QNbLP8KGI',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e48',
        question: 'Use 3 idioms from this lesson in sentences about your own experience.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },
  {
    id: 'c1-voc-2',
    trackId: '3',
    level: 'C1',
    title: 'Advanced Synonyms and Nuances',
    description: 'Продвинутые синонимы и нюансы',
    order: 2,
    content: `# Advanced Synonyms and Nuances

## Группы синонимов:

### Большой:
- **large** (большой) - нейтральный
- **vast** (огромный) - очень большой по размеру
- **extensive** (обширный) - широкий по охвату
- **substantial** (значительный) - большой по важности

### Важный:
- **important** (важный) - нейтральный
- **crucial** (критически важный) - очень важный
- **vital** (жизненно важный) - необходимый для существования
- **paramount** (первостепенный) - высший по важности

### Сложный:
- **difficult** (сложный) - нейтральный
- **challenging** (вызывающий трудности) - требует усилий
- **arduous** (тяжелый) - требует много усилий
- **daunting** (пугающий) - кажется сложным

## Нюансы использования:

Выбор слова зависит от:
- Контекста
- Формальности
- Интенсивности
- Тона`,
    videoUrl: 'https://www.youtube.com/embed/2LSBcJN4_5o',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e49',
        question: 'Choose the most appropriate synonym for different contexts.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },

  // C1 Listening
  {
    id: 'c1-li-1',
    trackId: '4',
    level: 'C1',
    title: 'Listening: Complex Discussions',
    description: 'Понимание сложных обсуждений',
    order: 1,
    content: `# Listening: Complex Discussions

## Цель урока:
Развить навыки понимания сложных обсуждений, включая скрытые смыслы и подтексты.

## Типы обсуждений:

### Академические дискуссии:
- Лекции с несколькими спикерами
- Дебаты
- Семинары

### Деловые обсуждения:
- Переговоры
- Стратегические встречи
- Презентации

## Стратегии:

1. **Понимание подтекста:**
   - Обращайте внимание на тон
   - Замечайте невербальные подсказки
   - Понимайте импликации

2. **Отслеживание аргументов:**
   - Определяйте главную мысль
   - Находите подтверждения
   - Замечайте противоречия

3. **Понимание мнений:**
   - Различайте факты и мнения
   - Замечайте предубеждения
   - Понимайте перспективы

## Практика:

Прослушайте сложное обсуждение и:
- Определите основные позиции
- Найдите аргументы и контраргументы
- Выявите подтекст и скрытые смыслы`,
    videoUrl: 'https://www.youtube.com/embed/xyMrLQ4ZI-4',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e50',
        question: 'Listen to a complex discussion and analyze the different perspectives and underlying meanings.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },

  // ========== C2 LEVEL ==========
  
  // C2 Grammar
  {
    id: 'c2-gr-1',
    trackId: '1',
    level: 'C2',
    title: 'Advanced Subjunctive',
    description: 'Продвинутое использование сослагательного наклонения',
    order: 1,
    content: `# Advanced Subjunctive

**Subjunctive** используется для выражения желаний, требований и гипотетических ситуаций.

## Формы:

### 1. После определенных глаголов:
- **demand, insist, suggest, recommend, require**

**Структура:** глагол + that + подлежащее + базовая форма глагола

- I demand that **he be** present.
- She insisted that **they arrive** on time.
- I suggest that **she study** harder.

### 2. После прилагательных:
- **important, essential, crucial, vital, necessary**

- It is important that **he be** informed.
- It is essential that **they arrive** early.

### 3. С "wish" и "if only":
- I wish I **were** taller.
- If only I **had studied** harder.
- I wish she **would come**.

### 4. С "as if" и "as though":
- He acts as if he **were** the boss.
- She talks as though she **knew** everything.

## Формальные случаи:
В формальном английском часто используется "were" вместо "was" в условных предложениях.`,
    videoUrl: 'https://www.youtube.com/embed/9qN5akJmJ8I',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e51',
        question: 'I suggest that he ___ (be) more careful.',
        answer: 'be',
        type: 'fill',
      },
    ],
  },
  {
    id: 'c2-gr-2',
    trackId: '1',
    level: 'C2',
    title: 'Ellipsis and Substitution',
    description: 'Эллипсис и замена',
    order: 2,
    content: `# Ellipsis and Substitution

**Ellipsis** - опущение слов, которые можно понять из контекста.
**Substitution** - замена слов для избежания повторения.

## Эллипсис:

### В ответах:
- **A:** Are you coming? **B:** Yes, I am. (coming опущено)
- **A:** Have you finished? **B:** Yes, I have. (finished опущено)

### В сравнениях:
- She is taller than I am. (tall опущено)
- This book is more interesting than that one is. (interesting опущено)

### В зависимых предложениях:
- When (you are) ready, we'll start.
- If (it is) possible, I'll come.

## Замена:

### С "do":
- **A:** Do you like coffee? **B:** Yes, I do. (do = like coffee)

### С "so" и "not":
- **A:** Will it rain? **B:** I hope not. (not = it won't rain)
- **A:** Is she coming? **B:** I think so. (so = she is coming)

### С "one/ones":
- I prefer the blue **one**. (one = car/book/etc.)
- These apples are good, but those **ones** are better.`,
    videoUrl: 'https://www.youtube.com/embed/vZ5r1f0z3yw',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e52',
        question: 'Complete: A: Are you ready? B: Yes, I ___.',
        answer: 'am',
        type: 'fill',
      },
    ],
  },
  {
    id: 'c2-gr-3',
    trackId: '1',
    level: 'C2',
    title: 'Advanced Discourse Markers',
    description: 'Продвинутые маркеры дискурса',
    order: 3,
    content: `# Advanced Discourse Markers

**Discourse Markers** связывают идеи и показывают отношения между ними.

## Для добавления информации:

- **Furthermore** (Более того)
- **Moreover** (Кроме того)
- **In addition** (В дополнение)
- **Not to mention** (Не говоря уже о)

## Для контраста:

- **Nevertheless** (Тем не менее)
- **Nonetheless** (Тем не менее)
- **On the contrary** (Наоборот)
- **Conversely** (Наоборот)
- **Albeit** (Хотя)

## Для причины:

- **Owing to** (Благодаря)
- **By virtue of** (В силу)
- **In light of** (В свете)

## Для следствия:

- **Consequently** (Следовательно)
- **Hence** (Следовательно)
- **Thus** (Таким образом)
- **Thereby** (Тем самым)

## Для суммирования:

- **In essence** (По сути)
- **To sum up** (Подводя итог)
- **All in all** (В целом)

## Примеры:

- **Owing to** the bad weather, the event was cancelled.
- The project was challenging; **nevertheless**, we completed it on time.
- **In essence**, the argument is about resources.`,
    videoUrl: 'https://www.youtube.com/embed/8mkOfyOZvqw',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e53',
        question: 'Use discourse markers to connect ideas in a paragraph.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },

  // C2 Speaking
  {
    id: 'c2-sp-1',
    trackId: '2',
    level: 'C2',
    title: 'Mastering Formal and Informal Registers',
    description: 'Владение формальным и неформальным стилями',
    order: 1,
    content: `# Mastering Formal and Informal Registers

## Формальный стиль:

### Характеристики:
- Полные формы (cannot, will not)
- Сложные структуры
- Пассивный залог
- Академическая лексика

### Примеры:
- **Formal:** I would be grateful if you could...
- **Informal:** Can you...?

- **Formal:** It is imperative that we...
- **Informal:** We really need to...

- **Formal:** I regret to inform you...
- **Informal:** I'm sorry to tell you...

## Неформальный стиль:

### Характеристики:
- Сокращения (can't, won't)
- Фразовые глаголы
- Идиомы
- Простые структуры

### Примеры:
- **Formal:** I require assistance.
- **Informal:** I need help.

- **Formal:** Please contact me at your earliest convenience.
- **Informal:** Give me a call when you can.

## Умение переключаться:

Важно уметь:
- Определять контекст
- Выбирать подходящий стиль
- Адаптироваться к аудитории`,
    videoUrl: 'https://www.youtube.com/embed/kdDSRRCK_MI',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e54',
        question: 'Rewrite sentences in both formal and informal styles.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },
  {
    id: 'c2-sp-2',
    trackId: '2',
    level: 'C2',
    title: 'Expressing Subtle Nuances',
    description: 'Выражение тонких нюансов',
    order: 2,
    content: `# Expressing Subtle Nuances

## Выражение тонких различий:

### Степени уверенности:
- **I'm absolutely certain** (Я абсолютно уверен)
- **I'm fairly confident** (Я довольно уверен)
- **I tend to think** (Я склонен думать)
- **I have a hunch** (У меня есть предчувствие)

### Степени согласия:
- **I wholeheartedly agree** (Я полностью согласен)
- **I'm inclined to agree** (Я склонен согласиться)
- **I see your point, but...** (Понимаю вашу точку, но...)
- **I'm somewhat skeptical** (Я несколько скептичен)

### Степени важности:
- **It's of paramount importance** (Это первостепенной важности)
- **It's quite significant** (Это довольно значительно)
- **It's somewhat relevant** (Это несколько актуально)
- **It's marginally important** (Это незначительно важно)

## Примеры:

- **I'm inclined to think** that the solution lies in collaboration, **though I'm somewhat skeptical** about the timeline.
- **While I see your point**, I **tend to think** we need more data before making a decision.`,
    videoUrl: 'https://www.youtube.com/embed/qFQ5jT3Q5kE',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e55',
        question: 'Express nuanced opinions on complex topics using the phrases from this lesson.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },

  // C2 Vocabulary
  {
    id: 'c2-voc-1',
    trackId: '3',
    level: 'C2',
    title: 'Sophisticated Vocabulary and Register',
    description: 'Утонченная лексика и стиль',
    order: 1,
    content: `# Sophisticated Vocabulary and Register

## Высокий уровень лексики:

### Замена обычных слов:

**Обычное → Утонченное:**
- good → **exemplary, outstanding, remarkable**
- bad → **deplorable, atrocious, abysmal**
- big → **substantial, considerable, extensive**
- small → **minuscule, negligible, marginal**
- important → **paramount, crucial, pivotal**
- show → **demonstrate, illustrate, reveal**
- get → **obtain, acquire, procure**
- use → **utilize, employ, deploy**

### Утонченные выражения:

**Вместо "very":**
- very important → **crucial, paramount**
- very big → **enormous, vast**
- very small → **minuscule, infinitesimal**
- very good → **exceptional, outstanding**
- very bad → **deplorable, atrocious**

### Формальные альтернативы:

- **I think** → I am of the opinion / I maintain
- **I agree** → I concur / I am in accord
- **I disagree** → I beg to differ / I take issue with
- **I don't know** → I am not at liberty to say / I am uncertain`,
    videoUrl: 'https://www.youtube.com/embed/I0QNbLP8KGI',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e56',
        question: 'Replace common words with sophisticated alternatives in a paragraph.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },
  {
    id: 'c2-voc-2',
    trackId: '3',
    level: 'C2',
    title: 'Domain-Specific Terminology',
    description: 'Специализированная терминология',
    order: 2,
    content: `# Domain-Specific Terminology

## Различные области:

### Наука:
- **hypothesis** (гипотеза)
- **empirical** (эмпирический)
- **methodology** (методология)
- **paradigm** (парадигма)
- **quantitative/qualitative** (количественный/качественный)

### Право:
- **jurisdiction** (юрисдикция)
- **litigation** (судебный процесс)
- **precedent** (прецедент)
- **statute** (статут, закон)
- **liability** (ответственность)

### Медицина:
- **diagnosis** (диагноз)
- **prognosis** (прогноз)
- **symptom** (симптом)
- **syndrome** (синдром)
- **treatment** (лечение)

### Бизнес:
- **merger** (слияние)
- **acquisition** (приобретение)
- **revenue** (доход)
- **profit margin** (прибыль)
- **stakeholder** (заинтересованная сторона)`,
    videoUrl: 'https://www.youtube.com/embed/2LSBcJN4_5o',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e57',
        question: 'Use domain-specific terminology to describe a topic in your field.',
        answer: 'Open answer',
        type: 'text',
      },
    ],
  },

  // C2 Listening
  {
    id: 'c2-li-1',
    trackId: '4',
    level: 'C2',
    title: 'Listening: Complex Academic Discussions',
    description: 'Понимание сложных академических обсуждений',
    order: 1,
    content: `# Listening: Complex Academic Discussions

## Цель урока:
Развить навыки понимания сложных академических дискуссий и дебатов на высоком уровне.

## Типы академических обсуждений:

### Семинары и лекции:
- Презентации исследований
- Академические дебаты
- Панельные дискуссии
- Круглые столы

## Стратегии:

1. **Понимание аргументации:**
   - Определение тезисов
   - Нахождение подтверждений
   - Выявление контраргументов
   - Логические связи

2. **Академический язык:**
   - Специализированная терминология
   - Формальные конструкции
   - Абстрактные концепции

3. **Критическое мышление:**
   - Оценка аргументов
   - Выявление предубеждений
   - Понимание подтекста

## Практика:

Прослушайте академическую дискуссию и:
- Определите основные позиции
- Проанализируйте аргументацию
- Оцените силу аргументов
- Выявите логические связи`,
    videoUrl: 'https://www.youtube.com/embed/xyMrLQ4ZI-4',
    videoType: 'youtube',
    exercises: [
      {
        id: 'e58',
        question: 'Listen to an academic discussion and analyze the arguments presented.',
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