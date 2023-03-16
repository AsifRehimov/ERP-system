import { FullScreen } from "./EditComponent.styled";
// import DatePicker from "react-datepicker";
// import { useState } from "react";
// import { RiCalendar2Fill } from "react-icons/ri";
import { useEffect } from 'react';
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css"
import { Link  } from "react-router-dom";
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
import YesorNoPenalty from "./YesorNoPenalty";
// import { set } from "date-fns";



function EditPenalty({empoyeeid, user, setOpenPenalty, openPenalty}) {


  const [advanceApi, setAdvanceApi] = useState(user);
  const [selectId, setSelectId] = useState([]);
  const [yesorNo, setYesorNo] = useState(false);

  const dateClick = user.map(index => index.date)
  const month = (new Date(dateClick).getDate())
  const yearsClick = (new Date(dateClick).getFullYear())
  const employeeid = empoyeeid.toString()

 
  


  const cony = `someapilink/salaries/salary-punishment/?employee=${employeeid}&salary_date__month=${[month]}&salary_date__year=${[yearsClick]}`;
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
    const deletePenalty = come.map(m => m.is_paid === false && m.id) 


    // const[putreq, setPutreq] = useState()
    // const[change, setChange] = useState({note:""})
    // console.log(come);
    // const put = advanceApi.filter(m => [change].some((t) => (t === m.id)));
    // const putid = put.map(index => index.id)
    // console.log(putreq, change);



// const addclick = e => {
//   e.preventDefault()

//     const addlink = `someapilink/salaries/salary-punishment/${putreq}/`;

//     axios.put(addlink,  {note: change},{
//       headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${localStorage.getItem("token")}`,
//         },
//       }
//         ).then(alert("success")).then(setOpenPenalty(!openPenalty))
//   }

   
  // useEffect(() => {
  //   // add condition to state if needed
  //   const timer = window.setInterval(() => {
  //     advanceApi
  //   }, 1000);
  
  //   return () => { 
  //     window.clearInterval(timer);
  //   }
  // }, [advanceApi])


  return (
    <FullScreen className="h-full">
     {yesorNo ? <YesorNoPenalty  setYesorNo={setYesorNo} yesorNo={yesorNo} deletePenalty={deletePenalty}/> : <form className="calendar_div" /*onSubmit={handleSubmit}*/>
        <p className="holiday_title">İşçinin cərimə tarixçəsi</p>
          <p className="history">Tarixçə</p>
         <AdvanceTabel advanceApi={advanceApi} setSelectId={setSelectId}/>
       {come.map( d => {  
        return(d.is_paid ? (<button className="deletedis">Sil</button>) : (<button className="delete" onClick={() => setYesorNo(!yesorNo)}>Sil</button>))})}
        <Link className="reject" onClick={() =>  setOpenPenalty(false)} >Geri qayıt</Link>
        <button  className="add" onClick={() =>  setOpenPenalty(false)} type="submit">Yadda saxla</button>
      </form>}
    </FullScreen>
  )
}
export default EditPenalty;




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

  

 
  // const chan  = [change].toString()
  
  // const [changes , setChanges] = useState([])
  // const [chanId , setChanId] = useState()
  
  // const handlechange = (e) => {
  //   setChanges(e);
  //   setPutreq(e.empid);

  //   // const filter  = [changes].filter(x => x.id === e.empid)
    
  //   }
  // const changein = (e) => {
  //   setChanges(e.target.value);
    
  // }

  // setChange(changes)
    // if (changes.empid === e.id) {
    //   return changes.note
    // } else {
    //   console.log("not success");
    // }
    // const filter  = [changes].filter(x => x.id === rows.empid)
    // var valuefilter = filter.map(x => x.note)
  // setChange(changes)
  // useEffect(() =>{

  // })
  //

  // const note = chanId.map(x => x)
  // console.log(chanId.toString());
  // console.log(changes);

  const amount =  rows.map(x => parseInt(x.amount, 10))
  let total = 0;
  for(let i = 0; i < amount.length; i++){
    total = total + amount[i];
  }

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
     <Totaltask>Bonusların cəmi <p className="totalamount">: {total} manat</p></Totaltask>

  </>
  );
}