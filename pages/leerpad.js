import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function LeerpadAanmelden() {
  const [leerpaden, setLeerpaden] = useState([]);
  const [geselecteerdLeerpad, setGeselecteerdLeerpad] = useState(null);
  const [boeken, setBoeken] = useState([]);
  const [voortgang, setVoortgang] = useState({});
  const [user, setUser] = useState(null);
  const [aangemeldeLeerpaden, setAangemeldeLeerpaden] = useState([]);

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

    const fetchAangemeldeLeerpaden = async () => {
      if (!user) return;
      const { data, error } = await supabase
        .from("leerpad_inschrijvingen")
        .select("leerpad_id")
        .eq("gebruiker_id", user.id);

      if (error) console.error("Fout bij ophalen aangemelde leerpaden:", error);
      else setAangemeldeLeerpaden(data);
    };

    fetchLeerpaden();
    fetchUser();
    fetchAangemeldeLeerpaden();
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
    // Herlaad de aangemelde leerpaden
    const { data } = await supabase
      .from("leerpad_inschrijvingen")
      .select("leerpad_id")
      .eq("gebruiker_id", user.id);
    setAangemeldeLeerpaden(data);
    // Reset de geselecteerde leerpad
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

  const berekenVoortgang = () => {
    const totaal = boeken.length;
    const voltooid = boeken.filter((boek) => voortgang[boek.boek_id]).length;
    return totaal > 0 ? Math.round((voltooid / totaal) * 100) : 0;
  };

  return (
    <div className="container">
      {!geselecteerdLeerpad ? (
        <>
        <h1>Beschikbare Leerpaden</h1>
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
        <h2>Aangemelde Leerpaden</h2>
        <ul className="grid">
          {aangemeldeLeerpaden.map((inschrijving) => {
            const leerpad = leerpaden.find(lp => lp.id === inschrijving.leerpad_id);
            return (
              <li key={inschrijving.leerpad_id} className="card">
                <h2>{leerpad ? leerpad.titel : "Onbekend Leerpad"}</h2>
                <button className="btn" onClick={() => fetchBoekenVoorLeerpad(inschrijving.leerpad_id)}>
                  Bekijk Leerpad
                </button>
              </li>
            );
          })}
        </ul>
        </>
      ) : (
        <div>
          <h2>{geselecteerdLeerpad.titel}</h2>
          <p>{geselecteerdLeerpad.beschrijving}</p>
          <h3>Voortgang: {berekenVoortgang()}%</h3>
          <ul className="leerpadgrid">
            {boeken.map((boek, idx) => (
              <li key={boek.boek_id} className="card">
                <span style={{ fontWeight: "bold", marginRight: 8 }}>{idx + 1}.</span>
                <h4 style={{ display: "inline" }}>{boek.boeken.titel}</h4>
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