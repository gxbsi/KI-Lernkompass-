import type { ExamQuestion, LearningModule } from "./types";
import { module1 } from "./module1";
import { module2 } from "./module2";
import { module3 } from "./module3";

export const MODULES: LearningModule[] = [module1, module2, module3];

export function getModule(id: string): LearningModule | undefined {
  return MODULES.find((m) => m.id === id);
}

export function getChapter(moduleId: string, chapterId: string) {
  const mod = getModule(moduleId);
  return mod?.chapters.find((c) => c.id === chapterId);
}

/** Modulabschlussquiz – gemischt aus Modulinhalten. */
export const moduleExamQuestions: Record<string, ExamQuestion[]> = {
  m1: [
    {
      id: "m1-ex-1",
      moduleId: "m1",
      prompt: "Welche KI-Art ist im heutigen Bildungsalltag praktisch relevant?",
      options: [
        { id: "a", label: "Schwache KI (Narrow AI)" },
        { id: "b", label: "Künstliche Superintelligenz als fertiges Produkt" },
        { id: "c", label: "Starke KI als Standardsoftware" },
      ],
      correctOptionId: "a",
      explanation: "Heute sind es spezialisierte Systeme (schwache KI).",
    },
    {
      id: "m1-ex-2",
      moduleId: "m1",
      prompt: "Was ist eine zentrale Ursache für Bias in KI-Systemen?",
      options: [
        { id: "a", label: "Trainingsdaten spiegeln Verzerrungen oder Lücken wider." },
        { id: "b", label: "Zu wenig Strom am Server." },
        { id: "c", label: "Zu viele Bildschirmfarben." },
      ],
      correctOptionId: "a",
      explanation: "Daten sind der Rohstoff – Qualität und Repräsentation entscheiden.",
    },
    {
      id: "m1-ex-3",
      moduleId: "m1",
      prompt: "Was trifft auf LLM-Halluzinationen typischerweise zu?",
      options: [
        { id: "a", label: "Sie können plausibel klingen, aber falsch sein." },
        { id: "b", label: "Sie sind ausgeschlossen, wenn das UI professionell wirkt." },
        { id: "c", label: "Sie bedeuten immer, dass das Modell absichtlich täuscht." },
      ],
      correctOptionId: "a",
      explanation: "Plausibilität ersetzt keine Faktenprüfung.",
    },
    {
      id: "m1-ex-4",
      moduleId: "m1",
      prompt: "Warum ist Transparenz bei KI-Feedback pädagogisch wichtig?",
      options: [
        { id: "a", label: "Weil Verantwortung und Nachvollziehbarkeit für Lernbegleitung nötig sind." },
        { id: "b", label: "Weil Transparenz nur Marketing ist." },
        { id: "c", label: "Weil Feedback nie relevant ist." },
      ],
      correctOptionId: "a",
      explanation: "Ohne Nachvollziehbarkeit wird pädagogische Verantwortung schwer.",
    },
    {
      id: "m1-ex-5",
      moduleId: "m1",
      prompt: "Was beschreibt Datenminimierung?",
      options: [
        { id: "a", label: "Nur nötige personenbezogene Daten verarbeiten." },
        { id: "b", label: "Alle Daten dauerhaft speichern." },
        { id: "c", label: "Daten nur außerhalb der EU verarbeiten." },
      ],
      correctOptionId: "a",
      explanation: "Minimierung ist ein Datenschutz-Grundsatz.",
    },
    {
      id: "m1-ex-6",
      moduleId: "m1",
      prompt: "Deep Learning im engeren Sinn meint oft:",
      options: [
        { id: "a", label: "Neuronale Netze mit vielen Schichten." },
        { id: "b", label: "Lernen ohne jegliche Daten." },
        { id: "c", label: "Nur Tabellenkalkulation." },
      ],
      correctOptionId: "a",
      explanation: "„Tief“ bezieht sich auf die Tiefe des Netzes.",
    },
  ],
  m2: [
    {
      id: "m2-ex-1",
      moduleId: "m2",
      prompt: "Was ist eine typische Gefahr bei Chatbots im Unterricht?",
      options: [
        { id: "a", label: "Halluzinationen und fehlende Belege." },
        { id: "b", label: "Dass sie nie Text erzeugen." },
        { id: "c", label: "Dass sie immer korrekt zitieren." },
      ],
      correctOptionId: "a",
      explanation: "Faktenprüfung und Quellenarbeit bleiben nötig.",
    },
    {
      id: "m2-ex-2",
      moduleId: "m2",
      prompt: "Warum ist Datenschutz bei Chatbot-Eingaben relevant?",
      options: [
        { id: "a", label: "Weil personenbezogene Informationen enthalten sein können." },
        { id: "b", label: "Weil Chatbots keine Daten senden." },
        { id: "c", label: "Weil Datenschutz nur für Banken gilt." },
      ],
      correctOptionId: "a",
      explanation: "Schutzwürdige Inhalte können unbeabsichtigt eingegeben werden.",
    },
    {
      id: "m2-ex-3",
      moduleId: "m2",
      prompt: "Bei KI-generierten Bildern mit realen Personen ist besonders wichtig:",
      options: [
        { id: "a", label: "Persönlichkeitsrechte und Einwilligung." },
        { id: "b", label: "Nur die Bildauflösung." },
        { id: "c", label: "Nur die Dateiendung." },
      ],
      correctOptionId: "a",
      explanation: "Rechte und Schutz stehen im Vordergrund.",
    },
    {
      id: "m2-ex-4",
      moduleId: "m2",
      prompt: "Automatisches Quiz-Feedback kann problematisch sein, weil:",
      options: [
        { id: "a", label: "Kontext und Begründung fehlen können." },
        { id: "b", label: "Es immer besser als Lehrkräfte ist." },
        { id: "c", label: "Es nie Daten erzeugt." },
      ],
      correctOptionId: "a",
      explanation: "Automatisierung ist eine Ergänzung, keine alleinige Instanz.",
    },
    {
      id: "m2-ex-5",
      moduleId: "m2",
      prompt: "Der Orientierungskompass unterstützt vor allem:",
      options: [
        { id: "a", label: "Systematische Auswahl statt „Trend-first“." },
        { id: "b", label: "Zufällige Tool-Auswahl." },
        { id: "c", label: "Den Verzicht auf Lernziele." },
      ],
      correctOptionId: "a",
      explanation: "Struktur statt Impulsentscheidung.",
    },
    {
      id: "m2-ex-6",
      moduleId: "m2",
      prompt: "Eine gesunde Rolle eines KI-Lernplans ist:",
      options: [
        { id: "a", label: "Vorschlag, den Lernende reflektieren und anpassen." },
        { id: "b", label: "verbindliches Urteil über Intelligenz." },
        { id: "c", label: "Ersatz für Aufsicht." },
      ],
      correctOptionId: "a",
      explanation: "Selbstregulation bleibt zentral.",
    },
  ],
  m3: [
    {
      id: "m3-ex-1",
      moduleId: "m3",
      prompt: "Was bedeutet ein K.O.-Kriterium im Katalog?",
      options: [
        { id: "a", label: "Bei Verstoß ist die Plattform typischerweise ungeeignet." },
        { id: "b", label: "Es ist optional und unwichtig." },
        { id: "c", label: "Es gilt nur am Wochenende." },
      ],
      correctOptionId: "a",
      explanation: "K.O. markiert Ausschlusslogik.",
    },
    {
      id: "m3-ex-2",
      moduleId: "m3",
      prompt: "Warum ist Serverstandort/Drittland relevant?",
      options: [
        { id: "a", label: "Weil Speicherorte und Verträge Risiken und Rechtmäßigkeit beeinflussen." },
        { id: "b", label: "Weil Daten immer unsichtbar sind." },
        { id: "c", label: "Weil es nur die Ladezeit beeinflusst." },
      ],
      correctOptionId: "a",
      explanation: "Insbesondere bei Minderjährigen ist das sensibel.",
    },
    {
      id: "m3-ex-3",
      moduleId: "m3",
      prompt: "Welches Thema gehört zu Barrierefreiheit?",
      options: [
        { id: "a", label: "Tastaturbedienbarkeit." },
        { id: "b", label: "Marketing-Budget des Anbieters." },
        { id: "c", label: "Anzahl der Farbverläufe im Logo." },
      ],
      correctOptionId: "a",
      explanation: "Teilhabe an der UI ist das Ziel.",
    },
    {
      id: "m3-ex-4",
      moduleId: "m3",
      prompt: "Datenminimierung zielt darauf ab:",
      options: [
        { id: "a", label: "nur nötige Daten zu verarbeiten." },
        { id: "b", label: "möglichst viele Daten zu sammeln." },
        { id: "c", label: "Daten nur in Chatlogs zu löschen." },
      ],
      correctOptionId: "a",
      explanation: "Zweckbindung und Minimierung reduzieren Risiko.",
    },
    {
      id: "m3-ex-5",
      moduleId: "m3",
      prompt: "Didaktische Qualität kann schlecht sein, wenn:",
      options: [
        { id: "a", label: "komplexes Denken auf schnelles Raten reduziert wird." },
        { id: "b", label: "mehrere Medientypen angeboten werden." },
        { id: "c", label: "Lernziele formuliert sind." },
      ],
      correctOptionId: "a",
      explanation: "Didaktik geht über „richtig/falsch“ hinaus.",
    },
    {
      id: "m3-ex-6",
      moduleId: "m3",
      prompt: "Kriterienkataloge ersetzen selten:",
      options: [
        { id: "a", label: "empirische Erfahrung mit einer konkreten Lerngruppe." },
        { id: "b", label: "die Kategorisierung von Merkmalen." },
        { id: "c", label: "die Prüfung von Datenschutztexten." },
      ],
      correctOptionId: "a",
      explanation: "Kataloge strukturieren – Praxis validiert.",
    },
  ],
};

