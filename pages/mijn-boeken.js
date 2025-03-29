import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [boeken, setBoeken] = useState([]);

  useEffect(() => {
    const loadBoeken = async () => {
      const { data } = await supabase
        .from("boeken")
        .select(`*, categorieen (id,naam)`) // Zorg ervoor dat de categorienaam wordt opgehaald
        .order("categorieen (id)", { ascending: true }); // Sorteer op categorienaam oplopend
      setBoeken(data || []);
    };
    loadBoeken();
  }, []);

  // Groepeer boeken op categorie
  const groupedBoeken = boeken.reduce((acc, boek) => {
    const categorieNaam = boek.categorieen?.naam || "Onbekend";
    if (!acc[categorieNaam]) {
      acc[categorieNaam] = [];
    }
    acc[categorieNaam].push(boek);
    return acc;
  }, {});

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Islamitische Boeken & Lesprogramma's</h1>
      {Object.entries(groupedBoeken).map(([categorie, boeken]) => (
        <div key={categorie}>
          <h2 className={styles.categorie}>{categorie}</h2>
          <ul className={styles.bookList}>
            {boeken.map((boek) => (
              <li key={boek.id} className={styles.bookCard}>
                <a href={`/boeken/${boek.id}`} className={styles.bookLink}>
                  {boek.titel}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
