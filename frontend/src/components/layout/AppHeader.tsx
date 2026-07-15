import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  TextField,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useNavigate } from "react-router-dom";

import ProjectMenu from "./menus/ProjectMenu";
import TestMenu from "./menus/TestMenu";
import ReportsMenu from "./menus/ReportsMenu";
import AIMenu from "./menus/AIMenu";
import AdminMenu from "./menus/AdminMenu";

const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" color="primary" elevation={2}>
      {/* Header */}
      <Toolbar>
        <Typography
          variant="h5"
          onClick={() => navigate("/")}
          sx={{
            fontWeight: "bold",
            cursor: "pointer",
            mr: 4,
            minWidth: 170,
            userSelect: "none",
            "&:hover": {
              opacity: 0.85,
            },
          }}
        >
          PilotQA AI
        </Typography>

        <TextField
          placeholder="Search or ask AI..."
          size="small"
          sx={{
            flexGrow: 1,
            mx: 2,
            bgcolor: "white",
            borderRadius: 1,
          }}
        />

        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>

        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>

      {/* Navigation */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          px: 3,
          py: 1,
          bgcolor: "primary.dark",
        }}
      >
        <ProjectMenu />

        <TestMenu />

        <ReportsMenu />

        <AIMenu />

        <AdminMenu />
      </Box>
    </AppBar>
  );
};

export default AppHeader;