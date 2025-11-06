import { useEffect, useMemo, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lesson, Exercise } from '@/types/course';

interface ExercisesProps {
  lesson: Lesson;
}

const Exercises = ({ lesson }: ExercisesProps) => {
  const exercises = lesson.exercises || [];
  if (exercises.length === 0) return null;

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold mb-6">Упражнения</h2>
      <div className="space-y-8">
        {exercises.map((ex) => (
          <div key={ex.id} className="border-l-4 border-primary pl-4">
            <ExerciseRenderer exercise={ex} />
          </div>
        ))}
      </div>
    </Card>
  );
};

function ExerciseRenderer({ exercise }: { exercise: Exercise }) {
  switch (exercise.type) {
    case 'dialogue':
      return <DialogueExercise exercise={exercise} />;
    case 'lexical_match':
      return <LexicalMatchExercise exercise={exercise} />;
    case 'lexical_cloze':
      return <LexicalClozeExercise exercise={exercise} />;
    case 'grammar_discovery':
      return <GrammarDiscoveryExercise exercise={exercise} />;
    case 'task_mission':
      return <TaskMissionExercise exercise={exercise} />;
    default:
      return null;
  }
}

function DialogueExercise({ exercise }: { exercise: Extract<Exercise, { type: 'dialogue' }> }) {
  const prompt = useMemo(() => {
    const parts = [
      `Scenario: ${exercise.scenario}`,
      exercise.role ? `You are: ${exercise.role}` : undefined,
      exercise.goals && exercise.goals.length ? `Goals: ${exercise.goals.join(', ')}` : undefined,
    ].filter(Boolean);
    return parts.join('\n');
  }, [exercise]);

  return (
    <div>
      <h3 className="font-semibold mb-2">{exercise.title}</h3>
      <p className="text-sm text-muted-foreground mb-3">Интерактивный диалог с ИИ. Используйте подсказку ниже для начала общения с помощником справа.</p>
      <div className="p-3 bg-muted rounded mb-3 text-sm whitespace-pre-wrap">{prompt}</div>
      <p className="text-xs text-muted-foreground">Совет: начните диалог с краткого описания роли и цели.</p>
    </div>
  );
}

