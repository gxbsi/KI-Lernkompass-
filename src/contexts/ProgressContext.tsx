import { createContext, useContext } from "react";
import type { ProgressState } from "@/lib/progress";

export type ProgressApi = {
  state: ProgressState;
  update: (fn: (s: ProgressState) => ProgressState) => void;
  reset: () => void;
  chapterKey: (moduleId: string, chapterId: string) => string;
};

const Ctx = createContext<ProgressApi | null>(null);

export const ProgressProvider = Ctx.Provider;

// Hook lebt absichtlich neben dem Provider (kleines Projekt).
/* eslint-disable react-refresh/only-export-components */
export function useProgressContext(): ProgressApi {
  const v = useContext(Ctx);
  if (!v) throw new Error("ProgressContext fehlt");
  return v;
}
