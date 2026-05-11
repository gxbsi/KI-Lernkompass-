import { useCallback, useEffect, useMemo, useState } from "react";
import {
  chapterKey,
  loadProgress,
  PROGRESS_STORAGE_KEY,
  resetAllProgress,
  saveProgress,
  type ProgressState,
} from "@/lib/progress";

export function useProgress() {
  const [state, setState] = useState<ProgressState>(() => loadProgress());

  useEffect(() => {
    saveProgress(state);
  }, [state]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.storageArea !== localStorage) return;
      if (e.key !== PROGRESS_STORAGE_KEY) return;
      if (e.newValue) {
        try {
          setState(JSON.parse(e.newValue) as ProgressState);
        } catch {
          /* ignore */
        }
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const update = useCallback((fn: (s: ProgressState) => ProgressState) => {
    setState(fn);
  }, []);

  const reset = useCallback(() => {
    const next = resetAllProgress();
    setState(next);
  }, []);

  const ctx = useMemo(
    () => ({
      state,
      update,
      reset,
      chapterKey,
    }),
    [state, update, reset],
  );

  return ctx;
}
