import type { Chapter, LearningModule } from "./types";
import { module3GeneratedChapters } from "./module3.generated";
import { module3SelfChecksByChapter } from "./module3SelfChecks";

const SUMMARY: Partial<Record<string, string>> = {
  "m3-einleitung-katalog": "Rahmen, Grenzen und Quellenbezug des Kriterienkatalogs.",
  "m3-kat1": "Datenschutz, DSGVO, Serverstandort, Minimierung, Minderjährige, AI Act.",
  "m3-kat2": "Verschlüsselung, Gerätekompatibilität, Support und Wartung.",
  "m3-kat3": "Navigation, Einarbeitung, Rollen, responsives Design.",
  "m3-kat4": "WCAG, Mehrsprachigkeit, Differenzierung.",
  "m3-kat5": "Kostentransparenz, Free-Tier, Testversion, Nachhaltigkeit.",
  "m3-kat6": "Inhalte, Adaptivität, Feedback, Kollaboration, Evidenz.",
  "m3-kat7": "Governance, Diskriminierung, Aufsicht, Transparenz, Evaluation.",
  "m3-checkliste-dokument": "Vollständige tabellarische Schnellbewertung aus dem Handbuch.",
  "m3-quellen": "Literaturhinweise aus dem Modul.",
};

const INTERACTIVE_CHECKLIST_CHAPTER: Chapter = {
  id: "m3-checkliste-interaktiv",
  title: "Interaktive Schnell-Checkliste",
  summary: "Gleiche Kriterien wie im Handbuch – hier mit Häkchen und lokalem Speicher.",
  bodyMd: `
### So arbeitest du mit diesem Kapitel

Im **vorigen Kapitel** steht die **vollständige Tabelle** aus dem Handbuch (Nr., Kriterium, Typ, Erfüllt).

Hier kannst du dieselben Punkte **digital abhaken**. Der Fortschritt wird **nur in deinem Browser** gespeichert (ohne Datenbank, ohne Server).

> **Hinweis:** Für verbindliche Entscheidungen im Schul- oder Hochschulkontext bitte zusätzlich Datenschutzbeauftragte, IT und rechtliche Stellen einbinden.
`.trim(),
  selfChecks: module3SelfChecksByChapter["m3-checkliste-interaktiv"] ?? [],
  showCompassGallery: false,
};

export const module3: LearningModule = {
  id: "m3",
  shortTitle: "Modul 3",
  title: "Analysekriterien für KI-(Lern)plattformen",
  subtitle: "Vollständiger Kriterienkatalog, Schnellbewertung und interaktive Checkliste – inhaltlich dem Handbuchmodul entsprechend.",
  chapters: (() => {
    const list = [...module3GeneratedChapters];
    const quellen = list.pop();
    if (!quellen) throw new Error("Modul 3: Quellen-Kapitel fehlt in module3.generated");
    const main = list.map(
      (c): Chapter => ({
        id: c.id,
        title: c.title,
        summary: SUMMARY[c.id],
        bodyMd: c.bodyMd.trim(),
        selfChecks: module3SelfChecksByChapter[c.id] ?? [],
        showCompassGallery: false,
      }),
    );
    return [
      ...main,
      INTERACTIVE_CHECKLIST_CHAPTER,
      {
        id: quellen.id,
        title: quellen.title,
        summary: SUMMARY[quellen.id],
        bodyMd: quellen.bodyMd.trim(),
        selfChecks: [],
        showCompassGallery: false,
      },
    ];
  })(),
};
