import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useUser } from "../context/UserContext";
import { useRouter } from "next/router";
import styles from "../styles/Leerpad.module.css";

export default function LeerpadOverzicht() {
  const [leerpaden, setLeerpaden] = useState([]);
  const [aangemeldeLeerpaden, setAangemeldeLeerpaden] = useState([]);
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) return;
    const fetchLeerpaden = async () => {
      const { data } = await supabase.from("leerpad").select("*");
      setLeerpaden(data || []);
    };
    const fetchAangemeldeLeerpaden = async () => {
      const { data } = await supabase
        .from("leerpad_inschrijvingen")
        .select("leerpad_id")
        .eq("gebruiker_id", user.id);
      setAangemeldeLeerpaden(data || []);
    };
    fetchLeerpaden();
    fetchAangemeldeLeerpaden();
  }, [user]);

  const handleAanmelden = async (leerpadId) => {
    await supabase.from("leerpad_inschrijvingen").insert({
      gebruiker_id: user.id,
      leerpad_id: leerpadId,
    });
    // Refresh inschrijvingen
    const { data } = await supabase
      .from("leerpad_inschrijvingen")
      .select("leerpad_id")
      .eq("gebruiker_id", user.id);
    setAangemeldeLeerpaden(data || []);
  };

  const handleAfmelden = async (leerpadId) => {
    await supabase
      .from("leerpad_inschrijvingen")
      .delete()
      .eq("gebruiker_id", user.id)
      .eq("leerpad_id", leerpadId);
    // Refresh inschrijvingen
    const { data } = await supabase
      .from("leerpad_inschrijvingen")
      .select("leerpad_id")
      .eq("gebruiker_id", user.id);
    setAangemeldeLeerpaden(data || []);
  };

  return (
    <div className="container">
      <h1 className="title">Leerpaden</h1>
      <h2>Aangemelde Leerpaden</h2>
      <ul className="grid">
        {aangemeldeLeerpaden.map((inschrijving) => {
          const leerpad = leerpaden.find(lp => lp.id === inschrijving.leerpad_id);
          return (
            <li key={inschrijving.leerpad_id} className="card">
              <h2>{leerpad ? leerpad.titel : "Onbekend Leerpad"}</h2>
              <button className="btn" onClick={() => router.push(`/leerpad/${inschrijving.leerpad_id}`)}>
                Bekijk Leerpad
              </button>
              <button className="btn" onClick={() => handleAfmelden(inschrijving.leerpad_id)}>
                Afmelden
              </button>
            </li>
          );
        })}
      </ul>
      <h2>Beschikbare Leerpaden</h2>
      <ul className="grid">
        {leerpaden.map((lp) => {
          const alIngeschreven = aangemeldeLeerpaden.some(
            (inschrijving) => inschrijving.leerpad_id === lp.id
          );
          return (
            !alIngeschreven && (
              <li key={lp.id} className="card">
                <h2>{lp.titel}</h2>
                <p>{lp.beschrijving}</p>
                <button className="btn" onClick={() => router.push(`/leerpad/${lp.id}`)}>
                  Bekijk Leerpad
                </button>
                <button
                  className="btn"
                  onClick={() => handleAanmelden(lp.id)}
                  disabled={alIngeschreven}
                >
                  Aanmelden
                </button>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}