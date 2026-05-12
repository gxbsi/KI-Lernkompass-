import { useState } from "react";
import { Link } from "react-router-dom";
import type { ExamQuestion } from "@/content/types";
import { PASS_THRESHOLD } from "@/lib/constants";

type Props = {
  title: string;
  questions: ExamQuestion[];
  onPass: () => void;
  onCancelPath: string;
  /** Optional: zusätzlicher CTA nach Bestehen (z. B. Zertifikat). */
  passLink?: { to: string; label: string };
};

export function QuizRunner({ title, questions, onPass, onCancelPath, passLink }: Props) {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [finished, setFinished] = useState(false);

  const q = questions[idx];
  const progress = finished ? 100 : Math.round(((idx + 1) / questions.length) * 100);

  const score = () => {
    let ok = 0;
    for (const qq of questions) {
      if (answers[qq.id] === qq.correctOptionId) ok += 1;
    }
    return ok / questions.length;
  };

  const submitFinal = () => {
    const passed = questions.every((qq) => answers[qq.id]) && score() >= PASS_THRESHOLD;
    setFinished(true);
    if (passed) onPass();
  };

  if (finished) {
    const passed = score() >= PASS_THRESHOLD;
    return (
      <div className="card max-w-2xl min-w-0">
        <h1 className="font-display text-3xl font-semibold text-[var(--color-navy)]">Ergebnis</h1>
        <p className="mt-3 text-lg text-slate-700">
          Du hast{" "}
          <span className="font-semibold">
            {Math.round(score() * 100)}%
          </span>{" "}
          richtig. Schwellenwert: {Math.round(PASS_THRESHOLD * 100)}%.
        </p>
        {passed ? (
          <p className="mt-2 text-emerald-800">Bestanden – super!</p>
        ) : (
          <p className="mt-2 text-red-800">Noch nicht bestanden – bitte erneut versuchen.</p>
        )}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a className="btn-secondary w-full justify-center text-center sm:w-auto" href={onCancelPath}>
            Zurück
          </a>
          {!passed ? (
            <button
              type="button"
              className="btn-primary w-full justify-center sm:w-auto"
              onClick={() => {
                setFinished(false);
                setIdx(0);
                setAnswers({});
              }}
            >
              Quiz neu starten
            </button>
          ) : passLink ? (
            <Link className="btn-primary w-full justify-center text-center sm:w-auto" to={passLink.to}>
              {passLink.label}
            </Link>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="card max-w-2xl min-w-0">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">
        {title}
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-[var(--color-navy)]">Quiz</h1>
      <div className="mt-4" aria-hidden>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-[var(--color-navy)] transition-[width]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        Frage {idx + 1} von {questions.length}
      </p>

      <fieldset className="mt-8 space-y-4">
        <legend className="text-lg font-semibold text-slate-900">{q.prompt}</legend>
        {q.options.map((o) => (
          <label
            key={o.id}
            className={`flex min-w-0 cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 ${
              answers[q.id] === o.id ? "border-[var(--color-navy)] bg-[var(--color-cream)]/60" : "border-slate-200"
            }`}
          >
            <input
              type="radio"
              className="mt-1 shrink-0"
              name={q.id}
              checked={answers[q.id] === o.id}
              onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: o.id }))}
            />
            <span className="min-w-0 flex-1 text-sm leading-snug break-words">{o.label}</span>
          </label>
        ))}
      </fieldset>

      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <button
          type="button"
          className="btn-ghost w-full justify-center sm:w-auto"
          disabled={idx === 0}
          onClick={() => setIdx((i) => Math.max(0, i - 1))}
        >
          Zurück
        </button>
        {idx < questions.length - 1 ? (
          <button
            type="button"
            className="btn-primary w-full justify-center sm:w-auto"
            disabled={!answers[q.id]}
            onClick={() => setIdx((i) => i + 1)}
          >
            Weiter
          </button>
        ) : (
          <button
            type="button"
            className="btn-primary w-full justify-center sm:w-auto"
            disabled={questions.some((qq) => !answers[qq.id])}
            onClick={submitFinal}
          >
            Auswerten
          </button>
        )}
      </div>
    </div>
  );
}
