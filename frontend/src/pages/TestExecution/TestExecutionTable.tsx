import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { Button, Card, CardContent } from "@mui/material";

import type { TestExecution } from "../../types/testExecution";

interface Props {
  testExecutions: TestExecution[];
  onEdit: (execution: TestExecution) => void;
  onDelete: (id: string) => void;
}

const TestExecutionTable = ({
  testExecutions,
  onEdit,
  onDelete,
}: Props) => {
  const columns: GridColDef[] = [
    {
      field: "executionId",
      headerName: "Execution ID",
      flex: 1,
    },
    {
      field: "title",
      headerName: "Title",
      flex: 2,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "priority",
      headerName: "Priority",
      flex: 1,
    },
    {
      field: "testCase",
      headerName: "Test Case",
      flex: 2,
      valueGetter: (_value, row) =>
        row.testCase?.testCaseId ?? "",
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1.5,
      sortable: false,
      renderCell: (params) => (
        <>
          <Button onClick={() => onEdit(params.row)}>
            Edit
          </Button>

          <Button
            color="error"
            onClick={() => onDelete(params.row.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <Card>
      <CardContent>
        <DataGrid
          rows={testExecutions}
          columns={columns}
          autoHeight
          disableRowSelectionOnClick
        />
      </CardContent>
    </Card>
  );
};

export default TestExecutionTable;