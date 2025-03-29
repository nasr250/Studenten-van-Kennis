import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabase";
import "../styles/global.css";
import Navigation from "../components/Navigation";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const isLoginPage = router.pathname === "/login";

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          setUser(user);
        } else if (!isLoginPage) {
          router.replace("/login");
        }
      } catch (error) {
        console.error("Error checking user:", error);
        if (!isLoginPage) {
          router.replace("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_OUT") {
          setUser(null);
          if (!isLoginPage) {
            router.replace("/login");
          }
        } else if (event === "SIGNED_IN") {
          setUser(session?.user || null);
        }
      }
    );

    checkUser();

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router, isLoginPage]);

  if (loading || (!user && !isLoginPage)) {
    return null;
  }

  return (
    <>
      {user ? (
        <>
          {!isLoginPage && <Navigation />}
          <Component {...pageProps} user={user} />
        </>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}