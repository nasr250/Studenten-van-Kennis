import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import { supabase } from "../../lib/supabase";
import dynamic from "next/dynamic";
import debounce from "lodash.debounce";
import "react-quill/dist/quill.snow.css";
import styles from "../../styles/Lesson.module.css";

// Dynamische import van ReactQuill
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

let isCreatingNotitie = false; // Globale variabele om inserts te voorkomen

export default function LessonPage() {
  const router = useRouter();
  const { id } = router.query;
  const [les, setLes] = useState(null);
  const [bestaandeNotitie, setBestaandeNotitie] = useState(null);
  const [user, setUser] = useState(null);
  const [voortgang, setVoortgang] = useState(null);
  const [notitie, setNotitie] = useState(""); // Voor Quill.js content
  const [isLoading, setIsLoading] = useState(true);
  const [isLaatsteLes, setIsLaatsteLes] = useState(false); // Controle voor laatste les
  const [toets, setToets] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  useEffect(() => {
    const fetchLessonData = async () => {
      if (!id || !user) return; // Zorg ervoor dat user niet null is
      setIsLoading(true);

      try {
        // Fetch lesgegevens met boekinformatie
        const { data: lesData, error: lesError } = await supabase
          .from("lessen")
          .select("*, boek:boek_id(*)")
          .eq("id", id)
          .single();

        if (lesError) throw lesError;
        setLes(lesData);

        // Controleer of dit de laatste les is
        const { data: alleLessen } = await supabase
          .from("lessen")
          .select("id")
          .eq("boek_id", lesData.boek_id);

        const laatsteLesId = alleLessen?.[alleLessen.length - 1]?.id;
        setIsLaatsteLes(laatsteLesId === id); // Controleer of huidige les de laatste is

        // Fetch bestaande notitie
        const { data: notitieData } = await supabase
          .from("les_notities")
          .select("*")
          .eq("gebruiker_id", user.id)
          .eq("les_id", id)
          .single();

        if (notitieData) {
          setBestaandeNotitie(notitieData);
          setNotitie(notitieData.notitie); // Zet de bestaande notitie in Quill.js
        }

        // 📈 Voortgang checken
        const { data: voortgang, error: voortgangError } = await supabase
          .from("voortgang")
          .select("*")
          .eq("gebruiker_id", user.id)
          .eq("boek_id", lesData.boek_id)
          .single();

        setVoortgang(voortgang);

        if (voortgangError && voortgangError.code !== "PGRST116") {
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
        // Haal de toets op voor de les
          const { data: toetsData, error } = await supabase
          .from("toetsen")
          .select("*, toets_vragen(*)")
          .or(`les_id.eq.${id},lessenreeks_id.eq.${lesData.lessenreeks_id}`);

          console.log("toetsData:", toetsData);
          console.log(error);
        setToets(toetsData);
      } catch (error) {
        console.error("Error fetching lesson data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLessonData();
  }, [id, user]);

  const saveNotitie = async (content) => {
    if (!user || !id) return;

    try {
      if (bestaandeNotitie) {
        // Update bestaande notitie
        const { error } = await supabase
          .from("les_notities")
          .update({
            notitie: content, // Opslaan als HTML
            updated_at: new Date().toISOString(),
          })
          .eq("id", bestaandeNotitie.id);

        if (error) throw error;
      } else if (!isCreatingNotitie) {
        // Maak nieuwe notitie aan
        isCreatingNotitie = true; // Voorkom meerdere inserts
        const { data, error } = await supabase.from("les_notities").insert({
          gebruiker_id: user.id,
          les_id: id,
          notitie: content, // Opslaan als HTML
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }).select("*").single();

        if (error) throw error;

        // Stel de nieuwe notitie in als bestaande notitie
        setBestaandeNotitie(data);
        isCreatingNotitie = false; // Reset de variabele
      }
    } catch (error) {
      console.error("Error saving note:", error);
      isCreatingNotitie = false; // Reset de variabele bij een fout
    }
  };

  const debouncedSaveNotitie = useCallback(
    debounce((content) => saveNotitie(content), 2500),
    [bestaandeNotitie, user, id]
  );

  const handleEditorChange = (content) => {
    setNotitie(content);
    debouncedSaveNotitie(content); // Roep de gedebounceerde functie aan
  };

  const handleBlur = () => {
    // Sla direct op bij verlies van focus
    debouncedSaveNotitie.flush(); // Voer de gedebounceerde functie direct uit
  };

  if (isLoading) return <div>Laden...</div>;
  if (!les) return <div>Les niet gevonden</div>;

  return (
    <div className={styles.container}>
      <h1>{les.titel}</h1>

      {/* Video */}
      <div className={styles.videoContainer}>
        {les.les_url && (
          <iframe
            src={
              les.les_url.includes("soundcloud.com")
                ? `https://w.soundcloud.com/player/?url=${encodeURIComponent(
                    les.les_url
                  )}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`
                : les.les_url
            }
            className={styles.lessonFrame}
            title={les.titel}
            scrolling="no"
            allow="autoplay"
          />
        )}
      </div>

      {/* Notities */}
      <div className={styles.notesSection}>
        <h2>Notities</h2>
        <ReactQuill
          value={notitie}
          onChange={handleEditorChange}
          onBlur={handleBlur}
          modules={{
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline", "strike"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image"],
            ],
          }}
          formats={[
            "header",
            "bold",
            "italic",
            "underline",
            "strike",
            "list",
            "bullet",
            "link",
            "image",
          ]}
          style={{ height: "300px", marginBottom: "20px" }}
        />
      </div>

      {/* Les Toets */}
      {toets && !isLaatsteLes && (
        <div className={styles.quizSection}>
          <h2>Les Toets</h2>
          <p>Er is een toets beschikbaar voor deze les. Klik op de onderstaande knop om de toets te starten.</p>
          <button onClick={() => router.push(`/toets/${toets[0]?.id}`)} className={styles.button}>
            Start Les Toets
          </button>
        </div>
      )}
      {isLaatsteLes && toets && (
        <div className={styles.quizSection}>
          <h2>Eindtoets</h2>
          <p>Dit is de laatste les van deze lessenreeks. Klik op de onderstaande knop om de eindtoets te starten.</p>
          <button onClick={() => router.push(`/toets/${toets[0]?.id}`)} className={styles.button}>
            Start Eindtoets
          </button>
        </div>
      )}
    </div>
  );
}
