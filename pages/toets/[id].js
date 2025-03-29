import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import styles from "../../styles/Exam.module.css";

export default function ExamPage() {
  const router = useRouter();
  const { id, type } = router.query; // `type` bepaalt of het 'les_toetsen' of 'eind_toetsen' is
  const [vragen, setVragen] = useState([]);
  const [antwoorden, setAntwoorden] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (id && type) {
      // Dynamisch bepalen welke tabel wordt gebruikt
      const table = type === "les" ? "les_toetsen" : "eind_toetsen";
      const column = type === "les" ? "les_id" : "boek_id";

      supabase
        .from(table)
        .select("*")
        .eq(column, id)
        .then(({ data }) => setVragen(data || []));
    }
  }, [id, type]);

  const handleSubmit = async () => {
    let correctAnswers = 0;

    // Controleer de antwoorden
    vragen.forEach((vraag) => {
      if (antwoorden[vraag.id] === vraag.juiste_optie) {
        correctAnswers++;
      }
    });

    const finalScore = (correctAnswers / vragen.length) * 100;
    setScore(finalScore);
    setSubmitted(true);

    // Sla de score op in de voortgang
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (type === "les") {
      await supabase.from("voortgang").upsert({
        user_id: user.id,
        les_id: id,
        completed: true,
        score: finalScore,
      });
    } else if (type === "boek") {
      await supabase.from("voortgang").upsert({
        user_id: user.id,
        boek_id: id,
        completed: true,
        score: finalScore,
      });
    }
  };

  return (
    <div className={styles.container}>
      <h1>{type === "les" ? "Les Toets" : "Eindtoets"}</h1>
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
          <button
            onClick={() =>
              router.push(type === "les" ? `/lessen/${id}` : `/boeken/${id}`)
            }
            className={styles.button}
          >
            Terug naar {type === "les" ? "Les" : "Boek"}
          </button>
        </div>
      )}
    </div>
  );
}
