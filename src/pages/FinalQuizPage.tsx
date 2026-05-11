import { Navigate } from "react-router-dom";
import { finalExamQuestions, MODULES } from "@/content/index";
import { QuizRunner } from "@/components/QuizRunner";
import { setFinalQuizPassed } from "@/lib/progress";
import { useProgressContext } from "@/contexts/ProgressContext";

export function FinalQuizPage() {
  const { state, update } = useProgressContext();

  const allModuleQuizzes = MODULES.every((m) => state.moduleQuizPassed[m.id]);
  if (!allModuleQuizzes) return <Navigate to="/" replace />;

  return (
    <div>
      <QuizRunner
        title="Gesamt-Endtest (alle Module)"
        questions={finalExamQuestions}
        onCancelPath="/"
        passLink={{ to: "/zertifikat", label: "Weiter zum Zertifikat" }}
        onPass={() => {
          update((s) => setFinalQuizPassed(s, true));
        }}
      />
    </div>
  );
}
