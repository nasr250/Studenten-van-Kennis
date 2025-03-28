import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../../lib/supabase";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, Button, Box } from "@mui/material";
import styles from "../../../styles/Admin.module.css";

export default function BookEdit() {
  const router = useRouter();
  const { id } = router.query;
  const isNew = id === "new";
  const [lessen, setLessen] = useState([]);
  const [newLesson, setNewLesson] = useState({
    titel: "",
    les_url: "",
    volgorde_nummer: 1,
  });
  const [formData, setFormData] = useState({
    titel: "",
    beschrijving: "",
    categorie_id: "",
    pdf_url: "",
    volgorde_nummer: "",
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
    if (!isNew && id) {
      loadBoek();
      loadLessen();
    }
  }, [id]);

  const loadLessen = async () => {
    const { data: lessonData } = await supabase
      .from("lessen")
      .select("*")
      .eq("boek_id", id)
      .order("volgorde_nummer", { ascending: true });
    setLessen(lessonData || []);
  };
  const loadCategories = async () => {
    const { data, error } = await supabase.from("categorieen").select("*");
    if (data) {
      setCategories(data);
    }
    if (error) {
      console.error("Error loading categories:", error);
    }
  };

  const loadBoek = async () => {
    const { data } = await supabase
      .from("boeken")
      .select("*")
      .eq("id", id)
      .single();

    if (data) {
      setFormData(data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isNew) {
      const { error } = await supabase.from("boeken").insert(formData);
      if (error) console.error("Error adding book:", error);
    } else {
      const { error } = await supabase
        .from("boeken")
        .update(formData)
        .eq("id", id);
      if (error) console.error("Error updating book:", error);
    }

    router.push("/admin-dashboard");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
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
    const { error } = await supabase.from("lessen").delete().eq("id", lessonId);
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
          value={formData.titel}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Beschrijving"
          name="beschrijving"
          value={formData.beschrijving}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={4}
        />
        <select
          name="categorie_id"
          value={formData.categorie_id}
          onChange={handleChange}
          className={styles.select}
          required
        >
          <option value="" disabled>
            Kies een categorie
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.naam}
            </option>
          ))}
        </select>
        <TextField
          fullWidth
          label="PDF URL"
          name="pdf_url"
          value={formData.pdf_url}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Volgorde Nummer"
          name="volgorde_nummer"
          type="number"
          value={formData.volgorde_nummer}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={styles.submitButton}
        >
          {isNew ? "Toevoegen" : "Opslaan"}
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
          getRowId={(row) => row.id} // Zorg ervoor dat dit onder de rows is
        />
      </Box>
    </div>
  );
}
