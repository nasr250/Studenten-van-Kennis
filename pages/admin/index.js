
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'next/router';
import styles from '../../styles/Admin.module.css';

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [titel, setTitel] = useState('');
  const [beschrijving, setBeschrijving] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const router = useRouter();

  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user?.user_metadata?.is_admin) {
      router.push('/');
      return;
    }
    setUser(user);
  };

  const handleSubmit = async (e) => {
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
      alert('Er ging iets mis!');
      return;
    }

    alert('Boek succesvol toegevoegd!');
    setTitel('');
    setBeschrijving('');
    setPdfUrl('');
  };

  if (!user) return <p>Laden...</p>;

  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>
      
      <div className={styles.section}>
        <h2>Nieuw Boek Toevoegen</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
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
    </div>
  );
}
