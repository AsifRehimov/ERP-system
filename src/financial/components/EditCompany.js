import { FullScreen } from "./Financial.styled";
import { useEffect } from 'react';
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css"
import { Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import PropTypes from 'prop-types';
import {OfficeTableDiv, Totaltask} from "./Financial.styled"
import { useState } from "react";



function EditCompany({setCompanyOffice, companyOffice, empId, setSuccess, companyName, setRefreshData}) {


  const [officeApi, setOfficeApi] = useState([]);
  const [extraApi, setExtraApi] = useState([]);
  const [editOffice, setEditOffice] = useState();

  let i = 0
  const clickSave = () =>{
    while (i < editOffice.length) {
      console.log(editOffice[i]);
      const addlink = `someapilink/cashbox/office-cashbox/${editOffice[i].id}`;

      axios.put(addlink, {
        "balance": `${editOffice[i].balance}`,
        "note": `${editOffice[i].note}`
      },{
        headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        }
          ).then(
                 setRefreshData(true),
                 setCompanyOffice(!companyOffice),
                 setSuccess({open : true},
                 setTimeout(()=> {setSuccess({open : false})}, 2000)
                ))
    
      i++;
    }
  }
 
  console.log(extraApi);


  useEffect(() => {
      const cony = `someapilink/cashbox/office-cashbox/?office__company__id=${empId}`;

    axios.get(cony,  {
      headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      }
        ).then(data =>{
           return(
          setOfficeApi(data.data.results),
          setExtraApi(data.data.results)
          )})
    }, [empId]);




    console.log([officeApi]);

  return (
    <FullScreen className="h-full">
      <form className="calendar_div" /*onSubmit={handleSubmit}*/>
        <p className="holiday_title">{companyName} şirkətinin ofisləri və balansı</p>
          <OfficeTabel officeApi={officeApi}  extraApi={extraApi} setEditOffice={setEditOffice} setRefreshData={setRefreshData}/>
        <Link className="reject" onClick={() => setCompanyOffice(!companyOffice)}>Geri qayıt</Link>
        <Link  className="add" onClick={clickSave}>Yadda saxla</Link>
      </form>
    </FullScreen>
  )
}
export default EditCompany;




function OfficeTabel({officeApi, extraApi, setEditOffice, setRefreshData}) {

  const[datacom, setDatacom] = useState([])

    setEditOffice(datacom)

  useEffect(() =>{
    setDatacom(officeApi)
  }, [officeApi])
  console.log(datacom);
  function createData( id, officeName, amount, note) {
    return {
      id,
      officeName,
      amount,
      note,
    };
  }

  const rows = [];
  
  datacom.map(index => {
    return(
      rows.push( createData(
        index.id,
        index.office.name, 
        index.balance, 
        index.note, 
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


  function EnhancedTableHead() {

      


      
    return (
      <TableHead>
        <TableRow style={{ height: "48px", }}>
          <TableCell className='table_date th_total'>Ofis</TableCell>
          <TableCell className='table_amount th_total'>Balans</TableCell>
          <TableCell className='table_note th_total '>Qeyd</TableCell>
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


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const changeNote = (e, row) =>{
        let result = datacom;
        result = result.map((el) => {
            if (el.id === row.id) el.note = e.target.value;
            return el;
        });
        
        console.log(result.map(x => x));
        setDatacom(result);
        setRefreshData(false)
  }

  const changeBalance = (event, row) =>{
        let resulte = datacom;
        resulte = resulte.map((el) => {
            if (el.id === row.id) el.balance = event.target.value;
            return el;
        });
        
        console.log(resulte.map(x => x));
        setDatacom(resulte);
        setRefreshData(false)
  }

 

  
  const amount =  rows.map(x => parseInt(x.amount, 10))
  let total = 0;
  for(let i = 0; i < amount.length; i++){
    total = total + amount[i];
  }
  


  return (
  <>
  <OfficeTableDiv>
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 1200 }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .map((row, index) => {                  
                  
                  return (
                    <>
                      <tr
                        hover
                        tabIndex={-1}
                        key={row.id}
                      >
                        <td className='table_date'>{row.officeName}</td>
                        <td className='table_amount'><input type="number" value={row.amount} name={row.officeName} onChange={(event)=>changeBalance(event, row)}/></td>
                        <td className='table_note' ><input value={row.note} name={row.id} onChange={(e)=>changeNote(e, row)}/></td>
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
  </OfficeTableDiv>
     <Totaltask><p className="totalamount">: {total} azn</p><p className="totalpar">Ofislərin toplam balansı </p></Totaltask>

  </>
  );
}