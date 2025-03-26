
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import styles from '../styles/Progress.module.css';

export default function VoortgangPage() {
  const [voortgang, setVoortgang] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      if (data.user) {
        fetchVoortgang(data.user.id);
      }
    });
  }, []);

  const fetchVoortgang = async (userId) => {
    const { data } = await supabase
      .from('voortgang')
      .select(`
        *,
        lessen (
          titel,
          boek_id,
          boeken (titel)
        )
      `)
      .eq('user_id', userId);
    setVoortgang(data || []);
  };

  if (!user) return <p>Laden...</p>;

  return (
    <div className={styles.container}>
      <h1>Mijn Voortgang</h1>
      <div className={styles.progressGrid}>
        {voortgang.map((item) => (
          <div key={item.id} className={styles.progressCard}>
            <h3>{item.lessen?.boeken?.titel}</h3>
            <p>Les: {item.lessen?.titel}</p>
            <p>Status: {item.completed ? '✅ Voltooid' : '⏳ In progress'}</p>
            <p>Score: {item.score || 'Nog niet getoetst'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
