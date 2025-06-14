import { useEffect } from "react";
import styles from "../styles/Modal.module.css";

export default function Modal({ isOpen, onClose, lessenreeks }) {
  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen || !lessenreeks) return null;

  const handleViewToetsDetails = (toetsId) => {
    // Logic to view toets details (e.g., redirect or open another modal)
    console.log(`Viewing details for toets ID: ${toetsId}`);
  };

  return (
    <div
      className={styles.modalOverlay}
      role="dialog"
      aria-labelledby="modal-title"
      aria-modal="true"
    >
      <div className={styles.modalContent}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Sluit modal"
        >
          ✖
        </button>
        <h2 id="modal-title">{lessenreeks.titel}</h2>

        <div className={styles.modalBody}>
          {/* Voortgang */}
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

          {/* Notities */}
          <section>
            <h3>Notities</h3>
            {lessenreeks.notities.length > 0 ? (
              <div className={styles.scrollableSection}>
                <ul>
                  {lessenreeks.notities.map((notitie) => (
                    <li key={notitie.les_id}>
                      <strong>Les:</strong> {notitie.lesNaam} <br />
                      <strong>Notitie:</strong>{" "}
                      <div
                        dangerouslySetInnerHTML={{ __html: notitie.notitie }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>Geen notities beschikbaar.</p>
            )}
          </section>

          {/* Toetsen */}
          <section>
            <h3>Toetsen</h3>
            {lessenreeks.toetsen.length > 0 ? (
              <div className={styles.scrollableSection}>
                <ul>
                  {lessenreeks.toetsen.map((toets) => (
                    <li key={toets.id}>
                      <strong>Toets:</strong> {toets.titel} <br />
                      <strong>Type:</strong> {toets.type} <br />
                      <button
                        className={styles.viewButton}
                        onClick={() => handleViewToetsDetails(toets.id)}
                      >
                        Bekijk Details
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>Geen toetsen beschikbaar.</p>
            )}
          </section>

          {/* Toetsresultaten */}
          <section>
            <h3>Toetsresultaten</h3>
            {lessenreeks.resultaten.length > 0 ? (
              <div className={styles.scrollableSection}>
                <ul>
                  {lessenreeks.resultaten.map((resultaat) => (
                    <li key={resultaat.toets_id}>
                      <strong>Toets ID:</strong> {resultaat.toets_id} <br />
                      <strong>Score:</strong> {resultaat.score}/
                      {resultaat.totaal_vragen} <br />
                      <strong>Resultaat:</strong>{" "}
                      {((resultaat.score / resultaat.totaal_vragen) * 100).toFixed(2)}%
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>Geen toetsresultaten beschikbaar.</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}