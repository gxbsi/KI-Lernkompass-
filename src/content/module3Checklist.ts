export type ChecklistCategory = {
  id: string;
  title: string;
  items: { id: string; text: string }[];
};

/**
 * Vollständige Schnell-Checkliste aus dem Handbuch „Modul 3“ (tabellarische Kriterien),
 * angepasst an die im Dokument genannten Nummern und K.O.-Markierungen.
 */
export const module3ChecklistCategories: ChecklistCategory[] = [
  {
    id: "cl-cat1",
    title: "Kategorie 1: Datenschutz & Recht",
    items: [
      { id: "cl-1-1", text: "1.1 DSGVO-Konformität & Datenerhebung (K.O.)" },
      { id: "cl-1-2", text: "1.2 Serverstandort & Datenspeicherung (K.O.)" },
      { id: "cl-1-3", text: "1.3 Datensparsamkeit / Datenminimierung (K.O.)" },
      { id: "cl-1-4", text: "1.4 Mindestalter & Einwilligungsmanagement (K.O.)" },
      { id: "cl-1-5", text: "1.5 Transparenz des KI-Modells & EU AI Act (K.O.)" },
    ],
  },
  {
    id: "cl-cat2",
    title: "Kategorie 2: Technische Grundvoraussetzungen",
    items: [
      { id: "cl-2-1", text: "2.1 Datenverschlüsselung & Sicherheit (K.O.)" },
      { id: "cl-2-2", text: "2.2 Gerätekompatibilität & Bandbreitentoleranz" },
      { id: "cl-2-3", text: "2.3 Technischer Support & Wartung" },
    ],
  },
  {
    id: "cl-cat3",
    title: "Kategorie 3: Benutzerfreundlichkeit (Usability)",
    items: [
      { id: "cl-3-1", text: "3.1 Navigation & Orientierung (K.O.)" },
      { id: "cl-3-2", text: "3.2 Schulungsaufwand & Einarbeitungszeit" },
      { id: "cl-3-3", text: "3.3 Rollenverteilung & Funktion für Lehrkräfte" },
      { id: "cl-3-4", text: "3.4 Responsives Design" },
    ],
  },
  {
    id: "cl-cat4",
    title: "Kategorie 4: Barrierefreiheit & Inklusion",
    items: [
      { id: "cl-4-1", text: "4.1 WCAG-Konformität (K.O.)" },
      { id: "cl-4-2", text: "4.2 Mehrsprachigkeit" },
      { id: "cl-4-3", text: "4.3 Differenzierung nach Lernbedürfnissen" },
    ],
  },
  {
    id: "cl-cat5",
    title: "Kategorie 5: Kosten",
    items: [
      { id: "cl-5-1", text: "5.1 Kostentransparent (K.O.)" },
      { id: "cl-5-2", text: "5.2 Kostenlose Version" },
      { id: "cl-5-3", text: "5.3 Verfügbarkeit einer Testversion" },
      { id: "cl-5-4", text: "5.4 Nachhaltigkeit, Betriebskontinuität & Umgang mit Dekommissionierung" },
    ],
  },
  {
    id: "cl-cat6",
    title: "Kategorie 6: Didaktik, Adaptivität & KI-Funktion",
    items: [
      { id: "cl-6-1", text: "6.1 Inhaltsverwaltung durch Lehrkräfte (K.O.)" },
      { id: "cl-6-2", text: "6.2 Qualität der adaptiven Lernfunktion (K.O.)" },
      { id: "cl-6-3", text: "6.3 Nachvollziehbarkeit & Qualität von Feedback (K.O.)" },
      { id: "cl-6-4", text: "6.4 Kommunikations- & Kollaborationstools" },
      { id: "cl-6-5", text: "6.5 Evidenzbasierung der Plattformwirksamkeit" },
    ],
  },
  {
    id: "cl-cat7",
    title: "Kategorie 7: Ethische Aspekte & Transparenz",
    items: [
      { id: "cl-7-1", text: "7.1 Ethische Governance-Dokumentation (K.O.)" },
      { id: "cl-7-2", text: "7.2 Nicht-Diskriminierung durch KI-Algorithmen (K.O.)" },
      { id: "cl-7-3", text: "7.3 Menschliche Aufsicht und Korrigierbarkeit" },
      { id: "cl-7-4", text: "7.4 Transparenz des KI-Einsatzes" },
      { id: "cl-7-5", text: "7.5 Externe Evaluation" },
      { id: "cl-7-6", text: "Link zur Umfrage (falls im Projekt vorgesehen) – Zugang dokumentieren" },
    ],
  },
];
