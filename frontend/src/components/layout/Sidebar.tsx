import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";
import ChecklistIcon from "@mui/icons-material/Checklist";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import BugReportIcon from "@mui/icons-material/BugReport";

import { Link } from "react-router-dom";

const drawerWidth = 260;

const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    text: "Organizations",
    icon: <BusinessIcon />,
    path: "/organizations",
  },
  {
    text: "Projects",
    icon: <FolderIcon />,
    path: "/projects",
  },
  {
    text: "Requirements",
    icon: <DescriptionIcon />,
    path: "/requirements",
  },
  {
    text: "Test Cases",
    icon: <ChecklistIcon />,
    path: "/testcases",
  },
  {
    text: "Test Executions",
    icon: <PlayCircleIcon />,
    path: "/executions",
  },
  {
    text: "Defects",
    icon: <BugReportIcon />,
    path: "/defects",
  },
];

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={Link}
            to={item.path}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;