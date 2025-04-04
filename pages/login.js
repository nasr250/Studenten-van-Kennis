import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      alert("Registratie succesvol! Controleer je e-mail om je account te bevestigen.");
      setIsRegistering(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={isRegistering ? handleRegister : handleLogin} className={styles.form}>
        <h1>{isRegistering ? "Registreren" : "Login"}</h1>
        {error && <div className={styles.error}>{error}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Wachtwoord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isRegistering ? "Registreren" : "Inloggen"}</button>
        <p>
          {isRegistering ? "Heb je al een account?" : "Nog geen account?"}{" "}
          <span
            onClick={() => {
              setIsRegistering(!isRegistering);
              setError(null);
            }}
            style={{ color: "blue", cursor: "pointer" }}
          >
            {isRegistering ? "Inloggen" : "Registreren"}
          </span>
        </p>
      </form>
    </div>
  );
}
