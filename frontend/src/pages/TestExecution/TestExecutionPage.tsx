import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import TestExecutionForm from "./TestExecutionForm";
import TestExecutionTable from "./TestExecutionTable";

import {
  getTestExecutions,
  createTestExecution,
  updateTestExecution,
  deleteTestExecution,
} from "../../services/testExecutionService";

import { getTestCases } from "../../services/testCaseService";

import type { TestExecution } from "../../types/testExecution";
import type { TestCase } from "../../types/testCase";

const TestExecutionPage = () => {
  const [testExecutions, setTestExecutions] = useState<TestExecution[]>([]);
  const [testCases, setTestCases] = useState<TestCase[]>([]);

  const [executionId, setExecutionId] = useState("");
  const [title, setTitle] = useState("");
  const [comments, setComments] = useState("");
  const [status, setStatus] = useState("NOT_STARTED");
  const [priority, setPriority] = useState("MEDIUM");
  const [testCaseId, setTestCaseId] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    loadTestExecutions();
    loadTestCases();
  }, []);

  const loadTestExecutions = async () => {
    const data = await getTestExecutions();
    setTestExecutions(data);
  };

  const loadTestCases = async () => {
    const data = await getTestCases();
    setTestCases(data);
  };
    const handleSave = async () => {
    if (!executionId || !title || !testCaseId) {
      alert("Execution ID, Title and Test Case are required.");
      return;
    }

    const execution = {
      executionId,
      title,
      comments,
      status: status as
        | "NOT_STARTED"
        | "PASSED"
        | "FAILED"
        | "BLOCKED"
        | "SKIPPED",
      priority: priority as
        | "LOW"
        | "MEDIUM"
        | "HIGH"
        | "CRITICAL",
      testCaseId,
    };

    if (editingId) {
      await updateTestExecution(editingId, {
        ...execution,
        id: editingId,
      } as TestExecution);
    } else {
      await createTestExecution(execution as TestExecution);
    }

    handleCancel();
    loadTestExecutions();
  };

  const handleEdit = (execution: TestExecution) => {
    setEditingId(execution.id);
    setExecutionId(execution.executionId);
    setTitle(execution.title);
    setComments(execution.comments || "");
    setStatus(execution.status);
    setPriority(execution.priority);
    setTestCaseId(execution.testCaseId);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this Test Execution?")) return;

    await deleteTestExecution(id);
    loadTestExecutions();
  };

  const handleCancel = () => {
    setEditingId(null);
    setExecutionId("");
    setTitle("");
    setComments("");
    setStatus("NOT_STARTED");
    setPriority("MEDIUM");
    setTestCaseId("");
  };
    return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Test Execution Management
      </Typography>

      <TestExecutionForm
        executionId={executionId}
        title={title}
        comments={comments}
        status={status}
        priority={priority}
        testCaseId={testCaseId}
        testCases={testCases}
        setExecutionId={setExecutionId}
        setTitle={setTitle}
        setComments={setComments}
        setStatus={setStatus}
        setPriority={setPriority}
        setTestCaseId={setTestCaseId}
        onSave={handleSave}
        onCancel={handleCancel}
        isEditing={editingId !== null}
      />

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Existing Test Executions
      </Typography>

      <TestExecutionTable
        testExecutions={testExecutions}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </Box>
  );
};

export default TestExecutionPage;