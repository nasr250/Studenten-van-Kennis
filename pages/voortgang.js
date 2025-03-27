
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import styles from "../styles/Progress.module.css";

export default function VoortgangPage() {
  const [boekenVoortgang, setBoekenVoortgang] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      if (data.user) {
        fetchBoekenVoortgang(data.user.id);
      }
    });
  }, []);

  const fetchBoekenVoortgang = async (userId) => {
    // Fetch all books with lessons
    const { data: boeken, error } = await supabase
      .from("boeken")
      .select(`
        *,
        lessen(id, titel),
        les_toetsen(id, les_id, vraag),
        eind_toetsen(id, vraag)
      `);

    if (error || !boeken) {
      console.error("Error fetching books:", error);
      return;
    }

    // Fetch user's progress
    const { data: voortgang } = await supabase
      .from("voortgang")
      .select("*")
      .eq("gebruiker_id", userId);

    // Combine books with progress
    const boekenMetVoortgang = boeken.map(boek => {
      const boekVoortgang = voortgang?.find(v => v.boek_id === boek.id);
      const voltooideLessen = boekVoortgang?.voltooide_lessons?.length || 0;
      const bekekenLessen = boekVoortgang?.bekeken_lessons?.length || 0;
      const totaleLessen = boek.lessen?.length || 0;
      const percentage = totaleLessen > 0 
        ? Math.round((voltooideLessen / totaleLessen) * 100) 
        : 0;
      const voortgangStatus = totaleLessen === voltooideLessen ? 'Voltooid' :
        bekekenLessen > 0 ? 'In progress' : 'Nog niet gestart';

      return {
        ...boek,
        voltooideLessen,
        totaleLessen,
        percentage,
        eindtoetsVoltooid: boekVoortgang?.voltooide_eindtoets || false
      };
    });

    setBoekenVoortgang(boekenMetVoortgang);
  };

  if (!user) return <p>Laden...</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mijn Voortgang</h1>
      <div className={styles.progressGrid}>
        {boekenVoortgang.map((boek) => (
          <div key={boek.id} className={styles.progressCard}>
            <h3>{boek.titel}</h3>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${boek.percentage}%` }}
              />
            </div>
            <p className={styles.progressText}>
              {boek.voltooideLessen} van {boek.totaleLessen} lessen voltooid ({boek.percentage}%)
            </p>
            <p className={styles.testStatus}>
              Eindtoets: {boek.eindtoetsVoltooid ? '✅ Voltooid' : '⏳ Nog niet voltooid'}
            </p>
            <a href={`/boeken/${boek.id}`} className={styles.viewButton}>
              Bekijk Boek
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
