import type { Chapter, LearningModule } from "./types";
import { module1GeneratedChapters } from "./module1.generated";
import { module1SelfChecksByChapter } from "./module1SelfChecks";

const SUMMARY: Partial<Record<string, string>> = {
  "m1-einleitung": "Zielgruppe, Aufbau des Moduls und Einordnung ins Handbuch.",
  "m1-was-ist-ki": "Definition, Alltagsbeispiele, Arten von KI und maschinelles Lernen.",
  "m1-technik": "Neuronale Netze, LLMs, Daten, Algorithmen, Multimodalität.",
  "m1-recht": "DSGVO, EU AI Act, Urheberrecht – Überblick für die Praxis.",
  "m1-sozio": "Chancen, Risiken, Bias, Arbeit, ethische Grundprinzipien (optional).",
  "m1-quellen": "Literatur- und Quellenhinweise aus dem Handbuch.",
};

export const module1: LearningModule = {
  id: "m1",
  shortTitle: "Modul 1",
  title: "KI-Grundlagenverständnis",
  subtitle: "Vollständige Fassung aus dem Handbuchmodul: Begriffe, Technik, Recht und Ethik.",
  chapters: module1GeneratedChapters.map(
    (c): Chapter => ({
      id: c.id,
      title: c.id === "m1-einleitung" ? "Einleitung" : c.title,
      summary: SUMMARY[c.id],
      bodyMd: c.bodyMd.trim(),
      selfChecks: module1SelfChecksByChapter[c.id] ?? [],
      showCompassGallery: false,
    }),
  ),
};
