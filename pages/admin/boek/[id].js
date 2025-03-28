
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../../lib/supabase";
import { TextField, Button, Box } from '@mui/material';
import styles from "../../../styles/Admin.module.css";

export default function BookEdit() {
  const router = useRouter();
  const { id } = router.query;
  const isNew = id === 'new';

  const [formData, setFormData] = useState({
    titel: '',
    beschrijving: '',
    categorie: '',
    pdf_url: '',
    volgorde_nummer: ''
  });

  useEffect(() => {
    if (!isNew && id) {
      loadBoek();
    }
  }, [id]);

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
      await supabase.from("boeken").insert([formData]);
    } else {
      await supabase
        .from("boeken")
        .update(formData)
        .eq("id", id);
    }
    
    router.push("/admin-dashboard");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.container}>
      <h1>{isNew ? 'Nieuw Boek' : 'Boek Bewerken'}</h1>
      <Box component="form" onSubmit={handleSubmit} className={styles.form}>
        <TextField
          fullWidth
          label="Titel"
          name="titel"
          value={formData.titel}
          onChange={handleChange}
          margin="normal"
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
        <TextField
          fullWidth
          label="Categorie"
          name="categorie"
          value={formData.categorie}
          onChange={handleChange}
          margin="normal"
        />
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
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={styles.submitButton}
        >
          {isNew ? 'Toevoegen' : 'Opslaan'}
        </Button>
      </Box>
    </div>
  );
}
