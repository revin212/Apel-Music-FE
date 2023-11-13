
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { dateToStringInvoice, days, months } from '../../utils/DateUtils';
import { useState, useMemo } from 'react';

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


function createData(no, no_invoice, buy_date, course_count, total_price, detail_url ) {
    return { no, no_invoice, buy_date, course_count, total_price, detail_url };
}

const rows = [
    createData(1,'APM00003', new Date('2022-06-12'), 2, 11500000, '/invoice'),
    createData(2,'APM00003', new Date('2022-06-12'), 2, 11500000, '/invoice'),
    createData(3,'APM00003', new Date('2022-06-12'), 2, 11500000, '/invoice'),
    createData(4,'APM00003', new Date('2022-06-12'), 2, 11500000, '/invoice'),
    createData(5,'APM00003', new Date('2022-06-12'), 2, 11500000, '/invoice'),
    createData(6,'APM00003', new Date('2022-06-12'), 2, 11500000, '/invoice'),
];
  

export const InvoiceTable = () => {
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow sx={{}}>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell>No. Invoice</StyledTableCell>
            <StyledTableCell>Tanggal Beli</StyledTableCell>
            <StyledTableCell>Jumlah Kursus</StyledTableCell>
            <StyledTableCell>Total Harga</StyledTableCell>
            <StyledTableCell sx={{width:{xs:'100px', md:'180px'}}}>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleRows.map((row, index) => (
            <StyledTableRow key={row.no}>
              <StyledTableCell component="th" scope="row">
                {row.no}
              </StyledTableCell>
              <StyledTableCell>{row.no_invoice}</StyledTableCell>
              <StyledTableCell>{dateToStringInvoice(new Date(row.buy_date))}</StyledTableCell>
              <StyledTableCell>{row.course_count}</StyledTableCell>
              <StyledTableCell>
                IDR {new Intl.NumberFormat(["ban", "id"]).format(row.total_price)}
              </StyledTableCell>
              <StyledTableCell>
                <Link to={row.detail_url}>
                <Button variant='contained' sx={{width:'100%', maxWidth:'180px'}}>
                    Rincian 
                </Button>
                </Link>
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