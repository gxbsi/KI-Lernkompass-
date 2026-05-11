import { useEffect, useMemo, useState } from "react";
import type { SelfCheckQuestion } from "@/content/types";

type Props = {
  questions: SelfCheckQuestion[];
  onAllCorrectChange: (ok: boolean) => void;
};

export function SelfCheckBlock({ questions, onAllCorrectChange }: Props) {
  const [answers, setAnswers] = useState<Record<string, string | undefined>>({});

  const correctMap = useMemo(() => {
    const m: Record<string, boolean> = {};
    for (const q of questions) {
      m[q.id] = answers[q.id] === q.correctOptionId;
    }
    return m;
  }, [answers, questions]);

  const allAnswered = questions.every((q) => answers[q.id]);
  const allCorrect = questions.every((q) => correctMap[q.id]);

  useEffect(() => {
    onAllCorrectChange(allAnswered && allCorrect);
  }, [allAnswered, allCorrect, onAllCorrectChange]);

  return (
    <section className="card mt-10 border-[var(--color-gold)]/40 bg-[var(--color-cream)]/40" aria-label="Self-Check">
      <h2 className="font-display text-2xl font-semibold text-[var(--color-navy)]">Self-Check</h2>
      <p className="mt-2 text-slate-600">
        Beantworte alle Fragen richtig, um dieses Kapitel abschließen zu können.
      </p>
      <ol className="mt-6 space-y-8">
        {questions.map((q, idx) => (
          <li key={q.id} className="rounded-xl border border-slate-200 bg-white/90 p-5">
            <p className="font-semibold text-slate-900">
              {idx + 1}. {q.prompt}
            </p>
            <div className="mt-4 space-y-2" role="group" aria-labelledby={`q-${q.id}`}>
              <span id={`q-${q.id}`} className="sr-only">
                Antwortmöglichkeiten
              </span>
              {q.options.map((o) => {
                const selected = answers[q.id] === o.id;
                const answered = Boolean(answers[q.id]);
                const isCorrect = o.id === q.correctOptionId;
                let ring = "border-slate-200";
                if (answered && selected) {
                  ring = isCorrect ? "border-emerald-500 bg-emerald-50" : "border-red-400 bg-red-50";
                } else if (answered && isCorrect && !selected) {
                  ring = "border-emerald-200 bg-emerald-50/40";
                }
                return (
                  <label
                    key={o.id}
                    className={`flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-2 transition-colors ${ring}`}
                  >
                    <input
                      type="radio"
                      className="mt-1"
                      name={q.id}
                      checked={selected}
                      onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: o.id }))}
                    />
                    <span className="text-sm leading-snug text-slate-800">{o.label}</span>
                  </label>
                );
              })}
            </div>
            {answers[q.id] ? (
              <p
                className={`mt-3 text-sm ${correctMap[q.id] ? "text-emerald-800" : "text-red-800"}`}
                role="status"
              >
                {correctMap[q.id] ? "Richtig." : "Noch nicht richtig."} {q.explanation}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
