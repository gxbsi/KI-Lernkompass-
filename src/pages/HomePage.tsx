import { Link } from "react-router-dom";
import { MODULES } from "@/content/index";
import { ModuleCard } from "@/components/ModuleCard";
import { useProgressContext } from "@/contexts/ProgressContext";

export function HomePage() {
  const { state } = useProgressContext();
  const allModuleQuizzes = MODULES.every((m) => state.moduleQuizPassed[m.id]);
  const cert = state.finalQuizPassed;

  return (
    <div className="space-y-12">
      <section className="relative isolate overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-[var(--color-navy)] via-[#243d5e] to-[var(--color-accent)] px-6 py-16 text-[var(--color-paper)] shadow-xl sm:px-10 sm:py-20">
        <div
          className="pointer-events-none absolute -right-16 top-8 h-64 w-64 rounded-full bg-[var(--color-gold)]/20 blur-3xl sm:h-72 sm:w-72"
          aria-hidden
        />
        <div className="relative z-10 max-w-2xl space-y-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
            Für Lehrkräfte · ohne Login · nur im Browser
          </p>
          <h1 className="font-display text-4xl font-semibold leading-snug text-[var(--color-paper)] [text-shadow:0_1px_2px_rgba(0,0,0,0.25)] sm:text-5xl sm:leading-tight">
            Drei Module. Klare Struktur. Starker Abschluss.
          </h1>
          <p className="text-lg leading-relaxed text-white/90">
            Lerne in Ruhe, prüfe dich mit Self-Checks, bestehe die Modulquizzes und den Gesamt-Endtest – und erstelle
            dir optional ein PDF-Zertifikat. Alles läuft lokal im Browser.
          </p>
          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
            <Link className="btn w-full justify-center bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[var(--color-gold-soft)] sm:w-auto" to="/modul/m1">
              Mit Modul 1 starten
            </Link>
            <Link
              className="btn w-full justify-center border-2 border-white/50 bg-white/5 text-white hover:bg-white/15 sm:w-auto"
              to="/gesamtquiz"
            >
              Zum Gesamt-Endtest
            </Link>
          </div>
          <p className="text-sm leading-relaxed text-white/75">
            Hinweis: „Gesamt-Endtest“ und „Zertifikat“ sind freigeschaltet, sobald du die jeweiligen Voraussetzungen
            erfüllst.
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {MODULES.map((m) => (
          <ModuleCard key={m.id} mod={m} state={state} />
        ))}
      </section>

      <section className="card flex flex-col gap-4 border-dashed border-slate-300 bg-slate-50/60 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-xl font-semibold text-[var(--color-navy)]">Dein Stand</h2>
          <p className="mt-1 text-sm text-slate-600">
            Modulquizzes: {MODULES.filter((m) => state.moduleQuizPassed[m.id]).length}/{MODULES.length} · Gesamt-Endtest:{" "}
            {state.finalQuizPassed ? "bestanden" : "offen"} · Zertifikat: {cert ? "freigeschaltet" : "gesperrt"}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${allModuleQuizzes ? "bg-emerald-100 text-emerald-900" : "bg-slate-200 text-slate-700"}`}
          >
            Modulquizzes {allModuleQuizzes ? "komplett" : "noch offen"}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${cert ? "bg-emerald-100 text-emerald-900" : "bg-slate-200 text-slate-700"}`}
          >
            Zertifikat {cert ? "bereit" : "nach Endtest"}
          </span>
        </div>
      </section>
    </div>
  );
}
