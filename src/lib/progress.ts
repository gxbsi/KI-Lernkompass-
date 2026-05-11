export const PROGRESS_STORAGE_KEY = "ki-mini-lernplattform-progress-v1";

export type ProgressState = {
  /** Keys: `${moduleId}/${chapterId}` */
  completedChapters: string[];
  moduleQuizPassed: Record<string, boolean>;
  finalQuizPassed: boolean;
  /** Schriftgröße in Prozent (100, 110, 125) */
  fontScalePct: number;
  /** Modul 3: Checklisten-Items */
  checklist: Record<string, boolean>;
};

const defaultState = (): ProgressState => ({
  completedChapters: [],
  moduleQuizPassed: {},
  finalQuizPassed: false,
  fontScalePct: 100,
  checklist: {},
});

export function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return {
      ...defaultState(),
      ...parsed,
      completedChapters: Array.isArray(parsed.completedChapters)
        ? parsed.completedChapters
        : [],
      moduleQuizPassed:
        parsed.moduleQuizPassed && typeof parsed.moduleQuizPassed === "object"
          ? parsed.moduleQuizPassed
          : {},
      checklist:
        parsed.checklist && typeof parsed.checklist === "object" ? parsed.checklist : {},
    };
  } catch {
    return defaultState();
  }
}

export function saveProgress(state: ProgressState): void {
  localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(state));
}

export function chapterKey(moduleId: string, chapterId: string): string {
  return `${moduleId}/${chapterId}`;
}

export function isChapterDone(
  state: ProgressState,
  moduleId: string,
  chapterId: string,
): boolean {
  return state.completedChapters.includes(chapterKey(moduleId, chapterId));
}

export function setChapterDone(
  state: ProgressState,
  moduleId: string,
  chapterId: string,
  done: boolean,
): ProgressState {
  const key = chapterKey(moduleId, chapterId);
  const set = new Set(state.completedChapters);
  if (done) set.add(key);
  else set.delete(key);
  return { ...state, completedChapters: [...set] };
}

export function setModuleQuizPassed(
  state: ProgressState,
  moduleId: string,
  passed: boolean,
): ProgressState {
  return {
    ...state,
    moduleQuizPassed: { ...state.moduleQuizPassed, [moduleId]: passed },
  };
}

export function setFinalQuizPassed(state: ProgressState, passed: boolean): ProgressState {
  return { ...state, finalQuizPassed: passed };
}

export function setFontScale(state: ProgressState, pct: number): ProgressState {
  return { ...state, fontScalePct: pct };
}

export function setChecklistItem(
  state: ProgressState,
  id: string,
  checked: boolean,
): ProgressState {
  return { ...state, checklist: { ...state.checklist, [id]: checked } };
}

export function resetAllProgress(): ProgressState {
  const next = defaultState();
  localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(next));
  return next;
}
