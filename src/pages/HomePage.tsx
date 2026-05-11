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
      <section className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-[var(--color-navy)] via-[#243d5e] to-[var(--color-accent)] px-8 py-14 text-[var(--color-paper)] shadow-xl">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-gold)]/25 blur-3xl" />
        <div className="relative max-w-2xl space-y-5">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
            Uni-Projekt · ohne Login
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Drei Module. Klare Struktur. Starker Abschluss.
          </h1>
          <p className="text-lg text-white/85">
            Lerne in Ruhe, prüfe dich mit Self-Checks, bestehe die Modulquizzes und den Gesamt-Endtest – und erstelle
            dir optional ein PDF-Zertifikat. Alles läuft lokal im Browser.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link className="btn bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[var(--color-gold-soft)]" to="/modul/m1">
              Mit Modul 1 starten
            </Link>
            <Link
              className="btn border-2 border-white/40 bg-transparent text-white hover:bg-white/10"
              to="/gesamtquiz"
            >
              Zum Gesamt-Endtest
            </Link>
          </div>
          <p className="text-sm text-white/70">
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
