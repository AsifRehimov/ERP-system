import { FullScreen } from "./EditComponent.styled";
// import DatePicker from "react-datepicker";
// import { useState } from "react";
// import { RiCalendar2Fill } from "react-icons/ri";
import { useEffect } from 'react';
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css"
import { Link, /*useNavigate*/  } from "react-router-dom";
// import dateFormat from "dateformat";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';
import PropTypes from 'prop-types';
import {AdvanceTableDiv, Totaltask} from "./EditComponent.styled"
import { useState } from "react";
// import { set } from "date-fns";



function EditAdvance({empoyeeid, user, setOpenAdvance, openAdvance}) {


  const [advanceApi, setAdvanceApi] = useState(user);
  const [selectId, setSelectId] = useState([]);
  console.log(selectId);  
  
  const dateClick = user.map(index => index.date)
  const month = (new Date(dateClick).getDate())
  const yearsClick = (new Date(dateClick).getFullYear())
  const employeeid = empoyeeid.toString()

 
  


  const cony = `someapilink/salaries/advancepayment/?employee=${employeeid}&salary_date__month=${[month]}&salary_date__year=${[yearsClick]}`;
  useEffect(() => {

    axios.get(cony,  {
      headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      }
        ).then(data =>{
           return(
          setAdvanceApi(data.data.results),
          console.log(data.data.results)
          )})
    }, [cony]);

    const come = advanceApi.filter(m => selectId.some((t) => (t === m.id)));
    const deleteAdvance = come.map(m => m.is_paid === false && m.id) 


    
const deleteclick = e => {
  e.preventDefault()

    const deletelink = `someapilink/salaries/advancepayment/${deleteAdvance}/`;

    axios.delete(deletelink ,{
      headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      }
        ).then(alert("success")).catch(alert("not succuess"))
  }
   



  return (
    <FullScreen className="h-full">
      <form className="calendar_div" /*onSubmit={handleSubmit}*/>
        <p className="holiday_title">İşçinin avans tarixçəsi</p>
          <p className="history">Tarixçə</p>
          <AdvanceTabel advanceApi={advanceApi} setSelectId={setSelectId} />
       {come.map( d => {  
        return(d.is_paid ? (<button className="deletedis">Sil</button>) : (<button className="delete" onClick={deleteclick}>Sil</button>))})}
        <Link className="reject" onClick={() => setOpenAdvance(!openAdvance)}>Geri qayıt</Link>
        <button  className="add" onClick={() => setOpenAdvance(!openAdvance)} type="submit">Yadda saxla</button>
      </form>
    </FullScreen>
  )
}
export default EditAdvance;




function AdvanceTabel({advanceApi, setSelectId}) {


  function createData( empid,date, amount, note, status) {
    return {
      empid,
      date,
      amount,
      note,
      status,
    };
  }

  const rows = [];
  
  advanceApi.map(index => {
    return(
      rows.push( createData(
        index.id,
        index.date, 
        index.amount, 
        index.note, 
        index.is_paid,
        ))
    )
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
        {/* <div style={{display: "none"}}>
          <AddDiv numSelected={numSelected}/>
        </div> */}
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
          <TableCell className='table_date th_total'>Tarix</TableCell>
          <TableCell className='table_amount th_total'>Məbləğ</TableCell>
          <TableCell className='table_note th_total '>Qeyd</TableCell>
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
  setSelectId(selected)


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.empid);
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



  const isSelected = (name) => selected.indexOf(name) !== -1;

  

 
  const amount =  rows.map(x => parseInt(x.amount, 10))
  let total = 0;
  for(let i = 0; i < amount.length; i++){
    total = total + amount[i];
  }
  console.log(total);
  


  return (
  <>
  <AdvanceTableDiv>
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
                .map((row, index) => {
                  const isItemSelected = isSelected(row.empid);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  
                  
                  return (
                    <>
                      <tr
                        hover
                        onClick={(event) => handleClick(event, row.empid)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.empid}
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
                        {/* <td style={{display:"none"}}>{(setChange(row.note))}</td> */}
                        <td className='table_date'>{row.date}</td>
                        <td className='table_amount'>{row.amount}</td>
                        <td className='table_note' >{row.note}</td>
                        {/* <td className='table_note' ><input placeholder={row.note} value={changes.note} onClick={() => handlechange(row)} onChange={changein}/></td> */}
                        <td className='table_status'>{row.status ? <p className='status_true'>Ödənilib</p> : <p className='status_false'>Ödənilməyib</p>} </td>
                        
                      </tr>

                    </>
                  );
                })}

            </TableBody>
          </Table>
          <div className='bottom_task'>


       
          </div>
        </TableContainer>
    

      </Paper>

    </Box>
  </AdvanceTableDiv>
     <Totaltask>Avansların cəmi <p className="totalamount">: {total} manat</p></Totaltask>

  </>
  );
}