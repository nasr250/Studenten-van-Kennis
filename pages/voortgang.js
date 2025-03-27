
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import styles from "../styles/Progress.module.css";

export default function VoortgangPage() {
  const [voortgangData, setVoortgangData] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        fetchVoortgang(user.id);
      }
    };
    fetchUser();
  }, []);

  const fetchVoortgang = async (userId) => {
    try {
      // Haal alle boeken op met gerelateerde data
      const { data: boeken } = await supabase
        .from('boeken')
        .select(`
          id,
          titel,
          beschrijving,
          lessen (
            id,
            titel,
            volgorde_nummer
          ),
          eind_toetsen (
            id,
            vraag
          )
        `);

      // Haal de voortgang op voor de huidige gebruiker
      const { data: voortgang } = await supabase
        .from('voortgang')
        .select('*')
        .eq('gebruiker_id', userId);

      // Combineer de data
      const gecombineerdeData = boeken.map(boek => {
        const boekVoortgang = voortgang?.find(v => v.boek_id === boek.id) || {
          voltooide_lessons: [],
          bekeken_lessons: [],
          voltooide_eindtoets: false
        };

        const totaleLessen = boek.lessen?.length || 0;
        const voltooideLessen = boekVoortgang.voltooide_lessons?.length || 0;
        const bekekenLessen = boekVoortgang.bekeken_lessons?.length || 0;
        
        const voortgangPercentage = Math.round((voltooideLessen / totaleLessen) * 100) || 0;
        
        return {
          ...boek,
          voortgangPercentage,
          voltooideLessen,
          totaleLessen,
          bekekenLessen,
          eindtoetsVoltooid: boekVoortgang.voltooide_eindtoets,
          status: getVoortgangStatus(voltooideLessen, bekekenLessen, totaleLessen)
        };
      });

      setVoortgangData(gecombineerdeData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching voortgang:', error);
      setLoading(false);
    }
  };

  const getVoortgangStatus = (voltooid, bekeken, totaal) => {
    if (voltooid === totaal) return 'Voltooid';
    if (bekeken > 0) return 'In progress';
    return 'Nog niet gestart';
  };

  const getStatusKleur = (status) => {
    switch (status) {
      case 'Voltooid': return '#4CAF50';
      case 'In progress': return '#FFA726';
      default: return '#9E9E9E';
    }
  };

  if (loading) return <div className={styles.container}>Laden...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mijn Voortgang</h1>
      <div className={styles.progressGrid}>
        {voortgangData.map((boek) => (
          <div key={boek.id} className={styles.progressCard}>
            <h3>{boek.titel}</h3>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill}
                style={{ 
                  width: `${boek.voortgangPercentage}%`,
                  backgroundColor: getStatusKleur(boek.status)
                }}
              />
            </div>
            <p className={styles.progressText}>
              <strong>Status:</strong> {boek.status}
            </p>
            <p className={styles.progressText}>
              <strong>Voortgang:</strong> {boek.voltooideLessen} van {boek.totaleLessen} lessen voltooid
            </p>
            <p className={styles.progressText}>
              <strong>Bekeken lessen:</strong> {boek.bekekenLessen}
            </p>
            <p className={styles.testStatus}>
              <strong>Eindtoets:</strong> {boek.eindtoetsVoltooid ? '✅ Voltooid' : '⏳ Nog niet voltooid'}
            </p>
            <a href={`/boeken/${boek.id}`} className={styles.viewButton}>
              Ga naar Boek
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
