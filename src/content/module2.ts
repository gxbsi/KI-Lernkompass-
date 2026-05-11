import type { LearningModule } from "./types";

export const module2: LearningModule = {
  id: "m2",
  shortTitle: "Modul 2",
  title: "Lernplattformarten & Nutzung",
  subtitle: "Orientierungskompass: Chatbots, Medien, Quiz & Lernplanung – verantwortungsvoll entscheiden.",
  chapters: [
    {
      id: "m2-einleitung-kompass",
      title: "Einleitung & der Orientierungskompass",
      summary: "KI als didaktische Ergänzung – und warum Werkzeugwahl pädagogische Folgen hat.",
      bodyMd: `
KI im Bildungsbereich ist weniger als **Ersatz** für Lehrkräfte, sondern häufig als **Ergänzung** zu Präsenzunterricht und begleiteten Lernsettings zu denken. Gleichzeitig wächst die **Tool-Vielfalt** stark an – mit unterschiedlichen Qualitäten, Datenschutzprofilen und didaktischen Implikationen.

Der **Orientierungskompass** hilft, Auswahlentscheidungen **systematischer** zu treffen: Nicht „das neueste Tool“, sondern **Passung zu Lernzielen**, **Rechtssicherheit**, **Barrierefreiheit** und **didaktische Qualität** stehen im Zentrum.

> Die folgenden Folienvisualisierungen stammen aus der Präsentation **„The AI Teaching Compass“** und ergänzen die Textkapitel.

In der Praxis geht es oft um vier große Werkzeugfamilien – jeweils mit eigenen Chancen und Risiken:

1. **Textgenerierende Chatbots**
2. **Bild- und Videogenerierung**
3. **Quiz- und Testwerkzeuge**
4. **Lernplanung / Lernbegleitung**

Die nächsten Kapitel führen dich durch diese Bereiche – kompakt, mit Self-Checks und einem Blick auf typische Fehlentscheidungen.
`,
      showCompassGallery: true,
      selfChecks: [
        {
          id: "m2-e1",
          prompt: "Warum ist die Wahl einer Lernplattform auch eine pädagogische Entscheidung?",
          options: [
            { id: "a", label: "Weil Plattformen oft ein implizites Lernmodell transportieren und Aktivitäten lenken." },
            { id: "b", label: "Weil alle Plattformen technisch identisch sind." },
            { id: "c", label: "Weil pädagogische Entscheidungen nur Schüler*innen betreffen." },
          ],
          correctOptionId: "a",
          explanation:
            "UI, Feedback-Logik und Aufgabenformate steuern, was leicht und was schwer ist – das wirkt auf Lernwege.",
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
          explanation:
            "Ergänzung statt Ersatz: Verantwortung, Prüfung und Begleitung bleiben zentral.",
        },
      ],
    },
    {
      id: "m2-chatbots",
      title: "KI-Chatbots (textgenerierend)",
      summary: "Hausübungen, Feedback, Sokratik – und die Gegenmaßnahmen: Prüfen, zitieren, Grenzen setzen.",
      bodyMd: `
Text-KI kann **Brainstorming**, **Strukturieren**, **Vereinfachen**, **Übersetzen** oder **Übungsaufgaben** unterstützen. Risiken sind u. a. **Halluzinationen**, **Plagiate**, **Datenschutz** (Eingaben können gespeichert oder weiterverwendet werden) und **unfaire Vorteile**, wenn nicht alle Zugänge gleich sind.

### Didaktische Leitlinien (praxisnah)

- **Lernziel klar machen:** Was soll *heute* geübt werden – Schreiben, Recherchieren, Argumentieren?
- **Quellenkultur:** KI-Text ist kein Beleg; **Belege** und **Zitation** bleiben Pflicht.
- **Transparenz:** Wenn KI genutzt wird: **wo** und **wie** – damit Bewertung fair bleibt.
- **Aufsicht:** gerade bei Minderjährigen **Institutionenrichtlinien** beachten.

> Chatbots sind besonders verfügbar – deshalb steigt die Gefahr von „stillen“ Nutzungsmustern ohne Reflexion.
`,
      selfChecks: [
        {
          id: "m2-c1",
          prompt: "Welches Risiko ist bei LLMs für den Unterricht besonders typisch?",
          options: [
            { id: "a", label: "Plausible, aber nicht verlässlich belegte Aussagen (Halluzinationen)." },
            { id: "b", label: "Dass LLMs immer nur offline arbeiten." },
            { id: "c", label: "Dass LLMs keine Texte erzeugen können." },
          ],
          correctOptionId: "a",
          explanation:
            "Deswegen sind Prüfen, Belege und didaktische Einbettung zentral.",
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
          explanation:
            "Schon Namen, Noten oder sensible Themen können schutzwürdig sein.",
        },
      ],
    },
    {
      id: "m2-bild-video",
      title: "Bild- und Videogenerierung",
      summary: "Authentizität, Urheberrecht, Deepfakes – was Lehrende im Blick behalten sollten.",
      bodyMd: `
Bild- und Videomodelle können **Visualisierungen**, **Varianten** und **Übungsmaterial** erzeugen – können aber auch **Irreführung** begünstigen (z. B. „Beweisfotos“) oder **Urheberrechte** und **Persönlichkeitsrechte** verletzen.

### Checkpunkte

- **Echtheit / Quelle:** Ist das Medium als KI-Produktion erkennbar und didaktisch eingeordnet?
- **Personen:** Keine realen Personen ohne Einwilligung nachstellen; auf **Schutz** achten.
- **Stilbrüche:** Generierte Medien können Stereotypen reproduzieren – **kritische Bildbetrachtung** üben.

> Kombiniere generierte Medien mit **analoger** oder **authentischer** Quellenarbeit, damit Medienkompetenz nicht schrumpft.
`,
      selfChecks: [
        {
          id: "m2-b1",
          prompt: "Welches Thema ist bei KI-Bildern mit realen Personen besonders sensibel?",
          options: [
            { id: "a", label: "Persönlichkeitsrechte und Einwilligung." },
            { id: "b", label: "Nur die Dateigröße." },
            { id: "c", label: "Nur die Bildschirmauflösung." },
          ],
          correctOptionId: "a",
          explanation:
            "Rechte und Schutz vor Missbrauch sind zentral – besonders in Schulsettings.",
        },
      ],
    },
    {
      id: "m2-quiz-tests",
      title: "Quiz- und Testwerkzeuge",
      summary: "Automatisiertes Feedback kann entlasten – oder falsche Sicherheit erzeugen.",
      bodyMd: `
Quiz-KI kann **Wiederholung**, **Differenzierung** und **schnelles Feedback** unterstützen. Risiken:

- **Falsche Korrektheit:** automatische Bewertung kann **Kontext** missverstehen.
- **Lernzielverfehlung:** Auswendiglernen statt **Verstehen**.
- **Datenschutz:** Ergebnisdaten können Profile erzeugen.

Gute Nutzung verbindet automatisierte Checks mit **Lehrer*innen-Feedback** und **Reflexionsfragen** („Warum ist das richtig?“).
`,
      selfChecks: [
        {
          id: "m2-q1",
          prompt: "Warum kann automatisches Feedback pädagogisch trügen?",
          options: [
            { id: "a", label: "Weil es Kontext und begründetes Denken manchmal verfehlt." },
            { id: "b", label: "Weil es immer besser ist als Lehrkräfte-Feedback." },
            { id: "c", label: "Weil Quiztools keine Daten erheben." },
          ],
          correctOptionId: "a",
          explanation:
            "Automatisierung ist hilfreich als Ergänzung – nicht als alleinige Instanz bei komplexen Kompetenzen.",
        },
      ],
    },
    {
      id: "m2-lernplan",
      title: "Lernplanerstellung & Lernbegleitung",
      summary: "Strukturhilfe ja – aber Selbststeuerung und Überforderung im Blick behalten.",
      bodyMd: `
Lernpläne können KI-gestützt **zerlegt**, **zeitlich eingeordnet** oder **alternativ** vorgeschlagen werden. Chancen: Orientierung, Motivation durch kleine Schritte. Risiken: **Überplanung**, unrealistische Zeiten, **Abhängigkeit** von Vorschlägen.

### Tipps

- Pläne als **Vorschlag** behandeln, nicht als Bewertung der Person.
- **Pausen** und **soziale** Lernformen bewusst integrieren.
- Bei Minderjährigen: **Eltern/Team** einbinden, wenn Plattformen Daten speichern.

> Modul 3 hilft dir, Plattformen anhand von Kriterien **systematisch** zu bewerten.
`,
      selfChecks: [
        {
          id: "m2-l1",
          prompt: "Was ist eine gesunde Rolle eines KI-Lernplans?",
          options: [
            { id: "a", label: "Ein Vorschlag, den Lernende kritisch anpassen und reflektieren." },
            { id: "b", label: "Ein verbindliches Urteil über die Intelligenz von Lernenden." },
            { id: "c", label: "Ein Ersatz für Unterrichtsgespräche und Aufsicht." },
          ],
          correctOptionId: "a",
          explanation:
            "Selbstregulation bleibt eine Bildungsaufgabe – KI kann strukturieren, nicht ersetzen.",
        },
      ],
    },
  ],
};
