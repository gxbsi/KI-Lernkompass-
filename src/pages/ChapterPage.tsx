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
  const showChecklist = chapter.id === "m3-checkliste-ui";

  const markComplete = () => {
    update((s) => setChapterDone(s, mod.id, chapter.id, true));
  };

  const canComplete = chapter.selfChecks.length === 0 || selfOk;

  return (
    <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
      <aside className="lg:sticky lg:top-6 lg:self-start" aria-label="Kapitelnavigation">
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
                className={`block rounded-lg px-2 py-1.5 text-sm ${
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

        <div className="pt-8">
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

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-8">
          <div className="flex flex-wrap gap-3">
            {prev ? (
              <Link className="btn-secondary" to={`/modul/${mod.id}/kapitel/${prev.id}`}>
                ← Vorheriges Kapitel
              </Link>
            ) : null}
            {next ? (
              <Link className="btn-primary" to={`/modul/${mod.id}/kapitel/${next.id}`}>
                Nächstes Kapitel →
              </Link>
            ) : (
              <Link className="btn-primary" to={`/modul/${mod.id}`}>
                Zur Modulübersicht
              </Link>
            )}
          </div>
          <div className="flex flex-col items-end gap-2">
            {completed ? (
              <span className="text-sm font-semibold text-emerald-800">Kapitel als erledigt markiert.</span>
            ) : (
              <button
                type="button"
                className="btn-primary"
                disabled={!canComplete}
                onClick={markComplete}
              >
                Kapitel abschließen
              </button>
            )}
            {chapter.selfChecks.length > 0 && !selfOk ? (
              <span className="max-w-xs text-right text-xs text-slate-500">
                Beantworte zuerst alle Self-Check-Fragen richtig.
              </span>
            ) : null}
          </div>
        </div>
      </article>
    </div>
  );
}
