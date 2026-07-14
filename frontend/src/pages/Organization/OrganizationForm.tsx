import { Button, Card, CardContent, Grid, TextField } from "@mui/material";

interface Props {
  name: string;
  code: string;
  description: string;

  setName: (value: string) => void;
  setCode: (value: string) => void;
  setDescription: (value: string) => void;

  onSave: () => void;
}

const OrganizationForm = ({
  name,
  code,
  description,
  setName,
  setCode,
  setDescription,
  onSave,
}: Props) => {
  return (
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
              onClick={onSave}
            >
              Save Organization
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default OrganizationForm;