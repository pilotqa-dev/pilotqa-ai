import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";

import ProjectForm from "./ProjectForm";
import ProjectTable from "./ProjectTable";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../../services/projectService";

import { getOrganizations } from "../../services/organizationService";
import type { Organization } from "../../types/organization";
import type { Project } from "../../types/project";


export interface CreateProjectRequest {
    name: string;
    projectKey: string;
    description?: string;
    organizationId: string;
}

export interface UpdateProjectRequest {
    name: string;
    projectKey: string;
    description?: string;
    organizationId: string;
}

const ProjectPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [organizations, setOrganizations] = useState<Organization[]>([]);

  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState<string | null>(null);

  const [organizationId, setOrganizationId] = useState("");
  const [name, setName] = useState("");
  const [projectKey, setProjectKey] = useState("");
  const [description, setDescription] = useState("");

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    setLoading(true);

    try {
      await Promise.all([loadProjects(), loadOrganizations()]);
    } finally {
      setLoading(false);
    }
  };

  const loadProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  const loadOrganizations = async () => {
    const data = await getOrganizations();
    setOrganizations(data);
  };

  const clearForm = () => {
    setEditingId(null);
    setOrganizationId("");
    setName("");
    setProjectKey("");
    setDescription("");
  };

  const showMessage = (
    message: string,
    severity: "success" | "error"
  ) => {
    setSnackbar({
      open: true,
      message,
      severity,
    });
  };

  const handleSave = async () => {
    if (!organizationId || !name || !projectKey) {
      showMessage(
        "Organization, Project Name and Project Key are required.",
        "error"
      );
      return;
    }

    try {
      if (editingId) {
        await updateProject(editingId, {
          name,
          projectKey,
          description,
          organizationId,
        });

        showMessage("Project updated successfully.", "success");
      } else {
        await createProject({
          name,
          projectKey,
          description,
          organizationId,
        });

        showMessage("Project created successfully.", "success");
      }

      clearForm();
      await loadProjects();
    } catch (error) {
      console.error(error);
      showMessage("Failed to save project.", "error");
    }
  };

  const handleEdit = (project: Project) => {
    setEditingId(project.id || null);
    setOrganizationId(project.organizationId);
    setName(project.name);
    setProjectKey(project.projectKey);
    setDescription(project.description || "");
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this project?")) {
      return;
    }

    try {
      await deleteProject(id);
      await loadProjects();

      showMessage("Project deleted successfully.", "success");
    } catch (error) {
      console.error(error);
      showMessage("Failed to delete project.", "error");
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }


  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Project Management
      </Typography>

      <ProjectForm
        organizations={organizations}
        organizationId={organizationId}
        name={name}
        projectKey={projectKey}
        description={description}
        setOrganizationId={setOrganizationId}
        setName={setName}
        setProjectKey={setProjectKey}
        setDescription={setDescription}
        onSave={handleSave}
      />

      {editingId && (
        <Box sx={{ mt: 2 }}>
          <Typography
            sx={{
              color: "primary.main",
              cursor: "pointer",
            }}
            onClick={clearForm}
          >
            Cancel Editing
          </Typography>
        </Box>
      )}

      <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>
        Existing Projects
      </Typography>

      <ProjectTable
        projects={projects}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() =>
          setSnackbar({
            ...snackbar,
            open: false,
          })
        }
      >
        <Alert
          severity={snackbar.severity}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProjectPage;