import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../../lib/supabase";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Box, Typography, Stack, TextField, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, InputLabel, FormControl } from "@mui/material";

export default function ToetsVragenBeheer() {
  const router = useRouter();
  const { id } = router.query; // Haal toets ID uit de URL
  const [vragen, setVragen] = useState([]);
  const [openQuestionDialog, setOpenQuestionDialog] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    vraag: "",
    opties: ["", "", "", ""],
    correctAntwoord: "",
  });

  // Haal vragen op
  useEffect(() => {
    if (id) fetchVragen();
  }, [id]);

  const fetchVragen = async () => {
    const { data, error } = await supabase
      .from("toets_vragen")
      .select(`
        id,
        vraag,
        opties,
        juiste_optie
      `)
      .eq("toets_id", id);

    if (error) {
      console.error("Fout bij ophalen vragen:", error);
    } else {
      setVragen(data || []);
    }
  };

  // Opslaan van een nieuwe meerkeuzevraag
  const handleSaveQuestion = async () => {
    if (!newQuestion.vraag || !newQuestion.correctAntwoord) {
      alert("Vul de vraag en het correcte antwoord in.");
      return;
    }

    const vraagData = {
      toets_id: id,
      vraag: newQuestion.vraag,
      opties: newQuestion.opties,
      juiste_optie: newQuestion.correctAntwoord,
    };

    const { error } = await supabase.from("toets_vragen").insert(vraagData);
    if (error) {
      console.error("Fout bij toevoegen vraag:", error);
      alert("Er is een fout opgetreden bij het toevoegen van de vraag.");
    } else {
      fetchVragen();
      alert("Vraag succesvol toegevoegd.");
      setOpenQuestionDialog(false);
      setNewQuestion({ vraag: "", opties: ["", "", "", ""], correctAntwoord: "" });
    }
  };

  const handleAddOption = () => {
    setNewQuestion({ ...newQuestion, opties: [...newQuestion.opties, ""] });
  };

  // UI voor de DataGrid kolommen
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "vraag", headerName: "Vraag", width: 300 },
    { field: "juiste_optie", headerName: "Correct Antwoord", width: 300 },
    {
      field: "actions",
      headerName: "Acties",
      width: 200,
      renderCell: (params) => (
        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => handleDeleteVraag(params.row.id)}
            variant="contained"
            color="error"
            size="small"
          >
            Verwijderen
          </Button>
        </Stack>
      ),
    },
  ];

  const handleDeleteVraag = async (vraagId) => {
    const { error } = await supabase.from("toets_vragen").delete().eq("id", vraagId);
    if (error) {
      console.error("Fout bij verwijderen vraag:", error);
    } else {
      setVragen(vragen.filter((vraag) => vraag.id !== vraagId));
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Vragen Beheer
      </Typography>

      {/* DataGrid */}
      <Box sx={{ height: 650, width: "100%", marginBottom: 2 }}>
        <DataGrid
          rows={vragen}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5, 10, 25]}
          checkboxSelection={false}
          disableSelectionOnClick
          getRowId={(row) => row.id}
        />
      </Box>

      {/* Knop voor meerkeuzevraag aanmaken */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenQuestionDialog(true)}
        sx={{ marginBottom: 2 }}
      >
        Nieuwe Meerkeuzevraag Aanmaken
      </Button>

      {/* Dialog voor meerkeuzevraag aanmaken */}
      <Dialog open={openQuestionDialog} onClose={() => setOpenQuestionDialog(false)}>
        <DialogTitle>Nieuwe Meerkeuzevraag Aanmaken</DialogTitle>
        <DialogContent>
          <TextField
            label="Vraag"
            fullWidth
            margin="normal"
            value={newQuestion.vraag}
            onChange={(e) => setNewQuestion({ ...newQuestion, vraag: e.target.value })}
          />
          {newQuestion.opties.map((optie, index) => (
            <TextField
              key={index}
              label={`Optie ${index + 1}`}
              fullWidth
              margin="normal"
              value={optie}
              onChange={(e) => {
                const updatedOptions = [...newQuestion.opties];
                updatedOptions[index] = e.target.value;
                setNewQuestion({ ...newQuestion, opties: updatedOptions });
              }}
            />
          ))}
          <Button
            variant="outlined"
            color="primary"
            onClick={handleAddOption}
            sx={{ marginTop: 2 }}
          >
            Optie Toevoegen
          </Button>
          <FormControl fullWidth margin="normal">
            <InputLabel>Correct Antwoord</InputLabel>
            <Select
              value={newQuestion.correctAntwoord}
              onChange={(e) => setNewQuestion({ ...newQuestion, correctAntwoord: e.target.value })}
            >
              {newQuestion.opties.map((optie, index) => (
                <MenuItem key={index} value={optie}>
                  {optie || `Optie ${index + 1}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenQuestionDialog(false)} color="secondary">
            Annuleren
          </Button>
          <Button onClick={handleSaveQuestion} color="primary">
            Opslaan
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
