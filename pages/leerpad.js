import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function LeerpadAanmelden() {
  const [leerpaden, setLeerpaden] = useState([]);
  const [geselecteerdLeerpad, setGeselecteerdLeerpad] = useState(null);
  const [boeken, setBoeken] = useState([]);
  const [voortgang, setVoortgang] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchLeerpaden = async () => {
      const { data, error } = await supabase.from("leerpad").select("*");
      if (error) console.error("Fout bij ophalen leerpaden:", error);
      else setLeerpaden(data);
    };

    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchLeerpaden();
    fetchUser();
  }, []);

  const handleAanmelden = async (leerpadId) => {
    if (!user) {
      alert("Je moet ingelogd zijn om je aan te melden.");
      return;
    }

    const { error } = await supabase.from("leerpad_inschrijvingen").insert({
      gebruiker_id: user.id,
      leerpad_id: leerpadId,
    });

    if (error) {
      console.error("Fout bij aanmelden:", error);
    } else {
      alert("Succesvol aangemeld!");
    }
  };

  const fetchBoekenVoorLeerpad = async (leerpadId) => {
    const { data, error } = await supabase
      .from("leerpad_boeken")
      .select("boek_id, volgorde_nummer, boeken(titel)")
      .eq("leerpad_id", leerpadId)
      .order("volgorde_nummer", { ascending: true });

    if (error) {
      console.error("Fout bij ophalen boeken:", error);
    } else {
      setBoeken(data);
      setGeselecteerdLeerpad(leerpaden.find((lp) => lp.id === leerpadId));
    }
  };

  const handleAfvinken = async (boekId) => {
    const nieuweVoortgang = { ...voortgang, [boekId]: !voortgang[boekId] };
    setVoortgang(nieuweVoortgang);

    // Optioneel: Sla voortgang op in de database
    // await supabase.from("voortgang").upsert({ gebruiker_id: user.id, boek_id: boekId, voltooid: nieuweVoortgang[boekId] });
  };

  const berekenVoortgang = () => {
    const totaal = boeken.length;
    const voltooid = boeken.filter((boek) => voortgang[boek.boek_id]).length;
    return totaal > 0 ? Math.round((voltooid / totaal) * 100) : 0;
  };

  return (
    <div className="container">
      <h1>Beschikbare Leerpaden</h1>
      {!geselecteerdLeerpad ? (
        <ul className="grid">
          {leerpaden.map((lp) => (
            <li key={lp.id} className="card">
              <h2>{lp.titel}</h2>
              <p>{lp.beschrijving}</p>
              <button className="btn" onClick={() => fetchBoekenVoorLeerpad(lp.id)}>
                Bekijk Leerpad
              </button>
              <button className="btn" onClick={() => handleAanmelden(lp.id)}>
                Aanmelden
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <h2>{geselecteerdLeerpad.titel}</h2>
          <p>{geselecteerdLeerpad.beschrijving}</p>
          <h3>Voortgang: {berekenVoortgang()}%</h3>
          <ul className="grid">
            {boeken.map((boek) => (
              <li key={boek.boek_id} className="card">
                <h4>{boek.boeken.titel}</h4>
                <label>
                  <input
                    type="checkbox"
                    checked={voortgang[boek.boek_id] || false}
                    onChange={() => handleAfvinken(boek.boek_id)}
                  />
                  Afgevinkt
                </label>
              </li>
            ))}
          </ul>
          <button className="btn" onClick={() => setGeselecteerdLeerpad(null)}>
            Terug naar overzicht
          </button>
        </div>
      )}
    </div>
  );
}