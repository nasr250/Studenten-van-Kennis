import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useUser } from "../context/UserContext";

export default function Profiel() {
  const [email, setEmail] = useState("");
  const [kunya, setKunya] = useState(""); // <-- nieuw
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const [showWachtwoordForm, setShowWachtwoordForm] = useState(false);
  const [oudWachtwoord, setOudWachtwoord] = useState("");
  const [nieuwWachtwoord, setNieuwWachtwoord] = useState("");
  const [herhaalWachtwoord, setHerhaalWachtwoord] = useState("");
  const [showOud, setShowOud] = useState(false);
  const [showNieuw, setShowNieuw] = useState(false);
  const [showHerhaal, setShowHerhaal] = useState(false);
  const user = useUser();

  useEffect(() => {
    if (!user) return;
    setEmail(user.email || "");
    // Haal kunya op uit profiel
    supabase
      .from("profielen")
      .select("kunya")
      .eq("gebruiker_id", user.id)
      .single()
      .then(({ data }) => {
        if (data) setKunya(data.kunya || "");
      });
  }, [user]);

  // Verifieer oude wachtwoord door opnieuw in te loggen
  const verifyOldPassword = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: oudWachtwoord,
    });
    return !error;
  };

  const handleWachtwoordWijzigen = async () => {
    setError(null);
    setMessage(null);
    if (nieuwWachtwoord.length < 6) {
      setError("Wachtwoord moet minimaal 6 tekens zijn.");
      return;
    }
    if (nieuwWachtwoord !== herhaalWachtwoord) {
      setError("Wachtwoorden komen niet overeen.");
      return;
    }
    // Verifieer oude wachtwoord
    const isValid = await verifyOldPassword();
    if (!isValid) {
      setError("Oude wachtwoord is onjuist.");
      return;
    }
    const { error } = await supabase.auth.updateUser({ password: nieuwWachtwoord });
    if (error) setError("Kon wachtwoord niet wijzigen.");
    else {
      setMessage("Wachtwoord succesvol gewijzigd.");
      setOudWachtwoord("");
      setNieuwWachtwoord("");
      setHerhaalWachtwoord("");
      setShowWachtwoordForm(false);
    }
  };

  const handleResetPassword = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + "/wachtwoord-wijzigen",
    });
    if (error) setError("Kon reset-link niet versturen.");
    else setMessage("Er is een e-mail verstuurd om je wachtwoord te wijzigen.");
  };

  // Voeg deze functie toe om kunya op te slaan
  const handleKunyaOpslaan = async () => {
    setError(null);
    setMessage(null);
    const { error } = await supabase
      .from("profielen")
      .update({ kunya })
      .eq("gebruiker_id", user.id);
    if (error) setError("Kon kunya niet opslaan.");
    else setMessage("Kunya opgeslagen.");
  };

  // Oogje als inline SVG
  const Eye = ({ open }) => (
    <span style={{ cursor: "pointer", marginLeft: 8 }}>
      {open ? (
        <svg width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M10 4c-5 0-8 6-8 6s3 6 8 6 8-6 8-6-3-6-8-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6a2 2 0 100 4 2 2 0 000-4z"/></svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M2.93 2.93a1 1 0 011.41 0l12.73 12.73a1 1 0 01-1.41 1.41l-1.36-1.36A7.97 7.97 0 0110 16c-5 0-8-6-8-6a15.6 15.6 0 013.36-4.36L2.93 4.34a1 1 0 010-1.41zm14.14 0a1 1 0 010 1.41l-1.36 1.36A7.97 7.97 0 0110 4c5 0 8 6 8 6a15.6 15.6 0 01-3.36 4.36l1.36 1.36a1 1 0 01-1.41 1.41l-12.73-12.73a1 1 0 011.41-1.41z"/></svg>
      )}
    </span>
  );

  return (
    <div className="container" style={{ maxWidth: 400, margin: "0 auto" }}>
      <h1 style={{ marginBottom: "2rem" }}>Mijn Profiel</h1>
      {error && <div style={{ color: "#c0392b", marginBottom: "1rem" }}>{error}</div>}
      {message && <div style={{ color: "#16A085", marginBottom: "1rem" }}>{message}</div>}
      <div>
        <label style={{ fontWeight: "bold" }}>Kunya</label>
        <input
          type="text"
          value={kunya}
          onChange={e => setKunya(e.target.value)}
          className="input"
          style={{ width: "100%", marginBottom: "1.5rem" }}
        />
        <button
          type="button"
          className="btn" 
          onClick={handleKunyaOpslaan}
          style={{ width: "100%", marginBottom: "1.5rem" }}
        >
          Kunya opslaan
        </button>
        <label style={{ fontWeight: "bold" }}>Email</label>
        <input
          type="email"
          value={email}
          disabled
          className="input"
          style={{ width: "100%", marginBottom: "1.5rem" }}
        />

        {!showWachtwoordForm ? (
          <button
            type="button"
            className="btn"
            onClick={() => setShowWachtwoordForm(true)}
            style={{ width: "100%", marginBottom: "2rem" }}
          >
            Wachtwoord wijzigen
          </button>
        ) : (
          <div>
            <label style={{ fontWeight: "bold" }}>Oude wachtwoord</label>
            <div style={{ position: "relative", marginBottom: "0.5rem" }}>
              <input
                type={showOud ? "text" : "password"}
                value={oudWachtwoord}
                onChange={e => setOudWachtwoord(e.target.value)}
                className="input"
                placeholder="Oude wachtwoord"
                style={{ width: "100%", paddingRight: 32 }}
              />
              <span
                style={{ position: "absolute", right: 8, top: 8 }}
                onClick={() => setShowOud(v => !v)}
                title={showOud ? "Verberg wachtwoord" : "Toon wachtwoord"}
              >
                <Eye open={showOud} />
              </span>
            </div>
            <label style={{ fontWeight: "bold" }}>Nieuw wachtwoord</label>
            <div style={{ position: "relative", marginBottom: "0.5rem" }}>
              <input
                type={showNieuw ? "text" : "password"}
                value={nieuwWachtwoord}
                onChange={e => setNieuwWachtwoord(e.target.value)}
                className="input"
                placeholder="Nieuw wachtwoord"
                style={{ width: "100%", paddingRight: 32 }}
              />
              <span
                style={{ position: "absolute", right: 8, top: 8 }}
                onClick={() => setShowNieuw(v => !v)}
                title={showNieuw ? "Verberg wachtwoord" : "Toon wachtwoord"}
              >
                <Eye open={showNieuw} />
              </span>
            </div>
            <div style={{ position: "relative", marginBottom: "1rem" }}>
              <input
                type={showHerhaal ? "text" : "password"}
                value={herhaalWachtwoord}
                onChange={e => setHerhaalWachtwoord(e.target.value)}
                className="input"
                placeholder="Herhaal nieuw wachtwoord"
                style={{ width: "100%", paddingRight: 32 }}
              />
              <span
                style={{ position: "absolute", right: 8, top: 8 }}
                onClick={() => setShowHerhaal(v => !v)}
                title={showHerhaal ? "Verberg wachtwoord" : "Toon wachtwoord"}
              >
                <Eye open={showHerhaal} />
              </span>
            </div>
            <div className="vertical-buttons">
              <button
                type="button"
                className="btn"
                onClick={handleWachtwoordWijzigen}
                style={{ width: "100%", marginBottom: "1rem" }}
              >
                Wijzig wachtwoord
              </button>
              <button
                type="button"
                className="btn"
                onClick={handleResetPassword}
                style={{ width: "100%", background: "#888" }}
              >
                Wachtwoord vergeten? Stuur reset-link
              </button>
            </div>
            <button
              type="button"
              className="btn"
              onClick={() => setShowWachtwoordForm(false)}
              style={{ width: "100%", marginTop: "1rem", background: "#eee", color: "#333" }}
            >
              Annuleren
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
