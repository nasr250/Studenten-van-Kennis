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
  const [voortgang, setVoortgang] = useState(null);
  const [user, setUser] = useState(null);

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
        const { data: lessenreeksenData, error } = await supabase
        .from("lessenreeksen")
        .select("*, leraren:lessenreeksen_leraar_id_fkey(id, naam, email)")
        .eq("boek_id", id);
      
        if (error) console.error(error);
        setLessenreeksen(lessenreeksenData || []);
        console.log("Lessenreeksen:", lessenreeksenData);
        // Haal voortgang op
        const { data: progressData } = await supabase
          .from("voortgang")
          .select("*")
          .eq("gebruiker_id", user.id)
          .eq("boek_id", id)
          .maybeSingle();

        setVoortgang(progressData || {
          gebruiker_id: user.id,
          boek_id: id,
          voltooide_lessons: [],
          bekeken_lessons: [],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, user]);

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

  const getLesStatus = (lesId) => {
    if (!voortgang) return "not-started";
    const voltooide = Array.isArray(voortgang.voltooide_lessons)
      ? voortgang.voltooide_lessons
      : [];
    const bekeken = Array.isArray(voortgang.bekeken_lessons)
      ? voortgang.bekeken_lessons
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
                    className={`${styles.lessonLink} ${styles[getLesStatus(les.id)]}`}
                  >
                    <span>{les.titel}</span>
                    <span className={styles.statusBadge}>
                      {getLesStatusIcon(getLesStatus(les.id))}
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
    </div>
  );
}
