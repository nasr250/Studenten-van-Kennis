import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useUser } from "../context/UserContext";
import styles from "../styles/Home.module.css";

export default function MijnBibliotheek() {
  const user = useUser();
  const [boeken, setBoeken] = useState([]);
  const [loading, setLoading] = useState(true);
  const [zoekterm, setZoekterm] = useState("");
  const [geselecteerdeCategorie, setGeselecteerdeCategorie] = useState("");
  const [menuOpenId, setMenuOpenId] = useState(null);
  const [verwijderBoekId, setVerwijderBoekId] = useState(null);

  useEffect(() => {
    if (!user) return;
    const fetchBoeken = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("mijn_bibliotheek")
        .select(`
          boek_id,
          toegevoegd_op,
          boeken (
            id,
            titel,
            categorieen (
              naam
            )
          )
        `)
        .eq("gebruiker_id", user.id)
        .order("toegevoegd_op", { ascending: false });

      if (error) {
        console.error("Fout bij het ophalen van boeken:", error);
        setBoeken([]);
      } else {
        setBoeken(
          data.map((item) => ({
            id: item.boek_id,
            titel: item.boeken?.titel,
            categorie: item.boeken?.categorieen?.naam || "Onbekend",
          }))
        );
      }
      setLoading(false);
    };
    fetchBoeken();
  }, [user]);

  const handleVerwijder = async (boekId) => {
    await supabase
      .from("mijn_bibliotheek")
      .delete()
      .eq("gebruiker_id", user.id)
      .eq("boek_id", boekId);
    setBoeken((prev) => prev.filter((b) => b.id !== boekId));
    setVerwijderBoekId(null);
    setMenuOpenId(null);
  };

  if (!user) return <div>Je moet ingelogd zijn om je bibliotheek te bekijken.</div>;
  if (loading) return <div>Bezig met laden...</div>;

  const categorieen = [
    ...new Set(boeken.map((boek) => boek.categorie).filter(Boolean)),
  ];

  const gefilterdeBoeken = boeken.filter(
    (boek) =>
      boek.titel?.toLowerCase().includes(zoekterm.toLowerCase()) &&
      (geselecteerdeCategorie === "" || boek.categorie === geselecteerdeCategorie)
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mijn Bibliotheek</h1>
      <div className={styles.contentSection}>
        <input
          type="text"
          placeholder="Zoek op titel..."
          value={zoekterm}
          onChange={(e) => setZoekterm(e.target.value)}
          className={styles.input}
        />
        <select
          value={geselecteerdeCategorie}
          onChange={(e) => setGeselecteerdeCategorie(e.target.value)}
          className={styles.input}
        >
          <option value="">Alle categorieën</option>
          {categorieen.map((categorie) => (
            <option key={categorie} value={categorie}>
              {categorie}
            </option>
          ))}
        </select>
      </div>
      <ul className={styles.grid}>
        {gefilterdeBoeken.length === 0 ? (
          <p>Je hebt nog geen boeken in je bibliotheek.</p>
        ) : (
          gefilterdeBoeken.map((boek) => (
            <li key={boek.id} className={styles.card} style={{ position: "relative" }}>
              <a href={`/boeken/${boek.id}`} className={styles.bookLink}>
                <h2>{boek.titel}</h2>
                <p>Categorie: {boek.categorie}</p>
              </a>
              {/* Drie puntjes rechtsboven */}
              <button
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 22,
                  color: "#888",
                  zIndex: 2,
                }}
                aria-label="Opties"
                onClick={() => setMenuOpenId(menuOpenId === boek.id ? null : boek.id)}
              >
                &#x22EE;
              </button>
              {/* Optie-menu */}
              {menuOpenId === boek.id && (
                <div
                  style={{
                    position: "absolute",
                    top: 40,
                    right: 12,
                    background: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: 6,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                    zIndex: 10,
                    minWidth: 120,
                  }}
                >
                  <button
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      color: "#c0392b",
                      padding: "10px 16px",
                      textAlign: "left",
                      cursor: "pointer",
                      borderRadius: 6,
                    }}
                    onClick={() => {
                      setVerwijderBoekId(boek.id);
                      setMenuOpenId(null);
                    }}
                  >
                    Verwijderen
                  </button>
                </div>
              )}
            </li>
          ))
        )}
      </ul>
      {/* Popup voor bevestiging, buiten de ul zodat hij altijd over het hele scherm ligt */}
      {verwijderBoekId && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
          }}
          onClick={() => setVerwijderBoekId(null)}
        >
          <div
            style={{
              background: "#fff",
              padding: 32,
              borderRadius: 8,
              boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
              minWidth: 300,
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <p>
              Weet je zeker dat je <b>{boeken.find(b => b.id === verwijderBoekId)?.titel}</b> wilt verwijderen uit
              je bibliotheek?
            </p>
            <button
              style={{
                background: "#c0392b",
                color: "#fff",
                marginRight: 16,
                padding: "8px 16px",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
              }}
              onClick={() => handleVerwijder(verwijderBoekId)}
            >
              Ja, verwijderen
            </button>
            <button
              style={{
                background: "#eee",
                color: "#333",
                padding: "8px 16px",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
              }}
              onClick={() => setVerwijderBoekId(null)}
            >
              Annuleren
            </button>
          </div>
        </div>
      )}
    </div>
  );
}