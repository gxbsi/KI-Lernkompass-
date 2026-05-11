import { Navigate, useParams } from "react-router-dom";
import { getModule, moduleExamQuestions } from "@/content/index";
import { QuizRunner } from "@/components/QuizRunner";
import { isChapterDone, setModuleQuizPassed } from "@/lib/progress";
import { useProgressContext } from "@/contexts/ProgressContext";

export function ModuleQuizPage() {
  const { moduleId } = useParams();
  const { state, update } = useProgressContext();

  const mod = moduleId ? getModule(moduleId) : undefined;
  const questions = moduleId ? moduleExamQuestions[moduleId] : undefined;

  if (!mod || !questions?.length) return <Navigate to="/" replace />;

  const allChaptersDone = mod.chapters.every((ch) => isChapterDone(state, mod.id, ch.id));
  if (!allChaptersDone) return <Navigate to={`/modul/${mod.id}`} replace />;

  return (
    <div>
      <QuizRunner
        title={`${mod.shortTitle}: Modulabschlussquiz`}
        questions={questions}
        onCancelPath={`/modul/${mod.id}`}
        passLink={{ to: `/modul/${mod.id}`, label: "Zur Modulübersicht" }}
        onPass={() => {
          update((s) => setModuleQuizPassed(s, mod.id, true));
        }}
      />
    </div>
  );
}
