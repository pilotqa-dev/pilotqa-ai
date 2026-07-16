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
        {/* Logo */}
        <Box
          onClick={() => navigate("/")}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            mr: 4,
            userSelect: "none",
          }}
        >
          <Box
            component="img"
            src="/branding/logo.png"
            alt="PilotQA AI"
            sx={{
              width: 38,
              height: 38,
              mr: 1.5,
            }}
          />

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              "&:hover": {
                opacity: 0.9,
              },
            }}
          >
            PilotQA AI
          </Typography>
        </Box>

        {/* Search */}
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

        {/* Notifications */}
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>

        {/* Profile */}
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