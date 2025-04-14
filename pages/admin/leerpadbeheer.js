import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function LeerpadenBeheer() {
  const [leerpaden, setLeerpaden] = useState([]);
  const [boeken, setBoeken] = useState([]);
  const [geselecteerdeBoeken, setGeselecteerdeBoeken] = useState([]);
  const [nieuwLeerpad, setNieuwLeerpad] = useState({ titel: "", beschrijving: "" });

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
      setNieuwLeerpad({ titel: "", beschrijving: "" });
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

  return (
    <div className="container">
      <h1>Leerpaden Beheer</h1>
      <div className="card">
        <h2>Nieuw Leerpad</h2>
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
        <ul className="grid">
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
                className="grid"
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
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        <button className="btn" onClick={handleSaveLeerpad}>
          Opslaan
        </button>
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
          </li>
        ))}
      </ul>
    </div>
  );
}