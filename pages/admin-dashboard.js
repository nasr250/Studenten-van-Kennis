import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/router";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Box } from "@mui/material";
import styles from "../styles/Admin.module.css";

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [boeken, setBoeken] = useState([]);
  const router = useRouter();

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "titel", headerName: "Titel", width: 200 },
    { field: "beschrijving", headerName: "Beschrijving", width: 300 },
    {
      field: "categorieen",
      headerName: "Categorie",
      width: 130,
      valueGetter: (params) => params.naam || "-",
    },
    {
      field: "actions",
      headerName: "Acties",
      width: 400,
      renderCell: (params) => (
        <Box>
          <Button
            onClick={() => handleEdit(params.row.id)}
            variant="contained"
            color="primary"
            size="small"
            style={{ marginRight: 8 }}
          >
            Bewerken
          </Button>
          <Button
            onClick={() => handleDelete(params.row.id)}
            variant="contained"
            color="error"
            size="small"
          >
            Verwijderen
          </Button>
        </Box>
      ),
    },
  ];

  useEffect(() => {
    const init = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }

      const { data: adminData } = await supabase
        .from("admins")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (!adminData) {
        router.push("/");
        return;
      }

      setUser(user);
      loadBoeken();
    };
    init();
  }, []);

  const loadBoeken = async () => {
    const { data, error } = await supabase
      .from("boeken")
      .select(
        `
        id, 
        titel, 
        beschrijving, 
        categorieen (
          naam
        )
      `,
      )
      .order("categorie_id");
    if (error) {
      console.error("Error loading books:", error);
    } else {
      console.log("Loaded books:", data);
      setBoeken(data || []);
    }
  };

  const handleEdit = (id) => {
    router.push(`/admin/boek/${id}`);
  };

  const handleDelete = async (id) => {
    if (confirm("Weet je zeker dat je dit boek wilt verwijderen?")) {
      await supabase.from("boeken").delete().eq("id", id);
      loadBoeken();
    }
  };

  const handleAdd = () => {
    router.push("/admin/boek/new");
  };

  if (!user) return <p>Laden...</p>;

  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>

      <Box sx={{ height: 650, width: "100%", marginBottom: 2 }}>
        <DataGrid
          rows={boeken}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5, 10, 25, 50]}
          checkboxSelection
          disableSelectionOnClick
          getRowHeight={() => "auto"}
          sx={{
            "& .MuiDataGrid-cell": {
              padding: "12px",
            },
          }}
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={handleAdd}
        className={styles.addButton}
      >
        Nieuw Boek Toevoegen
      </Button>
    </div>
  );
}
