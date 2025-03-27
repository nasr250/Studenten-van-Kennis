import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import styles from "../../styles/Lesson.module.css";

export default function LessonPage() {
  const router = useRouter();
  const { id } = router.query;
  const [les, setLes] = useState(null);
  const [notitie, setNotitie] = useState("");
  const [quiz, setQuiz] = useState(null);
  const [antwoord, setAntwoord] = useState("");
  const [feedback, setFeedback] = useState("");
  const [user, setUser] = useState(null);
  const [voortgang, setVoortgang] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  useEffect(() => {
    if (id && user) {
      // Haal les op
      supabase
        .from("lessen")
        .select("*, boek:boek_id(*)")
        .eq("id", id)
        .single()
        .then((res) => {
          setLes(res.data);
          // Haal voortgang op
          supabase
            .from("voortgang")
            .select("*")
            .eq("gebruiker_id", user.id)
            .eq("boek_id", res.data.boek_id)
            .single()
            .then((voortgangRes) => setVoortgang(voortgangRes.data));
        });

      // Haal quiz op
      supabase
        .from("les_toetsen")
        .select("*")
        .eq("les_id", id)
        .single()
        .then((res) => setQuiz(res.data));

      // Haal bestaande notitie op
      if (user) {
        supabase
          .from("notities")
          .select("inhoud")
          .eq("les_id", id)
          .eq("gebruiker_id", user.id)
          .single()
          .then((res) => {
            if (res.data) setNotitie(res.data.inhoud);
          });
      }
    }
  }, [id, user]);

  const saveNotitie = async () => {
    await supabase.from("notities").upsert({
      gebruiker_id: user.id,
      les_id: id,
      inhoud: notitie,
    });
    alert("Notitie opgeslagen!");
  };

  const markLesCompleted = async () => {
    if (!voortgang) {
      // Create new voortgang
      await supabase.from("voortgang").insert({
        gebruiker_id: user.id,
        boek_id: les.boek_id,
        voltooide_lessons: [id]
      });
    } else {
      // Update existing voortgang
      const voltooide = new Set([...voortgang.voltooide_lessons, id]);
      await supabase.from("voortgang").update({
        voltooide_lessons: Array.from(voltooide)
      }).eq("id", voortgang.id);
    }
    alert("Les gemarkeerd als voltooid!");
  };

  const checkAntwoord = () => {
    if (antwoord.toLowerCase() === quiz.correct_antwoord.toLowerCase()) {
      setFeedback("Correct! 🎉");
      // Sla voortgang op
      supabase.from("voortgang").upsert({
        user_id: user.id,
        les_id: id,
        completed: true,
      });
    } else {
      setFeedback("Helaas, probeer het nog eens.");
    }
  };

  if (!les) return <p>Laden...</p>;

  return (
    <div className={styles.container}>
      <h1>{les.titel}</h1>

      <div className={styles.videoContainer}>
        <iframe width="100%" height="315" src={les.video_url} allowFullScreen />
      </div>

      <div className={styles.contentSection}>
        <h2>Notities</h2>
        <textarea
          placeholder="Maak hier je notities..."
          value={notitie}
          onChange={(e) => setNotitie(e.target.value)}
          className={styles.notesInput}
        />
        <button onClick={saveNotitie} className={styles.button}>
          Notities Opslaan
        </button>
      </div>

      {quiz && (
        <div className={styles.quizSection}>
          <h2>Quiz</h2>
          <p>{quiz.vraag}</p>
          <input
            type="text"
            value={antwoord}
            onChange={(e) => setAntwoord(e.target.value)}
            placeholder="Jouw antwoord"
            className={styles.quizInput}
          />
          <button onClick={checkAntwoord} className={styles.button}>
            Controleer
          </button>
          {feedback && <p className={styles.feedback}>{feedback}</p>}
        </div>
      )}

      <div className={styles.examSection}>
        <h2>Eindtoets</h2>
        <p>
          Wanneer je klaar bent met de les, kun je de eindtoets maken om je
          kennis te testen.
        </p>
        <button
          onClick={() => router.push(`/toets/${id}`)}
          className={styles.examButton}
        >
          Start Eindtoets
        </button>
      </div>
    </div>
  );
}
