
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import styles from "../../styles/Home.module.css";

export default function BookPage() {
  const router = useRouter();
  const { id } = router.query;
  const [boek, setBoek] = useState(null);
  const [lessen, setLessen] = useState([]);
  const [voortgang, setVoortgang] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  useEffect(() => {
    if (id && user) {
      // Fetch book
      supabase
        .from("boeken")
        .select("*")
        .eq("id", id)
        .single()
        .then((res) => setBoek(res.data));

      // Fetch lessons
      supabase
        .from("lessen")
        .select("*")
        .eq("boek_id", id)
        .order("volgorde_nummer", { ascending: true })
        .then((res) => setLessen(res.data));

      // Fetch progress
      supabase
        .from("voortgang")
        .select("*")
        .eq("gebruiker_id", user.id)
        .eq("boek_id", id)
        .single()
        .then((res) => setVoortgang(res.data));
    }
  }, [id, user]);

  if (!boek) return <p>Laden...</p>;

  const getLesStatus = (lesId) => {
    if (!voortgang) return 'not-started';
    const voltooide = voortgang.voltooide_lessons || [];
    const bekeken = voortgang.bekeken_lessons || [];
    
    if (voltooide.includes(parseInt(lesId))) {
      return 'completed';
    } else if (bekeken.includes(parseInt(lesId))) {
      return 'in-progress';
    }
    return 'not-started';
  };

  const getLesStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'in-progress':
        return '⏳';
      case 'not-started':
        return '📖';
      default:
        return '❓';
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{boek.titel}</h1>
      <div className={styles.contentSection}>
        <p className={styles.description}>{boek.beschrijving}</p>
        {boek.pdf_url && (
          <a href={boek.pdf_url} target="_blank" rel="noopener noreferrer" className={styles.button}>
            📘 Download PDF
          </a>
        )}
      </div>

      <h2 className={styles.subtitle}>Lessen</h2>
      {lessen && lessen.length > 0 ? (
        <ul className={styles.lessonList}>
          {lessen.map((les) => (
            <li key={les.id} className={styles.lessonItem}>
              <a href={`/lessen/${les.id}`} className={`${styles.lessonLink} ${styles[getLesStatus(les.id)]}`}>
                <span>{les.titel}</span>
                <span className={styles.statusBadge}>{getLesStatusIcon(getLesStatus(les.id))}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Geen lessen beschikbaar</p>
      )}
    </div>
  );
}
