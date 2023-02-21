import React,{useState} from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../index.css'


const columns = [
  { id: 'name', label: 'Company', minWidth: 170 },
  { id: 'code', label: 'Email', minWidth: 100 },
  {
    id: 'population',
    label: 'Client',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Active Client',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Avarage',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'india@gmail.com', 1324171354, 3287263),
  createData('China', 'China@gmail.com', 1403500365, 9596961),
  createData('Italy', 'Italy@gmail.com', 60483973, 301340),
  createData('United States', 'Unitedstates@gmail.com', 327167434, 9833520),
  createData('Canada', 'Canada@gmail.com', 37602103, 9984670),
  createData('Australia', 'Australia@gmail.com', 25475400, 7692024),
  createData('Germany', 'Germany@gmail.com', 83019200, 357578),
  createData('Ireland', 'Ireland@gmail.com', 4857000, 70273),
  createData('Mexico', 'Mexico@gmail.com', 126577691, 1972550),
  createData('Japan', 'Japan@gmail.com', 126317000, 377973),
  createData('France', 'France@gmail.com', 67022000, 640679),
  createData('United Kingdom', 'Unitedkingdom@gmail.com', 67545757, 242495),
  createData('Russia', 'Russia@gmail.com', 146793744, 17098246),
  createData('Nigeria', 'Nigeria@gmail.com', 200962417, 923768),
  createData('Brazil', 'Brazil@gmail.com', 210147125, 8515767),
  createData('India', 'india@gmail.com', 1324171354, 3287263),
  createData('China', 'China@gmail.com', 1403500365, 9596961),
  createData('Italy', 'Italy@gmail.com', 60483973, 301340),
  createData('United States', 'Unitedstates@gmail.com', 327167434, 9833520),
  createData('Canada', 'Canada@gmail.com', 37602103, 9984670),
  createData('Australia', 'Australia@gmail.com', 25475400, 7692024),
  createData('Germany', 'Germany@gmail.com', 83019200, 357578),
  createData('Ireland', 'Ireland@gmail.com', 4857000, 70273),
  createData('Mexico', 'Mexico@gmail.com', 126577691, 1972550),
  createData('Japan', 'Japan@gmail.com', 126317000, 377973),
  createData('France', 'France@gmail.com', 67022000, 640679),
  createData('United Kingdom', 'Unitedkingdom@gmail.com', 67545757, 242495),
  createData('Russia', 'Russia@gmail.com', 146793744, 17098246),
  createData('Nigeria', 'Nigeria@gmail.com', 200962417, 923768),
  createData('Brazil', 'Brazil@gmail.com', 210147125, 8515767),
];

const CustomerHeros=()=> {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className='customerHerosContainer'>
      <div className='customerherostop'>
        <div className='customerheroarrow'><ArrowBackIcon/></div>
        <div className='customerheroheader'>
          <div>Refresh</div>
          <div>Add new customer</div>
        </div>
      </div>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}

export default CustomerHeros;
