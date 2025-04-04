import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import styles from "../styles/Profile.module.css";

export default function Profiel() {
  const [profile, setProfile] = useState({
    voornaam: "",
    achternaam: "",
    geboortedatum: "",
    adres: "",
    telefoonnummer: "",
    profielafbeelding: "",
    email: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data: user } = await supabase.auth.getUser();
        if (!user) return;

        const { data, error } = await supabase
          .from("profielen")
          .select("*")
          .eq("gebruiker_id", user.user.id)
          .single();

        if (error) throw error;
        setProfile(data);
      } catch (error) {
        setError("Fout bij ophalen profielgegevens.");
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const { data: user } = await supabase.auth.getUser();
      if (!user) return;

      const { error } = await supabase
        .from("profielen")
        .update(profile)
        .eq("gebruiker_id", user.user.id);

      if (error) throw error;
      setSuccess("Profiel succesvol bijgewerkt.");
    } catch (error) {
      setError("Fout bij opslaan profielgegevens.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mijn Profiel</h1>
      {error && <div className={styles.error}>{error}</div>}
      {success && <div className={styles.success}>{success}</div>}
      <form onSubmit={handleSave} className={styles.form}>
        <input
          type="text"
          name="voornaam"
          placeholder="Voornaam"
          value={profile.voornaam}
          onChange={handleInputChange}
          className={styles.input}
        />
        <input
          type="text"
          name="achternaam"
          placeholder="Achternaam"
          value={profile.achternaam}
          onChange={handleInputChange}
          className={styles.input}
        />
        <input
          type="date"
          name="geboortedatum"
          placeholder="Geboortedatum"
          value={profile.geboortedatum}
          onChange={handleInputChange}
          className={styles.input}
        />
        <input
          type="text"
          name="adres"
          placeholder="Adres"
          value={profile.adres}
          onChange={handleInputChange}
          className={styles.input}
        />
        <input
          type="text"
          name="telefoonnummer"
          placeholder="Telefoonnummer"
          value={profile.telefoonnummer}
          onChange={handleInputChange}
          className={styles.input}
        />
        <input
          type="text"
          name="profielafbeelding"
          placeholder="Profielafbeelding URL"
          value={profile.profielafbeelding}
          onChange={handleInputChange}
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={profile.email}
          onChange={handleInputChange}
          className={styles.input}
          disabled
        />
        <button type="submit" className={styles.button}>Opslaan</button>
      </form>
    </div>
  );
}
