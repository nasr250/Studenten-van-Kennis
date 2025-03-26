
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import styles from '../../styles/Exam.module.css';

export default function ExamPage() {
  const router = useRouter();
  const { id } = router.query;
  const [vragen, setVragen] = useState([]);
  const [antwoorden, setAntwoorden] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (id) {
      supabase
        .from('toetsvragen')
        .select('*')
        .eq('les_id', id)
        .then(({ data }) => setVragen(data || []));
    }
  }, [id]);

  const handleSubmit = async () => {
    let correctAnswers = 0;
    vragen.forEach(vraag => {
      if (antwoorden[vraag.id]?.toLowerCase() === vraag.correct_antwoord.toLowerCase()) {
        correctAnswers++;
      }
    });
    
    const finalScore = (correctAnswers / vragen.length) * 100;
    setScore(finalScore);
    setSubmitted(true);

    // Sla score op
    const { data: { user } } = await supabase.auth.getUser();
    await supabase.from('voortgang').upsert({
      user_id: user.id,
      les_id: id,
      completed: true,
      score: finalScore
    });
  };

  return (
    <div className={styles.container}>
      <h1>Eindtoets</h1>
      {!submitted ? (
        <>
          {vragen.map((vraag) => (
            <div key={vraag.id} className={styles.questionCard}>
              <p>{vraag.vraag}</p>
              <input
                type="text"
                value={antwoorden[vraag.id] || ''}
                onChange={(e) => setAntwoorden({
                  ...antwoorden,
                  [vraag.id]: e.target.value
                })}
                placeholder="Jouw antwoord"
              />
            </div>
          ))}
          <button onClick={handleSubmit} className={styles.submitButton}>
            Toets Inleveren
          </button>
        </>
      ) : (
        <div className={styles.results}>
          <h2>Resultaat</h2>
          <p>Je score: {score.toFixed(1)}%</p>
          <button 
            onClick={() => router.push(`/lessen/${id}`)}
            className={styles.button}
          >
            Terug naar Les
          </button>
        </div>
      )}
    </div>
  );
}
