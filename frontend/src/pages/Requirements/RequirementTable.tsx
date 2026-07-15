import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { Button, Card, CardContent } from "@mui/material";

import type { Requirement } from "../../types/requirement";

interface Props {
  requirements: Requirement[];
  onEdit: (requirement: Requirement) => void;
  onDelete: (id: string) => void;
}

const RequirementTable = ({
  requirements,
  onEdit,
  onDelete,
}: Props) => {
  const columns: GridColDef[] = [
    {
      field: "requirementId",
      headerName: "Requirement ID",
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
      field: "project",
      headerName: "Project",
      flex: 2,
      valueGetter: (_value, row) => row.project?.name ?? "",
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
          rows={requirements}
          columns={columns}
          autoHeight
          disableRowSelectionOnClick
        />
      </CardContent>
    </Card>
  );
};

export default RequirementTable;