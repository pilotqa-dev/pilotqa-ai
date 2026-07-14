import { useEffect, useState } from "react";
import OrganizationForm from "./OrganizationForm";
import OrganizationTable from "./OrganizationTable";

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

      <OrganizationForm
  name={name}
  code={code}
  description={description}
  setName={setName}
  setCode={setCode}
  setDescription={setDescription}
  onSave={handleSave}
/>

      <Typography variant="h5" gutterBottom>
  Existing Organizations
</Typography>

<OrganizationTable
  organizations={organizations}
  onEdit={(row) => console.log("Edit", row)}
  onDelete={(id) => console.log("Delete", id)}
/>
    </Box>
  );
};

export default OrganizationPage;