import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../lib/supabase";
import { useUser } from "../../context/UserContext";
import styles from "../../styles/Leerpad.module.css";

export default function LeerpadDetail() {
  const [leerpad, setLeerpad] = useState(null);
  const [boeken, setBoeken] = useState([]);
  const [voortgang, setVoortgang] = useState({});
  const [aangemeld, setAangemeld] = useState(false);
  const user = useUser();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!user || !id) return;

    const fetchLeerpad = async () => {
      const { data } = await supabase.from("leerpad").select("*").eq("id", id).single();
      setLeerpad(data);
    };

    const fetchBoeken = async () => {
      const { data } = await supabase
        .from("leerpad_boeken")
        .select("boek_id, volgorde_nummer, boeken(titel)")
        .eq("leerpad_id", id)
        .order("volgorde_nummer", { ascending: true });
      setBoeken(data || []);
    };

    const fetchVoortgang = async () => {
      const boekIds = boeken.map(b => b.boek_id);
      if (boekIds.length === 0) return;
      const { data: voortgangData } = await supabase
        .from("voortgang")
        .select("boek_id, afgerond")
        .eq("gebruiker_id", user.id)
        .in("boek_id", boekIds);

      const voortgangMap = {};
      boekIds.forEach(id => {
        const v = voortgangData?.find(f => f.boek_id === id);
        voortgangMap[id] = v ? !!v.afgerond : false;
      });
      setVoortgang(voortgangMap);
    };

    const fetchAangemeld = async () => {
      const { data } = await supabase
        .from("leerpad_inschrijvingen")
        .select("leerpad_id")
        .eq("gebruiker_id", user.id)
        .eq("leerpad_id", id)
        .single();
      setAangemeld(!!data);
    };

    fetchLeerpad();
    fetchBoeken();
    fetchAangemeld();
    // fetchVoortgang wordt hieronder in een aparte useEffect gedaan
  }, [user, id]);

  useEffect(() => {
    if (!user || boeken.length === 0) return;
    const fetchVoortgang = async () => {
      const boekIds = boeken.map(b => b.boek_id);
      const { data: voortgangData } = await supabase
        .from("voortgang")
        .select("boek_id, afgerond")
        .eq("gebruiker_id", user.id)
        .in("boek_id", boekIds);

      const voortgangMap = {};
      boekIds.forEach(id => {
        const v = voortgangData?.find(f => f.boek_id === id);
        voortgangMap[id] = v ? !!v.afgerond : false;
      });
      setVoortgang(voortgangMap);
    };
    fetchVoortgang();
  }, [boeken, user]);

  const berekenVoortgang = () => {
    const totaal = boeken.length;
    const voltooid = boeken.filter((boek) => voortgang[boek.boek_id]).length;
    return totaal > 0 ? Math.round((voltooid / totaal) * 100) : 0;
  };

  const handleAanmelden = async () => {
    await supabase.from("leerpad_inschrijvingen").insert({
      gebruiker_id: user.id,
      leerpad_id: id,
    });
    setAangemeld(true);
  };

  const handleAfmelden = async () => {
    await supabase
      .from("leerpad_inschrijvingen")
      .delete()
      .eq("gebruiker_id", user.id)
      .eq("leerpad_id", id);
    setAangemeld(false);
  };

  const handleBoekClick = (boekId) => {
    router.push(`/boeken/${boekId}`);
  };

  if (!leerpad) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{leerpad.titel}</h1>
      <p>{leerpad.beschrijving}</p>
      {aangemeld && <h3>Voortgang: {berekenVoortgang()}%</h3>}
      <ul className="leerpadgrid">
        {boeken.map((boek, idx) => {
          let boekClass = "card";
          let isVoltooid = voortgang[boek.boek_id];
          let eersteOnvoltooidIndex = boeken.findIndex((b) => !voortgang[b.boek_id]);
          let isActief = idx === eersteOnvoltooidIndex;
          let isGesloten = idx > eersteOnvoltooidIndex;

          if (aangemeld) {
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
              {aangemeld && isVoltooid && (
                <span className={styles.check} title="Afgerond">✔️</span>
              )}
              {aangemeld && isGesloten && (
                <span className={styles.slotje} title="Nog niet beschikbaar">🔒</span>
              )}
            </li>
          );
        })}
      </ul>
      <button className="btn" onClick={() => history.back()}>
        Terug naar overzicht
      </button>
      {/* Aanmeld/afmeldknop */}
      {aangemeld ? (
        <button
          className="btn"
          onClick={handleAfmelden}
          style={{ marginBottom: 16 }}
        >
          Afmelden
        </button>
      ) : (
        <button
          className="btn"
          onClick={handleAanmelden}
          style={{ marginBottom: 16 }}
        >
          Aanmelden
        </button>
      )}
    </div>
  );
}