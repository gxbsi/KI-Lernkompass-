import { module3ChecklistCategories } from "@/content/module3Checklist";
import type { ProgressState } from "@/lib/progress";

type Props = {
  state: ProgressState;
  onToggle: (id: string, checked: boolean) => void;
};

export function Module3Checklist({ state, onToggle }: Props) {
  const total = module3ChecklistCategories.reduce((n, c) => n + c.items.length, 0);
  const done = module3ChecklistCategories.reduce(
    (n, c) => n + c.items.filter((i) => state.checklist[i.id]).length,
    0,
  );

  return (
    <section className="mt-10 space-y-6" aria-label="Checkliste">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/90 px-5 py-4">
        <p className="text-sm text-slate-700">
          <span className="font-semibold text-[var(--color-navy)]">{done}</span> von{" "}
          <span className="font-semibold">{total}</span> Punkten erledigt (lokal gespeichert).
        </p>
        <div
          className="h-2 w-40 overflow-hidden rounded-full bg-slate-200"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={done}
        >
          <div
            className="h-full rounded-full bg-[var(--color-gold)] transition-[width]"
            style={{ width: `${total ? (done / total) * 100 : 0}%` }}
          />
        </div>
      </div>

      {module3ChecklistCategories.map((cat) => (
        <div key={cat.id} className="card">
          <h3 className="font-display text-xl font-semibold text-[var(--color-navy)]">{cat.title}</h3>
          <ul className="mt-4 space-y-3">
            {cat.items.map((item) => (
              <li key={item.id}>
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-2 hover:bg-[var(--color-cream)]/60">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={Boolean(state.checklist[item.id])}
                    onChange={(e) => onToggle(item.id, e.target.checked)}
                  />
                  <span className="text-sm leading-snug text-slate-800">{item.text}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