function LexicalMatchExercise({ exercise }: { exercise: Extract<Exercise, { type: 'lexical_match' }> }) {
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matches, setMatches] = useState<Array<[number, number]>>([]);
  const [checked, setChecked] = useState<boolean | null>(null);
  const [feedback, setFeedback] = useState<Record<number, boolean>>({});

  const toggleLeft = (i: number) => setSelectedLeft((prev) => (prev === i ? null : i));
  const pickRight = (j: number) => {
    if (selectedLeft === null) return;
    // prevent duplicate right mapping
    const withoutRight = matches.filter(([_, rj]) => rj !== j);
    const exists = withoutRight.find(([li]) => li === selectedLeft);
    const next = exists
      ? withoutRight.map(([li, rj]) => (li === selectedLeft ? [li, j] : [li, rj]))
      : [...withoutRight, [selectedLeft, j]];
    setMatches(next);
  };

  const check = () => {
    const fb: Record<number, boolean> = {};
    (exercise.pairs || []).forEach(([li, rj]) => {
      const ok = matches.some(([mli, mrj]) => mli === li && mrj === rj);
      fb[li] = ok;
    });
    setFeedback(fb);
    const correct = Object.values(fb).every(Boolean) && matches.length === exercise.left.length;
    setChecked(correct);
  };

  const reset = () => {
    setMatches([]);
    setChecked(null);
    setFeedback({});
    setSelectedLeft(null);
  };

  return (
    <div>
      <h3 className="font-semibold mb-2">{exercise.title}</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          {exercise.left.map((item, i) => (
            <button
              key={i}
              className={`w-full text-left p-2 rounded border ${selectedLeft === i ? 'bg-primary/10 border-primary' : 'hover:bg-muted'} ${feedback[i] === true ? 'border-green-500' : feedback[i] === false ? 'border-red-500' : ''}`}
              onClick={() => toggleLeft(i)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {exercise.right.map((item, j) => (
            <button
              key={j}
              className="w-full text-left p-2 rounded border hover:bg-muted"
              onClick={() => pickRight(j)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-3 flex gap-2 items-center flex-wrap">
        <Button variant="outline" onClick={check}>Проверить</Button>
        <Button variant="ghost" onClick={reset}>Сбросить</Button>
        {checked !== null && (
          <span className={`text-sm ${checked ? 'text-green-600' : 'text-red-600'}`}>
            {checked ? 'Верно!' : 'Есть ошибки'}
          </span>
        )}
        {matches.length > 0 && (
          <span className="text-xs text-muted-foreground">Сопоставлено: {matches.length} / {exercise.left.length}</span>
        )}
      </div>
      {checked === false && (
        <div className="mt-2 text-xs text-muted-foreground">Подсказка: каждая правая карточка может быть использована только с одной левой.</div>
      )}
    </div>
  );
}

function LexicalClozeExercise({ exercise }: { exercise: Extract<Exercise, { type: 'lexical_cloze' }> }) {
  const placeholders = exercise.text.match(/__\d+__/g) || [];
  const [inputs, setInputs] = useState<string[]>(Array(placeholders.length).fill(''));
  const [checked, setChecked] = useState<boolean | null>(null);
  const [perCorrect, setPerCorrect] = useState<boolean[]>(Array(placeholders.length).fill(false));
  const [revealed, setRevealed] = useState(false);

  const inline = exercise.text.split(/(__\d+__)/g).map((chunk, idx) => {
    const m = /^__(\d+)__$/.exec(chunk);
    if (!m) return <span key={idx}>{chunk}</span>;
    const slot = parseInt(m[1], 10) - 1;
    return (
      <input
        key={idx}
        value={inputs[slot]}
        onChange={(e) => {
          const next = inputs.slice();
          next[slot] = e.target.value;
          setInputs(next);
        }}
        className={`mx-1 px-2 py-0.5 border rounded text-sm w-28 ${checked !== null ? (perCorrect[slot] ? 'border-green-500' : 'border-red-500') : ''}`}
        placeholder={`#${slot + 1}`}
      />
    );
  });

  const check = () => {
    const result = inputs.map((val, i) => (exercise.answers[i] || '').trim().toLowerCase() === val.trim().toLowerCase());
    setPerCorrect(result);
    setChecked(result.every(Boolean));
  };

  const reset = () => {
    setInputs(Array(placeholders.length).fill(''));
    setPerCorrect(Array(placeholders.length).fill(false));
    setChecked(null);
    setRevealed(false);
  };

  const reveal = () => {
    setInputs(exercise.answers.slice());
    setRevealed(true);
    setPerCorrect(Array(placeholders.length).fill(true));
    setChecked(true);
  };

  return (
    <div>
      <h3 className="font-semibold mb-2">{exercise.title}</h3>
      <p className="text-sm mb-3">Заполните пропуски:</p>
      <div className="p-3 bg-muted rounded mb-3 text-sm whitespace-pre-wrap">{inline}</div>
      <div className="mt-3 flex gap-2 items-center flex-wrap">
        <Button variant="outline" onClick={check}>Проверить</Button>
        <Button variant="ghost" onClick={reset}>Сбросить</Button>
        <Button variant="ghost" onClick={reveal}>Показать ответы</Button>
        {checked !== null && (
          <span className={`text-sm ${checked ? 'text-green-600' : 'text-red-600'}`}>
            {checked ? 'Верно!' : 'Есть ошибки'}
          </span>
        )}
      </div>
      {revealed && (
        <div className="mt-2 text-xs text-muted-foreground">Ответы: {exercise.answers.join(', ')}</div>
      )}
    </div>
  );
}

function GrammarDiscoveryExercise({ exercise }: { exercise: Extract<Exercise, { type: 'grammar_discovery' }> }) {
  const [rule, setRule] = useState('');
  const [show, setShow] = useState(false);
  const [answers, setAnswers] = useState<string[]>(
    (exercise.checks || []).map(() => '')
  );
  const [checked, setChecked] = useState<boolean[]>(
    (exercise.checks || []).map(() => false)
  );

  return (
    <div>
      <h3 className="font-semibold mb-2">{exercise.title}</h3>
      <p className="text-sm text-muted-foreground mb-2">Посмотрите на примеры и сформулируйте правило.</p>
      <ul className="list-disc list-inside mb-3 space-y-1">
        {exercise.examples.map((ex, i) => (<li key={i}>{ex}</li>))}
      </ul>
      <Label className="text-sm">Ваше правило</Label>
      <Input value={rule} onChange={(e) => setRule(e.target.value)} placeholder="Опишите правило своими словами" />
      <div className="mt-3">
        <Button variant="outline" onClick={() => setShow((s) => !s)}>
          {show ? 'Скрыть объяснение' : 'Показать объяснение'}
        </Button>
      </div>
      {show && exercise.expectedRule && (
        <div className="mt-3 p-3 bg-muted rounded text-sm whitespace-pre-wrap">{exercise.expectedRule}</div>
      )}
      {exercise.checks && exercise.checks.length > 0 && (
        <div className="mt-4 space-y-3">
          <h4 className="font-medium">Мини-проверка</h4>
          {exercise.checks.map((q, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-2 items-center">
              <div className="text-sm"><span className="text-muted-foreground">Вопрос:</span> {q.question}</div>
              <div className="flex gap-2 items-center">
                <Input
                  value={answers[i]}
                  onChange={(e) => {
                    const next = answers.slice();
                    next[i] = e.target.value;
                    setAnswers(next);
                  }}
                  placeholder="Ваш ответ"
                />
                <Button
                  variant="outline"
                  onClick={() => {
                    const ok = (q.answer || '').trim().toLowerCase() === (answers[i] || '').trim().toLowerCase();
                    const next = checked.slice();
                    next[i] = ok;
                    setChecked(next);
                  }}
                >
                  Проверить
                </Button>
                {checked[i] !== undefined && (
                  <span className={`text-xs ${checked[i] ? 'text-green-600' : 'text-red-600'}`}>
                    {checked[i] ? 'Верно' : `Ответ: ${q.answer}`}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TaskMissionExercise({ exercise }: { exercise: Extract<Exercise, { type: 'task_mission' }> }) {
  const [checked, setChecked] = useState<boolean[]>(
    (exercise.checklist || []).map(() => false)
  );
  const [submission, setSubmission] = useState('');

  // persist by exercise id
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`mission_${exercise.id}`);
      if (saved) {
        const data = JSON.parse(saved);
        setChecked(data.checked || []);
        setSubmission(data.submission || '');
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(`mission_${exercise.id}`, JSON.stringify({ checked, submission }));
    } catch {}
  }, [exercise.id, checked, submission]);

  return (
    <div>
      <h3 className="font-semibold mb-2">{exercise.title}</h3>
      <p className="text-sm mb-3 whitespace-pre-wrap">{exercise.brief}</p>
      {exercise.checklist && exercise.checklist.length > 0 && (
        <div className="space-y-2 mb-3">
          {(exercise.checklist || []).map((item, i) => (
            <label key={i} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={checked[i]}
                onChange={(e) => {
                  const next = checked.slice();
                  next[i] = e.target.checked;
                  setChecked(next);
                }}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      )}
      {exercise.submissionType === 'text' && (
        <div className="space-y-1">
          <Label>Ваш ответ</Label>
          <Input value={submission} onChange={(e) => setSubmission(e.target.value)} placeholder="Вставьте текст ответа или ссылку" />
        </div>
      )}
      <div className="mt-2 text-xs text-muted-foreground">
        Прогресс сохранится автоматически.
      </div>
    </div>
  );
}

export default Exercises;


