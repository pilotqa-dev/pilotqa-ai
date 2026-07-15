import { useEffect, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { getProjects } from "../../../services/projectService";
import type { Project } from "../../../types/project";

const ProjectMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error("Failed to load projects", error);
      setProjects([]);
    }
  };

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
        Project
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {projects.length === 0 ? (
          <>
            <MenuItem disabled>
              No Projects Available
            </MenuItem>

            <MenuItem disabled>
              Please contact your Administrator.
            </MenuItem>
          </>
        ) : (
          projects.map((project) => (
            <MenuItem
              key={project.id}
              onClick={handleClose}
            >
              {project.name}
            </MenuItem>
          ))
        )}
      </Menu>
    </>
  );
};

export default ProjectMenu;