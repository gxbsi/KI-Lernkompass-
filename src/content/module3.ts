import type { LearningModule } from "./types";

export const module3: LearningModule = {
  id: "m3",
  shortTitle: "Modul 3",
  title: "Analysekriterien für KI-(Lern)plattformen",
  subtitle: "Kriterienkatalog, K.O.-Kriterien und eine praxisnahe Checkliste.",
  chapters: [
    {
      id: "m3-einstieg",
      title: "Worauf muss ich achten? (Einstieg)",
      summary: "Warum Kriterienkataloge helfen – und wo ihre Grenzen liegen.",
      bodyMd: `
KI-gestützte Lernplattformen können **individuell**, **zeitlich flexibel** und **motivierend** wirken – bringen aber auch Risiken mit: Datenschutz, unklare Modelle, ungleiche Zugänge, **didaktische Verengung** durch UI-Logik oder **Barriere** durch schlechte Bedienbarkeit.

**Kriterienkataloge** helfen, Auswahl und Einsatz **systematisch** zu begründen. Gleichzeitig haben sie Grenzen: Sie sagen selten, ob Lernende in *eurer konkreten* Klasse nachhaltig lernen – dafür braucht es **Praxis**, **Beobachtung** und **Iteration**.

Dieses Modul führt in **K.O.-Kriterien** (Ausschluss bei Nicht-Erfüllung) und **weitere Bewertungsdimensionen** ein – angelehnt an eure Quelltexte (u. a. Mah/Torner, Isaifan et al., Schulmeister, UNESCO/W3C-Bezüge in der Literaturbasis).

## Leitfragen (Fragenkatalog)

- **Zweck:** Welches Lernziel verfolgt ihr – und welche Funktion muss das Tool *wirklich* erfüllen?
- **Daten:** Welche Daten entstehen – und dürfen sie in dieser Form verarbeitet werden?
- **Risiko:** Bewertet, empfiehlt oder sortiert die KI Personen oder Lernwege?
- **Inklusion:** Ist die Nutzung für alle Lerngruppen **gleichermaßen** möglich?
- **Kosten:** Trägt das kostenlose Angebot versteckte Kosten (Werbung, Tracking, fehlende Features)?

> Nutze anschließend die **interaktive Checkliste** auf der letzten Seite dieses Moduls als Arbeitsinstrument.
`,
      selfChecks: [
        {
          id: "m3-i1",
          prompt: "Warum können Kriterienkataloge trotz Nutzen die „Realität im Klassenzimmer“ nur begrenzt abbilden?",
          options: [
            { id: "a", label: "Weil sie oft produkt- und merkmalsorientiert sind, nicht empirisch eure Lerngruppe abbilden." },
            { id: "b", label: "Weil sie immer automatisch Lernerfolg garantieren." },
            { id: "c", label: "Weil sie nur für Printmedien gelten." },
          ],
          correctOptionId: "a",
          explanation:
            "Kataloge strukturieren Entscheidungen – echte Wirksamkeit zeigt sich in Unterricht und Begleitung.",
        },
      ],
    },
    {
      id: "m3-katalog-recht",
      title: "Kategorie 1: Datenschutz & Recht (mit K.O.-Kriterien)",
      summary: "DSGVO, Serverstandort, Minimierung, Minderjährige, Transparenz / AI Act.",
      bodyMd: `
## K.O.-Logik

**K.O.-Kriterien** bedeuten: Wenn sie **nicht** erfüllt sind, ist eine Plattform für den **europäischen Bildungskontext** oft **nicht** verantwortbar einsetzbar – zumindest nicht ohne klare rechtliche Klärung und institutionelle Absicherung.

### 1.1 DSGVO-Konformität & Datenerhebung (K.O.)

Personenbezogene Daten müssen **rechtskonform** verarbeitet werden: Zwecke, Datenarten, ggf. Drittland, Speicherdauer, Rechte (Auskunft, Berichtigung, Löschung …). **Wo nachschauen?** Datenschutzerklärung, Impressum, Anbieter*innen.

### 1.2 Serverstandort & Speicherung (K.O.)

**Transparenz**, wo Daten liegen. Außerhalb der EU: typischerweise **AV-Vertrag** und zusätzliche Vorsicht – besonders bei schulischen Daten.

### 1.3 Datensparsamkeit / Datenminimierung (K.O.)

Nur das erheben, was für den Zweck **nötig** ist – **keine** „Vorratsdatensammlung“ ohne sachlichen Grund.

### 1.4 Mindestalter & Einwilligung (K.O. im Schul-Kontext)

Klare Regeln für Minderjährige: **Einwilligungen**, Abmeldung, nachvollziehbare Prozesse. (In Erwachsenenbildung kann das anders gewichtet sein.)

### 1.5 Transparenz des KI-Modells & EU AI Act (K.O.-Bezug)

Nachvollziehbarkeit: welches Modell, welche Daten für Personalisierung/Bewertung, welche Risikoeinordnung/Dokumentation – je nach Anwendung und Risiko.

| K.O.-Thema | Kurzsignal „rot“ |
|------------|------------------|
| DSGVO | unklare Zwecke, fehlende Rechte, dubiose Weitergabe |
| Server/AV | Drittland ohne klare Vereinbarung |
| Minimierung | unnötige Profile, permanente Überwachung |
| Minderjährige | keine klaren Consent-Prozesse |
| Transparenz | Blackbox-Bewertung ohne Erklärung |
`,
      selfChecks: [
        {
          id: "m3-kr1",
          prompt: "Warum ist DSGVO-Konformität im Schulbereich oft ein K.O.-Thema?",
          options: [
            { id: "a", label: "Weil unrechtmäßige Verarbeitung Grundrechte verletzen und institutionell riskant ist." },
            { id: "b", label: "Weil die DSGVO nur für Privatpersonen gilt." },
            { id: "c", label: "Weil Schulen keine personenbezogenen Daten verarbeiten." },
          ],
          correctOptionId: "a",
          explanation:
            "Lernende hinterlassen oft umfangreiche Datenspuren – Rechtskonformität ist deshalb zentral.",
        },
        {
          id: "m3-kr2",
          prompt: "Was beschreibt Datenminimierung?",
          options: [
            { id: "a", label: "So wenig personenbezogene Daten wie möglich für den Zweck." },
            { id: "b", label: "So viele Daten wie möglich speichern, um später zu analysieren." },
            { id: "c", label: "Nur die Mindestanzahl an Schüler*innen pro Klasse." },
          ],
          correctOptionId: "a",
          explanation:
            "Minimierung reduziert Risiken und ist ein DSGVO-Grundsatz.",
        },
      ],
    },
    {
      id: "m3-weitere-kriterien",
      title: "Weitere Kriterien: Technik, UX, Barrierefreiheit, Kosten, Funktion, Didaktik",
      summary: "Die sechs Bewertungsdimensionen aus eurer Modulübersicht – komprimiert als Arbeitsraster.",
      bodyMd: `
## Technische Details

- Stabilität, **Performance**, **Wartung**, **Schnittstellen** (Export), **Sicherheit** (Updates)
- Nachvollziehbarkeit, welche **KI-Funktionen** aktiv sind und welche Daten sie nutzen

## Benutzerfreundlichkeit

- **Induktivität** der Oberfläche: erkenne ich, was als Nächstes zu tun ist?
- **Einarbeitungsaufwand**: braucht es Schulungen – und sind Tutorials gut?
- **Mobile Nutzbarkeit**: passt es zu euren Geräten?
- **Hilfen**: Glossar, Beispiele, Fehlermeldungen verständlich?

## Barrierefreiheit

- **Screenreader**, Tastatur, Fokusmanagement
- **Untertitel/Transkripte** bei Videos
- **Kontrast**, Schriftgrößen, einfache Sprache wo nötig
- **Sprachen** passend zur Gruppe

## Kostenfreies Angebot

- Umfang der **Free-Tier**-Funktionen, Limits, **Werbung**, **Paywalls** mitten im Lernpfad

## Funktion & Adaptivität

- Passen Funktionen zu **Lernzielen** und **Sozialformen**?
- **Personalisierung**: steuerbar, erklärbar, abschaltbar?

## Didaktische Qualität

- Fördert das Tool **Verstehen**, **Diskurs**, **Metakognition** – oder primär schnelles Raten?
- **Feedback**: formativ, nachvollziehbar, nicht reduktionistisch

> Kombiniere diese Dimensionen mit der **Checkliste** (nächstes Kapitel) und dokumentiert eure Entscheidung in 5 Sätzen – das ist oft wertvoller als „Punkte sammeln“.
`,
      selfChecks: [
        {
          id: "m3-w1",
          prompt: "Welches Kriterium gehört eindeutig zu Barrierefreiheit?",
          options: [
            { id: "a", label: "Tastaturbedienung ohne Maus." },
            { id: "b", label: "Serverstandort in einem bestimmten Land." },
            { id: "c", label: "Anzahl der Marketing-Emails des Anbieters." },
          ],
          correctOptionId: "a",
          explanation:
            "Barrierefreiheit betrifft Teilhabe an der UI – Tastatur und Screenreader sind typische Maßstäbe.",
        },
        {
          id: "m3-w2",
          prompt: "Was ist ein didaktisches Warnsignal?",
          options: [
            { id: "a", label: "Das Tool reduziert komplexes Denken auf schnelles Raten ohne Begründung." },
            { id: "b", label: "Das Tool bietet mehrere Sprachen an." },
            { id: "c", label: "Das Tool hat ein Impressum." },
          ],
          correctOptionId: "a",
          explanation:
            "Didaktische Qualität hängt daran, ob Lernprozesse sinnvoll unterstützt werden – nicht nur ob es „funktioniert“.",
        },
        {
          id: "m3-w3",
          prompt: "Warum ist „Free-Tier + Werbung“ oft kritisch für Schulen?",
          options: [
            { id: "a", label: "Weil Werbung/Tracking Lernkontexte stören und datenschutzrechtlich riskant sein kann." },
            { id: "b", label: "Weil kostenlose Angebote immer besser sind." },
            { id: "c", label: "Weil Werbung automatisch didaktisch wertvoll ist." },
          ],
          correctOptionId: "a",
          explanation:
            "Wirtschaftlichkeit des Anbieters kann mit Schutz und Konzentration kollidieren.",
        },
      ],
    },
    {
      id: "m3-checkliste-ui",
      title: "Interaktive Checkliste",
      summary: "Hake Punkte ab – der Fortschritt wird lokal in deinem Browser gespeichert.",
      bodyMd: `
Nutze die Checkliste als **Spaziergang** durch eine Plattform, die du bewerten willst. Wenn ein **K.O.-Thema** aus Kategorie 1 unsicher ist: **stoppen** und rechtliche/institutionelle Klärung einholen.

Die Checkboxen findest du direkt unter diesem Text.
`,
      selfChecks: [
        {
          id: "m3-chk-meta",
          prompt: "Wann solltest du bei einer Schulplattform besonders vorsichtig sein?",
          options: [
            { id: "a", label: "Wenn K.O.-Kriterien zu Datenschutz/Transparenz unklar oder offensichtlich verletzt sind." },
            { id: "b", label: "Wenn die Plattform eine schöne Farbe hat." },
            { id: "c", label: "Wenn die Plattform kostenlos ist – dann ist sie immer unkritisch." },
          ],
          correctOptionId: "a",
          explanation:
            "Rechtliche und sicherheitsrelevante Unklarheiten sind oft „Stop“-Signale – nicht wegdiskutieren.",
        },
      ],
    },
  ],
};
