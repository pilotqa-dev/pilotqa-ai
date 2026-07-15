import {
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";

import type { Requirement } from "../../types/requirement";

interface Props {
  testCaseId: string;
  title: string;
  description: string;
  priority: string;
  requirementId: string;

  requirements: Requirement[];

  setTestCaseId: (value: string) => void;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  setPriority: (value: string) => void;
  setRequirementId: (value: string) => void;

  onSave: () => void;
  onCancel: () => void;
  isEditing: boolean;
}

const TestCaseForm = ({
  testCaseId,
  title,
  description,
  priority,
  requirementId,
  requirements,
  setTestCaseId,
  setTitle,
  setDescription,
  setPriority,
  setRequirementId,
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
              label="Test Case ID"
              value={testCaseId}
              disabled={isEditing}
              onChange={(e) => setTestCaseId(e.target.value)}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              select
              fullWidth
              label="Priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <MenuItem value="LOW">LOW</MenuItem>
              <MenuItem value="MEDIUM">MEDIUM</MenuItem>
              <MenuItem value="HIGH">HIGH</MenuItem>
              <MenuItem value="CRITICAL">CRITICAL</MenuItem>
            </TextField>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              select
              fullWidth
              label="Requirement"
              value={requirementId}
              onChange={(e) => setRequirementId(e.target.value)}
            >
              {requirements.map((requirement) => (
                <MenuItem
                  key={requirement.id}
                  value={requirement.id}
                >
                  {requirement.requirementId} - {requirement.title}
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
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" onClick={onSave}>
              {isEditing ? "Update Test Case" : "Save Test Case"}
            </Button>

            <Button variant="outlined" onClick={onCancel}>
              {isEditing ? "Cancel" : "Reset"}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TestCaseForm;