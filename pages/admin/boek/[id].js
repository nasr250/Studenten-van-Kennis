import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../../lib/supabase";
import { TextField, Button, Box } from "@mui/material";
import styles from "../../../styles/Admin.module.css";

export default function BookEdit() {
  const router = useRouter();
  const { id } = router.query;
  const isNew = id === "new";

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
    }
  }, [id]);

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
    </div>
  );
}
