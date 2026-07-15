import { useState } from "react";
import { Button, Menu, MenuItem, Divider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AIMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
        AI
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem disabled>
          Generate Test Cases
        </MenuItem>

        <MenuItem disabled>
          Generate Test Scenarios
        </MenuItem>

        <MenuItem disabled>
          Generate Test Data
        </MenuItem>

        <MenuItem disabled>
          Generate Defects
        </MenuItem>

        <MenuItem disabled>
          Generate Test Summary
        </MenuItem>

        <MenuItem disabled>
          Generate Release Report
        </MenuItem>

        <Divider />

        <MenuItem disabled>
          AI Assistant
        </MenuItem>
      </Menu>
    </>
  );
};

export default AIMenu;