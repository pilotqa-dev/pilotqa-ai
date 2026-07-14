import {
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";

import type { Organization } from "../../types/organization";

interface Props {
  organizations: Organization[];
  organizationId: string;
  name: string;
  projectKey: string;
  description: string;

  setOrganizationId: (value: string) => void;
  setName: (value: string) => void;
  setProjectKey: (value: string) => void;
  setDescription: (value: string) => void;

  onSave: () => void;
}

const ProjectForm = ({
  organizations,
  organizationId,
  name,
  projectKey,
  description,
  setOrganizationId,
  setName,
  setProjectKey,
  setDescription,
  onSave,
}: Props) => {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <TextField
              select
              fullWidth
              label="Organization"
              value={organizationId}
              onChange={(e) => setOrganizationId(e.target.value)}
            >
              {organizations.map((org) => (
                <MenuItem key={org.id} value={org.id}>
                  {org.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Project Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Project Key"
              value={projectKey}
              onChange={(e) => setProjectKey(e.target.value)}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Button variant="contained" onClick={onSave}>
              Save Project
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProjectForm;