import { Card, CardContent, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  organizations: any[];
  onEdit: (row: any) => void;
  onDelete: (id: string) => void;
}

const OrganizationTable = ({
  organizations,
  onEdit,
  onDelete,
}: Props) => {
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Organization Name",
      flex: 1,
    },
    {
      field: "code",
      headerName: "Code",
      width: 140,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 2,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 120,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={() => onEdit(params.row)}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => onDelete(params.row.id)}
        />,
      ],
    },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Existing Organizations
        </Typography>

        <div style={{ height: 450 }}>
          <DataGrid
            rows={organizations}
            columns={columns}
            getRowId={(row) => row.id}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default OrganizationTable;