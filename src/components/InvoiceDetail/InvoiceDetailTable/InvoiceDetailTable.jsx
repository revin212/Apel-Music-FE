
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { dateToString } from '../../../utils/DateUtils';
import { useState, useMemo } from 'react';
import { Box } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: '#4F4F4F',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '24px',
        letterSpacing: '0em',
        textAlign: 'center',
        padding: '20px',
    },
    [`&.${tableCellClasses.body}`]: {
        color: '#4F4F4F',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '24px',
        letterSpacing: '0em',
        textAlign: 'center',
        padding: '20px',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: 'white',
    },
    '&:nth-of-type(even)': {
        backgroundColor: 'rgba(242,201,76, 0.2)',
    },
        // hide last border
        '&:last-child td, &:last-child th': {
        border: 'none',
    },
}));


function createData(no, course_name, category, course_date, price ) {
    return { no, course_name, category, course_date, price };
}

const rows = [
    createData(1,'Kursus Drummer Special Coach (Eno Netral)', 'Drum',new Date('2022-07-25'), 8500000),
    createData(2,'Biola Mid-Level Course', 'Biola',new Date('2022-07-23'), 3000000),
];
  

export const InvoiceDetailTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = useMemo(
    () =>
      rows.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [page, rowsPerPage],
  );

  return (
    <>
    <TableContainer component={Box}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell>Nama Course</StyledTableCell>
            <StyledTableCell>Kategori</StyledTableCell>
            <StyledTableCell>Jadwal</StyledTableCell>
            <StyledTableCell>Harga</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleRows.map((row) => (
            <StyledTableRow key={row.no}>
              <StyledTableCell component="th" scope="row">
                {row.no}
              </StyledTableCell>
              <StyledTableCell>{row.course_name}</StyledTableCell>
              <StyledTableCell>{row.category}</StyledTableCell>
              <StyledTableCell>{dateToString(new Date(row.course_date))}</StyledTableCell>
              <StyledTableCell>
                IDR {new Intl.NumberFormat(["ban", "id"]).format(row.price)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </>
  )
}