import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import styles from "../../styles/Lesson.module.css";

export default function LessonPage() {
  const router = useRouter();
  const { id } = router.query;
  const [les, setLes] = useState(null);
  const [notitie, setNotitie] = useState("");
  const [bestaandeNotitie, setBestaandeNotitie] = useState(null);
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

        // Fetch existing note
        const { data: notitieData } = await supabase
          .from("notities")
          .select("*")
          .eq("gebruiker_id", user.id)
          .eq("les_id", id)
          .single();

        if (notitieData) {
          setBestaandeNotitie(notitieData);
          setNotitie(notitieData.inhoud);
        }

        // Fetch quiz questions
        const { data: quizData } = await supabase
          .from("les_toetsen")
          .select("*")
          .eq("les_id", id);

        setQuiz(quizData?.[0] || null);

        // 📈 Voortgang checken
        const { data: voortgang, error: voortgangError } = await supabase
          .from("voortgang")
          .select("*")
          .eq("gebruiker_id", user.id)
          .eq("boek_id", lesData.boek_id)
          .single();

        setVoortgang(voortgang);

        if (voortgangError && voortgangError.code !== "PGRST116") {
          // 116 = no rows found, dat is OK
          console.error("Fout bij voortgang ophalen:", voortgangError);
        }

        // Als voortgang bestaat:
        if (voortgang) {
          const bekeken = voortgang.bekeken_lessons || [];

          // Als les nog niet bekeken, voeg toe
          if (!bekeken.includes(id)) {
            const nieuweBekeken = [...bekeken, id];
            await supabase
              .from("voortgang")
              .update({
                bekeken_lessons: nieuweBekeken,
                laatste_activiteit: new Date().toISOString(),
              })
              .eq("id", voortgang.id);
          } else {
            // Alleen update van activiteit
            await supabase
              .from("voortgang")
              .update({
                laatste_activiteit: new Date().toISOString(),
              })
              .eq("id", voortgang.id);
          }
        } else {
          // Geen voortgang? Nieuw record aanmaken
          await supabase.from("voortgang").insert([
            {
              gebruiker_id: user.id,
              boek_id: lesData.boek_id,
              bekeken_lessons: [id],
              voltooide_eindtoets: false,
              laatste_activiteit: new Date().toISOString(),
            },
          ]);
        }
      } catch (error) {
        console.error("Error fetching lesson data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLessonData();
  }, [id, user]);

  const handleNotitieSubmit = async () => {
    if (!user || !id) return;

    try {
      if (bestaandeNotitie) {
        // Update existing note
        const { error } = await supabase
          .from("les_notities")
          .update({
            notitie,
            updated_at: new Date().toISOString(),
          })
          .eq("id", bestaandeNotitie.id);

        if (error) throw error;
      } else {
        // Create new note
        const { error } = await supabase.from("les_notities").insert({
          gebruiker_id: user.id,
          les_id: id,
          notitie,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });

        if (error) throw error;
      }

      setFeedback("Notitie opgeslagen!");
      setTimeout(() => setFeedback(""), 3000);
    } catch (error) {
      console.error("Error saving note:", error);
      setFeedback("Er ging iets mis bij het opslaan.");
    }
  };

  const markLessonComplete = async () => {
    if (!voortgang || !user || !les) {
      return;
    }

    try {
      const voltooide = voortgang.voltooide_lessons || [];
      if (!voltooide.includes(id)) {
        const updatedVoltooide = [...voltooide, id];
        await supabase
          .from("voortgang")
          .update({
            voltooide_lessons: updatedVoltooide,
            laatste_activiteit: new Date().toISOString(),
          })
          .eq("id", voortgang.id);

        setVoortgang({
          ...voortgang,
          voltooide_lessons: updatedVoltooide,
        });

        setFeedback("Les gemarkeerd als voltooid!");
        setTimeout(() => setFeedback(""), 3000);
      }
    } catch (error) {
      console.error("Error marking lesson complete:", error);
      setFeedback("Er ging iets mis bij het voltooien van de les.");
    }
  };

  if (isLoading) return <div>Laden...</div>;
  if (!les) return <div>Les niet gevonden</div>;

  return (
    <div className={styles.container}>
      <h1>{les.titel}</h1>
      <div className={styles.videoContainer}>
        {les.les_url && (
          <iframe
            src={
              les.les_url.includes("soundcloud.com")
                ? `https://w.soundcloud.com/player/?url=${encodeURIComponent(les.les_url)}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`
                : les.les_url
            }
            className={styles.lessonFrame}
            title={les.titel}
            scrolling="no"
            allow="autoplay"
          />
        )}
      </div>
      <div className={styles.notesSection}>
        <h2>Notities</h2>
        <textarea
          value={notitie}
          onChange={(e) => setNotitie(e.target.value)}
          placeholder="Schrijf hier je notities..."
          className={styles.notesInput}
        />
        <button onClick={handleNotitieSubmit} className={styles.button}>
          Notities Opslaan
        </button>
      </div>

      {quiz && (
        <div className={styles.quizSection}>
          <h2>Toets</h2>
          <p className={styles.question}>{quiz.vraag}</p>
          {quiz.opties &&
            (quiz.opties.includes("[")
              ? JSON.parse(quiz.opties).map((optie, index) => (
                  <button
                    key={index}
                    onClick={() => setAntwoord(optie)}
                    className={`${styles.button} ${antwoord === optie ? styles.correct : ""}`}
                  >
                    {optie}
                  </button>
                ))
              : typeof quiz.opties === "string"
                ? quiz.opties.split(",").map((optie, index) => (
                    <button
                      key={index}
                      onClick={() => setAntwoord(optie.trim())}
                      className={`${styles.button} ${
                        antwoord === optie.trim() ? styles.correct : ""
                      }`}
                    >
                      {optie.trim()}
                    </button>
                  ))
                : null)}
          {feedback && (
            <div
              className={`${styles.feedback} ${
                antwoord === quiz.juiste_antwoord
                  ? styles.correct
                  : styles.incorrect
              }`}
            >
              {feedback}
            </div>
          )}
        </div>
      )}

      <button
        onClick={markLessonComplete}
        className={styles.button}
        disabled={voortgang?.voltooide_lessons?.includes(id)}
      >
        {voortgang?.voltooide_lessons?.includes(id)
          ? "Les Voltooid"
          : "Markeer als Voltooid"}
      </button>

      {feedback && <div className={styles.feedback}>{feedback}</div>}
    </div>
  );
}
