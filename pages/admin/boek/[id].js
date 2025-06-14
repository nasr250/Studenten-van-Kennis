import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../../lib/supabase";
import { TextField, Button, Box, Select, MenuItem } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import styles from "../../../styles/Admin.module.css";

export default function BookEditPage() {
  const router = useRouter();
  const { id } = router.query;
  const isNew = id === "new";

  const [boek, setBoek] = useState({
    titel: "",
    beschrijving: "",
    categorie_id: "",
  });
  const [lessen, setLessen] = useState([]);
  const [lessenreeksen, setLessenreeksen] = useState([]);
  const [categories, setCategories] = useState([]);
  const [leraren, setLeraren] = useState([]);
  const [selectedLessenreeks, setSelectedLessenreeks] = useState(null);
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [newLessenreeks, setNewLessenreeks] = useState({
    titel: "",
    leraar_id: "",
  });

  useEffect(() => {
    const loadBoek = async () => {
      if (!isNew && id) {
        const { data } = await supabase
          .from("boeken")
          .select("*")
          .eq("id", id)
          .single();
        if (data) setBoek(data);
      }
    };
    loadBoek();
    loadLessenreeksen();
    loadCategories();
    loadLeraren();
  }, [id, isNew]);

  const loadCategories = async () => {
    const { data } = await supabase.from("categorieen").select("*");
    setCategories(data || []);
  };

  const loadLeraren = async () => {
    const { data } = await supabase.from("leraren").select("*");
    setLeraren(data || []);
  };

  const loadLessenreeksen = async () => {
    const { data } = await supabase
      .from("lessenreeksen")
      .select("*")
      .eq("boek_id", id);
    setLessenreeksen(data || []);
  };

  const loadLessen = async (lessenreeksId) => {
    const { data: lessonData } = await supabase
      .from("lessen")
      .select("*")
      .eq("lessenreeks_id", lessenreeksId)
      .order("volgorde_nummer", { ascending: true });
    setLessen(lessonData || []);
  };

  const handleLessenreeksSelect = (lessenreeksId) => {
    setSelectedLessenreeks(lessenreeksId);
    loadLessen(lessenreeksId);
  };

  const handleDeleteLessenreeks = async (lessenreeksId) => {
    if (
      window.confirm(
        "Weet je zeker dat je deze lessenreeks en alle bijbehorende lessen wilt verwijderen?"
      )
    ) {
      try {
        const { error: lessonsError } = await supabase
          .from("lessen")
          .delete()
          .eq("lessenreeks_id", lessenreeksId);

        if (lessonsError) {
          console.error("Error deleting lessons:", lessonsError);
          alert("Er is een fout opgetreden bij het verwijderen van de lessen.");
          return;
        }

        const { error: lessenreeksError } = await supabase
          .from("lessenreeksen")
          .delete()
          .eq("id", lessenreeksId);

        if (lessenreeksError) {
          console.error("Error deleting lessenreeks:", lessenreeksError);
          alert(
            "Er is een fout opgetreden bij het verwijderen van de lessenreeks."
          );
          return;
        }

        alert("Lessenreeks en bijbehorende lessen succesvol verwijderd.");
        loadLessenreeksen();
        setSelectedLessenreeks(null);
        setLessen([]);
      } catch (err) {
        console.error("Error:", err);
        alert(
          "Er is een fout opgetreden bij het verwijderen van de lessenreeks."
        );
      }
    }
  };

  const handleProcessPlaylist = async () => {
    const { titel, leraar_id } = newLessenreeks;

    if (!titel || !leraar_id || !playlistUrl) {
      alert("Vul alle velden in.");
      return;
    }

    try {
      const { data: lessenreeksData, error: lessenreeksError } = await supabase
        .from("lessenreeksen")
        .insert({
          titel,
          leraar_id,
          boek_id: id,
          playlist_url: playlistUrl,
        })
        .select()
        .single();

      if (lessenreeksError) throw lessenreeksError;

      const lessenreeksId = lessenreeksData.id;

      if (
        playlistUrl.includes("youtube.com") ||
        playlistUrl.includes("youtu.be")
      ) {
        const playlistId = playlistUrl.match(/[?&]list=([^&]+)/)?.[1];
        if (!playlistId) {
          alert("Ongeldige YouTube playlist URL");
          return;
        }

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
        );
        const data = await response.json();

        const newLessons = data.items.map((item, index) => ({
          titel: item.snippet.title,
          boek_id: id,
          les_url: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
          volgorde_nummer: index + 1,
          lessenreeks_id: lessenreeksId,
        }));

        const { error: lessonsError } = await supabase
          .from("lessen")
          .insert(newLessons);
        if (lessonsError) throw lessonsError;

        alert("Lessenreeks en lessen succesvol aangemaakt!");
      } else if (playlistUrl.includes("soundcloud.com")) {
        const res = await fetch(
          "/api/scrape?url=" + encodeURIComponent(playlistUrl)
        );
        const data = await res.json();

        if (!data.tracks) {
          throw new Error("Geen tracks gevonden in playlist");
        }

        const newLessons = data.tracks.map((track, index) => ({
          titel: track.title,
          boek_id: id,
          les_url: track.url,
          volgorde_nummer: index + 1,
          lessenreeks_id: lessenreeksId,
        }));

        const { error: lessonsError } = await supabase
          .from("lessen")
          .insert(newLessons);
        if (lessonsError) throw lessonsError;

        alert("Lessenreeks en lessen succesvol aangemaakt!");
      } else {
        alert("Voer een geldige YouTube of SoundCloud playlist URL in");
      }

      loadLessenreeksen();
    } catch (error) {
      console.error("Error processing playlist:", error);
      alert("Er is een fout opgetreden bij het verwerken van de playlist");
    }
  };

  const saveBoek = async () => {
    try {
      if (isNew) {
        const { error } = await supabase.from("boeken").insert(boek);
        if (error) throw error;
        alert("Boek succesvol aangemaakt!");
        router.push("/admin/boekenbeheer");
      } else {
        const { error } = await supabase.from("boeken").update(boek).eq("id", id).select();
        if (error) throw error;
      }
    } catch (error) {
      console.error("Error saving book:", error);
      alert("Er is een fout opgetreden bij het opslaan van het boek.");
    }
  };
  const handleDeleteLes = async (lesId) => {
    if (window.confirm("Weet je zeker dat je deze les wilt verwijderen?")) {
      try {
        const { error } = await supabase
          .from("lessen")
          .delete()
          .eq("id", lesId);
        if (error) throw error;
        alert("Les succesvol verwijderd."); 
        loadLessen(selectedLessenreeks);
      } catch (error) {
        console.error("Error deleting lesson:", error);
        alert("Er is een fout opgetreden bij het verwijderen van de les.");
      }
    }
    };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      saveBoek();
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [boek]);
  

  return (
    <div className={styles.container}>
      <h1>{isNew ? "Nieuw Boek" : "Boek Bewerken"}</h1>
      <Box component="form" className={styles.form}>
        <TextField
          fullWidth
          label="Titel"
          name="titel"
          value={boek.titel}
          onChange={(e) =>
            setBoek((prev) => ({ ...prev, titel: e.target.value }))
          }
          margin="normal"
        />
        <TextField
          fullWidth
          label="Beschrijving"
          name="beschrijving"
          value={boek.beschrijving}
          onChange={(e) =>
            setBoek((prev) => ({ ...prev, beschrijving: e.target.value }))
          }
          margin="normal"
          multiline
          rows={4}
        />
        <TextField
          fullWidth
          label="PDF URL"
          name="pdf_url"
          value={boek.pdf_url || ""}
          onChange={(e) =>
            setBoek((prev) => ({ ...prev, pdf_url: e.target.value }))
          }
        />
        <TextField
          fullWidth
          label="Externe URL"
          name="externe_url"
          value={boek.externe_url || ""}
          onChange={(e) =>
            setBoek((prev) => ({ ...prev, externe_url: e.target.value }))
          }
        />
        <Select
          fullWidth
          name="categorie_id"
          value={boek.categorie_id}
          onChange={(e) =>
            setBoek((prev) => ({ ...prev, categorie_id: e.target.value }))
          }
          margin="normal"
        >
          {categories.map((cat) => (
            <MenuItem key={cat.id} value={cat.id}>
              {cat.naam}
            </MenuItem>
          ))}
        </Select>
        <Button
          variant="contained"
          color="primary"
          onClick={saveBoek}
        >
          Opslaan
        </Button>
      </Box>

      <Box sx={{ mt: 4, mb: 2 }}>
        <h3>Nieuwe Lessenreeks Toevoegen</h3>
        <TextField
          fullWidth
          label="Titel"
          value={newLessenreeks.titel}
          onChange={(e) =>
            setNewLessenreeks((prev) => ({ ...prev, titel: e.target.value }))
          }
          sx={{ mb: 2 }}
        />
        <Select
          fullWidth
          value={newLessenreeks.leraar_id}
          onChange={(e) =>
            setNewLessenreeks((prev) => ({ ...prev, leraar_id: e.target.value }))
          }
          displayEmpty
          sx={{ mb: 2 }}
        >
          <MenuItem value="" disabled>
            Selecteer een Leraar
          </MenuItem>
          {leraren.map((leraar) => (
            <MenuItem key={leraar.id} value={leraar.id}>
              {leraar.naam}
            </MenuItem>
          ))}
        </Select>
        <TextField
          fullWidth
          label="Playlist URL (YouTube/SoundCloud)"
          variant="outlined"
          sx={{ mb: 2 }}
          onChange={(e) => setPlaylistUrl(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleProcessPlaylist}
        >
          Lessenreeks en Playlist Verwerken
        </Button>
      </Box>

      <Box sx={{ height: 400, width: "100%", mt: 4 }}>
        <h3>Lessenreeksen</h3>
        <DataGrid
          rows={lessenreeksen}
          columns={[
            { field: "id", headerName: "ID", width: 90 },
            { field: "titel", headerName: "Titel", width: 200, editable: true },
            { field: "playlist_url", headerName: "Playlist URL", width: 250, editable: true },
            {
              field: "actions",
              headerName: "Acties",
              width: 150,
              renderCell: (params) => (
                <div>
                  <Button
                    color="error"
                    onClick={() => handleDeleteLessenreeks(params.row.id)}
                  >
                    Verwijderen
                  </Button>
                </div>
              ),
            },
          ]}
          pageSize={5}
          rowsPerPageOptions={[5]}
          getRowId={(row) => row.id}
          onRowClick={(params) => handleLessenreeksSelect(params.row.id)} // Zorg dat dit correct is
        />

      </Box>
      {selectedLessenreeks && (
        <Box sx={{ height: 400, width: "100%", mt: 4, marginTop: "70px"}}>
          <h3>Lessen van Geselecteerde Lessenreeks</h3>
          <DataGrid
            rows={lessen}
            columns={[
              { field: "id", headerName: "ID", width: 90 },
              { field: "titel", headerName: "Titel", width: 200, editable: true },
              { field: "les_url", headerName: "Les URL", width: 250, editable: true },
              { field: "volgorde_nummer", headerName: "Volgorde Nummer", width: 150 },
              {
                field: "actions",
                headerName: "Acties",
                width: 150,
                renderCell: (params) => (
                  <div>
                    <Button
                      color="error"
                      onClick={() => handleDeleteLes(params.row.id)}
                    >
                      Verwijderen
                    </Button>
                  </div>
                ),
              },
            ]}
            pageSize={5}
            rowsPerPageOptions={[5]}
            getRowId={(row) => row.id}
            processRowUpdate={async (updatedRow, oldRow) => {
              // Update in Supabase
              const { error } = await supabase
                .from("lessen")
                .update({
                  titel: updatedRow.titel,
                  les_url: updatedRow.les_url,
                  volgorde_nummer: updatedRow.volgorde_nummer,
                })
                .eq("id", updatedRow.id);
              if (error) {
                alert("Fout bij opslaan: " + error.message);
                return oldRow; // revert change
              }
              return updatedRow;
            }}
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      )}
    </div>
  );
}
