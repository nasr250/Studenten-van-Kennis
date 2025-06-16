import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import { supabase } from "../../lib/supabase";
import dynamic from "next/dynamic";
import debounce from "lodash.debounce";
import "react-quill/dist/quill.snow.css";
import styles from "../../styles/Lesson.module.css";
import Script from "next/script";
import YouTube from "react-youtube";
import { useRef } from "react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

let isCreatingNotitie = false;

export default function LessonPage() {
  const router = useRouter();
  const { id } = router.query;
  const [les, setLes] = useState(null);
  const [bestaandeNotitie, setBestaandeNotitie] = useState(null);
  const [user, setUser] = useState(null);
  const [voortgang, setVoortgang] = useState(null);
  const [notitie, setNotitie] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [toets, setToets] = useState(null);
  const [alleLessen, setAlleLessen] = useState([]);
  const [huidigeLesIndex, setHuidigeLesIndex] = useState(-1);
  const [mediaTimestamps, setMediaTimestamps] = useState({});
  const youtubeRef = useRef(null);
  const soundcloudRef = useRef(null);

  // Haal user op
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  // Haal lesdata, voortgang, notitie en toets op
  useEffect(() => {
    const fetchLessonData = async () => {
      if (!id || !user) return;
      setIsLoading(true);

      try {
        // Lesgegevens
        const { data: lesData, error: lesError } = await supabase
          .from("lessen")
          .select("*, lessenreeks_id, boek:boek_id(*)")
          .eq("id", id)
          .single();
        if (lesError) throw lesError;
        setLes(lesData);

        // Alle lessen in deze reeks
        const { data: alleLessenData } = await supabase
          .from("lessen")
          .select("id, titel, volgorde_nummer")
          .eq("lessenreeks_id", lesData.lessenreeks_id)
          .order("volgorde_nummer", { ascending: true }); // sorteer op volgorde_nummer

        setAlleLessen(alleLessenData || []);
        const index = (alleLessenData || []).findIndex((l) => l.id == id);
        setHuidigeLesIndex(index);

        // Notitie ophalen
        const { data: notitieData } = await supabase
          .from("les_notities")
          .select("*")
          .eq("gebruiker_id", user.id)
          .eq("les_id", id)
          .single();
        if (notitieData) {
          setBestaandeNotitie(notitieData);
          setNotitie(notitieData.notitie);
        }

        // Voortgang ophalen
        const { data: voortgangData, error: voortgangError } = await supabase
          .from("voortgang")
          .select("*")
          .eq("gebruiker_id", user.id)
          .eq("lessenreeks_id", lesData.lessenreeks_id)
          .single();
        setVoortgang(voortgangData);
        if (voortgangError && voortgangError.code !== "PGRST116") {
          console.error("Fout bij voortgang ophalen:", voortgangError);
        }

        // Voortgang bijwerken
        if (voortgangData) {
          const bekeken = voortgangData.bekeken_lessons || [];
          if (!bekeken.includes(id)) {
            const nieuweBekeken = [...bekeken, id];
            await supabase
              .from("voortgang")
              .update({
                bekeken_lessons: nieuweBekeken,
                laatste_activiteit: new Date().toISOString(),
              })
              .eq("id", voortgangData.id);
          } else {
            await supabase
              .from("voortgang")
              .update({
                laatste_activiteit: new Date().toISOString(),
              })
              .eq("id", voortgangData.id);
          }
        } else {
          await supabase.from("voortgang").insert([
            {
              gebruiker_id: user.id,
              boek_id: lesData.boek_id,
              lessenreeks_id: lesData.lessenreeks_id,
              bekeken_lessons: [id],
              voltooide_eindtoets: false,
              laatste_activiteit: new Date().toISOString(),
            },
          ]);
        }

        // Toets ophalen
        const { data: toetsData } = await supabase
          .from("toetsen")
          .select("*, toets_vragen(*)")
          .or(`les_id.eq.${id},lessenreeks_id.eq.${lesData.lessenreeks_id}`);
        setToets(toetsData);
      } catch (error) {
        console.error("Error fetching lesson data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLessonData();
  }, [id, user]);

  // Haal media-timestamps direct uit Supabase bij laden van de les
  useEffect(() => {
    if (!id || !user) return;
    const fetchTimestamps = async () => {
      console.log("Fetching timestamps for user:", user.id, "and lesson:", id);
      const { data, error } = await supabase
        .from("media_timestamps")
        .select("tijd")
        .eq("gebruiker_id", user.id)
        .eq("les_id", id)
        .single();
        console.log("Fetched timestamps:", data);
      if (error) {
        setMediaTimestamps({});
        return;
      }
      setMediaTimestamps({ tijd: data?.tijd || 0 });
    };
    fetchTimestamps();
  }, [id, user]);

  // SoundCloud Widget API integratie
  useEffect(() => {
    if (!les?.les_url || !les.les_url.includes("soundcloud.com")) return;
    const checkWidget = setInterval(() => {
      if (window.SC && window.SC.Widget) {
        clearInterval(checkWidget);
        const widget = window.SC.Widget(document.getElementById("soundcloud-player"));
        soundcloudRef.current = widget;
        widget.bind(window.SC.Widget.Events.READY, () => {
          const start = mediaTimestamps?.tijd || 0;
          widget.seekTo(start * 1000); // tijd in milliseconden!
        });
        widget.bind(window.SC.Widget.Events.PAUSE, () => {
          widget.getPosition((ms) => {
            saveTimestamp(Math.floor(ms / 1000));
          });
        });
      }
    }, 200);

    const handleUnload = () => {
      if (soundcloudRef.current) {
        soundcloudRef.current.getPosition((ms) => {
          saveTimestamp(les.les_url, Math.floor(ms / 1000));
        });
      }
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      clearInterval(checkWidget);
    };
    // eslint-disable-next-line
  }, [les, mediaTimestamps]);

  // YouTube player met react-youtube
  const onYouTubeReady = (event) => {
    const start = mediaTimestamps?.tijd || 0;
    event.target.seekTo(start, true);
  };

  const onYouTubeStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
      const tijd = Math.floor(event.target.getCurrentTime());
      saveTimestamp(tijd);
    }
  };

  // Functie om tijd op te slaan in backend
  const saveTimestamp = async (tijd) => {
    if (!user || !id) return;
  
    try {
      const { error } = await supabase
        .from("media_timestamps")
        .upsert({
          gebruiker_id: user.id,
          les_id: id,
          tijd,
          updated_at: new Date().toISOString(),
        }, { onConflict: ['gebruiker_id', 'les_id'] }); // Specificeer de kolommen voor conflict
      
      if (error) {
        console.error("Fout bij het opslaan van de timestamp:", error);
      } else {
        console.log("Timestamp succesvol opgeslagen!");
      }
    } catch (err) {
      console.error("Fout bij het opslaan van de timestamp:", err);
    }
  };
  // Notitie opslaan
  const saveNotitie = async (content) => {
    if (!user || !id) return;
    try {
      if (bestaandeNotitie) {
        const { error } = await supabase
          .from("les_notities")
          .update({
            notitie: content,
            updated_at: new Date().toISOString(),
          })
          .eq("id", bestaandeNotitie.id);
        if (error) throw error;
      } else if (!isCreatingNotitie) {
        isCreatingNotitie = true;
        const { data, error } = await supabase.from("les_notities").insert({
          gebruiker_id: user.id,
          les_id: id,
          notitie: content,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }).select("*").single();
        if (error) throw error;
        setBestaandeNotitie(data);
        isCreatingNotitie = false;
      }
    } catch (error) {
      console.error("Error saving note:", error);
      isCreatingNotitie = false;
    }
  };

  const debouncedSaveNotitie = useCallback(
    debounce((content) => saveNotitie(content), 2500),
    [bestaandeNotitie, user, id]
  );

  const handleEditorChange = (content) => {
    setNotitie(content);
    debouncedSaveNotitie(content);
  };

  const handleBlur = () => {
    debouncedSaveNotitie.flush();
  };

  // Les als voltooid markeren
  const markLessonAsCompleted = async () => {
    if (!user || !id || !voortgang) return;
    try {
      const voltooideLessons = voortgang.voltooide_lessons || [];
      if (!voltooideLessons.includes(id)) {
        const updatedLessons = [...voltooideLessons, id];
        await supabase
          .from("voortgang")
          .update({
            voltooide_lessons: updatedLessons,
            laatste_activiteit: new Date().toISOString(),
          })
          .eq("id", voortgang.id);
        setVoortgang({ ...voortgang, voltooide_lessons: updatedLessons });
        alert("Les gemarkeerd als voltooid!");
      } else {
        alert("Deze les is al gemarkeerd als voltooid.");
      }
    } catch (error) {
      console.error("Error marking lesson as completed:", error);
    }
  };

  useEffect(() => {
    setNotitie("");
    setBestaandeNotitie(null);
  }, [id]);

  if (isLoading) return <div>Laden...</div>;
  if (!les) return <div>Les niet gevonden</div>;

  return (
    <div className={styles.container}>
      <Script
        src="https://w.soundcloud.com/player/api.js"
        strategy="afterInteractive"
        id="sc-widget-api"
      />

      <h1>{les.titel}</h1>

      {/* Video */}
      <div className={styles.videoContainer}>
        {les.les_url && les.les_url.includes("soundcloud.com") && (
          <iframe
            id="soundcloud-player"
            src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
              les.les_url
            )}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`}
            className={styles.lessonFrame}
            title={les.titel}
            scrolling="no"
            allow="autoplay"
          />
        )}
        {les.les_url && les.les_url.includes("youtube.com") && (
          <YouTube
            videoId={getYouTubeVideoId(les.les_url)}
            opts={{
              width: "100%",
              height: "400",
              playerVars: { enablejsapi: 1 },
            }}
            onReady={onYouTubeReady}
            onStateChange={onYouTubeStateChange}
            className={styles.lessonFrame}
          />
        )}
        {/* Voor andere URLs eventueel fallback */}
        {les.les_url &&
          !les.les_url.includes("soundcloud.com") &&
          !les.les_url.includes("youtube.com") && (
            <iframe
              src={les.les_url}
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
      {toets && !(
        huidigeLesIndex === alleLessen.length - 1
      ) && (
        <div className={styles.quizSection}>
          <h2>Les Toets</h2>
          <p>Er is een toets beschikbaar voor deze les. Klik op de onderstaande knop om de toets te starten.</p>
          <button onClick={() => router.push(`/toets/${toets[0]?.id}`)} className={styles.button}>
            Start Les Toets
          </button>
        </div>
      )}
      {huidigeLesIndex === alleLessen.length - 1 && toets && (
        <div className={styles.quizSection}>
          <h2>Eindtoets</h2>
          <p>Dit is de laatste les van deze lessenreeks. Klik op de onderstaande knop om de eindtoets te starten.</p>
          <button onClick={() => router.push(`/toets/${toets[0]?.id}`)} className={styles.button}>
            Start Eindtoets
          </button>
        </div>
      )}

      {/* Navigatieknoppen onderaan, met "Markeer als voltooid" in het midden */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 40 }}>
        {huidigeLesIndex > 0 ? (
          <button
            className={styles.button}
            style={{ alignSelf: "flex-start" }}
            onClick={() => router.push(`/lessen/${alleLessen[huidigeLesIndex - 1].id}`)}
          >
            ← Vorige les
          </button>
        ) : <div />}

        <button onClick={markLessonAsCompleted} className={styles.button}>
          Markeer les als voltooid
        </button>

        {huidigeLesIndex > -1 && huidigeLesIndex < alleLessen.length - 1 ? (
          <button
            className={styles.button}
            style={{ alignSelf: "flex-end" }}
            onClick={() => router.push(`/lessen/${alleLessen[huidigeLesIndex + 1].id}`)}
          >
            Volgende les →
          </button>
        ) : <div />}
      </div>
    </div>
  );
}

function getYouTubeVideoId(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1);
    }
    if (parsed.searchParams.get("v")) {
      return parsed.searchParams.get("v");
    }
    // Voor embed links
    if (parsed.pathname.startsWith("/embed/")) {
      return parsed.pathname.split("/embed/")[1];
    }
    return null;
  } catch {
    return null;
  }
}
