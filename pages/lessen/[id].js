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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  useEffect(() => {
    const fetchLessonData = async () => {
      if (!id || !user) return;
      setIsLoading(true);

      try {
        // Fetch lesson with book data
        const { data: lesData, error: lesError } = await supabase
          .from("lessen")
          .select("*, boek:boek_id(*)")
          .eq("id", id)
          .single();

        if (lesError) throw lesError;
        setLes(lesData);

        // Fetch existing progress
        const { data: voortgangData } = await supabase
          .from("voortgang")
          .select("*")
          .eq("gebruiker_id", user.id)
          .eq("boek_id", lesData.boek_id)
          .single();

        setVoortgang(voortgangData);

        // Fetch quiz
        const { data: quizData } = await supabase
          .from("les_toetsen")
          .select("*")
          .eq("les_id", id)
          .single();

        setQuiz(quizData);

        // Mark lesson as viewed
        await markLesViewed(lesData.boek_id);
      } catch (error) {
        console.error("Error fetching lesson data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLessonData();
  }, [id, user]);

  const markLesViewed = async (boekId) => {
    if (!user) return;

    const bekeken = new Set(voortgang?.bekeken_lessons || []);
    bekeken.add(parseInt(id));

    if (!voortgang) {
      await supabase.from("voortgang").insert({
        gebruiker_id: user.id,
        boek_id: boekId,
        bekeken_lessons: Array.from(bekeken),
        laatste_activiteit: new Date().toISOString()
      });
    } else {
      await supabase.from("voortgang").update({
        bekeken_lessons: Array.from(bekeken),
        laatste_activiteit: new Date().toISOString()
      }).eq("id", voortgang.id);
    }
  };

  const saveNotitie = async () => {
    const { data: existingNote } = await supabase
      .from("les_notities")
      .select("*")
      .eq("les_id", id)
      .eq("gebruiker_id", user.id)
      .single();

    if (existingNote) {
      await supabase
        .from("les_notities")
        .update({ notitie: notitie })
        .eq("les_id", id)
        .eq("gebruiker_id", user.id);
    } else {
      await supabase
        .from("les_notities")
        .insert({
          les_id: id,
          gebruiker_id: user.id,
          notitie: notitie
        });
    }
    alert("Notitie opgeslagen!");
  };

  const markLesCompleted = async () => {
    try {
      if (!voortgang) {
        await supabase.from("voortgang").insert({
          gebruiker_id: user.id,
          boek_id: les.boek_id,
          voltooide_lessons: [parseInt(id)],
          bekeken_lessons: [parseInt(id)],
          laatste_activiteit: new Date().toISOString()
        });
      } else {
        const voltooide = new Set(voortgang.voltooide_lessons || []);
        voltooide.add(parseInt(id));
        const bekeken = new Set(voortgang.bekeken_lessons || []);
        bekeken.add(parseInt(id));

        await supabase.from("voortgang").update({
          voltooide_lessons: Array.from(voltooide),
          bekeken_lessons: Array.from(bekeken),
          laatste_activiteit: new Date().toISOString()
        }).eq("id", voortgang.id);
      }

      // Refresh voortgang
      const { data } = await supabase
        .from("voortgang")
        .select("*")
        .eq("gebruiker_id", user.id)
        .eq("boek_id", les.boek_id)
        .single();

      setVoortgang(data);
      alert("Les gemarkeerd als voltooid! 🎉");
    } catch (error) {
      console.error("Error marking lesson as complete:", error);
      alert("Er ging iets mis bij het markeren van de les als voltooid.");
    }
  };

  const checkAntwoord = () => {
    if (!quiz) return;

    if (antwoord.toLowerCase().trim() === quiz.correct_antwoord.toLowerCase().trim()) {
      setFeedback("Correct! 🎉");
      markLesCompleted();
    } else {
      setFeedback("Helaas, probeer het nog eens.");
    }
  };

  if (isLoading) return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}></div>
      <p>Laden...</p>
    </div>
  );

  if (!les) return (
    <div className={styles.errorContainer}>
      <p>Les niet gevonden</p>
      <button onClick={() => router.back()} className={styles.button}>
        Ga terug
      </button>
    </div>
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{les.titel}</h1>
        <p className={styles.bookInfo}>
          Uit het boek: {les.boek.titel}
        </p>
      </header>

      {les.video_url && (
        <div className={styles.videoContainer}>
          <iframe
            src={les.video_url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className={styles.contentSection}>
        <h2>Lesinhoud</h2>
        <div dangerouslySetInnerHTML={{ __html: les.content }}></div>
      </div>

      <div className={styles.notesSection}>
        <h2>Aantekeningen</h2>
        <textarea
          className={styles.notesInput}
          value={notitie}
          onChange={(e) => setNotitie(e.target.value)}
          placeholder="Schrijf hier je aantekeningen..."
        ></textarea>
        <button onClick={saveNotitie} className={styles.button}>
          Opslaan
        </button>
      </div>

      {quiz && (
        <div className={styles.quizSection}>
          <h2>Toets</h2>
          <p className={styles.question}>{quiz.vraag}</p>
          <input
            type="text"
            className={styles.quizInput}
            value={antwoord}
            onChange={(e) => setAntwoord(e.target.value)}
            placeholder="Jouw antwoord..."
          />
          <button onClick={checkAntwoord} className={styles.button}>
            Controleer
          </button>
          {feedback && (
            <div className={`${styles.feedback} ${feedback.includes("Correct") ? styles.correct : styles.incorrect}`}>
              {feedback}
            </div>
          )}
        </div>
      )}

      <div className={styles.navigationButtons}>
        <button onClick={() => router.back()} className={`${styles.button} ${styles.secondaryButton}`}>
          Terug naar overzicht
        </button>
        <button
          onClick={markLesCompleted}
          className={`${styles.button} ${styles.primaryButton}`}
          disabled={voortgang?.voltooide_lessons?.includes(parseInt(id))}
        >
          {voortgang?.voltooide_lessons?.includes(parseInt(id))
            ? "Les voltooid ✓"
            : "Markeer als voltooid"}
        </button>
      </div>
    </div>
  );
}