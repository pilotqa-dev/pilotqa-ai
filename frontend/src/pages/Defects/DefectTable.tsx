import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { Button, Card, CardContent } from "@mui/material";

import type { Defect } from "../../types/defect";

interface Props {
  defects: Defect[];
  onEdit: (defect: Defect) => void;
  onDelete: (id: string) => void;
}

const DefectTable = ({
  defects,
  onEdit,
  onDelete,
}: Props) => {
  const columns: GridColDef[] = [
    {
      field: "defectId",
      headerName: "Defect ID",
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
      field: "severity",
      headerName: "Severity",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "execution",
      headerName: "Execution",
      flex: 2,
      valueGetter: (_value, row) =>
        row.execution?.executionId ?? "",
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
          rows={defects}
          columns={columns}
          autoHeight
          disableRowSelectionOnClick
        />
      </CardContent>
    </Card>
  );
};

export default DefectTable;