import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import styles from "../../styles/Exam.module.css";

export default function ExamPage() {
  const router = useRouter();
  const { id } = router.query; // `id` is de toets-ID
  const [toets, setToets] = useState(null); // Toetsgegevens
  const [vragen, setVragen] = useState([]); // Vragen van de toets
  const [antwoorden, setAntwoorden] = useState({}); // Antwoorden van de gebruiker
  const [submitted, setSubmitted] = useState(false); // Of de toets is ingeleverd
  const [score, setScore] = useState(0); // Gebruikersscore

  // Haal toets en vragen op
  useEffect(() => {
    if (id) {
      supabase
        .from("toetsen")
        .select("*, toets_vragen(*)")
        .eq("id", id)
        .single()
        .then(({ data, error }) => {
          if (error) {
            console.error("Fout bij ophalen toets:", error);
            return;
          }
          setToets(data);
          setVragen(data?.toets_vragen || []);
        });
    }
  }, [id]);

  // Verwerk antwoorden en bereken score
  const handleSubmit = async () => {
    let correctAnswers = 0;

    vragen.forEach((vraag) => {
      if (antwoorden[vraag.id] === vraag.juiste_optie) {
        correctAnswers++;
      }
    });

    const finalScore = (correctAnswers / vragen.length) * 100;
    setScore(finalScore);
    setSubmitted(true);

    const { data: user } = await supabase.auth.getUser();
    await supabase.from("voortgang").upsert({
      gebruiker_id: user.id,
      toets_id: id,
      score: finalScore,
    });
  };

  // Navigatie na toets
  const handleBack = () => {
    if (toets.type === "les") {
      router.push(`/lessen/${toets.les_id}`);
    } else if (toets.type === "eind") {
      router.push(`/boeken/${toets.boek_id}`);
    }
  };

  if (!toets) return <div>Laden...</div>;

  return (
    <div className={styles.container}>
      <h1>{toets.type === "les" ? "Les Toets" : "Eindtoets"}: {toets.titel}</h1>
      {!submitted ? (
        <>
          {vragen.map((vraag) => (
            <div key={vraag.id} className={styles.questionCard}>
              <p>{vraag.vraag}</p>
              {vraag.opties && Array.isArray(vraag.opties) ? (
                vraag.opties.map((optie, index) => (
                  <div key={index} className={styles.option}>
                    <label>
                      <input
                        type="radio"
                        name={`vraag-${vraag.id}`}
                        value={optie}
                        checked={antwoorden[vraag.id] === optie}
                        onChange={() =>
                          setAntwoorden({
                            ...antwoorden,
                            [vraag.id]: optie,
                          })
                        }
                      />
                      {optie}
                    </label>
                  </div>
                ))
              ) : (
                <input
                  type="text"
                  value={antwoorden[vraag.id] || ""}
                  onChange={(e) =>
                    setAntwoorden({
                      ...antwoorden,
                      [vraag.id]: e.target.value,
                    })
                  }
                  placeholder="Jouw antwoord"
                />
              )}
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
          <button onClick={handleBack} className={styles.button}>
            Terug naar {toets.type === "les" ? "Les" : "Boek"}
          </button>
        </div>
      )}
    </div>
  );
}