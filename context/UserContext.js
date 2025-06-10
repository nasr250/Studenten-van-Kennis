import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase"; // pas aan naar jouw pad

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Haal user op bij laden
    const session = supabase.auth.getSession();
    setUser(session?.user ?? null);

    // Optioneel: luister naar auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener?.unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}