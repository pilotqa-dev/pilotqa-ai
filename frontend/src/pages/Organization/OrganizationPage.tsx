import { useEffect, useState } from "react";
import OrganizationForm from "./OrganizationForm";
import OrganizationTable from "./OrganizationTable";
import { Box, Typography } from "@mui/material";
import {
  getOrganizations,
  createOrganization,
  updateOrganization,
} from "../../services/organizationService";

const OrganizationPage = () => {
  const [organizations, setOrganizations] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

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

    if (editingId) {
  await updateOrganization(editingId, {
    name,
    code,
    description,
  });
} else {
  await createOrganization({
    name,
    code,
    description,
  });
}

    setName("");
    setCode("");
    setDescription("");
    setEditingId(null);

    loadOrganizations();
  };

  const handleEdit = (organization: any) => {
    setEditingId(organization.id);
    setName(organization.name);
    setCode(organization.code);
    setDescription(organization.description || "");
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

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Existing Organizations
      </Typography>

      <OrganizationTable
        organizations={organizations}
        onEdit={handleEdit}
        onDelete={(id) => console.log("Delete", id)}
      />
    </Box>
  );
};

export default OrganizationPage;