
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/router";
import styles from "../styles/Admin.module.css";

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [titel, setTitel] = useState("");
  const [beschrijving, setBeschrijving] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [boeken, setBoeken] = useState([]);
  const [lesTitel, setLesTitel] = useState("");
  const [lesBeschrijving, setLesBeschrijving] = useState("");
  const [lesContent, setLesContent] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [quizVraag, setQuizVraag] = useState("");
  const [quizAntwoord, setQuizAntwoord] = useState("");
  const [boekId, setBoekId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }
      
      // Check if user is admin
      const { data: adminData } = await supabase
        .from("admins")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (!adminData) {
        router.push("/");
        return;
      }

      setUser(user);
      const { data: boekenData } = await supabase.from("boeken").select("*");
      setBoeken(boekenData || []);
    };
    init();
  }, []);

  const handleSubmitBoek = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("boeken").insert([
      {
        titel,
        beschrijving,
        pdf_url: pdfUrl,
      },
    ]);

    if (error) {
      alert("Er ging iets mis bij het toevoegen van het boek!");
      return;
    }

    alert("Boek succesvol toegevoegd!");
    setTitel("");
    setBeschrijving("");
    setPdfUrl("");
  };

  const handleSubmitLes = async (e) => {
    e.preventDefault();
    if (!boekId) {
      alert("Selecteer eerst een boek!");
      return;
    }
    const { data, error } = await supabase.from("lessen").insert([
      {
        titel: lesTitel,
        beschrijving: lesBeschrijving,
        content: lesContent,
        boek_id: boekId,
        video_url: videoUrl,
        quiz_vraag: quizVraag,
        quiz_antwoord: quizAntwoord,
      },
    ]);

    if (error) {
      alert("Er ging iets mis bij het toevoegen van de les!");
      return;
    }

    alert("Les succesvol toegevoegd!");
    setLesTitel("");
    setLesBeschrijving("");
    setLesContent("");
    setVideoUrl("");
    setQuizVraag("");
    setQuizAntwoord("");
  };

  if (!user) return <p>Laden...</p>;

  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>
      
      <section className={styles.section}>
        <h2>Nieuw Boek Toevoegen</h2>
        <form onSubmit={handleSubmitBoek}>
          <input
            type="text"
            placeholder="Titel"
            value={titel}
            onChange={(e) => setTitel(e.target.value)}
          />
          <textarea
            placeholder="Beschrijving"
            value={beschrijving}
            onChange={(e) => setBeschrijving(e.target.value)}
          />
          <input
            type="url"
            placeholder="PDF URL"
            value={pdfUrl}
            onChange={(e) => setPdfUrl(e.target.value)}
          />
          <button type="submit">Boek Toevoegen</button>
        </form>
      </section>

      <section className={styles.section}>
        <h2>Nieuwe Les Toevoegen</h2>
        <form onSubmit={handleSubmitLes}>
          <select value={boekId || ''} onChange={(e) => setBoekId(e.target.value)}>
            <option value="">Selecteer een boek</option>
            {boeken.map((boek) => (
              <option key={boek.id} value={boek.id}>
                {boek.titel}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Les Titel"
            value={lesTitel}
            onChange={(e) => setLesTitel(e.target.value)}
          />
          <textarea
            placeholder="Les Beschrijving"
            value={lesBeschrijving}
            onChange={(e) => setLesBeschrijving(e.target.value)}
          />
          <textarea
            placeholder="Les Content (HTML)"
            value={lesContent}
            onChange={(e) => setLesContent(e.target.value)}
          />
          <input
            type="url"
            placeholder="Video URL"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
          <input
            type="text"
            placeholder="Quiz Vraag"
            value={quizVraag}
            onChange={(e) => setQuizVraag(e.target.value)}
          />
          <input
            type="text"
            placeholder="Quiz Antwoord"
            value={quizAntwoord}
            onChange={(e) => setQuizAntwoord(e.target.value)}
          />
          <button type="submit">Les Toevoegen</button>
        </form>
      </section>
    </div>
  );
}
