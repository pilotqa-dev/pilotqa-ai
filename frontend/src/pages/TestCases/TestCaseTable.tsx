import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { Button, Card, CardContent } from "@mui/material";

import type { TestCase } from "../../types/testCase";

interface Props {
  testCases: TestCase[];
  onEdit: (testCase: TestCase) => void;
  onDelete: (id: string) => void;
}

const TestCaseTable = ({
  testCases,
  onEdit,
  onDelete,
}: Props) => {
  const columns: GridColDef[] = [
    {
      field: "testCaseId",
      headerName: "Test Case ID",
      flex: 1,
    },
    {
      field: "title",
      headerName: "Title",
      flex: 2,
    },
    {
      field: "priority",
      headerName: "Priority",
      flex: 1,
    },
    {
      field: "requirement",
      headerName: "Requirement",
      flex: 2,
      valueGetter: (_value, row) =>
        row.requirement?.requirementId ?? "",
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
          rows={testCases}
          columns={columns}
          autoHeight
          disableRowSelectionOnClick
        />
      </CardContent>
    </Card>
  );
};

export default TestCaseTable;