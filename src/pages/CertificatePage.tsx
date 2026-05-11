import { useState } from "react";
import { Link } from "react-router-dom";
import { useProgressContext } from "@/contexts/ProgressContext";

export function CertificatePage() {
  const { state } = useProgressContext();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [busy, setBusy] = useState(false);

  if (!state.finalQuizPassed) {
    return (
      <div className="card max-w-xl">
        <h1 className="font-display text-2xl font-semibold text-[var(--color-navy)]">Zertifikat noch gesperrt</h1>
        <p className="mt-3 text-slate-700">
          Bitte schließe zuerst alle drei Modulquizzes und den Gesamt-Endtest ab. Danach kannst du hier ein PDF
          erstellen.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="btn-primary" to="/">
            Zur Startseite
          </Link>
          <Link className="btn-secondary" to="/gesamtquiz">
            Zum Gesamt-Endtest
          </Link>
        </div>
      </div>
    );
  }

  const download = async () => {
    const f = first.trim();
    const l = last.trim();
    if (f.length < 2 || l.length < 2) return;
    setBusy(true);
    try {
      const { generateCertificatePdf } = await import("@/lib/certificate");
      const blob = generateCertificatePdf(f, l);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Lernnachweis_${f}_${l}.pdf`.replace(/\s+/g, "_");
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="card max-w-xl">
      <h1 className="font-display text-3xl font-semibold text-[var(--color-navy)]">PDF-Zertifikat</h1>
      <p className="mt-3 text-slate-700">
        Glückwunsch – du hast alle Prüfungen bestanden. Gib deinen Namen ein und lade deinen Lernnachweis als PDF
        herunter. Es werden keine Daten an einen Server gesendet.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="vn">
            Vorname
          </label>
          <input
            id="vn"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            autoComplete="given-name"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="nn">
            Nachname
          </label>
          <input
            id="nn"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm"
            value={last}
            onChange={(e) => setLast(e.target.value)}
            autoComplete="family-name"
          />
        </div>
      </div>
      <p className="mt-2 text-xs text-slate-500">Mindestens 2 Zeichen pro Feld.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          className="btn-primary"
          disabled={busy || first.trim().length < 2 || last.trim().length < 2}
          onClick={() => void download()}
        >
          {busy ? "Erzeuge PDF…" : "PDF herunterladen"}
        </button>
        <Link className="btn-secondary" to="/">
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
