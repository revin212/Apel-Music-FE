
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Alert, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useMemo, useEffect, useContext } from 'react';
import { getCookie } from '../../../utils/authUtils';
import { AuthContext } from '../../AuthContext/AuthContext';
import useGetData from '../../../hooks/useGetData';
import { dateToStringInvoice } from '../../../utils/DateUtils';
import { SkeletonTableRow } from '../../Skeleton/SkeletonTableRow';

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


export const AdminInvoiceTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const {data: invoiceList, loading, errorState, getData} = useGetData();
  const {token} = useContext(AuthContext)

  useEffect(()=>{
    getData('/admin/TsOrderAdmin/GetAllInvoicesList', { 'Authorization': `Bearer ${token}` })
  },[token])

  // useEffect(()=>{
  //   document.getElementsByClassName('css-yf8vq0-MuiSelect-nativeInput')[0].name = 'table-rows-per-page'
  // },[])


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
      invoiceList.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [page, rowsPerPage, invoiceList],
  );

  return (
    <>
    <TableContainer component={Box}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell>User Email</StyledTableCell>
            <StyledTableCell>No. Invoice</StyledTableCell>
            <StyledTableCell>Tanggal Beli</StyledTableCell>
            <StyledTableCell>Jumlah Kursus</StyledTableCell>
            <StyledTableCell>Total Harga</StyledTableCell>
            <StyledTableCell>Payment Method</StyledTableCell>
            <StyledTableCell sx={{width:{xs:'100px', md:'180px'}}}>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading && 
            <StyledTableRow>
              <StyledTableCell colSpan={8}>
                <SkeletonTableRow />
              </StyledTableCell>
            </StyledTableRow>
            }

          {errorState && 
            <StyledTableRow>
              <StyledTableCell colSpan={8}>
                <Alert variant="outlined" severity="error" sx={{color:'warning.main', my:'48px', mx:'32px'}}>
                    Terjadi kesalahan pada server, mohon muat ulang halaman beberapa saat lagi
                </Alert>
              </StyledTableCell>
            </StyledTableRow>
            }

          {visibleRows?.map((row, index) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {(rowsPerPage * page) + index+1}
              </StyledTableCell>
              <StyledTableCell>{row.userEmail}</StyledTableCell>
              <StyledTableCell>{row.invoiceNo}</StyledTableCell>
              <StyledTableCell>{dateToStringInvoice(new Date(row.orderDate))}</StyledTableCell>
              <StyledTableCell>{row.course_count}</StyledTableCell>
              <StyledTableCell>
                IDR {new Intl.NumberFormat(["ban", "id"]).format(row.totalHarga)}
              </StyledTableCell>
              <StyledTableCell>{row.paymentName}</StyledTableCell>
              <StyledTableCell>
                <Link to={`/admin/invoice/${row.id}`}>
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
        count={invoiceList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </>
  )
}