import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { IoDocumentTextOutline } from "react-icons/io5"
import { Totaltask } from './Financial.styled';
import AddDiv from './add_components/AddDiv';




function SalaryTabe({ salary }) {


  function createData(givetask, task, position, office, givetasktime, endoffulfil, gettask, history, comission, bonus, advance, interruption, penalty, result, salarydate, status) {
    return {
      givetask,
      task,
      position,
      office,
      givetasktime,
      endoffulfil,
      gettask,
      history,
      comission,
      bonus,
      advance,
      interruption,
      penalty,
      result,
      salarydate,
      status,
    };
  }

  const rows = [];
  salary.map(index => {
    return (index.employee.id > 1 ?
      rows.push(createData(
        index.id,
        index.employee.fullname,
        index.employee.company.name,
        index.employee.office.name,
        index.employee.company.name,
        index.extra_data.total_working_day,
        index.employee.salary,
        index.sale_quantity,
        index.commission_amount,
        index.extra_data.total_bonus,
        index.extra_data.total_advancepayment,
        index.extra_data.total_salarydeduction,
        index.extra_data.total_salarypunishment,
        index.final_salary,
        index.pay_date,
        index.is_done
      )) : "")
  })

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }


  function EnhancedTableHead(props) {
    const { onSelectAllClick, numSelected, rowCount } =
      props;



    return (
      <TableHead>
        <div style={{display: "none"}}>
          <AddDiv numSelected={numSelected}/>
        </div>
        <TableRow style={{ height: "48px", }}>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell>
          <TableCell className='table_id th_total'>ID</TableCell>
          <TableCell className='table_leader th_total'>Ad Soyad</TableCell>
          <TableCell className='table_company th_total '>Şirkət</TableCell>
          <TableCell className='table_office th_total '>Ofis</TableCell>
          <TableCell className='table_const th_total '>Vəzifə</TableCell>
          <TableCell className='table_rest th_total '>İş günü</TableCell>
          <TableCell className='table_task th_total '>Sabit</TableCell>
          <TableCell className='table_history th_total '>Satış sayı</TableCell>
          <TableCell className='table_comission th_total'>Komissiya</TableCell>
          <TableCell className='table_bonus th_total'>Bonus</TableCell>
          <TableCell className='table_advance th_total'>Avans</TableCell>
          <TableCell className='table_interruption th_total'>Kesinti</TableCell>
          <TableCell className='table_penalty th_total'>Cərimə</TableCell>
          <TableCell className='table_result th_total'>Yekun</TableCell>
          <TableCell className='table_salarydate th_total'>Ə/H ödəmə tarixi</TableCell>
          <TableCell className='table_status th_total'>Status</TableCell>
        </TableRow>
      </TableHead>
    );
  }

  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };


  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('task');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.givetask);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.


  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 1200 }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.givetask);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <>
                      <tr
                        hover
                        onClick={(event) => handleClick(event, row.givetask)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.givetask}
                        selected={isItemSelected}

                      >
                        <td padding="checkbox" className="checkboxs">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </td>
                        <td className='table_id'>{row.givetask}</td>
                        <td className='table_leader'>{row.task}</td>
                        <td className='table_company'>{row.position}</td>
                        <td className='table_office'>{row.office}</td>
                        <td className='table_const'>{row.givetasktime}</td>
                        <td className='table_rest'>{row.endoffulfil}</td>
                        <td className='table_task'>{row.gettask}</td>
                        <td className='table_history'>{row.history}</td>
                        <td className='table_comission'>{row.comission}</td>
                        <td className='table_bonus'>{row.bonus}<IoDocumentTextOutline className='texticon' /></td>
                        <td className='table_advance'>{row.advance}<IoDocumentTextOutline className='texticon' /></td>
                        <td className='table_interruption'>{row.interruption}<IoDocumentTextOutline className='texticon' /></td>
                        <td className='table_penalty'>{row.penalty}<IoDocumentTextOutline className='texticon' /></td>
                        <td className='table_result'>{row.result}</td>
                        <td className='table_salarydate'>{row.salarydate}</td>
                        <td className='table_status'>{row.status ? <p className='status_true'>Ödənilib</p> : <p className='status_false'>Ödənilməyib</p>}</td>
                      </tr>

                    </>
                  );
                })}

            </TableBody>
          </Table>
          <div className='bottom_task'>
            <Totaltask>
              <p className='taskquantity'>
                Toplam tapşırıq sayı :
                <span className='execution'> 5000</span>
              </p>
              <p className='complete'>
                Tamamlandı :
                <span className='execution'> 5000</span>
              </p>
              <p className='execute'>
                İcra edilir :
                <span className='execution'> 5000</span>
              </p>
              <p className='BElate'>
                Gecikir :
                <span className='execution'> 5000</span>
              </p>
            </Totaltask>


            <TablePagination
              className='rowsper'
              rowsPerPageOptions={[5, 10, 25, 50]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </TableContainer>
        {/* <Totaltask></Totaltask>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}

      </Paper>

    </Box>
  );
}
export default SalaryTabe;
