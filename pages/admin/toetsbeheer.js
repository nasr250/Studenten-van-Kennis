import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import styles from "../../styles/Admin.module.css";

export default function ToetsBeheer() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [vragen, setVragen] = useState([]);
  const [newVraag, setNewVraag] = useState("");
  const [newOpties, setNewOpties] = useState(["", "", "", ""]);
  const [juisteOptie, setJuisteOptie] = useState("");
  const [type, setType] = useState("les");
  const [id, setId] = useState("");
  const [boeken, setBoeken] = useState([]);
  const [lessen, setLessen] = useState([]);
  const [lessenreeksen, setLessenreeksen] = useState([]); // New state for lesson series
  const [selectedLessenreeks, setSelectedLessenreeks] = useState(""); // Selected lesson series
  const [editVraag, setEditVraag] = useState(null); // State for editing a question

  useEffect(() => {
    const checkAdmin = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { data } = await supabase
        .from("admins")
        .select("*")
        .eq("user_id", user.id)
        .single();

      setIsAdmin(!!data);
    };

    checkAdmin();
  }, []);

  useEffect(() => {
    const loadBoeken = async () => {
      const { data } = await supabase.from("boeken").select("*");
      setBoeken(data || []);
    };

    loadBoeken();
  }, []);

  const loadLessen = async (boekId) => {
    const { data } = await supabase.from("lessen").select("*").eq("boek_id", boekId);
    setLessen(data || []);
  };

  const loadLessenForLessenreeks = async (lessenreeksId) => {
    const { data } = await supabase.from("lessen").select("*").eq("lessenreeks_id", lessenreeksId);
    setLessen(data || []);
  };

  useEffect(() => {
    const loadLessenreeksen = async (boekId) => {
      const { data } = await supabase.from("lessenreeksen").select("*").eq("boek_id", boekId);
      setLessenreeksen(data || []);
    };

    if (id) {
      loadLessenreeksen(id);
    }
  }, [id]);

  useEffect(() => {
    if (selectedLessenreeks) {
      loadLessenForLessenreeks(selectedLessenreeks);
    } else {
      setLessen([]); // Clear lessons if no "lessenreeks" is selected
    }
  }, [selectedLessenreeks]);

  const handleBoekChange = (boekId) => {
    setId(boekId);
    if (type === "les") {
      loadLessen(boekId);
    }
  };

  const loadVragen = async () => {
    const table = type === "les" ? "les_toetsen" : "eind_toetsen";
    const column = type === "les" ? "les_id" : "boek_id";

    const { data } = await supabase.from(table).select("*").eq(column, id);
    setVragen(data || []);
  };

  const handleAddVraag = async () => {
    const table = type === "les" ? "les_toetsen" : "eind_toetsen";
    const column = type === "les" ? "les_id" : "boek_id";

    await supabase.from(table).insert({
      vraag: newVraag,
      opties: newOpties,
      juiste_optie: juisteOptie,
      [column]: id,
    });

    loadVragen();
    setNewVraag("");
    setNewOpties(["", "", "", ""]);
    setJuisteOptie("");
  };

  const handleUpdateVraag = async () => {
    if (!editVraag || !editVraag.vraag || !editVraag.opties || !editVraag.juiste_optie) {
      alert("Vul alle velden in om de vraag bij te werken.");
      return;
    }

    const table = type === "les" ? "les_toetsen" : "eind_toetsen";
    await supabase.from(table).update({
      vraag: editVraag.vraag,
      opties: editVraag.opties,
      juiste_optie: editVraag.juiste_optie,
    }).eq("id", editVraag.id);

    loadVragen();
    setEditVraag(null);
  };

  const handleEditVraagChange = (field, value) => {
    setEditVraag((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreateEindToets = async () => {
    if (!id) {
      alert("Selecteer een lessenreeks om een eindtoets te maken.");
      return;
    }

    const { error } = await supabase.from("eind_toetsen").insert({
      boek_id: id,
    });

    if (error) {
      alert("Fout bij het maken van de eindtoets.");
    } else {
      alert("Eindtoets succesvol aangemaakt.");
    }
  };

  const handleCreateLesToets = async () => {
    if (!id) {
      alert("Selecteer een les om een lestoets te maken.");
      return;
    }

    const { error } = await supabase.from("les_toetsen").insert({
      les_id: id,
    });

    if (error) {
      alert("Fout bij het maken van de lestoets.");
    } else {
      alert("Lestoets succesvol aangemaakt.");
    }
  };

  if (!isAdmin) {
    return <p>Toegang geweigerd. Alleen admins kunnen deze pagina bekijken.</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Toetsbeheer</h1>
      <div className={styles.form}>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="les">Les Toets</option>
          <option value="boek">Eindtoets</option>
        </select>
        <select
          value={id}
          onChange={(e) => handleBoekChange(e.target.value)}
        >
          <option value="">Selecteer Boek</option>
          {boeken.map((boek) => (
            <option key={boek.id} value={boek.id}>
              {boek.titel}
            </option>
          ))}
        </select>
        {id && (
          <select
            value={selectedLessenreeks}
            onChange={(e) => setSelectedLessenreeks(e.target.value)}
          >
            <option value="">Selecteer Lessenreeks</option>
            {lessenreeksen.map((reeks) => (
              <option key={reeks.id} value={reeks.id}>
                {reeks.titel}
              </option>
            ))}
          </select>
        )}
        {type === "les" && selectedLessenreeks && (
          <select
            value={id}
            onChange={(e) => setId(e.target.value)}
          >
            <option value="">Selecteer Les</option>
            {lessen
              .filter((les) => les.lessenreeks_id === selectedLessenreeks) // Filter lessons by selected "lessenreeks"
              .map((les) => (
                <option key={les.id} value={les.id}>
                  {les.titel}
                </option>
              ))}
          </select>
        )}
        {((type === "boek" && selectedLessenreeks) || (type === "les" && id)) && (
          <>
            <button onClick={loadVragen}>Vragen Laden</button>
            {type === "boek" && (
              <button onClick={handleCreateEindToets}>Eindtoets Maken</button>
            )}
            {type === "les" && (
              <button onClick={handleCreateLesToets}>Lestoets Maken</button>
            )}
          </>
        )}
      </div>
      {((type === "boek" && selectedLessenreeks) || (type === "les" && id)) && (
        <div className={styles.form}>
          <h2>Nieuwe Vraag Toevoegen</h2>
          <input
            type="text"
            placeholder="Vraag"
            value={newVraag}
            onChange={(e) => setNewVraag(e.target.value)}
          />
          {newOpties.map((optie, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Optie ${index + 1}`}
              value={optie}
              onChange={(e) => {
                const updatedOpties = [...newOpties];
                updatedOpties[index] = e.target.value;
                setNewOpties(updatedOpties);
              }}
            />
          ))}
          <input
            type="text"
            placeholder="Juiste Optie"
            value={juisteOptie}
            onChange={(e) => setJuisteOptie(e.target.value)}
          />
          <button onClick={handleAddVraag}>Vraag Toevoegen</button>
        </div>
      )}
      {((type === "boek" && selectedLessenreeks) || (type === "les" && id)) && (
        <div>
          <h2>Bestaande Vragen</h2>
          {vragen.map((vraag) => (
            <div key={vraag.id} className={styles.questionCard}>
              {editVraag?.id === vraag.id ? (
                <>
                  <input
                    type="text"
                    value={editVraag.vraag}
                    onChange={(e) => handleEditVraagChange("vraag", e.target.value)}
                  />
                  {editVraag.opties.map((optie, index) => (
                    <input
                      key={index}
                      type="text"
                      value={optie}
                      onChange={(e) => {
                        const updatedOpties = [...editVraag.opties];
                        updatedOpties[index] = e.target.value;
                        handleEditVraagChange("opties", updatedOpties);
                      }}
                    />
                  ))}
                  <input
                    type="text"
                    value={editVraag.juiste_optie}
                    onChange={(e) => handleEditVraagChange("juiste_optie", e.target.value)}
                  />
                  <button onClick={handleUpdateVraag}>Opslaan</button>
                  <button onClick={() => setEditVraag(null)}>Annuleren</button>
                </>
              ) : (
                <>
                  <p>{vraag.vraag}</p>
                  <ul>
                    {vraag.opties.map((optie, index) => (
                      <li key={index}>{optie}</li>
                    ))}
                  </ul>
                  <p>Juiste Optie: {vraag.juiste_optie}</p>
                  <button onClick={() => setEditVraag(vraag)}>Bewerken</button>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
