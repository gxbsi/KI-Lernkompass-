import { Route, Routes } from "react-router-dom";
import { AppShell } from "@/components/AppShell";
import { ProgressProvider } from "@/contexts/ProgressContext";
import { useProgress } from "@/hooks/useProgress";
import { setFontScale } from "@/lib/progress";
import { CertificatePage } from "@/pages/CertificatePage";
import { ChapterPage } from "@/pages/ChapterPage";
import { FinalQuizPage } from "@/pages/FinalQuizPage";
import { HomePage } from "@/pages/HomePage";
import { ModuleHubPage } from "@/pages/ModuleHubPage";
import { ModuleQuizPage } from "@/pages/ModuleQuizPage";

function AppRoutes() {
  const progress = useProgress();

  return (
    <ProgressProvider value={progress}>
      <Routes>
        <Route
          element={
            <AppShell
              fontScalePct={progress.state.fontScalePct}
              onFontScale={(pct) => progress.update((s) => setFontScale(s, pct))}
              onResetProgress={progress.reset}
              progress={progress.state}
            />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="modul/:moduleId" element={<ModuleHubPage />} />
          <Route path="modul/:moduleId/kapitel/:chapterId" element={<ChapterPage />} />
          <Route path="modul/:moduleId/modulquiz" element={<ModuleQuizPage />} />
          <Route path="gesamtquiz" element={<FinalQuizPage />} />
          <Route path="zertifikat" element={<CertificatePage />} />
        </Route>
      </Routes>
    </ProgressProvider>
  );
}

export default function App() {
  return <AppRoutes />;
}
