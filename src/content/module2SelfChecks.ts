import type { SelfCheckQuestion } from "./types";

export const module2SelfChecksByChapter: Record<string, SelfCheckQuestion[]> = {
  "m2-einleitung-kompass": [
    {
      id: "m2-e1",
      prompt: "Warum ist die Wahl einer Lernplattform auch eine pädagogische Entscheidung?",
      options: [
        { id: "a", label: "Weil Plattformen oft ein implizites Lernmodell transportieren und Aktivitäten lenken." },
        { id: "b", label: "Weil alle Plattformen technisch identisch sind." },
        { id: "c", label: "Weil pädagogische Entscheidungen nur Schüler*innen betreffen." },
      ],
      correctOptionId: "a",
      explanation: "UI, Feedback-Logik und Aufgabenformate steuern Lernwege.",
    },
    {
      id: "m2-e2",
      prompt: "Was ist eine sinnvolle Grundhaltung zu KI im Unterricht?",
      options: [
        { id: "a", label: "KI ersetzt vollständig Vorbereitung und Feedback von Lehrkräften." },
        { id: "b", label: "KI kann unterstützen, wenn Ziele, Aufsicht und Datenschutz klar sind." },
        { id: "c", label: "KI sollte ohne Abstimmung mit Schule/IT genutzt werden." },
      ],
      correctOptionId: "b",
      explanation: "Ergänzung statt Ersatz: Verantwortung und Begleitung bleiben zentral.",
    },
  ],
  "m2-chatbots": [
    {
      id: "m2-c1",
      prompt: "Welches Risiko ist bei LLMs für den Unterricht besonders typisch?",
      options: [
        { id: "a", label: "Plausible, aber nicht verlässlich belegte Aussagen (Halluzinationen)." },
        { id: "b", label: "Dass LLMs immer nur offline arbeiten." },
        { id: "c", label: "Dass LLMs keine Texte erzeugen können." },
      ],
      correctOptionId: "a",
      explanation: "Prüfen, Belege und Quellenkultur bleiben zentral.",
    },
    {
      id: "m2-c2",
      prompt: "Warum ist Datenschutz bei Chatbots relevant?",
      options: [
        { id: "a", label: "Weil Eingaben personenbezogene Informationen enthalten können und verarbeitet werden." },
        { id: "b", label: "Weil Datenschutz nur für Streaming-Dienste gilt." },
        { id: "c", label: "Weil Chatbots keine Daten übertragen." },
      ],
      correctOptionId: "a",
      explanation: "Schutzwürdige Inhalte können unbeabsichtigt eingegeben werden.",
    },
  ],
  "m2-bild-video": [
    {
      id: "m2-b1",
      prompt: "Welches Thema ist bei KI-Bildern mit realen Personen besonders sensibel?",
      options: [
        { id: "a", label: "Persönlichkeitsrechte und Einwilligung." },
        { id: "b", label: "Nur die Dateigröße." },
        { id: "c", label: "Nur die Bildschirmauflösung." },
      ],
      correctOptionId: "a",
      explanation: "Rechte und Schutz vor Missbrauch sind zentral.",
    },
  ],
  "m2-quiz-tests": [
    {
      id: "m2-q1",
      prompt: "Warum bleibt bei KI-Feedback die pädagogische Hoheit bei der Lehrkraft?",
      options: [
        { id: "a", label: "Weil automatisiertes Feedback fehlinterpretieren kann und didaktische Verantwortung nicht delegiert wird." },
        { id: "b", label: "Weil Lehrkräfte keine Rückmeldungen geben dürfen." },
        { id: "c", label: "Weil KI immer objektiv richtig bewertet." },
      ],
      correctOptionId: "a",
      explanation: "Das Handbuch betont finale Korrekturmöglichkeit und professionelle Einordnung.",
    },
  ],
  "m2-lernplan": [
    {
      id: "m2-l1",
      prompt: "Was ist eine gesunde Rolle von KI bei Lernplanung und Präsentation?",
      options: [
        { id: "a", label: "Strukturhilfe und Entlastung bei Routine – mit didaktischer Nachbearbeitung." },
        { id: "b", label: "Vollständiger Ersatz für Unterrichtsplanung ohne Prüfung." },
        { id: "c", label: "Zufällige Generierung ohne Abgleich mit Lehrplan." },
      ],
      correctOptionId: "a",
      explanation: "Automatisierte Decks sind Rohlinge, die pädagogisch verfeinert werden müssen.",
    },
  ],
  "m2-matrix": [
    {
      id: "m2-m1",
      prompt: "Wozu dient die Navigationsmatrix im Orientierungskompass?",
      options: [
        { id: "a", label: "Systematische Einordnung von Tools nach Dimensionen wie Didaktik, Recht oder Barrierefreiheit." },
        { id: "b", label: "Zur Speicherung von Passwörtern." },
        { id: "c", label: "Zur automatischen Benotung von Schülerarbeiten." },
      ],
      correctOptionId: "a",
      explanation: "Sie strukturiert die Bewertung entlang mehrerer Qualitätsdimensionen.",
    },
  ],
  "m2-quellen": [],
};
