import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getChapter, getModule } from "@/content/index";
import { MarkdownBody } from "@/components/MarkdownBody";
import { SelfCheckBlock } from "@/components/SelfCheckBlock";
import { CompassGallery } from "@/components/CompassGallery";
import { Module3Checklist } from "@/components/Module3Checklist";
import { isChapterDone, setChapterDone, setChecklistItem } from "@/lib/progress";
import { useProgressContext } from "@/contexts/ProgressContext";

export function ChapterPage() {
  const { moduleId, chapterId } = useParams();
  const { state, update } = useProgressContext();
  const [selfOk, setSelfOk] = useState(false);

  const mod = moduleId ? getModule(moduleId) : undefined;
  const chapter = moduleId && chapterId ? getChapter(moduleId, chapterId) : undefined;

  const idx = useMemo(() => {
    if (!mod || !chapter) return -1;
    return mod.chapters.findIndex((c) => c.id === chapter.id);
  }, [mod, chapter]);

  const onSelfOk = useCallback((ok: boolean) => {
    setSelfOk(ok);
  }, []);

  useEffect(() => {
    if (!chapter) return;
    if (chapter.selfChecks.length === 0) setSelfOk(true);
    else setSelfOk(false);
  }, [chapter]);

  if (!mod || !chapter || idx < 0) return <Navigate to="/" replace />;

  const prev = idx > 0 ? mod.chapters[idx - 1] : null;
  const next = idx < mod.chapters.length - 1 ? mod.chapters[idx + 1] : null;

  const completed = isChapterDone(state, mod.id, chapter.id);
  const showChecklist = chapter.id === "m3-checkliste-interaktiv";

  const markComplete = () => {
    update((s) => setChapterDone(s, mod.id, chapter.id, true));
  };

  const canComplete = chapter.selfChecks.length === 0 || selfOk;

  return (
    <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,280px)_1fr]">
      <aside className="min-w-0 lg:sticky lg:top-6 lg:self-start" aria-label="Kapitelnavigation">
        <div className="card space-y-2 py-4">
          <Link to={`/modul/${mod.id}`} className="text-sm font-semibold text-[var(--color-accent)] hover:underline">
            ← Modulübersicht
          </Link>
          <p className="font-display text-lg font-semibold text-[var(--color-navy)]">{mod.title}</p>
            <nav className="space-y-1 border-t border-slate-100 pt-3" aria-label="Kapitel">
            {mod.chapters.map((ch) => (
              <Link
                key={ch.id}
                to={`/modul/${mod.id}/kapitel/${ch.id}`}
                className={`block rounded-lg px-2 py-1.5 text-sm leading-snug break-words ${
                  ch.id === chapter.id ? "bg-[var(--color-cream)] font-semibold text-[var(--color-navy)]" : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {ch.title}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      <article className="min-w-0">
        <header className="border-b border-slate-200 pb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
            {mod.shortTitle} · Kapitel {idx + 1}/{mod.chapters.length}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-[var(--color-navy)]">{chapter.title}</h1>
          {chapter.summary ? <p className="mt-3 max-w-3xl text-lg text-slate-600">{chapter.summary}</p> : null}
        </header>

        <div className="prose-surface mt-8">
          <MarkdownBody markdown={chapter.bodyMd.trim()} />
        </div>

        {chapter.showCompassGallery ? <CompassGallery /> : null}

        {showChecklist ? (
          <Module3Checklist
            state={state}
            onToggle={(id, checked) => update((s) => setChecklistItem(s, id, checked))}
          />
        ) : null}

        {chapter.selfChecks.length ? (
          <SelfCheckBlock questions={chapter.selfChecks} onAllCorrectChange={onSelfOk} />
        ) : (
          <p className="mt-8 text-sm text-slate-600">Kein Self-Check in diesem Kapitel – du kannst es direkt abschließen.</p>
        )}

        <div className="mt-10 flex flex-col gap-6 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {prev ? (
              <Link className="btn-secondary w-full justify-center sm:w-auto" to={`/modul/${mod.id}/kapitel/${prev.id}`}>
                ← Vorheriges Kapitel
              </Link>
            ) : null}
            {next ? (
              <Link className="btn-primary w-full justify-center sm:w-auto" to={`/modul/${mod.id}/kapitel/${next.id}`}>
                Nächstes Kapitel →
              </Link>
            ) : (
              <Link className="btn-primary w-full justify-center sm:w-auto" to={`/modul/${mod.id}`}>
                Zur Modulübersicht
              </Link>
            )}
          </div>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:max-w-sm sm:items-end">
            {completed ? (
              <span className="text-sm font-semibold text-emerald-800">Kapitel als erledigt markiert.</span>
            ) : (
              <button
                type="button"
                className="btn-primary w-full sm:w-auto"
                disabled={!canComplete}
                onClick={markComplete}
              >
                Kapitel abschließen
              </button>
            )}
            {chapter.selfChecks.length > 0 && !selfOk ? (
              <span className="text-xs leading-relaxed text-slate-500 sm:text-right">
                Beantworte zuerst alle Self-Check-Fragen richtig.
              </span>
            ) : null}
          </div>
        </div>
      </article>
    </div>
  );
}
