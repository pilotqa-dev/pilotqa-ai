import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import RequirementForm from "./RequirementForm";
import RequirementTable from "./RequirementTable";

import {
  getRequirements,
  createRequirement,
  updateRequirement,
  deleteRequirement,
} from "../../services/requirementService";

import { getProjects } from "../../services/projectService";

import type { Requirement } from "../../types/requirement";
import type { Project } from "../../types/project";

const RequirementPage = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  const [requirementId, setRequirementId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("MEDIUM");
  const [projectId, setProjectId] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    loadRequirements();
    loadProjects();
  }, []);

  const loadRequirements = async () => {
    const data = await getRequirements();
    setRequirements(data);
  };

  const loadProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };
    const handleSave = async () => {
    if (!requirementId || !title || !projectId) {
      alert("Requirement ID, Title and Project are required.");
      return;
    }

    const requirement = {
      requirementId,
      title,
      description,
      priority: priority as "LOW" | "MEDIUM" | "HIGH" | "CRITICAL",
      projectId,
    };

    if (editingId) {
      await updateRequirement(editingId, {
        ...requirement,
        id: editingId,
      } as Requirement);
    } else {
      await createRequirement(requirement as Requirement);
    }

    handleCancel();
    loadRequirements();
  };

  const handleEdit = (requirement: Requirement) => {
    setEditingId(requirement.id);
    setRequirementId(requirement.requirementId);
    setTitle(requirement.title);
    setDescription(requirement.description || "");
    setPriority(requirement.priority);
    setProjectId(requirement.projectId);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this requirement?")) return;

    await deleteRequirement(id);
    loadRequirements();
  };

  const handleCancel = () => {
    setEditingId(null);
    setRequirementId("");
    setTitle("");
    setDescription("");
    setPriority("MEDIUM");
    setProjectId("");
  };
    return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Requirement Management
      </Typography>

      <RequirementForm
        requirementId={requirementId}
        title={title}
        description={description}
        priority={priority}
        projectId={projectId}
        projects={projects}
        setRequirementId={setRequirementId}
        setTitle={setTitle}
        setDescription={setDescription}
        setPriority={setPriority}
        setProjectId={setProjectId}
        onSave={handleSave}
        onCancel={handleCancel}
        isEditing={editingId !== null}
      />

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Existing Requirements
      </Typography>

      <RequirementTable
        requirements={requirements}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </Box>
  );
};

export default RequirementPage;