import {
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";

import type { Project } from "../../types/project";

interface Props {
  requirementId: string;
  title: string;
  description: string;
  priority: string;
  projectId: string;

  projects: Project[];

  setRequirementId: (value: string) => void;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  setPriority: (value: string) => void;
  setProjectId: (value: string) => void;

  onSave: () => void;
  onCancel: () => void;
  isEditing: boolean;
}

const RequirementForm = ({
  requirementId,
  title,
  description,
  priority,
  projectId,
  projects,
  setRequirementId,
  setTitle,
  setDescription,
  setPriority,
  setProjectId,
  onSave,
  onCancel,
  isEditing,
}: Props) => {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              fullWidth
              label="Requirement ID"
              value={requirementId}
              disabled={isEditing}
              onChange={(e) =>
                setRequirementId(e.target.value)
              }
            />
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              select
              fullWidth
              label="Priority"
              value={priority}
              onChange={(e) =>
                setPriority(e.target.value)
              }
            >
              <MenuItem value="LOW">LOW</MenuItem>
              <MenuItem value="MEDIUM">MEDIUM</MenuItem>
              <MenuItem value="HIGH">HIGH</MenuItem>
              <MenuItem value="CRITICAL">CRITICAL</MenuItem>
            </TextField>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Project"
              select
              value={projectId}
              onChange={(e) =>
                setProjectId(e.target.value)
              }
            >
              {projects.map((project) => (
                <MenuItem
                  key={project.id}
                  value={project.id}
                >
                  {project.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Description"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            />
          </Grid>

          <Grid
            size={{ xs: 12 }}
            sx={{ display: "flex", gap: 2 }}
          >
            <Button variant="contained" onClick={onSave}>
              {isEditing ? "Update Requirement" : "Save Requirement"}
            </Button>

            <Button
              variant="outlined"
              onClick={onCancel}
            >
              {isEditing ? "Cancel" : "Reset"}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RequirementForm;