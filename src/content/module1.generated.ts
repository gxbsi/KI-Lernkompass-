// AUTO-GENERATED from DOCX
export const module1GeneratedChapters: { id: string; title: string; bodyMd: string }[] = [
  {
    id: "m1-einleitung",
    title: "Zum Modul",
    bodyMd: `
Modul 1: KI-Grundlagenverständnis

Künstliche Intelligenz (KI) ist eines der prägendsten Technologiethemen unserer Zeit. Sie verändert, wie wir arbeiten, lernen, kommunizieren und Entscheidungen treffen – und sie findet zunehmend Eingang in Unterricht und Schule. Gleichzeitig herrschen in der Öffentlichkeit und auch unter Lehrenden erhebliche Unsicherheiten darüber, was KI eigentlich ist, wie sie technisch funktioniert, welche gesellschaftlichen Folgen sie hat und welche Regeln für ihren Einsatz gelten.

Dieses Modul richtet sich an Lehrkräfte aller Schulformen und Fächer, die ein solides Grundverständnis über Künstliche Intelligenz aufbauen möchten – ohne informatisches Vorwissen vorauszusetzen. Es legt das Fundament für alle weiteren Module des Handbuchs und bereitet gleichzeitig darauf vor, KI-Systeme im eigenen Unterrichtsalltag verantwortungsvoll beurteilen und einsetzen zu können.

Das Modul gliedert sich in drei Hauptbereiche: Zunächst wird geklärt, was KI ist und welche Arten von KI-Systemen es gibt. Im zweiten Teil werden grundlegende technische Konzepte erklärt, die für ein informiertes Urteil über KI-Anwendungen nötig sind. Im dritten Teil werden die wichtigsten rechtlichen Rahmenbedingungen in Österreich und der EU vorgestellt. Optional werden abschließend auch sozio-ökonomische und ethische Aspekte beleuchtet.
    `,
  },
  {
    id: "m1-was-ist-ki",
    title: "1. Was ist Künstliche Intelligenz?",
    bodyMd: `
1. Was ist Künstliche Intelligenz?

Künstliche Intelligenz bezeichnet Computersysteme, die Aufgaben ausführen, die typischerweise menschliche Intelligenz erfordern – etwa das Verstehen von Sprache, das Erkennen von Mustern, das Treffen von Entscheidungen oder das Lösen von Problemen. Es handelt sich dabei nicht um „Maschinen, die denken", sondern um mathematische Modelle, die auf Basis großer Datenmengen trainiert werden, um in bestimmten Bereichen menschenähnliche Leistungen zu erbringen (vgl. Russell/Norvig 2022).

Der Begriff KI ist ein Oberbegriff und umfasst viele verschiedene Technologien und Methoden. In der Alltagssprache wird KI oft mit sprachbasierten Systemen wie ChatGPT gleichgesetzt – das ist jedoch nur ein kleiner Teilbereich. KI findet sich auch in Suchalgorithmen, Empfehlungssystemen (z.B. Netflix, Spotify), medizinischer Diagnose, autonomen Fahrzeugen oder Überwachungssystemen (vgl. OECD 2023).

1.1 Arten von Künstlicher Intelligenz

KI-Systeme lassen sich nach ihrem Anwendungsbereich unterscheiden:

Art der KI

Beschreibung

Beispiele

Schwache KI (Narrow AI)

Spezialisiert auf eine einzelne Aufgabe; kann außerhalb dieses Bereichs nichts leisten.

ChatGPT, Spracherkennung (Siri), Bilderkennungssoftware

Starke KI (General AI)

Hypothetisches System mit allgemeiner menschenähnlicher Intelligenz; existiert derzeit nicht.

Noch nicht realisiert – nur in Wissenschaft und Science-Fiction diskutiert

Künstliche Superintelligenz

Theoretisches Konzept: KI, die menschliche Intelligenz in allen Bereichen übertrifft.

Rein spekulativ; derzeit kein reales System

Im Bildungsbereich sind ausschließlich Systeme der schwachen KI relevant. Diese können zwar innerhalb ihres Spezialgebiets beeindruckende Leistungen erbringen, haben aber kein Verständnis, kein Bewusstsein und keine allgemeine Problemlösungsfähigkeit (vgl. Russell/Norvig 2022).

1.2 Wie „lernt" eine KI?

KI-Systeme lernen nicht wie Menschen durch Erfahrung und Einsicht, sondern durch die statistische Analyse großer Datenmengen. Diesen Prozess nennt man Maschinelles Lernen (Machine Learning, ML). Dabei werden mathematische Modelle mit Millionen oder Milliarden von Datenpunkten trainiert, sodass das System Muster erkennt und zukünftige Eingaben verarbeiten kann (vgl. Goodfellow et al. 2016).

Für Lehrkräfte wichtig zu wissen: Das Verhalten eines KI-Systems ist direkt abhängig von den Daten, mit denen es trainiert wurde. Sind diese Daten einseitig, veraltet oder fehlerhaft, spiegelt sich das in den Ausgaben der KI wider – auch dann, wenn die Antworten auf den ersten Blick überzeugend wirken. Dieses Phänomen nennt man Bias (Verzerrung) und ist ein zentraler Grund, warum KI-Ausgaben kritisch hinterfragt werden müssen (vgl. UNESCO 2021).

1.3 Unterformen des maschinellen Lernens

Lernform

Beschreibung

Praxisbeispiel

Überwachtes Lernen (Supervised Learning)

Das Modell wird mit beschrifteten Beispielen trainiert (Input + erwarteter Output).

Spam-Filter: E-Mails sind als „Spam" oder „kein Spam" markiert

Unüberwachtes Lernen (Unsupervised Learning)

Das Modell findet selbst Strukturen und Muster in unbeschrifteten Daten.

Kundensegmentierung: KI gruppiert Käufer nach Verhalten

Bestärkendes Lernen (Reinforcement Learning)

Das Modell lernt durch Versuch und Irrtum; positive Ergebnisse werden belohnt.

Schachprogramme; AlphaGo

Für den schulischen Einsatz von KI ist insbesondere das überwachte Lernen relevant, da die meisten Sprachmodelle und Bildungs-KI-Systeme auf dieser Methode basieren (vgl. Goodfellow et al. 2016).
    `,
  },
  {
    id: "m1-technik",
    title: "2. Technische Details",
    bodyMd: `
2. Technische Details

Um KI-Systeme im Bildungskontext sinnvoll beurteilen zu können, benötigen Lehrkräfte kein tiefgehendes Informatikstudium – aber ein grundlegendes Verständnis zentraler technischer Konzepte. Dieses Kapitel erklärt die wichtigsten Begriffe und Technologien, die hinter modernen KI-Anwendungen stehen, auf eine praxisnahe und verständliche Weise.

2.1 Neuronale Netze und Deep Learning

Die leistungsfähigsten KI-Systeme von heute basieren auf sogenannten Künstlichen Neuronalen Netzen (KNN). Diese sind lose am Aufbau des menschlichen Gehirns angelehnt: Viele einfache Recheneinheiten (Neuronen) sind in Schichten angeordnet und miteinander verbunden. Durch Training mit großen Datenmengen werden die Gewichtungen dieser Verbindungen so angepasst, dass das Netz eine bestimmte Aufgabe gut lösen kann (vgl. LeCun et al. 2015).

Deep Learning bezeichnet neuronale Netze mit besonders vielen Schichten (daher „tief"). Sie sind in der Lage, sehr komplexe Muster zu erkennen, beispielsweise in Sprache, Bildern oder Musik. Große Sprachmodelle (Large Language Models, LLMs) wie GPT-4 oder Gemini basieren auf dieser Technologie. Obwohl die Ausgaben beeindruckend wirken können, haben diese Systeme kein echtes Verständnis des Inhalts – sie berechnen auf Basis statistischer Muster, welche Wörter wahrscheinlich aufeinander folgen (vgl. Vaswani et al. 2017).

2.2 Große Sprachmodelle (Large Language Models, LLMs)

LLMs sind KI-Systeme, die auf riesigen Textmengen trainiert wurden und dadurch in der Lage sind, kohärente, kontextbezogene Texte zu erzeugen, Fragen zu beantworten, zu übersetzen, zusammenzufassen und vieles mehr. Bekannte Beispiele sind ChatGPT (OpenAI), Claude (Anthropic) oder Gemini (Google). Sie funktionieren auf Basis des sogenannten Transformer-Modells, das 2017 entwickelt wurde (vgl. Vaswani et al. 2017).

Für Lehrkräfte zentral: LLMs können „halluzinieren", das heißt, sie generieren plausibel klingende, aber faktisch falsche Aussagen. Dieses Phänomen entsteht, weil das Modell keine Fakten „weiß", sondern Wahrscheinlichkeitsverteilungen über Wörter berechnet. Im Unterrichtseinsatz ist daher stets eine kritische Überprüfung von KI-generierten Inhalten erforderlich (vgl. Bender et al. 2021).

2.3 Daten als Grundlage von KI

Kein KI-System funktioniert ohne Daten. Daten sind der Rohstoff, aus dem KI-Modelle lernen. Die Qualität, Menge und Zusammensetzung der Trainingsdaten bestimmt direkt, wie gut – und wie gerecht – ein KI-System funktioniert. Ein Modell, das überwiegend mit englischsprachigen Texten aus westlichen Quellen trainiert wurde, wird andere Sprachen und kulturelle Perspektiven schlechter abbilden (vgl. UNESCO 2021).

Im Bildungskontext entstehen durch die Nutzung von KI-Plattformen kontinuierlich Daten über Lernende: Lernfortschritte, Fehlerprofile, Nutzungszeiten, Klickverhalten. Diese Daten werden von Plattformen verwendet, um Lerninhalte zu personalisieren, aber auch, um KI-Modelle weiterzuentwickeln. Der verantwortungsvolle Umgang mit diesen Daten ist daher nicht nur eine technische, sondern auch eine rechtliche und ethische Frage (vgl. Europäische Union 2016/2024).

2.4 Algorithmen und ihre Entscheidungen

Ein Algorithmus ist eine festgelegte Abfolge von Rechenoperationen, die ein KI-System zur Entscheidungsfindung verwendet. In KI-Systemen sind diese Algorithmen oft sehr komplex und für Außenstehende schwer nachvollziehbar – man spricht von Black-Box-Systemen. Das bedeutet: Auch wenn das Ergebnis sichtbar ist, ist der genaue Entscheidungsweg oft unklar (vgl. Pasquale 2015).

Für Lehrkräfte ist das relevant, wenn KI-Systeme Bewertungen, Empfehlungen oder Feedback geben. Wenn die Grundlage dieser Ausgaben nicht transparent gemacht wird, kann die pädagogische Verantwortung nicht wahrgenommen werden. Aus diesem Grund fordert der EU AI Act für bestimmte Hochrisiko-KI-Systeme (z.B. solche, die Lernende bewerten) eine nachvollziehbare und transparente Funktionsweise (vgl. Europäische Union 2024).

2.5 Multimodalität: KI mit Text, Bild, Ton und Video

Moderne KI-Systeme beschränken sich nicht mehr auf einen einzigen Datentyp. Multimodale Systeme können gleichzeitig Text, Bilder, Sprache und Video verarbeiten und erzeugen. Google Gemini beispielsweise kann ein Foto einer handschriftlichen Tafelzeichnung analysieren und daraus strukturierte Unterrichtsmaterialien erstellen. Diese Fähigkeit eröffnet neue Möglichkeiten für den Unterricht, stellt aber auch erhöhte Anforderungen an Datenschutz und ethischen Einsatz (vgl. OpenAI 2024).
    `,
  },
  {
    id: "m1-recht",
    title: "3. Rechtliche Aspekte",
    bodyMd: `
3. Rechtliche Aspekte

Für Lehrkräfte in Österreich sind vor allem zwei europäische Rechtsinstrumente relevant, die den Einsatz von KI im schulischen und bildungsbezogenen Umfeld regeln: die Datenschutz-Grundverordnung (DSGVO) und der EU AI Act. Beide Verordnungen haben unmittelbare Auswirkungen darauf, welche KI-Plattformen und -Tools im Unterricht rechtmäßig eingesetzt werden dürfen und welche Pflichten dabei entstehen.

3.1 Datenschutz-Grundverordnung (DSGVO)

Die DSGVO (Verordnung EU 2016/679) gilt seit 2018 in allen EU-Mitgliedstaaten, also auch in Österreich, und regelt den Umgang mit personenbezogenen Daten. Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierbare natürliche Person beziehen – also auch Name, E-Mail-Adresse, Lernverhalten oder Geräteinformationen von Schülerinnen und Schülern (vgl. Europäische Union 2016).

Bei der Nutzung von KI-Plattformen im Unterricht entstehen automatisch solche Daten. Lehrkräfte und Schulen sind daher verpflichtet zu prüfen, ob eine Plattform DSGVO-konform arbeitet. Die wichtigsten Anforderungen für den Schulbereich sind:

Daten dürfen nur für einen festgelegten Zweck verarbeitet werden (Zweckbindung).

Es dürfen nur jene Daten erhoben werden, die für den Zweck notwendig sind (Datensparsamkeit).

Minderjährige genießen besonderen Schutz; für ihre Datenverarbeitung ist in vielen Fällen eine Einwilligung der Erziehungsberechtigten erforderlich.

Daten dürfen nicht ohne weiteres in Länder außerhalb der EU übertragen werden (Drittlandtransfer).

Nutzerinnen und Nutzer haben das Recht auf Auskunft, Berichtigung und Löschung ihrer Daten.

Für Lehrkräfte bedeutet dies in der Praxis: Vor der Verwendung einer KI-Plattform im Unterricht sollte geprüft werden, ob die Datenschutzerklärung des Anbieters DSGVO-konform ist, wo die Daten gespeichert werden und ob ggf. ein Auftragsverarbeitungsvertrag (AVV) mit der Schule oder Bildungsbehörde abgeschlossen wurde (vgl. Europäische Union 2016).

3.2 EU AI Act (Verordnung EU 2024/1689)

Der EU AI Act ist die weltweit erste umfassende KI-Regulierung und trat 2024 in Kraft. Er gilt schrittweise; besonders relevante Bestimmungen gelten ab August 2026. Das Kernstück des EU AI Act ist eine risikobasierte Klassifizierung von KI-Systemen in vier Stufen (vgl. Europäische Union 2024):

Risikoklasse

Beschreibung

Beispiele im Bildungsbereich

Inakzeptables Risiko

Verboten – gefährdet grundlegende Rechte oder dient zur Manipulation.

KI-basierte soziale Bewertungssysteme von Schüler:innen

Hohes Risiko

Strenge Anforderungen an Transparenz, Dokumentation und Aufsicht. Gilt u.a. für KI in Bildung und Bewertung.

KI-Systeme zur automatischen Prüfungsbewertung, adaptive Lernplattformen mit Bewertungsfunktion

Geringes/begrenztes Risiko

Transparenzpflichten: Nutzer müssen wissen, dass sie mit einer KI interagieren.

KI-Chatbots für Lernunterstützung

Minimales Risiko

Keine besonderen Anforderungen.

KI-Spam-Filter, einfache Empfehlungssysteme

Für Schulen und Lehrkräfte besonders wichtig: KI-Systeme, die im Bildungsbereich zur Leistungsbewertung oder Lernpfadsteuerung eingesetzt werden, gelten nach EU AI Act als Hochrisiko-Systeme. Anbieter solcher Systeme müssen ab August 2026 Konformitätsdokumente vorlegen. Plattformen, die diese Anforderungen nicht erfüllen, dürfen in der EU nicht mehr eingesetzt werden (vgl. Europäische Union 2024).

3.3 Urheberrecht und KI-generierte Inhalte

Eine weiterer relevanter Rechtsbereich ist das Urheberrecht. KI-generierte Texte, Bilder oder andere Inhalte werfen neue Fragen auf: Wem gehören diese Inhalte? Können sie ohne weiteres verwendet werden? Nach österreichischem und europäischem Recht sind KI-Outputs grundsätzlich nicht urheberrechtlich geschützt, da kein menschlicher Schöpfer vorhanden ist. Allerdings können Anbieter von KI-Systemen in ihren Nutzungsbedingungen eigene Regelungen treffen (vgl. Österreichisches Urheberrechtsgesetz 1936 i.d.g.F.).

Für den Unterrichtsalltag bedeutet das: Lehrkräfte sollten die Nutzungsbedingungen von KI-Plattformen kennen und Schülerinnen und Schüler im reflektierten Umgang mit KI-generierten Inhalten schulen – insbesondere im Hinblick auf Plagiate, Zitierpflichten und eigenständiges Denken. Einige Schulen und Hochschulen entwickeln dafür bereits eigene Regelwerke und KI-Leitlinien (vgl. Österreichisches Bildungsministerium 2024).
    `,
  },
  {
    id: "m1-sozio",
    title: "4. Sozio-ökonomische und Ethische Aspekte (optional)",
    bodyMd: `
4. Sozio-ökonomische und Ethische Aspekte (optional)

Neben technischen und rechtlichen Aspekten wirft der zunehmende Einsatz von KI in Gesellschaft und Bildung weitreichende ethische und sozio-ökonomische Fragen auf. Dieser Abschnitt bietet eine Einführung in zentrale Spannungsfelder, die im Unterricht thematisiert und mit Lernenden diskutiert werden können.

4.1 Chancen und Risiken im Bildungsbereich

Chancen

Risiken

Individualisierung: KI kann Lerninhalte an das individuelle Tempo und die Bedürfnisse von Lernenden anpassen.

Datenschutzverletzungen: Sensible Lerndaten können missbraucht werden.

Entlastung: KI kann Lehrkräfte bei administrativen Aufgaben unterstützen.

Abhängigkeit: Übermäßiges Vertrauen in KI kann kritisches Denken und Eigenständigkeit verringern.

Barrierefreiheit: KI-gestützte Tools ermöglichen Lernenden mit besonderen Bedürfnissen besseren Zugang zu Inhalten.

Bildungsungleichheit: Nicht alle Lernenden haben gleichen Zugang zu KI-gestützten Lernmitteln.

Globale Vernetzung: KI ermöglicht Übersetzungen und internationale Zusammenarbeit.

Halluzinationen und Fehlinformation: Falsche KI-Outputs können zu falschen Lernschlüssen führen.

4.2 KI und Bias – Algorithmen und Diskriminierung

Weil KI-Modelle auf Daten basieren, die von Menschen erstellt wurden, können sie gesellschaftliche Vorurteile und Ungleichheiten widerspiegeln und verstärken. Man spricht von algorithmischem Bias (Verzerrung). So wurden zum Beispiel Gesichtserkennungssysteme entwickelt, die bei Menschen mit dunkler Hautfarbe deutlich fehlerhafte Ergebnisse liefern, weil die Trainingsdaten vorwiegend hellhäutige Gesichter enthielten (vgl. Buolamwini/Gebru 2018).

Im Bildungskontext bedeutet das: KI-Systeme, die Empfehlungen oder Bewertungen aussprechen, können systematisch bestimmte Lernende benachteiligen – aufgrund von Herkunft, Geschlecht, Sprache oder sozioökonomischem Hintergrund. Lehrkräfte sollten daher KI-generierte Beurteilungen stets kritisch prüfen und niemals unreflektiert übernehmen (vgl. UNESCO 2021).

4.3 Sozio-ökonomische Folgen und die Zukunft der Arbeit

KI verändert nicht nur das Lernen, sondern auch den Arbeitsmarkt. Studien gehen davon aus, dass durch KI-Automatisierung bestimmte Berufe wegfallen oder sich stark verändern werden, während gleichzeitig neue Tätigkeitsfelder entstehen. Besonders betroffen sind repetitive, regelbasierte Tätigkeiten. Kreative, soziale und komplexe Problemlösungskompetenzen werden hingegen an Bedeutung gewinnen (vgl. OECD 2023).

Für die Schule bedeutet das: Die Förderung von KI-Kompetenz, kritischem Denken, Medienkompetenz und ethischem Urteilsvermögen ist eine zentrale Bildungsaufgabe der Gegenwart. Lernende sollten nicht nur lernen, KI zu nutzen, sondern auch verstehen, wie KI funktioniert, welche Grenzen sie hat und welche gesellschaftliche Verantwortung mit ihr verbunden ist (vgl. KMK 2021).

4.4 Ethische Grundprinzipien für den KI-Einsatz

Die UNESCO hat 2021 eine globale Empfehlung für KI-Ethik verabschiedet, die als internationaler Referenzrahmen dient. Sie benennt vier Kernprinzipien, die auch für den Bildungsbereich relevant sind (vgl. UNESCO 2021):

Menschliche Würde und Autonomie: KI darf nicht gegen die Grundrechte und die Würde von Menschen eingesetzt werden.

Fairness und Nicht-Diskriminierung: KI-Systeme müssen alle Personen gleich und gerecht behandeln.

Transparenz und Erklärbarkeit: Entscheidungen von KI-Systemen müssen nachvollziehbar sein.

Verantwortlichkeit: Es muss immer klar sein, wer für die Auswirkungen eines KI-Systems verantwortlich ist.

Diese Prinzipien sind nicht nur für die Auswahl und Bewertung von KI-Plattformen relevant, sondern bieten auch einen wertvollen Rahmen für die Diskussion mit Lernenden im Unterricht – quer durch alle Fächer und Schulstufen.
    `,
  },
  {
    id: "m1-quellen",
    title: "Quellenverzeichnis",
    bodyMd: `
Quellenverzeichnis

Bender, Emily M./Gebru, Timnit/McMillan-Major, Angelina/Shmitchell, Shmargaret (2021): On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? In: Proceedings of the 2021 ACM FAccT Conference. https://doi.org/10.1145/3442188.3445922 [25.04.2026].

Buolamwini, Joy/Gebru, Timnit (2018): Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification. In: Proceedings of Machine Learning Research 81, S. 1–15.

Europäische Union (2016): Verordnung (EU) 2016/679 des Europäischen Parlaments und des Rates (DSGVO). In: https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32016R0679 [17.04.2026].

Europäische Union (2024): Verordnung (EU) 2024/1689 über Künstliche Intelligenz (EU AI Act). In: https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689 [17.04.2026].

Goodfellow, Ian/Bengio, Yoshua/Courville, Aaron (2016): Deep Learning. Cambridge: MIT Press.

Kultusministerkonferenz (KMK) (2021): Lehren und Lernen in der digitalen Welt. Ergänzung zur Strategie Bildung in der digitalen Welt. Beschluss der Kultusministerkonferenz vom 09.12.2021.

LeCun, Yann/Bengio, Yoshua/Hinton, Geoffrey (2015): Deep learning. In: Nature 521/7553, S. 436–444. https://doi.org/10.1038/nature14539 [25.04.2026].

OECD (2023): Artificial Intelligence in Society. Paris: OECD Publishing. https://doi.org/10.1787/eedfee77-en [25.04.2026].

OpenAI (2024): GPT-4 Technical Report. In: https://openai.com/research/gpt-4 [25.04.2026].

Österreichisches Bildungsministerium (2024): KI im Unterricht – Empfehlungen für Lehrkräfte. Wien: BMBWF.

Pasquale, Frank (2015): The Black Box Society. The Secret Algorithms That Control Money and Information. Cambridge: Harvard University Press.

Russell, Stuart/Norvig, Peter (2022): Artificial Intelligence: A Modern Approach. 4. Auflage. Hoboken: Pearson.

UNESCO (2021): Recommendation on the Ethics of Artificial Intelligence. Paris: UNESCO. In: https://unesdoc.unesco.org/ark:/48223/pf0000381137 [25.04.2026].

Vaswani, Ashish et al. (2017): Attention Is All You Need. In: Advances in Neural Information Processing Systems 30.
    `,
  },
];