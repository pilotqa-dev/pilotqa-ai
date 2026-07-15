import {
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";

import type { TestExecution } from "../../types/testExecution";

interface Props {
  defectId: string;
  title: string;
  description: string;
  environment: string;
  priority: string;
  severity: string;
  status: string;
  executionId: string;

  executions: TestExecution[];

  setDefectId: (value: string) => void;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  setEnvironment: (value: string) => void;
  setPriority: (value: string) => void;
  setSeverity: (value: string) => void;
  setStatus: (value: string) => void;
  setExecutionId: (value: string) => void;

  onSave: () => void;
  onCancel: () => void;

  isEditing: boolean;
}

const DefectForm = ({
  defectId,
  title,
  description,
  environment,
  priority,
  severity,
  status,
  executionId,
  executions,
  setDefectId,
  setTitle,
  setDescription,
  setEnvironment,
  setPriority,
  setSeverity,
  setStatus,
  setExecutionId,
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
              label="Defect ID"
              value={defectId}
              disabled={isEditing}
              onChange={(e) => setDefectId(e.target.value)}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 9 }}>
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

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              select
              fullWidth
              label="Severity"
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
            >
              <MenuItem value="MINOR">MINOR</MenuItem>
              <MenuItem value="MAJOR">MAJOR</MenuItem>
              <MenuItem value="CRITICAL">CRITICAL</MenuItem>
              <MenuItem value="BLOCKER">BLOCKER</MenuItem>
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              select
              fullWidth
              label="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value="OPEN">OPEN</MenuItem>
              <MenuItem value="IN_PROGRESS">IN_PROGRESS</MenuItem>
              <MenuItem value="RESOLVED">RESOLVED</MenuItem>
              <MenuItem value="CLOSED">CLOSED</MenuItem>
              <MenuItem value="REOPENED">REOPENED</MenuItem>
            </TextField>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              select
              fullWidth
              label="Test Execution"
              value={executionId}
              onChange={(e) => setExecutionId(e.target.value)}
            >
              {executions.map((execution) => (
                <MenuItem
                  key={execution.id}
                  value={execution.id}
                >
                  {execution.executionId} - {execution.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Environment"
              value={environment}
              onChange={(e) => setEnvironment(e.target.value)}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" onClick={onSave}>
              {isEditing ? "Update Defect" : "Save Defect"}
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

export default DefectForm;