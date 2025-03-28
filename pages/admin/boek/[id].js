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

  const [boek, setBoek] = useState({ titel: "", beschrijving: "", categorie_id: "" });
  const [lessen, setLessen] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newLesson, setNewLesson] = useState({
    titel: "",
    les_url: "",
    volgorde_nummer: 1,
  });
  const [playlistUrl, setPlaylistUrl] = useState("");

  useEffect(() => {
    const loadBoek = async () => {
      if (!isNew && id) {
        const { data } = await supabase
          .from("boeken")
          .select("*")
          .eq("id", id)
          .single();
        if (data) setBoek(data);

        const { data: lessonData } = await supabase
          .from("lessen")
          .select("*")
          .eq("boek_id", id)
          .order("volgorde_nummer", { ascending: true });
        setLessen(lessonData || []);
      }
    };

    loadBoek();
    loadCategories();
  }, [id, isNew]);

  const loadCategories = async () => {
    const { data } = await supabase.from("categorieen").select("*");
    setCategories(data || []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isNew) {
        await supabase.from("boeken").insert(boek);
      } else {
        await supabase
          .from("boeken")
          .update(boek)
          .eq("id", id);
      }
      router.push("/admin-dashboard");
    } catch (error) {
      console.error("Error saving book:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoek((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProcessPlaylist = async () => {
    if (!playlistUrl) return;

    try {
      // Extract video IDs from playlist URL
      let playlistId = "";
      if (
        playlistUrl.includes("youtube.com") ||
        playlistUrl.includes("youtu.be")
      ) {
        playlistId = playlistUrl.match(/[?&]list=([^&]+)/)?.[1];
        if (!playlistId) {
          alert("Ongeldige YouTube playlist URL");
          return;
        }

        // Fetch playlist data from YouTube API
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`,
        );
        const data = await response.json();

        // Create lessons from playlist items
        const newLessons = data.items.map((item, index) => ({
          id: `temp_${Date.now()}_${index}`, // Add temporary ID
          titel: item.snippet.title,
          les_url: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
          volgorde_nummer: index + 1,
          boek_id: id,
        }));

        // Insert all lessons into database
        const { error } = await supabase.from("lessen").insert(newLessons);

        if (error) throw error;

        // Update local state
        setLessen((prev) => [...prev, ...newLessons]);
        alert("Lessen succesvol aangemaakt van playlist!");
      } else if (playlistUrl.includes("soundcloud.com/sets/")) {
        // Call the function to fetch playlist data
        const tracks = await fetchPlaylistData(playlistUrl);
        const newLessons = tracks.map((track, index) => ({
          id: `temp_${Date.now()}_${index}`, // Add a unique temporary ID
          titel: track.title,
          les_url: track.permalink_url, // URL to the SoundCloud track
          volgorde_nummer: index + 1,
          boek_id: id,
        }));

        // Insert all lessons into the database
        const { error } = await supabase.from("lessen").insert(newLessons);

        if (error) throw error;

        // Update local state
        setLessen((prev) => [...prev, ...newLessons]);
        alert("Lessen succesvol aangemaakt van SoundCloud playlist!");
      } else {
        alert("Voer een geldige YouTube of SoundCloud playlist URL in");
      }
    } catch (error) {
      console.error("Error processing playlist:", error);
      alert("Er is een fout opgetreden bij het verwerken van de playlist");
    }
  };

  async function fetchPlaylistData(url) {
    try {
      const { data: html } = await axios.get(url);
      const $ = cheerio.load(html);
      const pageDataScript = $(
        'script:contains("window.__sc_hydration")',
      ).html();
      const matches = pageDataScript.match(/window\.__sc_hydration = (.*);/);

      if (matches && matches[1]) {
        const scData = JSON.parse(matches[1]);
        const tracks = scData.find((item) => item.hydration?.data?.tracks)
          ?.hydration?.data?.tracks;

        if (!tracks) throw new Error("Geen tracks gevonden in playlist");

        return tracks.map((track) => ({
          title: track.title,
          permalink_url: track.permalink_url,
        }));
      }
      throw new Error("Geen playlist data gevonden");
    } catch (error) {
      console.error("Error scraping playlist:", error);
      throw new Error("Kon playlist niet laden");
    }
  }


  const handleAddLesson = async () => {
    const { error } = await supabase
      .from("lessen")
      .insert({ ...newLesson, boek_id: id });
    if (!error) {
      setLessen((prev) => [
        ...prev,
        { ...newLesson, id: Math.random().toString() },
      ]); // Temporary ID for local display
      setNewLesson({ titel: "", les_url: "", volgorde_nummer: 1 });
    }
  };

  const handleDeleteLesson = async (lessonId) => {
    const { error } = await supabase
      .from("lessen")
      .delete()
      .eq("id", lessonId);
    if (!error) {
      setLessen((prev) => prev.filter((les) => les.id !== lessonId));
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "titel", headerName: "Titel", width: 200 },
    { field: "les_url", headerName: "Les URL", width: 200 },
    { field: "volgorde_nummer", headerName: "Volgorde Nummer", width: 150 },
    {
      field: "actions",
      headerName: "Acties",
      width: 200,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={() => handleDeleteLesson(params.row.id)}
        >
          Verwijderen
        </Button>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <h1>{isNew ? "Nieuw Boek" : "Boek Bewerken"}</h1>
      <Box component="form" onSubmit={handleSubmit} className={styles.form}>
        <TextField
          fullWidth
          label="Titel"
          name="titel"
          value={boek.titel}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Beschrijving"
          name="beschrijving"
          value={boek.beschrijving}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={4}
        />
        <Select
          fullWidth
          label="Categorie"
          name="categorie_id"
          value={boek.categorie_id}
          onChange={handleChange}
          margin="normal"
        >
          {categories.map((cat) => (
            <MenuItem key={cat.id} value={cat.id}>
              {cat.naam}
            </MenuItem>
          ))}
        </Select>
        <Button type="submit" variant="contained" color="primary">
          {isNew ? "Toevoegen" : "Opslaan"}
        </Button>
      </Box>

      <Box sx={{ mt: 4, mb: 2 }}>
        <h3>Playlist Toevoegen</h3>
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
          sx={{ mr: 2 }}
        >
          Playlist Verwerken
        </Button>
      </Box>

      <Box component="form">
        <input
          type="text"
          placeholder="Titel"
          value={newLesson.titel}
          onChange={(e) =>
            setNewLesson({ ...newLesson, titel: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Les URL"
          value={newLesson.les_url}
          onChange={(e) =>
            setNewLesson({ ...newLesson, les_url: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Volgorde Nummer"
          value={newLesson.volgorde_nummer}
          onChange={(e) =>
            setNewLesson({
              ...newLesson,
              volgorde_nummer: Number(e.target.value),
            })
          }
        />
        <Button variant="contained" onClick={handleAddLesson}>
          Voeg Les Toe
        </Button>
      </Box>

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={lessen}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          getRowId={(row) => row.id}
        />
      </Box>
    </div>
  );
}