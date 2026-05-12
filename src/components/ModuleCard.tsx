import { Link } from "react-router-dom";
import type { LearningModule } from "@/content/types";
import { chapterKey, type ProgressState } from "@/lib/progress";

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
    <article className="card group relative border-slate-200/80 transition hover:-translate-y-0.5 hover:shadow-lg">
      {/* Nur Dekor clipen — nicht den Fortschrittsring (SVG-Strich sonst abgeschnitten). */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
        aria-hidden
      >
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--color-gold-soft)]/40 blur-2xl transition group-hover:bg-[var(--color-gold-soft)]/60" />
      </div>
      <div className="relative flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">{mod.shortTitle}</p>
            <span
              className="inline-flex shrink-0 items-center rounded-full border border-slate-200/90 bg-white px-2 py-0.5 text-[11px] font-bold tabular-nums text-[var(--color-navy)] shadow-sm"
              title="Anteil erledigter Kapitel"
            >
              {Math.round(ratio * 100)}%
            </span>
          </div>
          <h2 className="mt-2 font-display text-2xl font-semibold text-[var(--color-navy)]">{mod.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{mod.subtitle}</p>
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

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link className="btn-primary w-full justify-center sm:w-auto" to={`/modul/${mod.id}`}>
          Zum Modul
        </Link>
        <Link className="btn-secondary w-full justify-center sm:w-auto" to={`/modul/${mod.id}/kapitel/${mod.chapters[0]?.id}`}>
          Weiterlesen
        </Link>
      </div>
    </article>
  );
}
