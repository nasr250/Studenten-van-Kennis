import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import styles from "../../styles/Home.module.css";

export default function BookPage() {
  const router = useRouter();
  const { id } = router.query;
  const [boek, setBoek] = useState(null);
  const [lessenreeksen, setLessenreeksen] = useState([]);
  const [lessen, setLessen] = useState([]);
  const [selectedLessenreeks, setSelectedLessenreeks] = useState(null);
  const [voortgang, setVoortgang] = useState({});
  const [user, setUser] = useState(null);
  const [allLessonsCompleted, setAllLessonsCompleted] = useState(false);
  const [inBibliotheek, setInBibliotheek] = useState(false);
  const [showVerwijderPopup, setShowVerwijderPopup] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!id || !user) return;

      try {
        // Haal boekdetails op
        const { data: bookData } = await supabase
          .from("boeken")
          .select("*")
          .eq("id", id)
          .single();
        setBoek(bookData);

        // Haal lessenreeksen op
        const { data: lessenreeksenData, error: lessenreeksenError } = await supabase
          .from("lessenreeksen")
          .select("*, leraren:lessenreeksen_leraar_id_fkey(id, naam, email)")
          .eq("boek_id", id);

        if (lessenreeksenError) console.error(lessenreeksenError);
        setLessenreeksen(lessenreeksenData || []);

        // Haal voortgang op per lessenreeks
        const { data: progressData, error: progressError } = await supabase
          .from("voortgang")
          .select("*")
          .eq("gebruiker_id", user.id);

        if (progressError) console.error(progressError);

        // Zet voortgang per lessenreeks
        const voortgangPerLessenreeks = {};
        (progressData || []).forEach((voortgang) => {
          voortgangPerLessenreeks[voortgang.lessenreeks_id] = voortgang;
        });
        setVoortgang(voortgangPerLessenreeks);

        console.log("Voortgang per lessenreeks:", voortgangPerLessenreeks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, user]);

  useEffect(() => {
    if (!user || !boek) return;
    const checkBibliotheek = async () => {
      const { data } = await supabase
        .from("mijn_bibliotheek")
        .select("boek_id")
        .eq("gebruiker_id", user.id)
        .eq("boek_id", boek.id)
        .single();
      setInBibliotheek(!!data);
    };
    checkBibliotheek();
  }, [user, boek]);

  const handleSelectLessenreeks = async (lessenreeksId) => {
    setSelectedLessenreeks(lessenreeksId);

    try {
      // Haal lessen op voor de geselecteerde lessenreeks
      const { data: lessonData } = await supabase
        .from("lessen")
        .select("*")
        .eq("lessenreeks_id", lessenreeksId)
        .order("volgorde_nummer", { ascending: true });
      setLessen(lessonData || []);
    } catch (error) {
      console.error("Error fetching lessons:", error);
    }
  };

  const getLesStatus = (lessenreeksId, lesId) => {
    if (!voortgang || !voortgang[lessenreeksId]) return "not-started";

    const voortgangReeks = voortgang[lessenreeksId];
    const voltooide = Array.isArray(voortgangReeks.voltooide_lessons)
      ? voortgangReeks.voltooide_lessons
      : [];
    const bekeken = Array.isArray(voortgangReeks.bekeken_lessons)
      ? voortgangReeks.bekeken_lessons
      : [];

    if (voltooide.includes(lesId)) {
      return "completed";
    } else if (bekeken.includes(lesId)) {
      return "in-progress";
    }
    return "not-started";
  };

  const getLesStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return "✅";
      case "in-progress":
        return "⏳";
      case "not-started":
        return "📖";
      default:
        return "❓";
    }
  };

  useEffect(() => {
    const checkLessonsCompletion = async () => {
      if (!selectedLessenreeks || !voortgang[selectedLessenreeks]) return;

      const { data: lessons } = await supabase
        .from("lessen")
        .select("id")
        .eq("lessenreeks_id", selectedLessenreeks);

      const completedLessons = voortgang[selectedLessenreeks]?.voltooide_lessons || [];
      setAllLessonsCompleted(
        lessons.every((lesson) => completedLessons.includes(lesson.id))
      );
    };

    checkLessonsCompletion();
  }, [selectedLessenreeks, voortgang]);

  if (!boek) return <p>Laden...</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{boek.titel}</h1>
      <div className={styles.contentSection}>
        <p className={styles.description}>{boek.beschrijving}</p>
        {boek.pdf_url && (
          <a
            href={boek.pdf_url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            📘 Download PDF
          </a>
        )}
        {boek.externe_url && (
          <a
            href={boek.externe_url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
            style={{ marginLeft: "10px" }}
          >
            🔗 Boek Aanschaffen
          </a>
        )}
        {inBibliotheek ? (
          <>
            <button
              className={`${styles.button} verwijder-knop`}
              style={{ marginLeft: "10px" }}
              onClick={() => setShowVerwijderPopup(true)}
            >
              ❌ Verwijder uit mijn bibliotheek
            </button>
            {showVerwijderPopup && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  background: "rgba(0,0,0,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2000,
                }}
                onClick={() => setShowVerwijderPopup(false)}
              >
                <div
                  style={{
                    background: "#fff",
                    padding: 32,
                    borderRadius: 8,
                    boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
                    minWidth: 300,
                    textAlign: "center",
                  }}
                  onClick={e => e.stopPropagation()}
                >
                  <p>
                    Weet je zeker dat je <b>{boek.titel}</b> wilt verwijderen uit je bibliotheek?
                  </p>
                  <button
                    style={{
                      background: "#c0392b",
                      color: "#fff",
                      marginRight: 16,
                      padding: "8px 16px",
                      border: "none",
                      borderRadius: 4,
                      cursor: "pointer",
                    }}
                    onClick={async () => {
                      if (!user) return;
                      const { error } = await supabase
                        .from("mijn_bibliotheek")
                        .delete()
                        .eq("gebruiker_id", user.id)
                        .eq("boek_id", boek.id);
                      if (!error) {
                        setInBibliotheek(false);
                        setShowVerwijderPopup(false);
                        alert("Boek verwijderd uit je bibliotheek!");
                      } else {
                        alert("Kon boek niet verwijderen: " + error.message);
                      }
                    }}
                  >
                    Ja, verwijderen
                  </button>
                  <button
                    style={{
                      background: "#eee",
                      color: "#333",
                      padding: "8px 16px",
                      border: "none",
                      borderRadius: 4,
                      cursor: "pointer",
                    }}
                    onClick={() => setShowVerwijderPopup(false)}
                  >
                    Annuleren
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <button
            className={styles.button}
            style={{ marginLeft: "10px" }}
            onClick={async () => {
              if (!user) return;
              const { error } = await supabase
                .from("mijn_bibliotheek")
                .insert([{ gebruiker_id: user.id, boek_id: boek.id }]);
              if (!error) {
                setInBibliotheek(true);
                alert("Boek toegevoegd aan je bibliotheek!");
              } else {
                alert("Kon boek niet toevoegen: " + error.message);
              }
            }}
          >
            ➕ Toevoegen aan mijn bibliotheek
          </button>
        )}
      </div>

      <h2 className={styles.subtitle}>Lessenreeksen</h2>
      {lessenreeksen && lessenreeksen.length > 0 ? (
        <ul className={styles.lessonList}>
          {lessenreeksen.map((reeks) => (
            <li key={reeks.id} className={styles.lessonItem}>
              <button
                onClick={() => handleSelectLessenreeks(reeks.id)}
                className={styles.lessonLink}
              >
                <span>{reeks.titel}</span>
                <span className={styles.teacherName}>
                  Leraar: {reeks.leraren.naam}
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Geen lessenreeksen beschikbaar</p>
      )}

      {selectedLessenreeks && (
        <>
          <h2 className={styles.subtitle}>Lessen</h2>
          {lessen && lessen.length > 0 ? (
            <ul className={styles.lessonList}>
              {lessen.map((les) => (
                <li key={les.id} className={styles.lessonItem}>
                  <a
                    href={`/lessen/${les.id}`}
                    className={`${styles.lessonLink} ${styles[getLesStatus(selectedLessenreeks, les.id)]}`}
                  >
                    <span>{les.titel}</span>
                    <span className={styles.statusBadge}>
                      {getLesStatusIcon(getLesStatus(selectedLessenreeks, les.id))}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>Geen lessen beschikbaar voor deze lessenreeks</p>
          )}
        </>
      )}
      {allLessonsCompleted && (
        <button onClick={() => router.push(`/eindtoets/${selectedLessenreeks}`)}>
          Eindtoets Maken
        </button>
      )}
    </div>
  );
}
