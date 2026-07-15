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
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { text: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
  { text: "Organizations", path: "/organizations", icon: <AdminPanelSettingsIcon /> },
  { text: "Projects", path: "/projects", icon: <FolderIcon /> },
  { text: "Requirements", path: "/requirements", icon: <DescriptionIcon /> },
  { text: "Test Cases", path: "/testcases", icon: <FactCheckIcon /> },
  { text: "Test Execution", path: "/executions", icon: <PlayCircleIcon /> },
  { text: "Defects", path: "/defects", icon: <BugReportIcon /> },
  { text: "Reports", path: "/reports", icon: <AssessmentIcon /> },
  { text: "Settings", path: "/settings", icon: <SettingsIcon /> },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
  selected={location.pathname === item.path}
  onClick={() => navigate(item.path)}
  sx={{
    color: "#fff",
    "&.Mui-selected": {
      backgroundColor: "#2563EB",
    },
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