import type { SelfCheckQuestion } from "./types";

/** Self-Checks passend zu den Kapiteln aus dem Handbuch (Modul 1). */
export const module1SelfChecksByChapter: Record<string, SelfCheckQuestion[]> = {
  "m1-einleitung": [
    {
      id: "m1-e0",
      prompt: "Wozu dient dieses Modul laut Einleitung vor allem?",
      options: [
        { id: "a", label: "Ein Grundverständnis von KI für Lehrkräfte – ohne Informatik-Vorwissen." },
        { id: "b", label: "Die Programmierung eigener KI-Modelle von Grund auf." },
        { id: "c", label: "Den Ersatz von Lehrkräften durch Automatisierung." },
      ],
      correctOptionId: "a",
      explanation: "Das Modul legt Grundlagen und orientiert für die Praxis – nicht für Softwareentwicklung.",
    },
  ],
  "m1-was-ist-ki": [
    {
      id: "m1-sc1",
      prompt: "Was beschreibt die „schwache KI“ (Narrow AI) am treffendsten?",
      options: [
        { id: "a", label: "KI, die nur in einem begrenzten Aufgabenbereich stark ist." },
        { id: "b", label: "KI, die garantiert korrekte Fakten liefert." },
        { id: "c", label: "KI mit Bewusstsein und allgemeiner Intelligenz." },
      ],
      correctOptionId: "a",
      explanation:
        "Schwache KI ist spezialisiert. Sie kann in ihrem Bereich sehr gut sein, ist aber außerhalb davon limitiert.",
    },
    {
      id: "m1-sc2",
      prompt: "Warum ist „Bias“ in Trainingsdaten ein zentrales Risiko?",
      options: [
        { id: "a", label: "Weil dadurch Modelle Verzerrungen übernehmen und unfair oder falsch wirken können." },
        { id: "b", label: "Weil Computer dann physisch heiß werden." },
        { id: "c", label: "Weil Bias nur ein Marketingbegriff ohne Auswirkung ist." },
      ],
      correctOptionId: "a",
      explanation: "Daten sind der Rohstoff des Lernens – Verzerrungen in Daten wirken sich auf Ausgaben aus.",
    },
    {
      id: "m1-sc3",
      prompt: "Welche Aussage zu „starker KI“ ist im heutigen Stand der Technik richtig?",
      options: [
        { id: "a", label: "Sie ist in Standard-Bildungswerkzeugen bereits allgegenwärtig." },
        { id: "b", label: "Sie ist derzeit nicht als reales System verfügbar." },
        { id: "c", label: "Sie ist dasselbe wie ein großes Sprachmodell." },
      ],
      correctOptionId: "b",
      explanation: "Große Sprachmodelle sind leistungsstarke Werkzeuge der schwachen KI.",
    },
  ],
  "m1-technik": [
    {
      id: "m1-t1",
      prompt: "Was meint „Halluzination“ bei einem LLM?",
      options: [
        { id: "a", label: "Ein technischer Grafikfehler in der Benutzeroberfläche." },
        { id: "b", label: "Plausible, aber faktisch falsche oder nicht belegte Aussagen." },
        { id: "c", label: "Ein Zustand, in dem das Modell absichtlich nicht antwortet." },
      ],
      correctOptionId: "b",
      explanation: "Halluzinationen entstehen u. a. durch Wahrscheinlichkeitsmodellierung über Sprache.",
    },
    {
      id: "m1-t2",
      prompt: "Warum sind Trainingsdaten „politisch“ und pädagogisch relevant?",
      options: [
        { id: "a", label: "Weil sie Perspektiven, Sprachen und Fehlerquoten ins Modell tragen." },
        { id: "b", label: "Weil Daten nur Hardware betreffen." },
        { id: "c", label: "Weil Modelle ohne Daten sicherer sind als mit Daten." },
      ],
      correctOptionId: "a",
      explanation: "Repräsentation und Qualität der Daten bestimmen Fairness und Domänenabdeckung.",
    },
    {
      id: "m1-t3",
      prompt: "Was beschreibt „Black Box“ im KI-Kontext am ehesten?",
      options: [
        { id: "a", label: "Ein UI-Design mit dunklem Farbschema." },
        { id: "b", label: "Schwer nachvollziehbare interne Entscheidungswege des Systems." },
        { id: "c", label: "Ein System ohne Eingaben." },
      ],
      correctOptionId: "b",
      explanation: "Transparenz ist wichtig, wenn KI Feedback oder Empfehlungen gibt.",
    },
  ],
  "m1-recht": [
    {
      id: "m1-r1",
      prompt: "Welches Ziel verbindet die DSGVO stark mit „Datenminimierung“?",
      options: [
        { id: "a", label: "So viele Daten wie möglich zu sammeln, um Modelle zu verbessern." },
        { id: "b", label: "Nur so viele personenbezogene Daten wie nötig zu verarbeiten." },
        { id: "c", label: "Daten ausschließlich außerhalb der EU zu speichern." },
      ],
      correctOptionId: "b",
      explanation: "Datenminimierung reduziert Risiken und ist ein Grundprinzip der DSGVO.",
    },
    {
      id: "m1-r2",
      prompt: "Warum ist der EU AI Act für Bildungskontexte relevant?",
      options: [
        { id: "a", label: "Weil er Risiken und Pflichten für bestimmte KI-Anwendungen strukturiert." },
        { id: "b", label: "Weil er Chatbots in Europa komplett verbietet." },
        { id: "c", label: "Weil er nur für US-Unternehmen gilt." },
      ],
      correctOptionId: "a",
      explanation: "Je nach Einsatzart können Transparenz- und Governance-Anforderungen greifen.",
    },
  ],
  "m1-sozio": [
    {
      id: "m1-s1",
      prompt: "Warum ist „Transparenz gegenüber Lernenden“ ethisch wichtig?",
      options: [
        { id: "a", label: "Weil Lernende einschätzen können sollen, wo KI wirkt und welche Risiken bestehen." },
        { id: "b", label: "Weil Transparenz nur Marketing ist." },
        { id: "c", label: "Weil KI im Unterricht grundsätzlich verboten sein soll." },
      ],
      correctOptionId: "a",
      explanation: "Informierte Nutzung und Reflexion sind Teil digitaler Kompetenz.",
    },
    {
      id: "m1-s2",
      prompt: "Welches ethische Prinzip betont oft Menschenwürde und Nicht-Diskriminierung?",
      options: [
        { id: "a", label: "Prinzipien wie die UNESCO-Ethikempfehlung zu KI." },
        { id: "b", label: "Das Prinzip der schnellsten Internetverbindung." },
        { id: "c", label: "Das Prinzip maximaler Datenmenge." },
      ],
      correctOptionId: "a",
      explanation: "Internationale Rahmenwerke betonen Fairness, Menschenrechte und Governance.",
    },
  ],
  "m1-quellen": [],
};
