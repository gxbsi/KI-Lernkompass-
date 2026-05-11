import { useState } from "react";

const IMAGES = Array.from({ length: 8 }, (_, i) => `/modul2/kompass/image${i + 1}.png`);

export function CompassGallery() {
  const [active, setActive] = useState(0);

  return (
    <section className="card mt-10" aria-label="Kompass-Folien">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-semibold text-[var(--color-navy)]">
            The AI Teaching Compass – Folien
          </h2>
          <p className="mt-1 max-w-prose text-sm text-slate-600">
            Visuelle Orientierung aus der Präsentation zu Modul 2. Nutze die Pfeile oder die Miniaturleiste.
          </p>
        </div>
        <div className="text-sm font-semibold text-slate-600">
          Folie {active + 1} / {IMAGES.length}
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950/5">
        <img
          src={IMAGES[active]}
          alt={`Kompass-Folie ${active + 1}`}
          className="mx-auto max-h-[min(70vh,720px)] w-full object-contain"
          loading={active === 0 ? "eager" : "lazy"}
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-between gap-2 bg-gradient-to-t from-black/50 to-transparent p-4">
          <button
            type="button"
            className="btn bg-white/95 text-[var(--color-navy)] shadow"
            onClick={() => setActive((i) => (i - 1 + IMAGES.length) % IMAGES.length)}
            aria-label="Vorherige Folie"
          >
            Zurück
          </button>
          <button
            type="button"
            className="btn bg-white/95 text-[var(--color-navy)] shadow"
            onClick={() => setActive((i) => (i + 1) % IMAGES.length)}
            aria-label="Nächste Folie"
          >
            Weiter
          </button>
        </div>
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Folienauswahl">
        {IMAGES.map((src, i) => (
          <button
            key={src}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition ${
              i === active ? "border-[var(--color-gold)]" : "border-transparent opacity-70 hover:opacity-100"
            }`}
            onClick={() => setActive(i)}
          >
            <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
            <span className="sr-only">Folie {i + 1}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
