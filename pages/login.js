import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [kunya, setKunya] = useState("");
  const router = useRouter();

  // LOGIN: maak profiel aan met kunya uit metadata indien nodig
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data: userData, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;

      const user = userData.user;
      // Profiel ophalen
      const { data: profiel } = await supabase
        .from("profielen")
        .select("*")
        .eq("gebruiker_id", user.id)
        .single();

      if (!profiel) {
        // Haal kunya uit user_metadata
        let ingevuldeKunya = user.user_metadata?.kunya?.trim() || "";
        if (!ingevuldeKunya) {
          ingevuldeKunya = prompt("Vul je kunya in:");
          if (!ingevuldeKunya) {
            setError("Kunya is verplicht voor je profiel.");
            return;
          }
        }
        const { error: profielError } = await supabase.from("profielen").insert([
          {
            gebruiker_id: user.id,
            email: user.email,
            kunya: ingevuldeKunya,
          },
        ]);
        if (profielError) throw profielError;
      }

      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  // REGISTRATIE: sla kunya op in user_metadata
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setError("Wachtwoorden komen niet overeen.");
      return;
    }
    if (!kunya.trim()) {
      setError("Kunya is verplicht.");
      return;
    }
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { kunya: kunya.trim() }, // <-- sla kunya op in metadata
        },
      });
      if (error) throw error;

      alert("Registratie succesvol! Controleer je e-mail om je account te bevestigen.");
      setIsRegistering(false);
      setPassword("");
      setRepeatPassword("");
      setKunya("");
    } catch (error) {
      setError(error.message);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) throw error;
      alert("Een e-mail om je wachtwoord te resetten is verzonden.");
      setIsResettingPassword(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={
          isResettingPassword
            ? handlePasswordReset
            : isRegistering
            ? handleRegister
            : handleLogin
        }
        className={styles.form}
      >
        <h1>
          {isResettingPassword
            ? "Wachtwoord Reset"
            : isRegistering
            ? "Registreren"
            : "Login"}
        </h1>
        {error && <div className={styles.error}>{error}</div>}
        {isRegistering && (
          <input
            type="text"
            placeholder="Kunya"
            value={kunya}
            onChange={(e) => setKunya(e.target.value)}
            required={isRegistering}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isResettingPassword && (
          <>
            <input
              type="password"
              placeholder="Wachtwoord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isRegistering && (
              <>
                <input
                  type="password"
                  placeholder="Herhaal wachtwoord"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </>
            )}
          </>
        )}
        <button type="submit">
          {isResettingPassword
            ? "Reset Wachtwoord"
            : isRegistering
            ? "Registreren"
            : "Inloggen"}
        </button>
        {!isResettingPassword && (
          <p>
            {isRegistering
              ? "Heb je al een account?"
              : "Nog geen account?"}{" "}
            <span
              onClick={() => {
                setIsRegistering(!isRegistering);
                setError(null);
                setPassword("");
                setRepeatPassword("");
              }}
              style={{ color: "blue", cursor: "pointer" }}
            >
              {isRegistering ? "Inloggen" : "Registreren"}
            </span>
          </p>
        )}
        {!isRegistering && !isResettingPassword && (
          <p>
            <span
              onClick={() => {
                setIsResettingPassword(true);
                setError(null);
              }}
              style={{ color: "blue", cursor: "pointer" }}
            >
              Wachtwoord vergeten?
            </span>
          </p>
        )}
        {isResettingPassword && (
          <p>
            <span
              onClick={() => {
                setIsResettingPassword(false);
                setError(null);
              }}
              style={{ color: "blue", cursor: "pointer" }}
            >
              Terug naar inloggen
            </span>
          </p>
        )}
      </form>
    </div>
  );
}
