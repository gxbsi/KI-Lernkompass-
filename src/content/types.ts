export type QuizOption = {
  id: string;
  label: string;
};

export type SelfCheckQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
};

export type Chapter = {
  id: string;
  title: string;
  summary?: string;
  bodyMd: string;
  selfChecks: SelfCheckQuestion[];
  /** Wenn gesetzt, wird zusätzlich die Kompass-Galerie angezeigt (Modul 2). */
  showCompassGallery?: boolean;
};

export type LearningModule = {
  id: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  chapters: Chapter[];
};

export type ExamQuestion = {
  id: string;
  moduleId: string;
  prompt: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
};
