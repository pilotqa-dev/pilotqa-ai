import { useState } from "react";

import {
  Alert,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";

import {
  userService,
  type CreateUserRequest,
} from "../../services/userService";

interface UserDialogProps {
  open: boolean;
  onClose: () => void;
  onUserCreated: () => void;
}

const UserDialog = ({
  open,
  onClose,
  onUserCreated,
}: UserDialogProps) => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "TESTER",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreate = async () => {
    try {
      setLoading(true);
      setError("");

      const currentUser = JSON.parse(
        localStorage.getItem("user") || "{}"
      );

      const request: CreateUserRequest = {
        ...formData,
        organizationId: currentUser.organizationId,
      };

      await userService.createUser(request);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "TESTER",
      });

      onUserCreated();
      onClose();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to create user.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Add User</DialogTitle>

      <DialogContent>
        {error && (
          <Alert
            severity="error"
            sx={{ mb: 2 }}
          >
            {error}
          </Alert>
        )}

        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={12}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={12}>
            <TextField
              fullWidth
              type="password"
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={12}>
            <TextField
              select
              fullWidth
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <MenuItem value="SUPER_ADMIN">
                Super Admin
              </MenuItem>

              <MenuItem value="PROJECT_ADMIN">
                Project Admin
              </MenuItem>

              <MenuItem value="QA_LEAD">
                QA Lead
              </MenuItem>

              <MenuItem value="TESTER">
                Tester
              </MenuItem>

              <MenuItem value="VIEWER">
                Viewer
              </MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={onClose}
          disabled={loading}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleCreate}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress
              size={22}
              color="inherit"
            />
          ) : (
            "Create User"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDialog;