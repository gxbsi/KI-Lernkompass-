import type { Chapter, LearningModule } from "./types";
import { module2GeneratedChapters } from "./module2.generated";
import { module2SelfChecksByChapter } from "./module2SelfChecks";

const GALLERY_NOTE = `

---

**Kompass-Folien:** Die Visualisierungen aus der Präsentation *The AI Teaching Compass* findest du **am Ende dieses Kapitels** als durchklickbare Galerie.
`;

const SUMMARY: Partial<Record<string, string>> = {
  "m2-einleitung-kompass": "Einordnung: KI als Ergänzung, Orientierung am Markt, pädagogische Wahl.",
  "m2-chatbots": "Multimodale Allrounder, quellenbasierte Assistenten – Chancen und Risiken.",
  "m2-bild-video": "Generative Medien, Avatare, ethische Aspekte.",
  "m2-quiz-tests": "Adaptive Tools und KI-Feedback mit pädagogischer Hoheit.",
  "m2-lernplan": "Gamma, MagicSchool & Co. – Struktur und Lehrplanbezug.",
  "m2-matrix": "Navigationsmatrix: Didaktik, Technik, Recht, Ethik im Überblick.",
  "m2-quellen": "Literaturhinweise aus dem Modul.",
};

export const module2: LearningModule = {
  id: "m2",
  shortTitle: "Modul 2",
  title: "Lernplattformarten & Nutzung",
  subtitle: "Vollständige Fassung des Orientierungskompasses inkl. Zusammenfassung und Quellen.",
  chapters: module2GeneratedChapters.map(
    (c): Chapter => ({
      id: c.id,
      title: c.title,
      summary: SUMMARY[c.id],
      bodyMd:
        c.id === "m2-einleitung-kompass"
          ? `${c.bodyMd.trim()}${GALLERY_NOTE}`
          : c.bodyMd.trim(),
      selfChecks: module2SelfChecksByChapter[c.id] ?? [],
      showCompassGallery: c.id === "m2-einleitung-kompass",
    }),
  ),
};
