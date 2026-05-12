import type { SelfCheckQuestion } from "./types";

export const module3SelfChecksByChapter: Record<string, SelfCheckQuestion[]> = {
  "m3-einleitung-katalog": [
    {
      id: "m3-i1",
      prompt: "Warum können Kriterienkataloge die Praxis im Klassenzimmer nur begrenzt abbilden?",
      options: [
        { id: "a", label: "Weil sie oft produktorientiert sind und wenig über Lernerfolge in realer Nutzung aussagen." },
        { id: "b", label: "Weil sie immer standardisiert von der EU vorgegeben sind." },
        { id: "c", label: "Weil sie nur für Printmedien gelten." },
      ],
      correctOptionId: "a",
      explanation: "Kataloge strukturieren – empirische Wirksamkeit zeigt sich vor Ort.",
    },
    {
      id: "m3-i2",
      prompt: "Worauf beziehen sich K.O.-Kriterien in diesem Modul?",
      options: [
        { id: "a", label: "Ausschluss der Plattform als geeignetes Bildungsmedium, wenn sie verletzt werden." },
        { id: "b", label: "Nur auf freiwillige Empfehlungen ohne Konsequenzen." },
        { id: "c", label: "Ausschließlich auf Marketingaussagen." },
      ],
      correctOptionId: "a",
      explanation: "K.O. meint: bei Verstoß ist die Plattform für den Einsatz typischerweise ungeeignet.",
    },
  ],
  "m3-kat1": [
    {
      id: "m3-k1a",
      prompt: "Warum ist DSGVO-Konformität im Schulbereich oft ein K.O.-Thema?",
      options: [
        { id: "a", label: "Weil unrechtmäßige Verarbeitung Grundrechte verletzen und institutionell riskant ist." },
        { id: "b", label: "Weil die DSGVO nur für Privatpersonen gilt." },
        { id: "c", label: "Weil Schulen keine personenbezogenen Daten verarbeiten." },
      ],
      correctOptionId: "a",
      explanation: "Lernende hinterlassen oft umfangreiche Datenspuren.",
    },
    {
      id: "m3-k1b",
      prompt: "Was fordert die Transparenz zum KI-Modell im Sinne des Moduls?",
      options: [
        { id: "a", label: "Nachvollziehbarkeit von Modell, Datenflüssen und algorithmischen Entscheidungen – im AI-Act-Kontext." },
        { id: "b", label: "Dass der Quellcode öffentlich auf GitHub liegen muss." },
        { id: "c", label: "Dass nur kostenlose Modelle erlaubt sind." },
      ],
      correctOptionId: "a",
      explanation: "Transparenz- und Dokumentationspflichten hängen vom Risiko und Produkttyp ab.",
    },
  ],
  "m3-kat2": [
    {
      id: "m3-k2a",
      prompt: "Warum sind Verschlüsselung und dokumentierte Sicherheitsmaßnahmen K.O.-relevant?",
      options: [
        { id: "a", label: "Weil unzureichende Sicherheit Datenpannen und rechtliche Folgen begünstigen kann." },
        { id: "b", label: "Weil Verschlüsselung nur das Passwort-Wortfeld meint." },
        { id: "c", label: "Weil Sicherheit nur die Ladezeit beeinflusst." },
      ],
      correctOptionId: "a",
      explanation: "Schutz von personenbezogenen und sensiblen Daten ist zentral.",
    },
  ],
  "m3-kat3": [
    {
      id: "m3-k3a",
      prompt: "Warum ist „Navigation & Orientierung“ als K.O.-Kriterium formuliert?",
      options: [
        { id: "a", label: "Weil unintuitive Systeme trotz Funktionsfülle im Unterricht oft scheitern." },
        { id: "b", label: "Weil Navigation nur das Logo betrifft." },
        { id: "c", label: "Weil Usability nur für Erwachsenenbildung gilt." },
      ],
      correctOptionId: "a",
      explanation: "Selbsterklärende Oberflächen sind im schulischen Kontext besonders wichtig.",
    },
  ],
  "m3-kat4": [
    {
      id: "m3-k4a",
      prompt: "Warum wird WCAG-Konformität als K.O.-Kriterium genannt?",
      options: [
        { id: "a", label: "Weil barrierefreier Zugang eine Voraussetzung für Teilhabe und oft Rechtspflicht ist." },
        { id: "b", label: "Weil WCAG nur freiwillige Design-Tipps sind." },
        { id: "c", label: "Weil Barrierefreiheit nur Bildschirmfarben meint." },
      ],
      correctOptionId: "a",
      explanation: "EU-Richtlinien und gute Praxis verlangen barrierefreie Angebote.",
    },
  ],
  "m3-kat5": [
    {
      id: "m3-k5a",
      prompt: "Was meint „Kostentransparent“ als K.O.-Kriterium?",
      options: [
        { id: "a", label: "Klare, nachvollziehbare Preis- und Lizenzmodelle ohne versteckte Zusatzkosten." },
        { id: "b", label: "Dass alle Tools kostenlos sein müssen." },
        { id: "c", label: "Dass Werbung immer erlaubt ist." },
      ],
      correctOptionId: "a",
      explanation: "Transparente Kosten und nachvollziehbare Abos sind für Schulen planbar.",
    },
  ],
  "m3-kat6": [
    {
      id: "m3-k6a",
      prompt: "Warum ist „Inhaltsverwaltung durch Lehrkräfte“ ein K.O.-Kriterium?",
      options: [
        { id: "a", label: "Weil pädagogische Kontrolle über Material und Aufgaben für Unterricht unverzichtbar ist." },
        { id: "b", label: "Weil Lehrkräfte keine Inhalte anpassen dürfen." },
        { id: "c", label: "Weil nur Schüler*innen Inhalte hochladen sollen." },
      ],
      correctOptionId: "a",
      explanation: "Ohne Steuerung durch Lehrende fehlt curriculare und rechtliche Verantwortung.",
    },
  ],
  "m3-kat7": [
    {
      id: "m3-k7a",
      prompt: "Warum ist ethische Governance-Dokumentation ein K.O.-Kriterium?",
      options: [
        { id: "a", label: "Weil nachvollziehbare ethische Leitlinien und Verantwortlichkeiten für KI-Einsatz nötig sind." },
        { id: "b", label: "Weil Ethik nur Marketing ist." },
        { id: "c", label: "Weil Dokumentation den Unterricht ersetzt." },
      ],
      correctOptionId: "a",
      explanation: "Governance schafft Vertrauen und klare Zuständigkeiten.",
    },
  ],
  "m3-checkliste-dokument": [
    {
      id: "m3-chkdoc",
      prompt: "Wofür eignet sich die tabellarische Schnellbewertung im Handbuch besonders?",
      options: [
        { id: "a", label: "Für einen ersten Überblick und dokumentierte Teamentscheidungen – nicht als Ersatz für Pilotierung." },
        { id: "b", label: "Als alleiniger Nachweis über Lernerfolg ohne Unterrichtsbeobachtung." },
        { id: "c", label: "Nur für die Bewertung von Hardware." },
      ],
      correctOptionId: "a",
      explanation: "Checklisten strukturieren – Praxisvalidierung bleibt wichtig.",
    },
  ],
  "m3-checkliste-interaktiv": [
    {
      id: "m3-chkint",
      prompt: "Wann solltest du bei einer Schulplattform besonders vorsichtig sein?",
      options: [
        { id: "a", label: "Wenn K.O.-Kriterien zu Datenschutz, Sicherheit oder Transparenz unklar oder offensichtlich verletzt sind." },
        { id: "b", label: "Wenn die Plattform eine schöne Farbe hat." },
        { id: "c", label: "Wenn die Plattform kostenlos ist – dann ist sie immer unkritisch." },
      ],
      correctOptionId: "a",
      explanation: "Rechtliche und sicherheitsrelevante Unklarheiten sind oft Stop-Signale.",
    },
  ],
  "m3-quellen": [],
};
