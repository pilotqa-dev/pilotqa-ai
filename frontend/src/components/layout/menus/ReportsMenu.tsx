import { useState } from "react";
import { Button, Menu, MenuItem, Divider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

const ReportsMenu = () => {
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
        Reports
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            navigate("/");
            handleClose();
          }}
        >
          Dashboard
        </MenuItem>

        <MenuItem disabled>
          Execution Report
        </MenuItem>

        <MenuItem disabled>
          Defect Report
        </MenuItem>

        <MenuItem disabled>
          Coverage Report
        </MenuItem>

        <MenuItem disabled>
          Requirement Traceability
        </MenuItem>

        <MenuItem disabled>
          Release Readiness
        </MenuItem>

        <Divider />

        <MenuItem disabled>
          Export PDF
        </MenuItem>

        <MenuItem disabled>
          Export Excel
        </MenuItem>
      </Menu>
    </>
  );
};

export default ReportsMenu;