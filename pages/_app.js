import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { supabase } from "../lib/supabase";
import "../styles/global.css";
import Navigation from "../components/Navigation";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Controleer of de huidige route de loginpagina is
  const isLoginPage = router.pathname === "/login";

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();

        if (user) {
          setUser(user);
        } else if (!isLoginPage) {
          // Als geen gebruiker is ingelogd EN het is niet de loginpagina
          router.replace("/login");
        }
      } catch (error) {
        console.error("Fout bij het controleren van gebruiker:", error);
        if (!isLoginPage) {
          router.replace("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    // Luister naar veranderingen in authenticatiestatus
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT') {
          setUser(null);
          if (!isLoginPage) {
            router.replace("/login");
          }
        } else if (event === 'SIGNED_IN') {
          setUser(session?.user || null);
        }
      }
    );

    // Controleer gebruiker bij initiële laadbeurt
    checkUser();

    // Opruimen van listener
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router, isLoginPage]);

  // Toon niets tijdens het laden en als geen gebruiker is
  if (loading || (!user && !isLoginPage)) {
    return null;
  }

  return (
    <>
      {user ? (
        <>
          {/* Alleen weergeven als de pagina niet de loginpagina is */}
          {!isLoginPage && <Navigation />}
          {/* Geef de gebruiker door als prop aan alle pagina's */}
          <Component {...pageProps} user={user} />
        </>
      ) : (
        // Render alleen de login component als er geen gebruiker is
        <Component {...pageProps} />
      )}
    </>
  );
}