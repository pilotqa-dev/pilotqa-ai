import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import DefectForm from "./DefectForm";
import DefectTable from "./DefectTable";

import {
  getDefects,
  createDefect,
  updateDefect,
  deleteDefect,
} from "../../services/defectService";

import { getTestExecutions } from "../../services/testExecutionService";

import type { Defect } from "../../types/defect";
import type { TestExecution } from "../../types/testExecution";

const DefectPage = () => {
  const [defects, setDefects] = useState<Defect[]>([]);
  const [executions, setExecutions] = useState<TestExecution[]>([]);

  const [defectId, setDefectId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [environment, setEnvironment] = useState("");

  const [priority, setPriority] = useState("MEDIUM");
  const [severity, setSeverity] = useState("MAJOR");
  const [status, setStatus] = useState("OPEN");

  const [executionId, setExecutionId] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    loadDefects();
    loadExecutions();
  }, []);

  const loadDefects = async () => {
    const data = await getDefects();
    setDefects(data);
  };

  const loadExecutions = async () => {
    const data = await getTestExecutions();
    setExecutions(data);
  };
    const handleSave = async () => {
    if (!defectId || !title || !executionId) {
      alert("Defect ID, Title and Test Execution are required.");
      return;
    }

    const defect = {
      defectId,
      title,
      description,
      environment,
      priority: priority as
        | "LOW"
        | "MEDIUM"
        | "HIGH"
        | "CRITICAL",
      severity: severity as
        | "MINOR"
        | "MAJOR"
        | "CRITICAL"
        | "BLOCKER",
      status: status as
        | "OPEN"
        | "IN_PROGRESS"
        | "RESOLVED"
        | "CLOSED"
        | "REOPENED",
      executionId,
    };

    if (editingId) {
      await updateDefect(editingId, {
        ...defect,
        id: editingId,
      } as Defect);
    } else {
      await createDefect(defect as Defect);
    }

    handleCancel();
    loadDefects();
  };

  const handleEdit = (defect: Defect) => {
    setEditingId(defect.id);
    setDefectId(defect.defectId);
    setTitle(defect.title);
    setDescription(defect.description || "");
    setEnvironment(defect.environment || "");
    setPriority(defect.priority);
    setSeverity(defect.severity);
    setStatus(defect.status);
    setExecutionId(defect.executionId);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this defect?")) return;

    await deleteDefect(id);
    loadDefects();
  };

  const handleCancel = () => {
    setEditingId(null);
    setDefectId("");
    setTitle("");
    setDescription("");
    setEnvironment("");
    setPriority("MEDIUM");
    setSeverity("MAJOR");
    setStatus("OPEN");
    setExecutionId("");
  };
    return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Defect Management
      </Typography>

      <DefectForm
        defectId={defectId}
        title={title}
        description={description}
        environment={environment}
        priority={priority}
        severity={severity}
        status={status}
        executionId={executionId}
        executions={executions}
        setDefectId={setDefectId}
        setTitle={setTitle}
        setDescription={setDescription}
        setEnvironment={setEnvironment}
        setPriority={setPriority}
        setSeverity={setSeverity}
        setStatus={setStatus}
        setExecutionId={setExecutionId}
        onSave={handleSave}
        onCancel={handleCancel}
        isEditing={editingId !== null}
      />

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Existing Defects
      </Typography>

      <DefectTable
        defects={defects}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </Box>
  );
};

export default DefectPage;