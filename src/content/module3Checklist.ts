export type ChecklistCategory = {
  id: string;
  title: string;
  items: { id: string; text: string }[];
};

/** Kurz-Checkliste „Worauf muss ich achten?“ – angelehnt an Modul-3-Kriterienkatalog. */
export const module3ChecklistCategories: ChecklistCategory[] = [
  {
    id: "cat-recht",
    title: "Datenschutz & Recht",
    items: [
      { id: "m3-chk-dsgvo", text: "Datenschutzerklärung: Zwecke, Datenarten, Speicherdauer, Rechte nachvollziehbar?" },
      { id: "m3-chk-server", text: "Serverstandort / Drittland: transparent? AV-Vertrag nötig?" },
      { id: "m3-chk-min", text: "Datenminimierung: werden unnötige Daten erhoben?" },
      { id: "m3-chk-minderjaehrige", text: "Mindestalter / Einwilligung: Prozesse für Minderjährige klar?" },
      { id: "m3-chk-ai-act", text: "Transparenz zum Modell / Risiko: Hinweise zum Einsatz & AI Act-Kontext?" },
    ],
  },
  {
    id: "cat-tech",
    title: "Technik & Betrieb",
    items: [
      { id: "m3-chk-stabilitaet", text: "Stabilität, Performance, Offline-Fallbacks für den Einsatzort?" },
      { id: "m3-chk-export", text: "Export/Portabilität: können Inhalte/Ergebnisse sicher mitgenommen werden?" },
      { id: "m3-chk-support", text: "Support, Doku, Statusseite: erreichbar und verständlich?" },
    ],
  },
  {
    id: "cat-ux",
    title: "Benutzerfreundlichkeit",
    items: [
      { id: "m3-chk-induktiv", text: "Oberfläche induktiv: erkenne ich nächste Schritte ohne lange Suche?" },
      { id: "m3-chk-einarbeitung", text: "Einarbeitungsaufwand: angemessene Tutorials / Onboarding?" },
      { id: "m3-chk-mobile", text: "Mobile Nutzbarkeit: funktioniert es auf Tablets/Smartphones?" },
    ],
  },
  {
    id: "cat-a11y",
    title: "Barrierefreiheit",
    items: [
      { id: "m3-chk-screenreader", text: "Screenreader: semantische Struktur, Alternativtexte?" },
      { id: "m3-chk-untertitel", text: "Videos: Untertitel / Transkripte verfügbar?" },
      { id: "m3-chk-kontrast", text: "Kontrast & Schrift: lesbar und anpassbar?" },
      { id: "m3-chk-tastatur", text: "Tastaturbedienung: ohne Maus nutzbar?" },
      { id: "m3-chk-sprachen", text: "Sprachen: passend zur Lerngruppe?" },
    ],
  },
  {
    id: "cat-kosten",
    title: "Kosten & Werbung",
    items: [
      { id: "m3-chk-free", text: "Kostenlose Version: welcher Funktionsumfang? zeitliche Limits?" },
      { id: "m3-chk-ads", text: "Werbung / Tracking: für Schule akzeptabel?" },
    ],
  },
  {
    id: "cat-funktion",
    title: "Funktion & Adaptivität",
    items: [
      { id: "m3-chk-person", text: "Personalisierung: nachvollziehbar und abschaltbar?" },
      { id: "m3-chk-did-fun", text: "Funktionen passen zu Aufgabenformaten (Gruppe, Individual, Projekt)?" },
    ],
  },
  {
    id: "cat-didaktik",
    title: "Didaktische Qualität",
    items: [
      { id: "m3-chk-lernmodell", text: "Implizites Lernmodell: fördert es Verstehen statt nur Drill?" },
      { id: "m3-chk-feedback", text: "Feedbackqualität: begründend, lernförderlich, nicht nur richtig/falsch?" },
      { id: "m3-chk-mediendidaktik", text: "Medienmix: Text/Bild/Audio sinnvoll kombinierbar?" },
    ],
  },
];
