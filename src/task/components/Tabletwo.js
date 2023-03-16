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
import { Late, Loading, Success, Totaltask } from '../Task.styled';
import loadericon from "../../photo/loadericon.svg"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { IoDocumentTextOutline } from "react-icons/io5"


function createData( task, position, status, givetasktime, endoffulfil, gettask, history) {
  return {
    task,
    position,
    status,
    givetasktime,
    endoffulfil,
    gettask,
    history
  };
}

const rows = [
  createData( "Cumque reprehenderit mon.", "Mühasib köməkçisi", <Loading><img alt='ewesfs' src={loadericon} className="loader" /><p className='proccess'>İcra edilir</p></Loading>, "16/25/2022", "17/25/2022", "Valerie Langosh", <IoDocumentTextOutline className='texticon' />),
  createData( "Cumque reprehenderit din.", "Mühasib köməkçisi", <Loading><img alt='ewesfs' src={loadericon} className="loader" /><p className='proccess'>İcra edilir</p></Loading>, "16/25/2022", "17/25/2022",),
  createData("Cumque reprehenderit kon.", "Mühasib köməkçisi", <Loading><img alt='ewesfs' src={loadericon} className="loader" /><p className='proccess'>İcra edilir</p></Loading>, "16/25/2022", "17/25/2022",),
  createData( "Cumque reprehenderit gun.", "Mühasib köməkçisi", <Loading><img alt='ewesfs' src={loadericon} className="loader" /><p className='proccess'>İcra edilir</p></Loading>, "16/25/2022", "17/25/2022",),
  createData( "Cumque reprehenderit hyn.", "Mühasib köməkçisi", <Loading><img alt='ewesfs' src={loadericon} className="loader" /><p className='proccess'>İcra edilir</p></Loading>, "16/25/2022", "17/25/2022",),
  createData("Cumque reprehenderit dfn.", "Mühasib köməkçisi", <Loading><img alt='ewesfs' src={loadericon} className="loader" /><p className='proccess'>İcra edilir</p></Loading>, "16/25/2022", "17/25/2022",),
  createData( "Cumque reprehenderit kjn.", "Mühasib köməkçisi", <Loading><img alt='ewesfs' src={loadericon} className="loader" /><p className='proccess'>İcra edilir</p></Loading>, "16/25/2022", "17/25/2022",),
  createData("Cumque reprehenderit wen.", "Mühasib köməkçisi", <Loading><img alt='ewesfs' src={loadericon} className="loader" /><p className='proccess'>İcra edilir</p></Loading>, "16/25/2022", "17/25/2022",),
  createData("Cumque reprehenderit dsn.", "Mühasib köməkçisi", <Loading><img alt='ewesfs' src={loadericon} className="loader" /><p className='proccess'>İcra edilir</p></Loading>, "16/25/2022", "17/25/2022",),
  createData("Cumque reprehenderit nac.", "Mühasib köməkçisi", <Loading><img alt='ewesfs' src={loadericon} className="loader" /><p className='proccess'>İcra edilir</p></Loading>, "16/25/2022", "17/25/2022",),
  createData( "Cumque reprehenderit nvx.", "Mühasib köməkçisi", <Loading><img alt='ewesfs' src={loadericon} className="loader" /><p className='proccess'>İcra edilir</p></Loading>, "16/25/2022", "17/25/2022",),
  createData("Cumque reprehenderit nok.", "Mühasib köməkçisi", <Loading><img alt='ewesfs' src={loadericon} className="loader" /><p className='proccess'>İcra edilir</p></Loading>, "16/25/2022", "17/25/2022",),
  createData( "Cumque reprehenderit ndg.", "Mühasib köməkçisi", <Loading><img alt='ewesfs' src={loadericon} className="loader" /><p className='proccess'>İcra edilir</p></Loading>, "16/25/2022", "17/25/2022",),
  createData( "Cumque reprehenderit ndj.", "Mühasib köməkçisi", <Loading><img alt='ewesfs' src={loadericon} className="loader" /><p className='proccess'>İcra edilir</p></Loading>, "16/25/2022", "17/25/2022",),
  createData("Cumque reprehenderit nse.", "Mühasib köməkçisi", <Late><img alt='ewesfs' src={loadericon} className="later" /><p className='belate'>Gecikir</p></Late>, 4.9),
  createData( "Cumque reprehenderit nsn.", "Mühasib köməkçisi", <Success><AiOutlineCheckCircle src={loadericon} className="check" /><p className='success'>Tamamlandı</p></Success>, 6.0),
  createData( "Cumque reprehenderit azn.", "Mühasib köməkçisi", <Loading><img alt='ewesfs' src={loadericon} className="loader" /><p className='proccess'>İcra edilir</p></Loading>, 4.0),
  createData("Cumque reprehenderit son.", "Mühasib köməkçisi", <Loading><img alt='ewesfs' src={loadericon} className="loader" /><p className='proccess'>İcra edilir</p></Loading>, 3.9),
];

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
        <TableCell className='table_leader th_total'>Tapşırıq</TableCell>
        <TableCell className='table_company th_total '>Vəzifə</TableCell>
        <TableCell className='table_office th_total '>Status</TableCell>
        <TableCell className='table_const th_total '>T. Verilmə tarixi</TableCell>
        <TableCell className='table_rest th_total '>Son icra tarixi</TableCell>
        <TableCell className='table_task th_total '>Tapşırıq alan</TableCell>
        <TableCell width="100px" className='table_history th_total '>Tarixçə</TableCell>
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


export default function EnhancedTables() {
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
      const newSelected = rows.map((n) => n.task);
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
                  const isItemSelected = isSelected(row.task);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <>
                      <tr
                        hover
                        onClick={(event) => handleClick(event, row.task)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.task}
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
                        <td className='table_leader'><a href='/task/tasks' className='threedots'>{row.task}</a></td>
                        <td className='table_company'>{row.position}</td>
                        <td className='table_office'>{row.status}</td>
                        <td className='table_const'>{row.givetasktime}</td>
                        <td className='table_rest'>{row.endoffulfil}</td>
                        <td className='table_task'>{row.gettask}</td>
                        <td className='table_history'>{row.history}</td>
                      </tr>
                      
                    </>
                  );
                })}
              <tr
                style={{ height: 48 }}
              >
                <td />
              </tr>
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
