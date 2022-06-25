import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'artistName', headerName: 'Artist name', width: 150 },
  { field: 'collectionName', headerName: 'Album', width: 500 },
  { field: 'trackName', headerName: 'Song', width: 200 }
];

interface IProps {
  rows: any;
}

export default function DataTable({rows}: IProps) {
  return (
    <div style={{ height: 635, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}
