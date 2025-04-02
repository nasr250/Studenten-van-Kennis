import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import styles from "../styles/Progress.module.css";
import Modal from "../components/Modal";

export default function VoortgangPage() {
  const [voortgangData, setVoortgangData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [toetsResultaten, setToetsResultaten] = useState([]); // Store test results
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("Alle");
  const [sortOption, setSortOption] = useState("titel");
  const [selectedLessenreeks, setSelectedLessenreeks] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        fetchVoortgang(user.id);
        fetchToetsResultaten(user.id); // Fetch test results
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    applyFiltersAndSorting();
  }, [voortgangData, filter, sortOption]);

  const fetchVoortgang = async (userId) => {
    if (!userId) return;

    try {
      console.log("Fetching lessenreeksen...");
      const { data: lessenreeksen } = await supabase.from("lessenreeksen").select("*");
      console.log("Lessenreeksen fetched:", lessenreeksen);

      console.log("Fetching voortgang...");
      const { data: voortgang } = await supabase
        .from("voortgang")
        .select("*")
        .eq("gebruiker_id", userId);
      console.log("Voortgang fetched:", voortgang);

      console.log("Fetching notities...");
      const { data: notities } = await supabase
        .from("les_notities")
        .select("les_id, notitie")
        .eq("gebruiker_id", userId);
      console.log("Notities fetched:", notities);

      console.log("Fetching toetsen...");
      const { data: toetsen } = await supabase
        .from("toetsen")
        .select("id, type, les_id, lessenreeks_id, titel");
      console.log("Toetsen fetched:", toetsen);

      console.log("Fetching lessen...");
      const { data: lessen } = await supabase
        .from("lessen")
        .select("id, lessenreeks_id");
      console.log("Lessen fetched:", lessen);

      console.log("Fetching toetsresultaten...");
      const { data: resultaten } = await supabase
        .from("toets_resultaten")
        .select("toets_id, score, totaal_vragen, voltooid_op")
        .eq("gebruiker_id", userId);
      console.log("Toetsresultaten fetched:", resultaten);

      console.log("Combining data per lessenreeks...");
      const dataPerLessenreeks = lessenreeksen.map((lessenreeks) => {
        // Filter lessen die bij deze lessenreeks horen
        const lessenInReeks = lessen.filter((les) => les.lessenreeks_id === lessenreeks.id);

        console.log("Lessen in reeks:", lessenInReeks);
        // Filter voortgang voor lessen in deze lessenreeks
        const voortgangInReeks = voortgang.filter((v) =>
            v.bekeken_lessons &&
            v.boek_id === lessenreeks.boek_id &&
            v.lessenreeks_id === lessenreeks.id && // Ensure it matches the specific series
            v.bekeken_lessons.some((lesId) => lessenInReeks.some((les) => les.id === lesId))
        );
        console.log("Voortgang in reeks:", voortgangInReeks);
        // Check if any lesson in the series has been viewed
        const gestart = voortgangInReeks.some((v) => v.bekeken_lessons.length > 0);
        
        // Filter toetsen die bij deze lessenreeks horen
        const toetsenInReeks = toetsen.filter((toets) => toets.lessenreeks_id === lessenreeks.id);

        // Filter notities voor lessen in deze lessenreeks
        const notitiesInReeks = notities.filter((notitie) =>
          lessenInReeks.some((les) => les.id === notitie.les_id)
        );

        // Filter toetsresultaten voor toetsen in deze lessenreeks
        const resultatenInReeks = resultaten.filter((resultaat) =>
          toetsenInReeks.some((toets) => toets.id === resultaat.toets_id)
        );

        // Bereken totale lessen en voltooide lessen
        const totaleLessen = lessenInReeks.length;
        const voltooideLessen = voortgangInReeks.reduce((count, v) => count + v.voltooide_lessons.length, 0);

        return {
          id: lessenreeks.id,
          titel: lessenreeks.titel,
          totaleLessen,
          voltooideLessen,
          voortgangPercentage:
            totaleLessen > 0 ? Math.round((voltooideLessen / totaleLessen) * 100) : 0,
          gestart, // Mark as started if any lesson is viewed
          toetsen: toetsenInReeks,
          notities: notitiesInReeks,
          resultaten: resultatenInReeks,
        };
      });

      console.log("Final data per lessenreeks:", dataPerLessenreeks);
      setVoortgangData(dataPerLessenreeks);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching voortgang:", error);
      setLoading(false);
    }
  };

  const fetchToetsResultaten = async (userId) => {
    if (!userId) return;

    try {
      const { data: resultaten } = await supabase
        .from('toets_resultaten')
        .select('toets_id, score, totaal_vragen, voltooid_op')
        .eq('gebruiker_id', userId);

      setToetsResultaten(resultaten || []);
    } catch (error) {
      console.error('Error fetching toets resultaten:', error);
    }
  };

  const getVoortgangStatus = (voltooid, bekeken, totaal) => {
    if (voltooid === totaal) return 'Voltooid';
    if (bekeken > 0) return 'In progress';
    return 'Nog niet gestart';
  };

  const getStatusKleur = (status) => {
    switch (status) {
      case 'Voltooid': return '#4CAF50';
      case 'In progress': return '#FFA726';
      default: return '#9E9E9E';
    }
  };

  const applyFiltersAndSorting = () => {
    let data = [...voortgangData];

    if (filter !== "Alle") {
      data = data.filter((lessenreeks) => {
        const voortgangPercentage = lessenreeks.voortgangPercentage;
        if (filter === "Voltooid") return voortgangPercentage === 100;
        if (filter === "In progress") return lessenreeks.gestart && voortgangPercentage < 100;
        if (filter === "Nog niet gestart") return !lessenreeks.gestart;
        return true;
      });
    }

    if (sortOption === "titel") {
      data.sort((a, b) => a.titel.localeCompare(b.titel));
    } else if (sortOption === "voortgang") {
      data.sort((a, b) => b.voortgangPercentage - a.voortgangPercentage);
    }

    setFilteredData(data);
  };

  const openModal = (lessenreeks) => {
    setSelectedLessenreeks(lessenreeks);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedLessenreeks(null);
    setIsModalOpen(false);
  };

  if (loading) return <div className={styles.container}>Laden...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mijn Voortgang</h1>
      <div className={styles.filters}>
        <select
          className={styles.filterDropdown}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="Alle">Alle</option>
          <option value="Voltooid">Voltooid</option>
          <option value="In progress">In progress</option>
          <option value="Nog niet gestart">Nog niet gestart</option>
        </select>
        <select
          className={styles.filterDropdown}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="titel">Sorteer op Titel</option>
          <option value="voortgang">Sorteer op Voortgang</option>
        </select>
      </div>
      <div className={styles.progressGrid}>
        {filteredData.map((lessenreeks) => (
          <div
            key={lessenreeks.id}
            className={styles.progressCard}
            onClick={() => openModal(lessenreeks)}
          >
            <h3>{lessenreeks.titel}</h3>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${lessenreeks.voortgangPercentage}%`,
                  backgroundColor: getStatusKleur(lessenreeks.voortgangPercentage),
                }}
              />
            </div>
            <p>
              <strong>Voortgang:</strong> {lessenreeks.voltooideLessen} van{" "}
              {lessenreeks.totaleLessen} lessen voltooid
            </p>
            {lessenreeks.gestart && <p className={styles.startedText}>Gestart</p>}
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} lessenreeks={selectedLessenreeks} />
    </div>
  );
}
