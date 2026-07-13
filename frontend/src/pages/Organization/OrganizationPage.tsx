import { useEffect, useState } from "react";
import {
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import {
  createOrganization,
  getOrganizations,
  Organization,
} from "../../services/organizationService";

const OrganizationPage = () => {
  const [organizations, setOrganizations] = useState<Organization[]>([]);

  const [form, setForm] = useState({
    name: "",
    code: "",
    description: "",
  });

  const loadOrganizations = async () => {
    const data = await getOrganizations();
    setOrganizations(data);
  };

  useEffect(() => {
    loadOrganizations();
  }, []);

  const handleSave = async () => {
    await createOrganization(form);

    setForm({
      name: "",
      code: "",
      description: "",
    });

    loadOrganizations();
  };

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Organizations
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Organization Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <TextField
          label="Organization Code"
          value={form.code}
          onChange={(e) =>
            setForm({ ...form, code: e.target.value })
          }
        />

        <TextField
          label="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <Button variant="contained" onClick={handleSave}>
          Save Organization
        </Button>
      </Stack>

      <Typography variant="h5" sx={{ mt: 5 }}>
        Existing Organizations
      </Typography>

      {organizations.map((org) => (
        <Paper key={org.id} sx={{ p: 2, mt: 2 }}>
          <Typography variant="h6">{org.name}</Typography>
          <Typography>{org.code}</Typography>
          <Typography>{org.description}</Typography>
        </Paper>
      ))}
    </Paper>
  );
};

export default OrganizationPage;