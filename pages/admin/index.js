
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'next/router';
import styles from '../../styles/Admin.module.css';

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    titel: '',
    beschrijving: '',
    pdf_url: ''
  });
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
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('boeken')
      .insert([formData]);
    
    if (error) {
      alert('Error: ' + error.message);
    } else {
      alert('Boek toegevoegd!');
      setFormData({ titel: '', beschrijving: '', pdf_url: '' });
    }
  };

  if (loading) return <p>Laden...</p>;

  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>
      <section className={styles.section}>
        <h2>Nieuw Boek Toevoegen</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Titel"
            value={formData.titel}
            onChange={(e) => setFormData({...formData, titel: e.target.value})}
            required
          />
          <textarea
            placeholder="Beschrijving"
            value={formData.beschrijving}
            onChange={(e) => setFormData({...formData, beschrijving: e.target.value})}
            required
          />
          <input
            type="url"
            placeholder="PDF URL"
            value={formData.pdf_url}
            onChange={(e) => setFormData({...formData, pdf_url: e.target.value})}
            required
          />
          <button type="submit">Toevoegen</button>
        </form>
      </section>
    </div>
  );
}
