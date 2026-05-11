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

- Module und Kapitel: [`src/content/module1.ts`](src/content/module1.ts), [`module2.ts`](src/content/module2.ts), [`module3.ts`](src/content/module3.ts)
- Prüfungen: [`src/content/index.ts`](src/content/index.ts) (`moduleExamQuestions`, `finalExamQuestions`)
- Checkliste Modul 3: [`src/content/module3Checklist.ts`](src/content/module3Checklist.ts)
- PDF-Texte: [`src/lib/certificate.ts`](src/lib/certificate.ts), [`src/lib/constants.ts`](src/lib/constants.ts)

## Lizenz / Urheberhinweis

Die didaktischen Texte sind an das KI-Handbuch-Projekt (Universität Graz, Micro Degree KI und Gesellschaft) angelehnt; die App selbst ist für das Lehrprojekt gedacht.
