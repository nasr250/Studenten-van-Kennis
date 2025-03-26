import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [boeken, setBoeken] = useState([]);

  useEffect(() => {
    supabase
      .from("boeken")
      .select("*")
      .then(({ data }) => {
        setBoeken(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Islamitische Boeken & Lesprogramma's</h1>
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
  );
}
