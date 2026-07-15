import { useState } from "react";
import { Button, Menu, MenuItem, Divider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

const AdminMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        color="inherit"
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleOpen}
      >
        Admin
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            navigate("/organizations");
            handleClose();
          }}
        >
          Organizations
        </MenuItem>

        <MenuItem disabled>
          Users
        </MenuItem>

        <MenuItem disabled>
          Roles
        </MenuItem>

        <Divider />

        <MenuItem
          onClick={() => {
            navigate("/projects");
            handleClose();
          }}
        >
          Create Project
        </MenuItem>

        <MenuItem
          onClick={() => {
            navigate("/projects");
            handleClose();
          }}
        >
          Manage Projects
        </MenuItem>

        <Divider />

        <MenuItem disabled>
          System Settings
        </MenuItem>

        <MenuItem disabled>
          Audit Logs
        </MenuItem>
      </Menu>
    </>
  );
};

export default AdminMenu;