import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Box, Typography, Stack, Toolbar, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { useRouter } from "next/router";

export default function ToetsBeheer() {
  const [toetsen, setToetsen] = useState([]);
  const [filteredToetsen, setFilteredToetsen] = useState([]);
  const [selectedToets, setSelectedToets] = useState(null); // Geselecteerde toets
  const [filterType, setFilterType] = useState("all"); // Filter voor toetsen
  const [openDialog, setOpenDialog] = useState(false); // Dialog state for creating a new test
  const [newToets, setNewToets] = useState({ titel: "", type: "les", aantal_vragen: 0 });
  const [categories, setCategories] = useState([]);
  const [boeken, setBoeken] = useState([]);
  const [lessenreeksen, setLessenreeksen] = useState([]);
  const [lessen, setLessen] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBoek, setSelectedBoek] = useState("");
  const [selectedLessenreeks, setSelectedLessenreeks] = useState("");
  const [selectedLes, setSelectedLes] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterBoek, setFilterBoek] = useState("");
  const [filterLessenreeks, setFilterLessenreeks] = useState("");
  const [filterLes, setFilterLes] = useState("");
  const router = useRouter();

  // Kolommen voor de DataGrid
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "titel", headerName: "Titel", width: 200 },
    { field: "type", headerName: "Type", width: 130 },
    { field: "aantal_vragen", headerName: "Aantal Vragen", width: 150 },
    { field: "categorie_naam", headerName: "Categorie", width: 150 },
    { field: "boek_titel", headerName: "Boek", width: 150 },
    { field: "lessenreeks_titel", headerName: "Lessenreeks", width: 150 },
    { field: "les_titel", headerName: "Les", width: 150 },
    {
      field: "actions",
      headerName: "Acties",
      width: 300,
      renderCell: (params) => (
        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => handleSelectToets(params.row)}
            variant="contained"
            color="primary"
            size="small"
          >
            Beheer
          </Button>
          <Button
            onClick={() => handleDeleteToets(params.row.id)}
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

  // Haal toetsen op
  useEffect(() => {
    const fetchToetsen = async () => {
      try {
        // Fetch toetsen
        const { data: toetsenData, error: toetsenError } = await supabase.from("toetsen").select("*");
        if (toetsenError) throw toetsenError;

        // Fetch lessen
        const { data: lessenData, error: lessenError } = await supabase.from("lessen").select("*");
        if (lessenError) throw lessenError;

        // Fetch lessenreeksen
        const { data: lessenreeksenData, error: lessenreeksenError } = await supabase
          .from("lessenreeksen")
          .select("*");
        if (lessenreeksenError) throw lessenreeksenError;

        // Fetch boeken
        const { data: boekenData, error: boekenError } = await supabase.from("boeken").select("*");
        if (boekenError) throw boekenError;

        // Fetch categorieen
        const { data: categorieenData, error: categorieenError } = await supabase
          .from("categorieen")
          .select("*");
        if (categorieenError) throw categorieenError;

        // Map data
        const mappedData = toetsenData.map((toets) => {
          const les = lessenData.find((l) => l.id === toets.les_id) || {};
          const lessenreeks = lessenreeksenData.find((lr) => lr.id === les.lessenreeks_id) || {};
          const boek = boekenData.find((b) => b.id === lessenreeks.boek_id) || {};
          const categorie = categorieenData.find((c) => c.id === boek.categorie_id) || {};

          return {
            ...toets,
            categorie_naam: categorie.naam || "Geen Categorie",
            boek_titel: boek.titel || "Geen Boek",
            lessenreeks_titel: lessenreeks.titel || "Geen Lessenreeks",
            les_titel: les.titel || "Geen Les",
          };
        });

        setToetsen(mappedData || []);
        setFilteredToetsen(mappedData || []); // Standaard alle toetsen tonen
      } catch (error) {
        console.error("Fout bij ophalen toetsen:", error);
      }
    };

    fetchToetsen();
  }, []);

  // Haal categorieën op
  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.from("categorieen").select("*");
      if (error) {
        console.error("Fout bij ophalen categorieën:", error);
      } else {
        setCategories(data || []);
      }
    };

    fetchCategories();
  }, []);

  // Fetch all options from the database on initial load
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const { data: allCategories, error: categoriesError } = await supabase.from("categorieen").select("*");
        if (categoriesError) throw categoriesError;
        setCategories(allCategories || []);

        const { data: allBoeken, error: boekenError } = await supabase.from("boeken").select("*");
        if (boekenError) throw boekenError;
        setBoeken(allBoeken || []);

        const { data: allLessenreeksen, error: lessenreeksenError } = await supabase.from("lessenreeksen").select("*");
        if (lessenreeksenError) throw lessenreeksenError;
        setLessenreeksen(allLessenreeksen || []);

        const { data: allLessen, error: lessenError } = await supabase.from("lessen").select("*");
        if (lessenError) throw lessenError;
        setLessen(allLessen || []);
      } catch (error) {
        console.error("Fout bij ophalen opties:", error);
      }
    };

    fetchOptions();
  }, []);

  // Dynamically filter options based on selected values
  useEffect(() => {
    if (filterCategory) {
      const filteredBoeken = boeken.filter((boek) => boek.categorie_id === parseInt(filterCategory, 10));
      setBoeken(filteredBoeken);
      setFilterBoek(""); // Reset boek filter when category changes
      setFilterLessenreeks(""); // Reset lessenreeks filter
      setFilterLes(""); // Reset les filter
    }
  }, [filterCategory]);

  useEffect(() => {
    if (filterBoek) {
      const filteredLessenreeksen = lessenreeksen.filter((reeks) => reeks.boek_id === parseInt(filterBoek, 10));
      setLessenreeksen(filteredLessenreeksen);
      setFilterLessenreeks(""); // Reset lessenreeks filter when boek changes
      setFilterLes(""); // Reset les filter
    }
  }, [filterBoek]);

  useEffect(() => {
    if (filterLessenreeks) {
      const filteredLessen = lessen.filter((les) => les.lessenreeks_id === parseInt(filterLessenreeks, 10));
      setLessen(filteredLessen);
      setFilterLes(""); // Reset les filter when lessenreeks changes
    }
  }, [filterLessenreeks]);

  // Update filteredToetsen based on filters
  useEffect(() => {
    let filtered = toetsen;

    if (filterCategory) {
      filtered = filtered.filter((toets) => toets.categorie_naam === categories.find((c) => c.id === parseInt(filterCategory, 10))?.naam);
    }

    if (filterBoek) {
      filtered = filtered.filter((toets) => toets.boek_titel === boeken.find((b) => b.id === parseInt(filterBoek, 10))?.titel);
    }

    if (filterLessenreeks) {
      filtered = filtered.filter((toets) => toets.lessenreeks_titel === lessenreeksen.find((lr) => lr.id === parseInt(filterLessenreeks, 10))?.titel);
    }

    if (filterLes) {
      filtered = filtered.filter((toets) => toets.les_titel === lessen.find((l) => l.id === parseInt(filterLes, 10))?.titel);
    }

    setFilteredToetsen(filtered);
  }, [filterCategory, filterBoek, filterLessenreeks, filterLes, toetsen, categories, boeken, lessenreeksen, lessen]);

  // Filter toetsen op type
  const handleFilterChange = (type) => {
    setFilterType(type);
    if (type === "all") {
      setFilteredToetsen(toetsen);
    } else {
      setFilteredToetsen(toetsen.filter((toets) => toets.type === type));
    }
  };

  // Selecteer een toets
  const handleSelectToets = (toets) => {
    setSelectedToets(toets);
  };

  // Verwijder een toets
  const handleDeleteToets = async (id) => {
    if (confirm("Weet je zeker dat je deze toets wilt verwijderen?")) {
      const { error } = await supabase.from("toetsen").delete().eq("id", id);
      if (error) {
        console.error("Fout bij verwijderen toets:", error);
      } else {
        setToetsen(toetsen.filter((toets) => toets.id !== id));
        setFilteredToetsen(filteredToetsen.filter((toets) => toets.id !== id));
      }
    }
  };

  // Voeg een nieuwe toets toe
  const handleSaveToets = async () => {
    let toetsData = { titel: newToets.titel, type: newToets.type, aantal_vragen: newToets.aantal_vragen };

    if (newToets.type === "les" && selectedLes) {
      toetsData.les_id = selectedLes;
    } else if (newToets.type === "eind" && selectedBoek) {
      toetsData.boek_id = selectedBoek;
    } else {
      alert("Selecteer een geldige les of boek voor de toets.");
      return;
    }

    const { data, error } = await supabase.from("toetsen").insert(toetsData).select("*");
    if (error) {
      console.error("Fout bij toevoegen toets:", error);
      alert("Er is een fout opgetreden bij het toevoegen van de toets.");
    } else if (data && data.length > 0) {
      setToetsen([...toetsen, data[0]]);
      setFilteredToetsen([...filteredToetsen, data[0]]);
      setOpenDialog(false);
      setNewToets({ titel: "", type: "les", aantal_vragen: 0 });
      setSelectedCategory("");
      setSelectedBoek("");
      setSelectedLessenreeks("");
      setSelectedLes("");
    } else {
      console.error("Geen data ontvangen na het toevoegen van de toets.");
      alert("Er is een onverwachte fout opgetreden.");
    }
  };

  // Ga naar de pagina om vragen te beheren
  const handleManageQuestions = () => {
    if (selectedToets) {
      router.push(`/admin/toetsvragen/${selectedToets.id}`);
    } else {
      alert("Selecteer een toets om vragen te beheren.");
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Toetsbeheer
      </Typography>

      {/* Filters */}
      <Toolbar disableGutters sx={{ marginBottom: 2 }}>
        <Stack direction="row" spacing={2}>
          <FormControl fullWidth margin="normal" sx={{ minWidth: 250 }}>
            <InputLabel>Categorie</InputLabel>
            <Select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <MenuItem value="">Alle Categorieën</MenuItem>
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.naam}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" sx={{ minWidth: 250 }}>
            <InputLabel>Boek</InputLabel>
            <Select
              value={filterBoek}
              onChange={(e) => setFilterBoek(e.target.value)}
              disabled={!filterCategory}
            >
              <MenuItem value="">Alle Boeken</MenuItem>
              {boeken.map((boek) => (
                <MenuItem key={boek.id} value={boek.id}>
                  {boek.titel}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" sx={{ minWidth: 250 }}>
            <InputLabel>Lessenreeks</InputLabel>
            <Select
              value={filterLessenreeks}
              onChange={(e) => setFilterLessenreeks(e.target.value)}
              disabled={!filterBoek}
            >
              <MenuItem value="">Alle Lessenreeksen</MenuItem>
              {lessenreeksen.map((reeks) => (
                <MenuItem key={reeks.id} value={reeks.id}>
                  {reeks.titel}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" sx={{ minWidth: 250 }}>
            <InputLabel>Les</InputLabel>
            <Select
              value={filterLes}
              onChange={(e) => setFilterLes(e.target.value)}
              disabled={!filterLessenreeks}
            >
              <MenuItem value="">Alle Lessen</MenuItem>
              {lessen.map((les) => (
                <MenuItem key={les.id} value={les.id}>
                  {les.titel}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Toolbar>

      {/* DataGrid */}
      <Box sx={{ height: 650, width: "100%", marginBottom: 2 }}>
        <DataGrid
          rows={filteredToetsen}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5, 10, 25, 50]}
          checkboxSelection={false}
          disableSelectionOnClick
          getRowId={(row) => row.id}
          sx={{
            "& .MuiDataGrid-cell": {
              padding: "12px",
            },
          }}
        />
      </Box>

      {/* Beheer Vragen */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleManageQuestions}
        disabled={!selectedToets}
        sx={{ marginBottom: 2 }}
      >
        Beheer Vragen voor Geselecteerde Toets
      </Button>

      {/* Nieuwe Toets Aanmaken */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenDialog(true)}
        sx={{ marginBottom: 2 }}
      >
        Nieuwe Toets Aanmaken
      </Button>

      {/* Dialog for creating a new test */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Nieuwe Toets Aanmaken</DialogTitle>
        <DialogContent>
          <TextField
            label="Titel"
            fullWidth
            margin="normal"
            value={newToets.titel}
            onChange={(e) => setNewToets({ ...newToets, titel: e.target.value })}
          />
          <TextField
            label="Type"
            select
            fullWidth
            margin="normal"
            value={newToets.type}
            onChange={(e) => setNewToets({ ...newToets, type: e.target.value })}
          >
            <MenuItem value="les">Les</MenuItem>
            <MenuItem value="eind">Eind</MenuItem>
          </TextField>
          {newToets.type === "les" && (
            <>
              <FormControl fullWidth margin="normal">
                <InputLabel>Categorie</InputLabel>
                <Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.naam}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel>Boek</InputLabel>
                <Select
                  value={selectedBoek}
                  onChange={(e) => setSelectedBoek(e.target.value)}
                  disabled={!selectedCategory}
                >
                  {boeken.map((boek) => (
                    <MenuItem key={boek.id} value={boek.id}>
                      {boek.titel}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel>Lessenreeks</InputLabel>
                <Select
                  value={selectedLessenreeks}
                  onChange={(e) => setSelectedLessenreeks(e.target.value)}
                  disabled={!selectedBoek}
                >
                  {lessenreeksen.map((reeks) => (
                    <MenuItem key={reeks.id} value={reeks.id}>
                      {reeks.titel}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel>Les</InputLabel>
                <Select
                  value={selectedLes}
                  onChange={(e) => setSelectedLes(e.target.value)}
                  disabled={!selectedLessenreeks}
                >
                  {lessen.map((les) => (
                    <MenuItem key={les.id} value={les.id}>
                      {les.titel}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
          )}
          {newToets.type === "eind" && (
            <>
              <FormControl fullWidth margin="normal">
                <InputLabel>Categorie</InputLabel>
                <Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.naam}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel>Boek</InputLabel>
                <Select
                  value={selectedBoek}
                  onChange={(e) => setSelectedBoek(e.target.value)}
                  disabled={!selectedCategory}
                >
                  {boeken.map((boek) => (
                    <MenuItem key={boek.id} value={boek.id}>
                      {boek.titel}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
          )}
          <TextField
            label="Aantal Vragen"
            type="number"
            fullWidth
            margin="normal"
            value={newToets.aantal_vragen}
            onChange={(e) =>
              setNewToets({ ...newToets, aantal_vragen: parseInt(e.target.value, 10) || 0 })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Annuleren
          </Button>
          <Button onClick={handleSaveToets} color="primary">
            Opslaan
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}