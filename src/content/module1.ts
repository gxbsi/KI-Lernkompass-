import type { LearningModule } from "./types";

export const module1: LearningModule = {
  id: "m1",
  shortTitle: "Modul 1",
  title: "KI-Grundlagenverständnis",
  subtitle: "Was KI ist, wie sie technisch funktioniert und welche rechtlichen Rahmen gelten.",
  chapters: [
    {
      id: "m1-was-ist-ki",
      title: "Was ist Künstliche Intelligenz?",
      summary: "Begriff, Alltagsbeispiele und die Unterscheidung zwischen schwacher, starker und Super-KI.",
      bodyMd: `
Künstliche Intelligenz (**KI**) bezeichnet Computersysteme, die Aufgaben ausführen, die typischerweise menschliche Intelligenz erfordern – etwa Sprache verstehen, Muster erkennen, Entscheidungen vorbereiten oder Probleme strukturieren. Es geht dabei **nicht** um „Maschinen, die wie Menschen denken“, sondern um **mathematische Modelle**, die aus großen Datenmengen lernen und in bestimmten Bereichen sehr leistungsfähig werden können.

In der Öffentlichkeit wird KI oft mit **Chatbots** gleichgesetzt. Das ist nur ein **Teilbereich**: KI steckt auch in Suchalgorithmen, Empfehlungssystemen (z. B. Streaming), medizinischer Bildauswertung, Navigationssystemen oder Qualitätskontrolle in der Industrie.

## Arten von KI

| Art | Kurzbeschreibung | Relevanz für Schulen |
|-----|------------------|----------------------|
| **Schwache KI** (Narrow AI) | Spezialisiert auf **eine** Aufgabe; außerhalb dieses Bereichs wenig leistungsfähig. | **Praxisrelevant** – alle heute nutzbaren Werkzeuge fallen hierunter. |
| **Starke KI** (General AI) | Hypothetische **allgemeine** Intelligenz auf Menschenniveau. | Derzeit **nicht realisiert**; eher Forschungs- und Science-Fiction-Thema. |
| **Superintelligenz** | Spekulation: KI, die Menschen in **allen** Bereichen übertrifft. | **Kein reales System** – wichtig für Gespräche in der Gesellschaft, nicht für die Werkzeugwahl morgen. |

> **Merke:** Bildungs-KI ist heute immer **schwache KI**. Sie kann in ihrem Spezialgebiet beeindrucken, hat aber **kein Bewusstsein**, kein echtes „Verstehen“ und keine allgemeine Problemlösungsfähigkeit außerhalb des Trainingsziels.

## Wie „lernt“ eine KI?

KI lernt nicht wie Menschen durch Einsicht, sondern durch **statistische Auswertung großer Datenmengen** – das nennt man **Maschinelles Lernen (ML)**. Modelle werden mit sehr vielen Beispielen trainiert, damit sie Muster erkennen und neue Eingaben verarbeiten können.

**Zentral für Lehrende:** Das Verhalten hängt stark von den **Trainingsdaten** ab. Sind Daten **verzerrt** (einseitig, veraltet, unfair erfasst), übernimmt das Modell diese Verzerrung – man spricht von **Bias**. Selbst überzeugend klingende Antworten können deshalb **inhaltlich problematisch** sein.

### Typische Lernformen (Überblick)

- **Überwachtes Lernen:** Trainingsdaten enthalten gewünschte Ausgaben (z. B. Spam ja/nein). Viele Klassifikations- und Vorhersage-Modelle arbeiten so.
- **Unüberwachtes Lernen:** Das System sucht **Struktur** in Daten ohne vorgegebene Labels (z. B. Cluster).
- **Bestärkendes Lernen:** Belohnung und Bestrafung von Zwischenentscheidungen – typisch für Spielen und Steuerung.

Für den schulischen Alltag sind vor allem **überwacht trainierte** Systeme relevant, weil viele Anwendungen (z. B. Sprach- und Bildmodelle) auf ähnlichen Prinzipien fußen.
`,
      selfChecks: [
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
            "Schwache KI ist spezialisiert. Sie kann in ihrem Bereich sehr gut sein, ist aber außerhalb davon limitiert – und sie „weiß“ nicht im menschlichen Sinn.",
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
          explanation:
            "Daten sind der Rohstoff des Lernens: Was in den Daten steckt (oder fehlt), spiegelt sich in Empfehlungen, Texten und Bewertungen wider.",
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
          explanation:
            "Große Sprachmodelle sind leistungsstarke Werkzeuge der schwachen KI – aber keine allgemeine menschliche Intelligenz.",
        },
      ],
    },
    {
      id: "m1-technik",
      title: "Technische Grundlagen (kompakt)",
      summary: "Neuronale Netze, LLMs, Daten, Algorithmen – was Lehrende wirklich brauchen.",
      bodyMd: `
## Neuronale Netze und Deep Learning

Viele moderne KI-Systeme basieren auf **künstlichen neuronalen Netzen**: viele kleine Recheneinheiten, Schichten, Verbindungen, **Gewichte** werden im Training angepasst. **Deep Learning** meint besonders tiefe Netze, die komplexe Muster in Sprache, Bildern oder Audio erkennen können.

> Wichtig: Auch beeindruckende Ausgaben sind **Berechnungen** – kein menschliches Verstehen im Sinne von Bewusstsein.

## Große Sprachmodelle (LLMs)

**LLMs** werden auf sehr großen Textkorpora trainiert und können u. a. formulieren, zusammenfassen, übersetzen oder strukturieren. Bekannte Beispiele sind etwa ChatGPT, Claude oder Gemini (Stand der Diskussion: je nach Anbieter und Version).

**Halluzinationen:** LLMs können **plausibel klingende**, aber **faktisch falsche** Aussagen erzeugen, weil sie Wahrscheinlichkeiten über Sprachsequenzen modellieren – nicht eine verifizierte Wissensdatenbank „abfragen“.

## Daten als Grundlage

Ohne Daten kein Modell. **Qualität, Vielfalt und Aktualität** der Trainingsdaten beeinflussen Fairness, Sprachenabdeckung und Domänenwissen. Im Bildungsbereich entstehen außerdem **Nutzungsdaten** (Fortschritt, Interaktionen), die datenschutzrechtlich sensibel sind.

## Algorithmen und Transparenz

Algorithmen steuern, wie aus Eingaben Ausgaben werden. Viele Systeme sind für Außenstehende schwer nachvollziehbar (**Black Box**). Wenn KI **Feedback oder Empfehlungen** gibt, ist Transparenz eine **pädagogische und rechtliche** Frage – etwa im Kontext des **EU AI Act** für bestimmte Hochrisiko-Anwendungen.

## Multimodalität (kurz)

**Multimodale** Systeme kombinieren Eingaben wie Text, Bild und Audio. Für Lehrende bedeutet das: dieselben Grundrisiken (Halluzination, Daten, Fairness) – nur über mehrere Medientypen hinweg.
`,
      selfChecks: [
        {
          id: "m1-t1",
          prompt: "Was meint „Halluzination“ bei einem LLM?",
          options: [
            { id: "a", label: "Ein technischer Grafikfehler in der Benutzeroberfläche." },
            { id: "b", label: "Plausible, aber faktisch falsche oder nicht belegte Aussagen." },
            { id: "c", label: "Ein Zustand, in dem das Modell absichtlich nicht antwortet." },
          ],
          correctOptionId: "b",
          explanation:
            "Halluzinationen entstehen u. a. daraus, dass das Modell Sprache wahrscheinlich macht – nicht weil es „lügt“ im menschlichen Sinn.",
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
          explanation:
            "Daten spiegeln Welten wider: Was nicht gut vertreten ist, wird oft schlechter abgebildet oder fehleranfälliger behandelt.",
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
          explanation:
            "Transparenz und Erklärbarkeit sind wichtig, wenn Entscheidungen wirken – etwa bei Empfehlungen oder automatisiertem Feedback.",
        },
      ],
    },
    {
      id: "m1-recht",
      title: "Rechtliche Rahmenbedingungen (EU/Österreich, Überblick)",
      summary: "DSGVO und EU AI Act als Orientierung – ohne Rechtsberatung, aber mit didaktischer Pointe.",
      bodyMd: `
Dieses Kapitel ersetzt **keine Rechtsberatung**, gibt aber eine **Orientierung**, warum Datenschutz und KI-Regulierung für Schulen und Hochschulen praktisch relevant sind.

## DSGVO (Datenschutz-Grundverordnung)

Die **DSGVO** setzt europaweit Standards für die Verarbeitung **personenbezogener Daten**. Für Lernplattformen sind typischerweise wichtig:

- **Zweckbindung** und **Datenminimierung** (nur das erheben, was wirklich nötig ist)
- **Transparenz** (Informationen über Verarbeitung)
- **Rechte** von Betroffenen (Auskunft, Berichtigung, Löschung …)
- **Sicherheit** der Verarbeitung

Wenn Minderjährige betroffen sind, gelten **besonders hohe Anforderungen** – je nach Kontext und Verantwortlichkeiten von Schule, Eltern und Anbietern.

## EU AI Act (Überblick)

Der **EU AI Act** klassifiziert KI-Systeme u. a. nach **Risiko** und stellt Anforderungen an **Transparenz**, **Dokumentation** und **Menschenüberwachung** – besonders bei **Hochrisiko**-Anwendungen. Für Bildung sind vor allem Szenarien relevant, in denen KI **bewertet**, **empfiehlt** oder **Zugänge steuert** und damit **rechtlich und ethisch sensibel** wird.

## Praxisimpuls für Lehrende

Wenn Sie Tools einsetzen, lohnt sich ein **kurzer Check**: Welche Daten fließen wohin? Gibt es **Auftragsverarbeitung**? Ist der **Serverstandort** nachvollziehbar? Ist die Nutzung mit **Schulträger/IT** abgestimmt?

> Modul 3 vertieft das als **Kriterienkatalog** – hier geht es um das grobe „Warum“.
`,
      selfChecks: [
        {
          id: "m1-r1",
          prompt: "Welches Ziel verbindet die DSGVO stark mit „Datenminimierung“?",
          options: [
            { id: "a", label: "So viele Daten wie möglich zu sammeln, um Modelle zu verbessern." },
            { id: "b", label: "Nur so viele personenbezogene Daten wie nötig zu verarbeiten." },
            { id: "c", label: "Daten ausschließlich außerhalb der EU zu speichern." },
          ],
          correctOptionId: "b",
          explanation:
            "Datenminimierung reduziert Risiken und ist ein Grundprinzip – besonders bei schutzwürdigen Personengruppen.",
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
          explanation:
            "Der AI Act adressiert u. a. Transparenz und Governance – je nach Einsatzart kann das Schulen und Institutionen betreffen.",
        },
      ],
    },
    {
      id: "m1-sozio",
      title: "Optional: Sozio-ökonomische und ethische Aspekte (kurz)",
      summary: "Arbeit, Teilhabe, Abhängigkeiten – warum KI mehr als „nur ein Tool“ ist.",
      bodyMd: `
KI verändert **Arbeitsprozesse**, **Kompetenzprofile** und **Machtverteilungen** (z. B. wer Zugang hat, wer Daten besitzt, wer Standards setzt). Ethische Debatten berühren **Fairness**, **Teilhabe**, **Autonomie**, **Überwachung** und **Umweltkosten** von Rechenzentren.

Für Lehrkräfte ist hilfreich, Lernende zu befähigen, KI **kritisch** zu nutzen: Quellen prüfen, Urheber*innen achten, **Transparenz** gegenüber Lernenden wahren und **menschenzentrierte** Entscheidungen zu treffen.

> UNESCO und andere Institutionen betonen häufig **Menschenrechte**, **Inklusion** und **Governance** – passend zu digitaler Souveränität in Bildungssystemen.
`,
      selfChecks: [
        {
          id: "m1-s1",
          prompt: "Warum ist „Transparenz gegenüber Lernenden“ ethisch wichtig?",
          options: [
            { id: "a", label: "Weil Lernende einschätzen können sollen, wo KI wirkt und welche Risiken bestehen." },
            { id: "b", label: "Weil Transparenz nur Marketing ist." },
            { id: "c", label: "Weil KI im Unterricht grundsätzlich verboten sein soll." },
          ],
          correctOptionId: "a",
          explanation:
            "Informierte Nutzung und Reflexion sind Teil digitaler Kompetenz – besonders wenn KI Lernwege beeinflusst.",
        },
      ],
    },
  ],
};
