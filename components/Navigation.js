
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (!user) return null;

  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/mijn-boeken">Mijn Boeken</Link>
      <Link href="/voortgang">Voortgang</Link>
      {user?.user_metadata?.is_admin && (
        <Link href="/admin">Admin</Link>
      )}
      <button onClick={handleLogout}>Uitloggen</button>
    </nav>
  );
}
