import { useState } from "react";
import styles from "../styles/Modal.module.css";

export default function Modal({ isOpen, onClose, lessenreeks }) {
  const [expandedLesId, setExpandedLesId] = useState(null);

  const toggleLes = (lesId) => {
    setExpandedLesId(expandedLesId === lesId ? null : lesId);
  };

  const downloadAllNotesPdf = async () => {
    try {
      const resp = await fetch("/api/generate-notities-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessenreeks }),
      });

      // debug: als niet ok, lees tekst en log
      if (!resp.ok) {
        const text = await resp.text();
        console.error("API niet ok:", resp.status, text);
        throw new Error("PDF genereren mislukt: " + resp.status);
      }

      const contentType = resp.headers.get("content-type") || "";
      if (!contentType.includes("application/pdf")) {
        const text = await resp.text();
        console.error(
          "Geen PDF terug, content-type:",
          contentType,
          text
        );
        throw new Error("Geen PDF ontvangen van server");
      }

      const blob = await resp.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${lessenreeks.titel || "notities"}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Kon PDF niet downloaden. Bekijk console voor details.");
    }
  };

  if (!isOpen || !lessenreeks) return null;

  return (
    <div className={styles.modalOverlay} role="dialog" aria-modal="true">
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        <h2>{lessenreeks.titel}</h2>

        <div className={styles.modalBody}>
          <section>
            <h3>Voortgang</h3>
            <p>
              <strong>Voltooide Lessen:</strong> {lessenreeks.voltooideLessen} van{" "}
              {lessenreeks.totaleLessen}
            </p>
            <p>
              <strong>Voortgang Percentage:</strong>{" "}
              {lessenreeks.voortgangPercentage}%
            </p>
          </section>
                    <button
            onClick={downloadAllNotesPdf}
            className={styles.pdfButton} // Changed from downloadButton to pdfButton
          >
            Download alle notities als PDF
          </button>
          <section>
            <h3>Notities per Les</h3>
            <div className={styles.accordion}>
              {lessenreeks.lessen?.map((les) => (
                <div key={les.id} className={styles.accordionItem}>
                  <button
                    className={`${styles.accordionHeader} ${
                      expandedLesId === les.id ? styles.active : ""
                    }`}
                    onClick={() => toggleLes(les.id)}
                  >
                    <span>
                      Les {les.volgorde_nummer}: {les.titel}
                    </span>
                    <span className={styles.accordionIcon}>
                      {expandedLesId === les.id ? "▼" : "▶"}
                    </span>
                  </button>

                  {expandedLesId === les.id && (
                    <div className={styles.accordionContent}>
                      {les.notities?.length > 0 ? (
                        les.notities.map((notitie) => (
                          <div key={notitie.id} className={styles.notitie}>
                            <div
                              dangerouslySetInnerHTML={{ __html: notitie.notitie }}
                            />
                            <small className={styles.notitieDate}>
                              {new Date(notitie.created_at).toLocaleDateString()}
                            </small>
                          </div>
                        ))
                      ) : (
                        <p>Geen notities voor deze les.</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}