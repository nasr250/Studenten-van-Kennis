import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function LeerpadenBeheer() {
  const [leerpaden, setLeerpaden] = useState([]);
  const [boeken, setBoeken] = useState([]);
  const [geselecteerdeBoeken, setGeselecteerdeBoeken] = useState([]);
  const [nieuwLeerpad, setNieuwLeerpad] = useState({titel: "", beschrijving: "" });
  const [bewerken, setBewerken] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data: leerpadenData, error: leerpadenError } = await supabase
        .from("leerpad")
        .select("*")
        .order("volgorde_nummer", { ascending: true });

      const { data: boekenData, error: boekenError } = await supabase
        .from("boeken")
        .select("*");

      if (leerpadenError || boekenError) {
        console.error("Fout bij ophalen data:", leerpadenError || boekenError);
      } else {
        setLeerpaden(leerpadenData);
        setBoeken(boekenData);
      }
    };

    fetchData();
  }, []);

  const handleSaveLeerpad = async () => {
    console.log("Opslaan leerpad met data:", nieuwLeerpad, geselecteerdeBoeken);
    const { data: nieuwLeerpadData, error } = await supabase
      .from("leerpad")
      .insert(nieuwLeerpad)
      .select()
      .single();

    if (error) {
      console.error("Fout bij opslaan leerpad:", error);
      return;
    }

    const leerpadBoeken = geselecteerdeBoeken.map((boek, index) => ({
      leerpad_id: nieuwLeerpadData.id,
      boek_id: boek.id,
      volgorde_nummer: index + 1,
    }));
    
    const { error: boekenError } = await supabase
      .from("leerpad_boeken")
      .insert(leerpadBoeken);

    if (boekenError) {
      console.error("Fout bij koppelen boeken:", boekenError);
    } else {
      alert("Leerpad succesvol aangemaakt!");
      setLeerpaden([...leerpaden, nieuwLeerpadData]);
      setNieuwLeerpad({id: "", titel: "", beschrijving: "" });
      setGeselecteerdeBoeken([]);
    }
  };

  const handleDeleteLeerpad = async (leerpadId) => {
    const { error } = await supabase.from("leerpad").delete().eq("id", leerpadId);

    if (error) {
      console.error("Fout bij verwijderen leerpad:", error);
    } else {
      setLeerpaden(leerpaden.filter((lp) => lp.id !== leerpadId));
      alert("Leerpad succesvol verwijderd!");
    }
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedBoeken = Array.from(geselecteerdeBoeken);
    const [verplaatstBoek] = reorderedBoeken.splice(result.source.index, 1);
    reorderedBoeken.splice(result.destination.index, 0, verplaatstBoek);

    setGeselecteerdeBoeken(reorderedBoeken);
  };

  const handleBoekToevoegen = (boek) => {
    if (!geselecteerdeBoeken.find((b) => b.id === boek.id)) {
      setGeselecteerdeBoeken([...geselecteerdeBoeken, boek]);
    }
  };

  const handleBoekVerwijderen = (boekId) => {
    setGeselecteerdeBoeken(geselecteerdeBoeken.filter((boek) => boek.id !== boekId));
  };

  const bewerkLeerpad = async (leerpadId) => {
    const { data: leerpadData, error } = await supabase
      .from("leerpad")
      .select("*")
      .eq("id", leerpadId)
      .single();
    if (error) {
      console.error("Fout bij ophalen leerpad:", error);
      return;
    }
    // Haal gekoppelde boeken op
    const { data: boekenData, error: boekenError } = await supabase
      .from("leerpad_boeken")
      .select("boek_id, boeken(*)")
      .eq("leerpad_id", leerpadId)
      .order("volgorde_nummer", { ascending: true });

    if (boekenError) {
      console.error("Fout bij ophalen boeken van leerpad:", boekenError);
      return;
    }

    setNieuwLeerpad({
      id: leerpadData.id,
      titel: leerpadData.titel,
      beschrijving: leerpadData.beschrijving,
    });

    // Zet geselecteerde boeken op basis van gekoppelde boeken
    setGeselecteerdeBoeken(
      boekenData.map((item) => item.boeken)
    );
  };
  
  const handleUpdateLeerpad = async () => {
    console.log("Update leerpad met data:", nieuwLeerpad, geselecteerdeBoeken);
    const { data: updatedLeerpad, error } = await supabase
      .from("leerpad")
      .update(nieuwLeerpad)
      .eq("id", nieuwLeerpad.id)
      .select()
      .single();

    if (error) {
      console.error("Fout bij updaten leerpad:", error);
      return;
    }
    // 1. Verwijder oude koppelingen die niet meer geselecteerd zijn
    const huidigeBoekIds = geselecteerdeBoeken.map(boek => boek.id);

    await supabase
      .from("leerpad_boeken")
      .delete()
      .match({ leerpad_id: updatedLeerpad.id })
      .not('boek_id', 'in', `(${huidigeBoekIds.join(',')})`);

    // 2. Upsert de huidige selectie
    const leerpadBoeken = geselecteerdeBoeken.map((boek, index) => ({
      leerpad_id: updatedLeerpad.id,
      boek_id: boek.id,
      volgorde_nummer: index + 1,
    }));
    
    const { error: boekenError } = await supabase
      .from("leerpad_boeken")
      .upsert(leerpadBoeken);


    // Update leerpaden lijst
    setLeerpaden(
      leerpaden.map((lp) =>
        lp.id === updatedLeerpad.id ? updatedLeerpad : lp
      )
    );
    alert("Leerpad succesvol bijgewerkt!");
    setBewerken(false);
    setNieuwLeerpad({titel: "", beschrijving: "" });
    setGeselecteerdeBoeken([]);
  };

  return (
    <div className="container">
      <h1>Leerpaden Beheer</h1>
      <div className="card">
        {bewerken ? (<h2>Bewerken Leerpad</h2>) : (<h2>Nieuw Leerpad</h2>)}
        <input
          type="text"
          placeholder="Titel"
          value={nieuwLeerpad.titel}
          onChange={(e) => setNieuwLeerpad({ ...nieuwLeerpad, titel: e.target.value })}
        />
        <textarea
          placeholder="Beschrijving"
          value={nieuwLeerpad.beschrijving}
          onChange={(e) =>
            setNieuwLeerpad({ ...nieuwLeerpad, beschrijving: e.target.value })
          }
        />
        <h3>Beschikbare Boeken</h3>
        <ul className= 'leerpadgrid'>
          {boeken.map((boek) => (
            <li key={boek.id} className="card">
              <p>{boek.titel}</p>
              <button className="btn" onClick={() => handleBoekToevoegen(boek)}>
                Toevoegen
              </button>
            </li>
          ))}
        </ul>
        <h3>Geselecteerde Boeken</h3>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="boekenLijst">
            {(provided) => (
              <ul
                className='leerpadgrid'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {geselecteerdeBoeken.map((boek, index) => (
                  <Draggable key={boek.id} draggableId={boek.id} index={index}>
                    {(provided) => (
                      <li
                        className="card"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <p>{boek.titel}</p>
                        <button className="btn" onClick={() => handleBoekVerwijderen(boek.id)}>
                          Verwijderen
                        </button>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        { bewerken ? (<>
          <button className="btn" onClick={() => { setBewerken(false); setNieuwLeerpad({ titel: "", beschrijving: "" }); setGeselecteerdeBoeken([]); }}>
            Annuleren
          </button>
          <button className="btn" onClick={() => handleUpdateLeerpad() }>
            Opslaan
          </button></>
        ) : <button className="btn" onClick={handleSaveLeerpad}>
          Opslaan
        </button>}
        
      </div>

      <h2>Bestaande Leerpaden</h2>
      <ul className="grid">
        {leerpaden.map((leerpad) => (
          <li key={leerpad.id} className="card">
            <h3>{leerpad.titel}</h3>
            <p>{leerpad.beschrijving}</p>
            <button className="btn" onClick={() => handleDeleteLeerpad(leerpad.id)}>
              Verwijderen
            </button>
            <button className="btn" onClick={() => { setBewerken(true); bewerkLeerpad(leerpad.id); }}>
              Bewerken
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}