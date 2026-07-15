import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import TestCaseForm from "./TestCaseForm";
import TestCaseTable from "./TestCaseTable";

import {
  getTestCases,
  createTestCase,
  updateTestCase,
  deleteTestCase,
} from "../../services/testCaseService";

import { getRequirements } from "../../services/requirementService";

import type { TestCase } from "../../types/testCase";
import type { Requirement } from "../../types/requirement";

const TestCasePage = () => {
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [requirements, setRequirements] = useState<Requirement[]>([]);

  const [testCaseId, setTestCaseId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("MEDIUM");
  const [requirementId, setRequirementId] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    loadTestCases();
    loadRequirements();
  }, []);

  const loadTestCases = async () => {
    const data = await getTestCases();
    setTestCases(data);
  };

  const loadRequirements = async () => {
    const data = await getRequirements();
    setRequirements(data);
  };

    const handleSave = async () => {
    if (!testCaseId || !title || !requirementId) {
      alert("Test Case ID, Title and Requirement are required.");
      return;
    }

    const testCase = {
      testCaseId,
      title,
      description,
      priority: priority as "LOW" | "MEDIUM" | "HIGH" | "CRITICAL",
      requirementId,
    };

    if (editingId) {
      await updateTestCase(editingId, {
        ...testCase,
        id: editingId,
      } as TestCase);
    } else {
      await createTestCase(testCase as TestCase);
    }

    handleCancel();
    loadTestCases();
  };

  const handleEdit = (testCase: TestCase) => {
    setEditingId(testCase.id);
    setTestCaseId(testCase.testCaseId);
    setTitle(testCase.title);
    setDescription(testCase.description || "");
    setPriority(testCase.priority);
    setRequirementId(testCase.requirementId);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this Test Case?")) return;

    await deleteTestCase(id);
    loadTestCases();
  };

  const handleCancel = () => {
    setEditingId(null);
    setTestCaseId("");
    setTitle("");
    setDescription("");
    setPriority("MEDIUM");
    setRequirementId("");
  };

    return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Test Case Management
      </Typography>

      <TestCaseForm
        testCaseId={testCaseId}
        title={title}
        description={description}
        priority={priority}
        requirementId={requirementId}
        requirements={requirements}
        setTestCaseId={setTestCaseId}
        setTitle={setTitle}
        setDescription={setDescription}
        setPriority={setPriority}
        setRequirementId={setRequirementId}
        onSave={handleSave}
        onCancel={handleCancel}
        isEditing={editingId !== null}
      />

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Existing Test Cases
      </Typography>

      <TestCaseTable
        testCases={testCases}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </Box>
  );
};

export default TestCasePage;