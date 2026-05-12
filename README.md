# KI-Lernkompass-

React-Single-Page-App (Vite + TypeScript + Tailwind) mit drei Lernmodulen, Self-Checks, Modulquizzes, Gesamt-Endtest und clientseitigem PDF-Lernnachweis (ohne Backend, Fortschritt in `localStorage`).

## Lokale Entwicklung

```bash
npm install
npm run dev
```

## Produktions-Build

```bash
npm run build
npm run preview
```

## Deployment auf Vercel (über GitHub)

1. Repository auf GitHub anlegen und diesen Ordner pushen (die `.docx`/`.pptx`-Quellen müssen nicht zwingend ins Repo; die Lerninhalte liegen als TypeScript/Markdown unter `src/content/`, Bilder unter `public/modul2/kompass/`).
2. In [Vercel](https://vercel.com) „New Project“ → GitHub-Repo importieren.
3. Framework Preset: **Vite** (oder „Other“ mit Build `npm run build`, Output `dist`).
4. Die Datei [`vercel.json`](vercel.json) leitet Client-Routen auf `index.html` um (SPA).

Nach dem Deploy: in den Projekteinstellungen prüfen, dass **Root** auf den Ordner zeigt, falls das Repo nicht nur diese App enthält.

## Inhalte anpassen

Die **Fließtexte** der Module 1–3 stammen **inhaltlich 1:1 aus den Word-Handbüchern** und liegen als generierte Kapitel vor:

- [`src/content/module1.generated.ts`](src/content/module1.generated.ts) ← `Modul-1-KI-Grundlagenverstaendnis.docx`
- [`src/content/module2.generated.ts`](src/content/module2.generated.ts) ← `Orientierungskompass KI.docx`
- [`src/content/module3.generated.ts`](src/content/module3.generated.ts) ← `Modul 3 Analysekriterien.docx` (alle Kategorien, Checklisten-Tabelle, Quellen)

Die Dateien [`module1.ts`](src/content/module1.ts), [`module2.ts`](src/content/module2.ts), [`module3.ts`](src/content/module3.ts) binden diese ein und ergänzen Kurz-Zusammenfassungen sowie Self-Checks.

- Prüfungen: [`src/content/index.ts`](src/content/index.ts) (`moduleExamQuestions`, `finalExamQuestions`)
- Interaktive Checkliste Modul 3: [`src/content/module3Checklist.ts`](src/content/module3Checklist.ts) (Kriterien wie in der Handbuch-Tabelle)
- PDF-Texte: [`src/lib/certificate.ts`](src/lib/certificate.ts), [`src/lib/constants.ts`](src/lib/constants.ts)

Zum Neu-Generieren aus `.docx` können die Rohabsätze nach `.extracted/*.json` exportiert und per Skript in `*.generated.ts` geschrieben werden (siehe Git-Historie / interne Skripte).

## Lizenz / Urheberhinweis

Die didaktischen Texte sind an das KI-Handbuch-Projekt (Universität Graz, Micro Degree KI und Gesellschaft) angelehnt; die App selbst ist für das Lehrprojekt gedacht.
