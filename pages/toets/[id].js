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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Huidige vraagindex

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

    const finalScore = correctAnswers;
    const totaalVragen = vragen.length;
    setScore((finalScore / totaalVragen) * 100);
    setSubmitted(true);

    const { data: user } = await supabase.auth.getUser();
    console.log("Gebruiker:", user);
    if (user) {
      const resultaatData = {
        gebruiker_id: user.user.id,
        toets_id: id,
        score: finalScore,
        totaal_vragen: totaalVragen,
      };
      console.log("Resultaat data:", resultaatData);
      const { error } = await supabase.from("toets_resultaten").insert(resultaatData);
      if (error) {
        console.error("Fout bij opslaan toetsresultaat:", error);
        alert("Er is een fout opgetreden bij het opslaan van het toetsresultaat.");
      } else {
        alert("Toetsresultaat succesvol opgeslagen.");
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < vragen.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Navigatie na toets
  const handleBack = () => {
    if (toets.type === "les") {
      router.push(`/lessen/${toets.les_id}`);
    } else if (toets.type === "eind") {
      router.push(`/mijn-boeken`);
    }
  };

  if (!toets) return <div>Laden...</div>;

  return (
    <div className={styles.container}>
      <h1>{toets.type === "les" ? "Les Toets" : "Eindtoets"}: {toets.titel}</h1>
      {!submitted ? (
        <>
          <div className={styles.questionCard}>
            <p>{vragen[currentQuestionIndex]?.vraag}</p>
            {vragen[currentQuestionIndex]?.opties && Array.isArray(vragen[currentQuestionIndex].opties) ? (
              vragen[currentQuestionIndex].opties.map((optie, index) => (
                <div
                  key={index}
                  className={`${styles.option} ${
                    antwoorden[vragen[currentQuestionIndex].id] === optie ? styles.selected : ""
                  }`}
                  onClick={() =>
                    setAntwoorden({
                      ...antwoorden,
                      [vragen[currentQuestionIndex].id]: optie,
                    })
                  }
                >
                  {optie}
                </div>
              ))
            ) : (
              <input
                type="text"
                value={antwoorden[vragen[currentQuestionIndex]?.id] || ""}
                onChange={(e) =>
                  setAntwoorden({
                    ...antwoorden,
                    [vragen[currentQuestionIndex]?.id]: e.target.value,
                  })
                }
                placeholder="Jouw antwoord"
              />
            )}
          </div>
          <div
            className={`${styles.navigationButtons} ${
              currentQuestionIndex === 0 && vragen.length > 1
                ? styles.firstQuestion
                : styles.default
            }`}
          >
            {currentQuestionIndex > 0 && (
              <button onClick={handlePreviousQuestion} className={styles.navigationButton}>
                Terug
              </button>
            )}
            {currentQuestionIndex < vragen.length - 1 ? (
              <button onClick={handleNextQuestion} className={styles.navigationButton}>
                Volgende
              </button>
            ) : (
              <button onClick={handleSubmit} className={styles.navigationButton}>
                Toets Inleveren
              </button>
            )}
          </div>
        </>
      ) : (
        <div className={styles.results}>
          <h2>Resultaat</h2>
          <p>Je score: {score.toFixed(1)}%</p>
          <div className={styles.answersOverview}>
            <h3>Overzicht van Antwoorden</h3>
            {vragen.map((vraag) => (
              <div key={vraag.id} className={styles.answerCard}>
                <p><strong>Vraag:</strong> {vraag.vraag}</p>
                <p><strong>Jouw Antwoord:</strong> {antwoorden[vraag.id] || "Geen antwoord"}</p>
                <p><strong>Juiste Antwoord:</strong> {vraag.juiste_optie}</p>
              </div>
            ))}
          </div>
          <button onClick={handleBack} className={styles.button}>
            Terug naar {toets.type === "les" ? "Les" : "Mijn Boeken"}
          </button>
        </div>
      )}
    </div>
  );
}