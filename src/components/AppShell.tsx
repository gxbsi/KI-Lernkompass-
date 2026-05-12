import { Link, NavLink, Outlet } from "react-router-dom";
import { ATTRIBUTION_FOOTER, COURSE_TITLE } from "@/lib/constants";
import type { ProgressState } from "@/lib/progress";
import { finalExamQuestions, MODULES, moduleExamQuestions } from "@/content/index";

type Props = {
  fontScalePct: number;
  onFontScale: (pct: number) => void;
  onResetProgress: () => void;
  progress: ProgressState;
};

export function AppShell({ fontScalePct, onFontScale, onResetProgress, progress }: Props) {
  const allModuleQuizzes = MODULES.every((m) => progress.moduleQuizPassed[m.id]);
  const canFinal = allModuleQuizzes;
  return (
    <div className="min-h-dvh flex flex-col" style={{ fontSize: `${fontScalePct}%` }}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[var(--color-navy)] focus:shadow"
      >
        Zum Inhalt springen
      </a>
      <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto grid min-w-0 max-w-6xl grid-cols-1 items-center gap-x-4 gap-y-3 px-4 py-4 sm:grid-cols-[minmax(0,auto)_minmax(0,1fr)_auto] sm:gap-y-2">
          <Link to="/" className="group flex min-w-0 items-center gap-3 justify-self-start">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--color-navy)] text-sm font-bold text-[var(--color-paper)] shadow">
              KI
            </span>
            <span className="font-display min-w-0 text-lg font-semibold leading-tight text-[var(--color-navy)] group-hover:underline sm:max-w-[14rem] md:max-w-none">
              KI-Lernkompass
            </span>
          </Link>
          <nav
            className="flex min-w-0 flex-wrap items-center gap-2 text-sm font-semibold sm:justify-self-end"
            aria-label="Hauptnavigation"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 ${isActive ? "bg-[var(--color-cream)] text-[var(--color-navy)]" : "text-slate-600 hover:bg-slate-100"}`
              }
              end
            >
              Start
            </NavLink>
            {MODULES.map((m) => (
              <NavLink
                key={m.id}
                to={`/modul/${m.id}`}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 ${isActive ? "bg-[var(--color-cream)] text-[var(--color-navy)]" : "text-slate-600 hover:bg-slate-100"}`
                }
              >
                {m.shortTitle}
              </NavLink>
            ))}
            <NavLink
              to="/gesamtquiz"
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 ${!canFinal ? "pointer-events-none opacity-40" : ""} ${isActive ? "bg-[var(--color-cream)] text-[var(--color-navy)]" : "text-slate-600 hover:bg-slate-100"}`
              }
              aria-disabled={!canFinal}
            >
              Gesamt-Endtest
            </NavLink>
            <NavLink
              to="/zertifikat"
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 ${isActive ? "bg-[var(--color-cream)] text-[var(--color-navy)]" : "text-slate-600 hover:bg-slate-100"}`
              }
            >
              Zertifikat
            </NavLink>
          </nav>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600 sm:justify-self-end">
            <span className="hidden sm:inline">Schrift:</span>
            {[100, 110, 125].map((pct) => (
              <button
                key={pct}
                type="button"
                className={`rounded-lg border px-2 py-1 ${fontScalePct === pct ? "border-[var(--color-navy)] bg-[var(--color-cream)]" : "border-transparent hover:bg-slate-100"}`}
                onClick={() => onFontScale(pct)}
              >
                {pct}%
              </button>
            ))}
          </div>
        </div>
      </header>

      <main id="main" className="mx-auto min-w-0 w-full max-w-6xl flex-1 px-4 py-8 sm:py-10">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200/80 bg-white/70 py-8 text-sm text-slate-600 backdrop-blur">
        <div className="mx-auto max-w-6xl space-y-4 px-4">
          <p className="max-w-3xl leading-relaxed">{ATTRIBUTION_FOOTER}</p>
          <p className="text-xs text-slate-500">{COURSE_TITLE}</p>
          <div className="flex flex-wrap gap-4 border-t border-slate-200 pt-4 text-xs">
            <span>
              Gesamt-Endtest: {finalExamQuestions.length} Fragen · Modulquiz je ca.{" "}
              {moduleExamQuestions.m1.length} Fragen
            </span>
            <button
              type="button"
              className="text-[var(--color-danger)] underline decoration-2 underline-offset-2"
              onClick={() => {
                if (confirm("Fortschritt wirklich zurücksetzen?")) onResetProgress();
              }}
            >
              Fortschritt zurücksetzen
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
