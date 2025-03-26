import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'next/router';
import styles from '../../styles/Admin.module.css';

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [titel, setTitel] = useState('');
  const [beschrijving, setBeschrijving] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [boeken, setBoeken] = useState([]); // State for books
  const [lesTitel, setLesTitel] = useState(''); // State for lesson title
  const [lesBeschrijving, setLesBeschrijving] = useState(''); // State for lesson description
  const [lesContent, setLesContent] = useState(''); // State for lesson content (e.g., HTML)
  const [boekId, setBoekId] = useState(null); // State for selected book ID
  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user || !user.user_metadata.is_admin) {
        router.push('/');
        return;
      }
      setUser(user);

      const { data: boekenData } = await supabase.from('boeken').select('*');
      setBoeken(boekenData || []);
    };
    init();
  }, []);

  const handleSubmitBoek = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('boeken')
      .insert([
        {
          titel,
          beschrijving,
          pdf_url: pdfUrl,
        }
      ]);

    if (error) {
      alert('Er ging iets mis bij het toevoegen van het boek!');
      return;
    }

    alert('Boek succesvol toegevoegd!');
    setTitel('');
    setBeschrijving('');
    setPdfUrl('');
  };

  const handleSubmitLes = async (e) => {
    e.preventDefault();
    if (!boekId) {
      alert('Selecteer eerst een boek!');
      return;
    }
    const { data, error } = await supabase
      .from('lessen')
      .insert([
        {
          titel: lesTitel,
          beschrijving: lesBeschrijving,
          content: lesContent,
          boek_id: boekId,
        }
      ]);

    if (error) {
      alert('Er ging iets mis bij het toevoegen van de les!');
      return;
    }

    alert('Les succesvol toegevoegd!');
    setLesTitel('');
    setLesBeschrijving('');
    setLesContent('');
  };

  if (!user) return <p>Laden...</p>;

  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>

      <div className={styles.section}>
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
            type="url"
            placeholder="PDF URL"
            value={pdfUrl}
            onChange={(e) => setPdfUrl(e.target.value)}
          />
          <button type="submit">Boek Toevoegen</button>
        </form>
      </div>

      <div className={styles.section}>
        <h2>Nieuwe Les Toevoegen</h2>
        <select value={boekId} onChange={(e) => setBoekId(e.target.value)}>
          <option value={null}>Selecteer een boek</option>
          {boeken.map((boek) => (
            <option key={boek.id} value={boek.id}>
              {boek.titel}
            </option>
          ))}
        </select>
        <form onSubmit={handleSubmitLes} className={styles.form}>
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
          <button type="submit">Les Toevoegen</button>
        </form>
      </div>
    </div>
  );
}