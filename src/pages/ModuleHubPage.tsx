import { Link, Navigate, useParams } from "react-router-dom";
import { getModule } from "@/content/index";
import { isChapterDone } from "@/lib/progress";
import { useProgressContext } from "@/contexts/ProgressContext";

export function ModuleHubPage() {
  const { moduleId } = useParams();
  const { state } = useProgressContext();
  const mod = moduleId ? getModule(moduleId) : undefined;

  if (!mod) return <Navigate to="/" replace />;

  const doneCount = mod.chapters.filter((ch) => isChapterDone(state, mod.id, ch.id)).length;
  const allDone = doneCount === mod.chapters.length;
  const quizPassed = Boolean(state.moduleQuizPassed[mod.id]);

  return (
    <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,280px)_1fr]">
      <aside className="min-w-0 space-y-4 lg:sticky lg:top-6 lg:self-start" aria-label="Kapitelnavigation">
        <div className="card py-5">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">{mod.shortTitle}</p>
          <h1 className="mt-2 font-display text-2xl font-semibold text-[var(--color-navy)]">{mod.title}</h1>
          <p className="mt-2 text-sm text-slate-600">{mod.subtitle}</p>
          <div className="mt-4 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">
            Fortschritt:{" "}
            <span className="font-semibold text-[var(--color-navy)]">
              {doneCount}/{mod.chapters.length}
            </span>{" "}
            Kapitel
          </div>
        </div>
        <nav className="card space-y-1 py-3" aria-label="Kapitel">
          {mod.chapters.map((ch, i) => {
            const done = isChapterDone(state, mod.id, ch.id);
            return (
              <Link
                key={ch.id}
                to={`/modul/${mod.id}/kapitel/${ch.id}`}
                className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold ${
                  done ? "bg-emerald-50 text-emerald-900" : "text-slate-700 hover:bg-[var(--color-cream)]"
                }`}
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white text-xs font-bold text-[var(--color-navy)] shadow-sm">
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1 leading-snug break-words">{ch.title}</span>
              </Link>
            );
          })}
        </nav>
        <div className="card space-y-3">
          <p className="text-sm font-semibold text-[var(--color-navy)]">Modulabschluss</p>
          {allDone ? (
            <Link className="btn-primary w-full justify-center" to={`/modul/${mod.id}/modulquiz`}>
              {quizPassed ? "Modulquiz wiederholen" : "Zum Modulquiz"}
            </Link>
          ) : (
            <p className="text-sm text-slate-600">Schließe alle Kapitel inkl. Self-Checks ab, um das Modulquiz zu öffnen.</p>
          )}
          {quizPassed ? (
            <p className="text-xs font-semibold text-emerald-800">Modulquiz bestanden.</p>
          ) : null}
        </div>
      </aside>

      <div className="min-w-0 space-y-6">
        <div className="card">
          <h2 className="font-display text-2xl font-semibold text-[var(--color-navy)]">Überblick</h2>
          <p className="mt-3 text-slate-700">
            Wähle links ein Kapitel. Jedes Kapitel endet mit einem kurzen Self-Check. Wenn alle Kapitel erledigt sind,
            folgt das Modulquiz.
          </p>
          <ol className="mt-6 space-y-3">
            {mod.chapters.map((ch, i) => (
              <li
                key={ch.id}
                className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3 sm:flex-row sm:items-start sm:justify-between"
              >
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase text-slate-500">Kapitel {i + 1}</p>
                  <p className="font-semibold text-slate-900 break-words">{ch.title}</p>
                  {ch.summary ? <p className="mt-1 text-sm text-slate-600 break-words">{ch.summary}</p> : null}
                </div>
                <div className="flex shrink-0 flex-col gap-2 sm:items-end">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-semibold ${
                      isChapterDone(state, mod.id, ch.id) ? "bg-emerald-100 text-emerald-900" : "bg-white text-slate-600"
                    }`}
                  >
                    {isChapterDone(state, mod.id, ch.id) ? "Erledigt" : "Offen"}
                  </span>
                  <Link className="btn-secondary px-3 py-1.5 text-xs" to={`/modul/${mod.id}/kapitel/${ch.id}`}>
                    Öffnen
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
