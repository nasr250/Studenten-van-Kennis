import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabase";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUserAndRole = async () => {
      try {
        // Get the current authenticated user
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (user) {
          // Fetch the user's role from the 'admins' table
          const { data: adminData, error } = await supabase
            .from("admins")
            .select("*")
            .eq("user_id", user.id)
            .single();

          if (adminData) {
            setIsAdmin(true);
          }

          setUser(user);
        } else {
          // Redirect to login if no user is authenticated
          router.push("/login");
        }
      } catch (error) {
        console.error("Error checking user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkUserAndRole();
  }, [router]);

  // Show loading state while checking authentication
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // If no user, redirect to login (this should not typically happen due to the useEffect)
  if (!user) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h1>Welkom op de Homepagina!</h1>
      <p>
        Welkom terug, {user?.email} {isAdmin}!
      </p>

      {isAdmin ? (
        <div>
          <h2>Beheerder Dashboard</h2>
          <p>
            Welkom, beheerder! Hier kun je alle gebruikers beheren en
            systeeminstellingen aanpassen.
          </p>
        </div>
      ) : (
        <div>
          <h2>Standaard Gebruiker Dashboard</h2>
          <p>Hier kunt u uw account beheren</p>
        </div>
      )}
    </div>
  );
}
