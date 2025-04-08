import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import styles from '../styles/Home.module.css'; // Zorg ervoor dat je de juiste CSS-module importeert

export default function Catalogus() {
  const [boeken, setBoeken] = useState([]);
  const [zoekterm, setZoekterm] = useState('');
  const [categorieen, setCategorieen] = useState([]);
  const [geselecteerdeCategorie, setGeselecteerdeCategorie] = useState('');

  useEffect(() => {
    const fetchBoeken = async () => {
      const { data, error } = await supabase
        .from('boeken')
        .select('id, titel, categorieen (id, naam)')
        .order('titel', { ascending: true });

      if (error) {
        console.error('Fout bij het ophalen van boeken:', error);
      } else {
        setBoeken(data);
        const uniekeCategorieen = Array.from(
          new Set(data.map((boek) => boek.categorieen?.naam).filter(Boolean))
        );
        setCategorieen(uniekeCategorieen);
      }
    };

    fetchBoeken();
  }, []);

  const gefilterdeBoeken = boeken.filter((boek) => {
    const komtOvereenMetZoekterm = boek.titel
      .toLowerCase()
      .includes(zoekterm.toLowerCase());
    const komtOvereenMetCategorie =
      geselecteerdeCategorie === '' ||
      boek.categorieen?.naam === geselecteerdeCategorie;
    return komtOvereenMetZoekterm && komtOvereenMetCategorie;
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Catalogus: Islamitische Boeken</h1>

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
        {gefilterdeBoeken.map((boek) => (
          <li key={boek.id} className={styles.card}>
            <a href={`/boeken/${boek.id}`} className={styles.bookLink}>
              <h2>{boek.titel}</h2>
              <p>Categorie: {boek.categorieen?.naam || 'Onbekend'}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
