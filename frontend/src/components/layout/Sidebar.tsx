import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import BugReportIcon from "@mui/icons-material/BugReport";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SettingsIcon from "@mui/icons-material/Settings";

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "Projects", icon: <FolderIcon /> },
  { text: "Requirements", icon: <DescriptionIcon /> },
  { text: "Test Cases", icon: <FactCheckIcon /> },
  { text: "Test Execution", icon: <PlayCircleIcon /> },
  { text: "Defects", icon: <BugReportIcon /> },
  { text: "Reports", icon: <AssessmentIcon /> },
  { text: "Administration", icon: <AdminPanelSettingsIcon /> },
  { text: "Settings", icon: <SettingsIcon /> },
];

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 260,
        backgroundColor: "#0F172A",
        color: "#fff",
        height: "100vh",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          p: 3,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        PilotQA AI
      </Typography>

      <Divider sx={{ bgcolor: "#334155" }} />

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            sx={{
              color: "#fff",
              "&:hover": {
                backgroundColor: "#1E293B",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#94A3B8" }}>
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;