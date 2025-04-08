import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navigation.module.css";

export default function Navigation() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true); // Toevoegen om te controleren of de gebruiker geladen is
  const router = useRouter();

  useEffect(() => {
    // Haal de ingelogde gebruiker op en kijk of ze admin zijn
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { data: adminData, error } = await supabase
        .from("admins")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (adminData) {
        setIsAdmin(true);
      }

      setLoading(false);
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) return null; // Wacht tot de gebruiker geladen is voordat de UI wordt weergegeven

  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/catalogus">Catalogus</Link>
      <Link href="/voortgang">Voortgang</Link>
      <Link href="/profiel">Profiel</Link>

      {/* Controleer hier of de gebruiker een admin is */}
      {isAdmin && (
        <>
          <Link href="/admin/boekenbeheer">Boekenbeheer</Link>
          <Link href="/admin/toetsbeheer">Toetsbeheer</Link>
        </>
      )}

      <button onClick={handleLogout}>Uitloggen</button>
    </nav>
  );
}