export const finalExamQuestions: ExamQuestion[] = [
  ...moduleExamQuestions.m1.slice(0, 3).map((q) => ({ ...q, id: `fin-${q.id}` })),
  ...moduleExamQuestions.m2.slice(0, 3).map((q) => ({ ...q, id: `fin-${q.id}` })),
  ...moduleExamQuestions.m3.slice(0, 3).map((q) => ({ ...q, id: `fin-${q.id}` })),
  {
    id: "fin-mix-1",
    moduleId: "m1",
    prompt: "Welche Aussage zu „starker KI“ ist heute am ehesten korrekt?",
    options: [
      { id: "a", label: "Sie ist als allgemeine Intelligenz nicht real verfügbar." },
      { id: "b", label: "Sie ist Standard in jedem Klassenzimmer." },
      { id: "c", label: "Sie ist identisch mit einem Spam-Filter." },
    ],
    correctOptionId: "a",
    explanation: "Starke KI bleibt hypothetisch.",
  },
  {
    id: "fin-mix-2",
    moduleId: "m3",
    prompt: "Warum sind Untertitel bei Videos ein Barriere-Thema?",
    options: [
      { id: "a", label: "Weil sie Zugang für hörgeschädigte und viele Lernkontexte verbessern." },
      { id: "b", label: "Weil sie nur ästhetisch sind." },
      { id: "c", label: "Weil sie Videos verlangsamen." },
    ],
    correctOptionId: "a",
    explanation: "Teilhabe und Verständlichkeit stehen im Mittelpunkt.",
  },
  {
    id: "fin-mix-3",
    moduleId: "m2",
    prompt: "Warum sollte KI im Unterricht oft als Ergänzung gedacht werden?",
    options: [
      { id: "a", label: "Weil Begleitung, Aufsicht und didaktische Verantwortung bleiben." },
      { id: "b", label: "Weil Lehrkräfte dann entbehrlich sind." },
      { id: "c", label: "Weil KI nie Fehler macht." },
    ],
    correctOptionId: "a",
    explanation: "Menschliche Verantwortung bleibt.",
  },
];
