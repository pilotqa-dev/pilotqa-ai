import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
import type {
  GridColDef,
} from "@mui/x-data-grid";

import UserDialog from "../../components/users/UserDialog";

import {
  userService,
} from "../../services/userService";

import type {
  User,
} from "../../services/userService";

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [loading, setLoading] = useState(true);

  const [dialogOpen, setDialogOpen] =
    useState(false);

  const loadUsers = async () => {
    try {
      setLoading(true);

      const data =
        await userService.getUsers();

      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 2,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
    },
    {
      field: "isActive",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <Chip
          label={
            params.value
              ? "Active"
              : "Inactive"
          }
          color={
            params.value
              ? "success"
              : "error"
          }
          size="small"
        />
      ),
    },
  ];

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 8,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 3,
          }}
        >
          User Management
        </Typography>

        <Paper
          sx={{
            p: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent:
                "space-between",
              mb: 3,
            }}
          >
            <TextField
              size="small"
              placeholder="Search users..."
              sx={{
                width: 300,
              }}
            />

            <Button
              variant="contained"
              onClick={() =>
                setDialogOpen(true)
              }
            >
              Add User
            </Button>
          </Box>

          <DataGrid
            autoHeight
            rows={users}
            columns={columns}
            pageSizeOptions={[
              5,
              10,
              20,
            ]}
            disableRowSelectionOnClick
          />
        </Paper>
      </Box>

      <UserDialog
        open={dialogOpen}
        onClose={() =>
          setDialogOpen(false)
        }
        onUserCreated={loadUsers}
      />
    </>
  );
};

export default UsersPage;