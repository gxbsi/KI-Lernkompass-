import { Link } from "react-router-dom";
import type { LearningModule } from "@/content/types";
import { chapterKey, type ProgressState } from "@/lib/progress";
import { ProgressRing } from "./ProgressRing";

type Props = {
  mod: LearningModule;
  state: ProgressState;
};

export function ModuleCard({ mod, state }: Props) {
  const done = mod.chapters.filter((ch) =>
    state.completedChapters.includes(chapterKey(mod.id, ch.id)),
  ).length;
  const ratio = mod.chapters.length ? done / mod.chapters.length : 0;
  const quiz = Boolean(state.moduleQuizPassed[mod.id]);

  return (
    <article className="card group relative overflow-hidden border-slate-200/80 transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--color-gold-soft)]/40 blur-2xl transition group-hover:bg-[var(--color-gold-soft)]/60" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
            {mod.shortTitle}
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-[var(--color-navy)]">{mod.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{mod.subtitle}</p>
        </div>
        <div className="relative shrink-0">
          <ProgressRing value={ratio} size={100} stroke={9} />
          <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-[var(--color-navy)]">
            {Math.round(ratio * 100)}%
          </span>
        </div>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-600">
        <div className="rounded-xl bg-slate-50 px-3 py-2">
          <dt className="text-xs font-semibold uppercase text-slate-500">Kapitel</dt>
          <dd className="font-semibold text-slate-900">
            {done}/{mod.chapters.length}
          </dd>
        </div>
        <div className="rounded-xl bg-slate-50 px-3 py-2">
          <dt className="text-xs font-semibold uppercase text-slate-500">Modulquiz</dt>
          <dd className="font-semibold text-slate-900">{quiz ? "Bestanden" : "Offen"}</dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link className="btn-primary" to={`/modul/${mod.id}`}>
          Zum Modul
        </Link>
        <Link className="btn-secondary" to={`/modul/${mod.id}/kapitel/${mod.chapters[0]?.id}`}>
          Weiterlesen
        </Link>
      </div>
    </article>
  );
}
