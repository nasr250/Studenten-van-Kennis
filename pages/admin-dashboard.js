import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/router";
import styles from "../styles/Admin.module.css";

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Boeken state
  const [boeken, setBoeken] = useState([]);
  const [titel, setTitel] = useState("");
  const [beschrijving, setBeschrijving] = useState("");
  const [categorie, setCategorie] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [volgordeNummer, setVolgordeNummer] = useState("");

  // Lessen state
  const [lesTitel, setLesTitel] = useState("");
  const [lesUrl, setLesUrl] = useState("");
  const [lesVolgordeNummer, setLesVolgordeNummer] = useState("");
  const [selectedBoekId, setSelectedBoekId] = useState(null);

  // Les toetsen state
  const [lessen, setLessen] = useState([]);
  const [selectedLesId, setSelectedLesId] = useState(null);
  const [toetsVraag, setToetsVraag] = useState("");
  const [toetsOpties, setToetsOpties] = useState("");
  const [juisteOptie, setJuisteOptie] = useState("");

  // Eindtoetsen state
  const [eindtoetsVraag, setEindtoetsVraag] = useState("");
  const [eindtoetsOpties, setEindtoetsOpties] = useState("");
  const [eindtoetsJuisteOptie, setEindtoetsJuisteOptie] = useState("");

  useEffect(() => {
    const init = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
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
      loadBoeken();
    };
    init();
  }, []);

  const loadBoeken = async () => {
    const { data } = await supabase
      .from("boeken")
      .select("*")
      .order("volgorde_nummer");
    setBoeken(data || []);
  };

  const loadLessen = async (boekId) => {
    const { data } = await supabase
      .from("lessen")
      .select("*")
      .eq("boek_id", boekId)
      .order("volgorde_nummer");
    setLessen(data || []);
  };

  const handleSubmitBoek = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("boeken").insert([
      {
        titel,
        beschrijving,
        categorie,
        pdf_url: pdfUrl,
        volgorde_nummer: parseInt(volgordeNummer),
      },
    ]);

    if (error) {
      alert("Er ging iets mis bij het toevoegen van het boek!");
      return;
    }

    alert("Boek succesvol toegevoegd!");
    setTitel("");
    setBeschrijving("");
    setCategorie("");
    setPdfUrl("");
    setVolgordeNummer("");
    loadBoeken();
  };

  const handleSubmitLes = async (e) => {
    e.preventDefault();
    if (!selectedBoekId) {
      alert("Selecteer eerst een boek!");
      return;
    }

    const { error } = await supabase.from("lessen").insert([
      {
        titel: lesTitel,
        les_url: lesUrl,
        volgorde_nummer: parseInt(lesVolgordeNummer),
        boek_id: selectedBoekId,
      },
    ]);

    if (error) {
      alert("Er ging iets mis bij het toevoegen van de les!");
      return;
    }

    alert("Les succesvol toegevoegd!");
    setLesTitel("");
    setLesUrl("");
    setLesVolgordeNummer("");
    loadLessen(selectedBoekId);
  };

  const handleSubmitLesToets = async (e) => {
    e.preventDefault();
    if (!selectedLesId) {
      alert("Selecteer eerst een les!");
      return;
    }

    const { error } = await supabase.from("les_toetsen").insert([
      {
        vraag: toetsVraag,
        opties: JSON.parse(toetsOpties),
        juiste_optie: juisteOptie,
        les_id: selectedLesId,
      },
    ]);

    if (error) {
      alert("Er ging iets mis bij het toevoegen van de toets!");
      return;
    }

    alert("Toets succesvol toegevoegd!");
    setToetsVraag("");
    setToetsOpties("");
    setJuisteOptie("");
  };

  const handleSubmitEindtoets = async (e) => {
    e.preventDefault();
    if (!selectedBoekId) {
      alert("Selecteer eerst een boek!");
      return;
    }

    const { error } = await supabase.from("eind_toetsen").insert([
      {
        vraag: eindtoetsVraag,
        opties: JSON.parse(eindtoetsOpties),
        juiste_optie: eindtoetsJuisteOptie,
        boek_id: selectedBoekId,
      },
    ]);

    if (error) {
      alert("Er ging iets mis bij het toevoegen van de eindtoets!");
      return;
    }

    alert("Eindtoets succesvol toegevoegd!");
    setEindtoetsVraag("");
    setEindtoetsOpties("");
    setEindtoetsJuisteOptie("");
  };

  if (!user) return <p>Laden...</p>;

  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>

      <section className={styles.section}>
        <h2>Nieuw Boek Toevoegen</h2>
        <form onSubmit={handleSubmitBoek} className={styles.form}>
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
            type="text"
            placeholder="Categorie"
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
          />
          <input
            type="url"
            placeholder="PDF URL"
            value={pdfUrl}
            onChange={(e) => setPdfUrl(e.target.value)}
          />
          <input
            type="number"
            placeholder="Volgorde Nummer"
            value={volgordeNummer}
            onChange={(e) => setVolgordeNummer(e.target.value)}
          />
          <button type="submit">Boek Toevoegen</button>
        </form>
      </section>

      <section className={styles.section}>
        <h2>Nieuwe Les Toevoegen</h2>
        <form onSubmit={handleSubmitLes} className={styles.form}>
          <select
            value={selectedBoekId || ""}
            onChange={(e) => {
              setSelectedBoekId(e.target.value);
              loadLessen(e.target.value);
            }}
          >
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
          <input
            type="url"
            placeholder="Les URL"
            value={lesUrl}
            onChange={(e) => setLesUrl(e.target.value)}
          />
          <input
            type="number"
            placeholder="Volgorde Nummer"
            value={lesVolgordeNummer}
            onChange={(e) => setLesVolgordeNummer(e.target.value)}
          />
          <button type="submit">Les Toevoegen</button>
        </form>
      </section>

      <section className={styles.section}>
        <h2>Nieuwe Les Toets Toevoegen</h2>
        <form onSubmit={handleSubmitLesToets} className={styles.form}>
          <select
            value={selectedLesId || ""}
            onChange={(e) => setSelectedLesId(e.target.value)}
          >
            <option value="">Selecteer een les</option>
            {lessen.map((les) => (
              <option key={les.id} value={les.id}>
                {les.titel}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Toets Vraag"
            value={toetsVraag}
            onChange={(e) => setToetsVraag(e.target.value)}
          />
          <textarea
            placeholder="Toets Opties (JSON format)"
            value={toetsOpties}
            onChange={(e) => setToetsOpties(e.target.value)}
          />
          <input
            type="text"
            placeholder="Juiste Optie"
            value={juisteOptie}
            onChange={(e) => setJuisteOptie(e.target.value)}
          />
          <button type="submit">Les Toets Toevoegen</button>
        </form>
      </section>

      <section className={styles.section}>
        <h2>Nieuwe Eindtoets Toevoegen</h2>
        <form onSubmit={handleSubmitEindtoets} className={styles.form}>
          <select
            value={selectedBoekId || ""}
            onChange={(e) => setSelectedBoekId(e.target.value)}
          >
            <option value="">Selecteer een boek</option>
            {boeken.map((boek) => (
              <option key={boek.id} value={boek.id}>
                {boek.titel}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Eindtoets Vraag"
            value={eindtoetsVraag}
            onChange={(e) => setEindtoetsVraag(e.target.value)}
          />
          <textarea
            placeholder="Eindtoets Opties (JSON format)"
            value={eindtoetsOpties}
            onChange={(e) => setEindtoetsOpties(e.target.value)}
          />
          <input
            type="text"
            placeholder="Juiste Optie"
            value={eindtoetsJuisteOptie}
            onChange={(e) => setEindtoetsJuisteOptie(e.target.value)}
          />
          <button type="submit">Eindtoets Toevoegen</button>
        </form>
      </section>
    </div>
  );
}
