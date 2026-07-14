import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import {
  getOrganizations,
  createOrganization,
} from "../../services/organizationService";

import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Organization Name",
    flex: 1,
  },
  {
    field: "code",
    headerName: "Code",
    width: 150,
  },
  {
    field: "description",
    headerName: "Description",
    flex: 2,
  },
];

const OrganizationPage = () => {
  const [organizations, setOrganizations] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    loadOrganizations();
  }, []);

  const loadOrganizations = async () => {
    try {
      const data = await getOrganizations();
      setOrganizations(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async () => {
    if (!name || !code) {
      alert("Organization Name and Code are required.");
      return;
    }

    await createOrganization({
      name,
      code,
      description,
    });

    setName("");
    setCode("");
    setDescription("");

    loadOrganizations();
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Organization Management
      </Typography>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                label="Organization Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                label="Organization Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Button
                variant="contained"
                onClick={handleSave}
              >
                Save Organization
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Typography variant="h5" gutterBottom>
  Existing Organizations
</Typography>

<Card>
  <CardContent>
    <div style={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={organizations}
        columns={columns}
        getRowId={(row) => row.id}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
              page: 0,
            },
          },
        }}
      />
    </div>
  </CardContent>
</Card>
    </Box>
  );
};

export default OrganizationPage;