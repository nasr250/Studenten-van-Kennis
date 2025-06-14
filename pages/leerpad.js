import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useUser } from "../context/UserContext";
import { useRouter } from "next/router";
import styles from "../styles/Leerpad.module.css"; // Voeg je eigen CSS toe

export default function LeerpadAanmelden() {
  const [leerpaden, setLeerpaden] = useState([]);
  const [geselecteerdLeerpad, setGeselecteerdLeerpad] = useState(null);
  const [boeken, setBoeken] = useState([]);
  const [voortgang, setVoortgang] = useState({});
  const user = useUser();
  const [aangemeldeLeerpaden, setAangemeldeLeerpaden] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!user) return; // Wacht tot user geladen is

    const fetchLeerpaden = async () => {
      const { data, error } = await supabase.from("leerpad").select("*");
      if (error) console.error("Fout bij ophalen leerpaden:", error);
      else setLeerpaden(data);
    };

    const fetchAangemeldeLeerpaden = async () => {
      const { data, error } = await supabase
        .from("leerpad_inschrijvingen")
        .select("leerpad_id")
        .eq("gebruiker_id", user.id);

      if (error) console.error("Fout bij ophalen aangemelde leerpaden:", error);
      else setAangemeldeLeerpaden(data);
    };

    fetchLeerpaden();
    fetchAangemeldeLeerpaden();
  }, [user]); // <-- user als dependency

  const handleAanmelden = async (leerpadId) => {
    const { error } = await supabase.from("leerpad_inschrijvingen").insert({
      gebruiker_id: user.id,
      leerpad_id: leerpadId,
    });

    if (error) {
      console.error("Fout bij aanmelden:", error);
    } else {
      // Haal het eerste boek van het leerpad op
      const { data: boeken } = await supabase
        .from("leerpad_boeken")
        .select("boek_id")
        .eq("leerpad_id", leerpadId)
        .order("volgorde_nummer", { ascending: true })
        .limit(1);

      if (boeken && boeken.length > 0) {
        // Voeg het eerste boek toe aan mijn_bibliotheek
        await supabase.from("mijn_bibliotheek").upsert([
          { gebruiker_id: user.id, boek_id: boeken[0].boek_id }
        ]);
      }

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
  
  const handleAfmelden = async (leerpadId) => {
  const { error } = await supabase
    .from("leerpad_inschrijvingen")
    .delete()
    .eq("gebruiker_id", user.id)
    .eq("leerpad_id", leerpadId);

  if (error) {
    console.error("Fout bij afmelden:", error);
  } else {
    // Herlaad de aangemelde leerpaden
    const { data } = await supabase
      .from("leerpad_inschrijvingen")
      .select("leerpad_id")
      .eq("gebruiker_id", user.id);
    setAangemeldeLeerpaden(data);
  }
};

const handleBoekClick = (boekId) => {
  router.push(`/boeken/${boekId}`);
  setGeselecteerdLeerpad(null); // Reset geselecteerde leerpad na boekselectie
  }

  return (
    <div className="container">
      {!geselecteerdLeerpad ? (
        <>
        <h1>Beschikbare Leerpaden</h1>
        <ul className="grid">
          {leerpaden.map((lp) => {
            const alIngeschreven = aangemeldeLeerpaden.some(
              (inschrijving) => inschrijving.leerpad_id === lp.id
            );
            return (
              <>{alIngeschreven ? <></> :               
              <li key={lp.id} className="card">
                <h2>{lp.titel}</h2>
                <p>{lp.beschrijving}</p>
                <button className="btn" onClick={() => fetchBoekenVoorLeerpad(lp.id)}>
                  Bekijk Leerpad
                </button>
                <button
                  className="btn"
                  onClick={() => handleAanmelden(lp.id)}
                  disabled={alIngeschreven}
                >
                  Aanmelden
                </button>
              </li>}

              </>
            );
          })}
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
                <button className="btn" onClick={() => handleAfmelden(inschrijving.leerpad_id)}>
                 Afmelden
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
          {/* Alleen voortgang tonen als het een aangemelde leerpad is */}
          {aangemeldeLeerpaden.some(
            (inschrijving) => inschrijving.leerpad_id === geselecteerdLeerpad.id
          ) && (
            <h3>Voortgang: {berekenVoortgang()}%</h3>
          )}
          <ul className="leerpadgrid">
            {boeken.map((boek, idx) => {
              // Check of gebruiker is aangemeld voor dit leerpad
              const isAangemeld = aangemeldeLeerpaden.some(
                (inschrijving) => inschrijving.leerpad_id === geselecteerdLeerpad.id
              );

              let boekClass = "card";
              let isVoltooid = false;
              let isActief = false;
              let isGesloten = false;

              if (isAangemeld) {
                isVoltooid = voortgang[boek.boek_id];
                const eersteOnvoltooidIndex = boeken.findIndex(
                  (b) => !voortgang[b.boek_id]
                );
                isActief = idx === eersteOnvoltooidIndex;
                isGesloten = idx > eersteOnvoltooidIndex;

                if (isVoltooid) boekClass += ` ${styles.voltooid}`;
                else if (isActief) boekClass += ` ${styles.actief}`;
                else if (isGesloten) boekClass += ` ${styles.gesloten}`;
              }

              return (
                <li
                  key={boek.boek_id}
                  className={boekClass}
                  onClick={() => handleBoekClick(boek.boek_id)}
                  style={{ cursor: "pointer" }}
                >
                  <span style={{ fontWeight: "bold", marginRight: 8 }}>{idx + 1}.</span>
                  <h4 style={{ display: "inline" }}>{boek.boeken.titel}</h4>
                  {isAangemeld && isGesloten && (
                    <span className={styles.slotje} title="Nog niet beschikbaar">🔒</span>
                  )}
                </li>
              );
            })}
          </ul>
          <button className="btn" onClick={() => setGeselecteerdLeerpad(null)}>
            Terug naar overzicht
          </button>
                    {/* Aanmeld/afmeldknop */}
          {aangemeldeLeerpaden.some(
            (inschrijving) => inschrijving.leerpad_id === geselecteerdLeerpad.id
          ) ? (
            <button
              className="btn"
              onClick={() => handleAfmelden(geselecteerdLeerpad.id)}
              style={{ marginBottom: 16 }}
            >
              Afmelden
            </button>
          ) : (
            <button
              className="btn"
              onClick={() => handleAanmelden(geselecteerdLeerpad.id)}
              style={{ marginBottom: 16 }}
            >
              Aanmelden
            </button>
          )}
        </div>
      )}
      
    </div>
  );
}