import {
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";

import type { TestCase } from "../../types/testCase";

interface Props {
  executionId: string;
  title: string;
  comments: string;
  status: string;
  priority: string;
  testCaseId: string;

  testCases: TestCase[];

  setExecutionId: (value: string) => void;
  setTitle: (value: string) => void;
  setComments: (value: string) => void;
  setStatus: (value: string) => void;
  setPriority: (value: string) => void;
  setTestCaseId: (value: string) => void;

  onSave: () => void;
  onCancel: () => void;
  isEditing: boolean;
}

const TestExecutionForm = ({
  executionId,
  title,
  comments,
  status,
  priority,
  testCaseId,
  testCases,
  setExecutionId,
  setTitle,
  setComments,
  setStatus,
  setPriority,
  setTestCaseId,
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
              label="Execution ID"
              value={executionId}
              disabled={isEditing}
              onChange={(e) => setExecutionId(e.target.value)}
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

          <Grid size={{ xs: 12, md: 2 }}>
            <TextField
              select
              fullWidth
              label="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value="NOT_STARTED">NOT_STARTED</MenuItem>
              <MenuItem value="PASSED">PASSED</MenuItem>
              <MenuItem value="FAILED">FAILED</MenuItem>
              <MenuItem value="BLOCKED">BLOCKED</MenuItem>
              <MenuItem value="SKIPPED">SKIPPED</MenuItem>
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 2 }}>
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
              label="Test Case"
              value={testCaseId}
              onChange={(e) => setTestCaseId(e.target.value)}
            >
              {testCases.map((testCase) => (
                <MenuItem
                  key={testCase.id}
                  value={testCase.id}
                >
                  {testCase.testCaseId} - {testCase.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" onClick={onSave}>
              {isEditing ? "Update Execution" : "Save Execution"}
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

export default TestExecutionForm;