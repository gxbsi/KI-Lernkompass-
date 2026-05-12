import { jsPDF } from "jspdf";
import { ATTRIBUTION_FOOTER, COURSE_TITLE } from "./constants";

export function generateCertificatePdf(firstName: string, lastName: string): Blob {
  const doc = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
  const pageW = doc.internal.pageSize.getWidth();
  const margin = 22;

  doc.setFillColor(30, 58, 95);
  doc.rect(0, 0, pageW, 42, "F");
  doc.setDrawColor(201, 162, 39);
  doc.setLineWidth(1.2);
  doc.line(0, 42, pageW, 42);

  doc.setTextColor(250, 248, 244);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Lernnachweis", margin, 22);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("KI-Lernkompass (Projekt)", margin, 32);

  doc.setTextColor(15, 23, 42);
  doc.setFontSize(13);
  doc.setFont("helvetica", "normal");
  const y0 = 58;
  doc.text("Hiermit wird bestätigt, dass", margin, y0);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  const full = `${firstName} ${lastName}`.trim();
  doc.text(full || "Teilnehmende*r", margin, y0 + 14);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  const lines = doc.splitTextToSize(
    `die drei Module inklusive Self-Checks, Modulabschlussquizzes und den gemeinsamen Gesamt-Endtest der Lernplattform «${COURSE_TITLE}» erfolgreich abgeschlossen hat.`,
    pageW - margin * 2,
  );
  doc.text(lines, margin, y0 + 28);

  const datum = new Intl.DateTimeFormat("de-AT", {
    dateStyle: "long",
  }).format(new Date());
  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105);
  doc.text(`Ausgestellt am ${datum}.`, margin, y0 + 28 + lines.length * 5 + 10);

  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  const foot = doc.splitTextToSize(
    `Hinweis: Dieses Dokument ist ein projektinterner Lernnachweis und keine offizielle Hochschul-Bescheinigung. ${ATTRIBUTION_FOOTER}`,
    pageW - margin * 2,
  );
  doc.text(foot, margin, 265);

  return doc.output("blob");
}
