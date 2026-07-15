import { useState } from "react";
import { Button, Menu, MenuItem, Divider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

const TestMenu = () => {
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
        Test
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            navigate("/requirements");
            handleClose();
          }}
        >
          Requirements
        </MenuItem>

        <MenuItem
          onClick={() => {
            navigate("/testcases");
            handleClose();
          }}
        >
          Test Cases
        </MenuItem>

        <MenuItem disabled>
          Upload Test Cases
        </MenuItem>

        <Divider />

        <MenuItem
          onClick={() => {
            navigate("/executions");
            handleClose();
          }}
        >
          Test Executions
        </MenuItem>

        <MenuItem
          onClick={() => {
            navigate("/defects");
            handleClose();
          }}
        >
          Defects
        </MenuItem>

        <Divider />

        <MenuItem disabled>
          Traceability Matrix
        </MenuItem>
      </Menu>
    </>
  );
};

export default TestMenu;