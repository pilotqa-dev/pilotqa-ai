import {
  DataGrid,
  GridActionsCellItem,
} from "@mui/x-data-grid";

import type { GridColDef } from "@mui/x-data-grid";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import type { Project } from "../../types/project";

interface Props {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

const ProjectTable = ({
  projects,
  onEdit,
  onDelete,
}: Props) => {
  const columns: GridColDef[] = [
    {
      field: "organization",
      headerName: "Organization",
      flex: 1,
      valueGetter: (_value, row) => row.organization?.name ?? "",
    },
    {
      field: "name",
      headerName: "Project Name",
      flex: 1,
    },
    {
      field: "projectKey",
      headerName: "Project Key",
      width: 150,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 2,
    },
    {
      field: "actions",
      type: "actions",
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem
          key="edit"
          icon={<EditIcon />}
          label="Edit"
          onClick={() => onEdit(params.row)}
        />,
        <GridActionsCellItem
          key="delete"
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => onDelete(params.row.id)}
        />,
      ],
    },
  ];

  return (
    <DataGrid
      rows={projects}
      columns={columns}
      autoHeight
      disableRowSelectionOnClick
      pageSizeOptions={[5, 10]}
    />
  );
};

export default ProjectTable;