import { FilterFromHolding, FinancilalDiv, FinancilalMainDiv } from "../Financial.styled";
import { GiBackwardTime } from 'react-icons/gi';
import { IoNotificationsOutline } from 'react-icons/io5'
import { TopDiv, TopDivRightdiv, BlueLine } from "../../human-resource/Hr.styled";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MdCancel } from 'react-icons/md';
import DatePicker from "react-datepicker";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { AlertNow, CompanyAction, HoldingAction,  Totallist,  TransferTableDiv } from "./Financial.styled";
import { TablePagination } from "@mui/material";
import { CalculatorMainDiv, CalculatorSmallDiv } from "../Financial.styled";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import dateFormat from "dateformat";







function Cashflow({ show , successTransfer, companyDataApi, officeDataApi}) {

  
  
    const [openApi, setOpenApi] = useState(null)
    const [cashFlow, setcashFlow] = useState([])
    const [openFilter, setOpenFilter] = useState(false)
    const [openScroll, setOpenScroll] = useState(false)
    const [comment, setComment] = useState('')
    const [executor, setExecutor] = useState('')
    const [personal, setPersonal] = useState('')
    const [personalApi, setPersonalApi] = useState([])
    const [customersApi, setCustomersApi] = useState([])
    const [company, setCompany] = useState('')
    const [customer, setCustomer] = useState('')
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [Office, setOffice] = useState('')
    const [limit, setlimit] = useState([])
    const [limitoffset, setLimitOffset] = useState({offset:"", page:""});
    const [totalInfo, setTotalInfo] = useState({exe:"", per:"", cust:"", comm:"", comp:"", off:"", sdate:null, edate:null});







    const handleEnterpress = (e) => {

      setOpenApi(0)
      setOpenApi(1)  
      setTotalInfo({
        exe:executor, 
        comp:company, 
        comm:comment, 
        per:personal, 
        cust:customer, 
        off:Office, 
        sdate:dateGreater,
        edate:dateLess
      })

    }

    const handleDeleteAll = (e) => {

      setOpenApi(0)
      setExecutor('')
      setCompany('')
      setComment('')
      setPersonal('')
      setCustomer('')
      setStartDate(null)
      setEndDate(null)
      setOffice('')
  
    }   





    useEffect(() =>{
      if(openApi === 0){
        const url = `someapilink/cashbox/cashflow/?limit=${limitoffset.offset * (limitoffset.page + 1)}`;
        axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          }
        }
        )
          .then((data) => {
            return (
              setcashFlow(data.data.results[0].data),
              setlimit(data.data.count)
            )
          })
      }else if(openApi === 1){
        const url = `someapilink/cashbox/cashflow/?limit=${limitoffset.offset * (limitoffset.page + 1)}&executor__fullname=${totalInfo.comm}&company=${totalInfo.comp}&customer=${totalInfo.cust}&office=${totalInfo.off}&personal=${totalInfo.per}&description=${totalInfo.exe}&date__gte=${totalInfo.sdate}&date__lte=${totalInfo.edate}`;
        axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          }
        }
        )
          .then((data) => {
            return (
              setcashFlow(data.data.results[0].data),
              setlimit(data.data.count)
            )
          })
      }else{
        const installmentsUrl= `someapilink/cashbox/cashflow/?limit=${limitoffset.offset * (limitoffset.page + 1)}`;
        axios.get(installmentsUrl ,{
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          }
        }
        )
          .then((data) => {
            return (
              setcashFlow(data?.data?.results[0]?.data),
              setlimit(data.data.count)
            )
          })
      }
      },[ limitoffset, openApi, totalInfo])

      useEffect(() =>{
      const url = `someapilink/users`;
      axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
      }
      )
        .then((data) => {
          return (
            setPersonalApi(data.data.results)
          )
        })
      }, [])




      useEffect(() =>{
      const url = `someapilink/users/customers`;
      axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
      }
      )
        .then((data) => {
          return (
            setCustomersApi(data.data.results),
            console.log(data.data.results)
          )
        })
      }, [])
      
    
      let dateLess = (endDate === null ? "" : dateFormat(endDate, "dd-mm-yyyy"))
      let dateGreater = startDate === null ? "" : dateFormat(startDate, "dd-mm-yyyy")

      const changeScroll = () => {
        if (window.scrollY >= 110) {
          setOpenScroll(true)
        } else {
          setOpenScroll(false)
        }
      }
      window.addEventListener('scroll', changeScroll)




 





    



    return (
        <FinancilalMainDiv>
                <FinancilalDiv className={show ? "small" : "big"}>
                    {/* CRM-in yuxarı və ya top hissəsi  */}
                    <TopDiv>

                        {/* TopDiv-in içində olan sağ tərəfdə düzülən saat, bildiriş və card-ın daxilində olanda div  */}
                        <TopDivRightdiv>
                            <GiBackwardTime className="time_icon" />
                            <IoNotificationsOutline className="notification_icon" />
                            <img className="card_photo" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" alt="Ferid" />
                            <Dropdown>
                                <DropdownToggle variant="success" id="dropdown-basic" className="toggle_dropdown" aria-expanded="false" aria-haspopup="true">
                                    Əliyev Fərid
                                </DropdownToggle>

                                <DropdownMenu className="open_drop_down">
                                    <DropdownItem href="/person_setings" className="open_dropdown_choose">Hesab parametrləri</DropdownItem>
                                    <DropdownItem href="/company_setings" className="open_dropdown_choose">Şirkət parametrləri</DropdownItem>
                                    <DropdownItem href="#/action-3" className="open_dropdown_choose">Hesabdan çıx</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </TopDivRightdiv>
                        <p className="page_name">Maliyyə və Kredit / Kassa Hərəkətləri</p>
                    </TopDiv>
                    <BlueLine>
                        <div className="tabs_nav">
                            <Link to="/financial_credit" className="tabs_headers" >Əməkhaqqı</Link>
                            <Link to="/financial_credit/balance" className="tabs_headers">Balans</Link>
                            <Dropdown>
                                <Dropdown.Toggle className="tabs_headers">
                                    Transfer
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="open_drop_down">
                                    <Link to="/financial_credit/holding_to_company" className="open_dropdown_Link">Holding Şirkət arası transfer</Link>
                                    <Link to="/financial_credit/company_to_office" className="open_dropdown_Link">Şirkət ofis arası transfer</Link>
                                    <Link to="/financial_credit/office_to_office" className="open_dropdown_Link">Ofislər arası transfer</Link>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Link to="/financial_credit/installments" className="tabs_headers" >Ödəniş izləmə</Link>
                            <Link to="/financial_credit/cashflow" className="tabs_headers" >Kassa Hərəkətləri</Link>
                        </div>
                    </BlueLine>

                      {
                        successTransfer.open ? <AlertNow>Uğurla əlavə edildi</AlertNow> : ""
                      }

                    <Link to="/financial_credit/cashflow/company_action"><CompanyAction>Şirkət Əməliyyat</CompanyAction></Link>
                    <Link to="/financial_credit/cashflow/holding_action"><HoldingAction>Holding Əməliyyat</HoldingAction></Link>
                    
                    <TransferTable setLimitOffset={setLimitOffset} limit={limit} cashFlow={cashFlow}/>
                    
                    {openFilter ? (<CalculatorMainDiv className={openScroll ? "posFixed" : "posAbsolute"}>
                    <FaAngleDoubleRight className="openfilter" onClick={() => setOpenFilter(!openFilter)} />
                    <p className="calcul_title">Ətraflı axtar</p>
                    <FilterFromHolding style={{height:"550px"}}>
                      <div>
                        <div className="search_filters_section">
                          <input type="text" className="search_input" placeholder="İcraçı" onChange={(e) => setComment(e.target.value)} value={comment} />
                        </div>
                      </div>
                      <div>
                        <select className="filters_section" onChange={(e) => setCompany(e.target.value === "Şirkət" ? "" : e.target.value)} value={company} >
                          <option value="Şirkət">Şirkət</option>
                          {companyDataApi.map(x => {
                            return <option value={x.id}>{x.name}</option>
                          })}
                        </select>
                        <MdCancel className="cancel_icon" onClick={() => setCompany('Şirkət')} />
                      </div>
                      <div>
                        <select className="filters_section" onChange={(e) => setOffice(e.target.value === "Ofis" ? "" : e.target.value)} value={Office} >
                          <option value="Ofis">Ofis</option>
                          {officeDataApi.map(x => {
                              return x.company.id === parseInt(company, 10) ?
                       
                              <option key={x.id} value={x.id}>{x.name}</option>: ""
                          })}
                        </select>
                        <MdCancel className="cancel_icon" onClick={() => setOffice('Ofis')} />
                      </div>
                      <div>
                        <div className="search_filters_section">
                          <input type="text" className="search_input" placeholder="Açıqlama" onChange={(e) => setExecutor(e.target.value)} value={executor} />
                        </div>
                        <MdCancel className="cancel_icon" onClick={() => setExecutor('')} />
                      </div>
                      <div>
                        <select className="filters_section" onChange={(e) => setPersonal(e.target.value === "Personal" ? "" : e.target.value)} value={personal} >
                          <option value="Personal">Personal</option>
                          {personalApi.map(x => {                       
                            return  <option key={x.id} value={x.id}>{x.fullname}</option>
                          })}
                        </select>
                        <MdCancel className="cancel_icon" onClick={() => setPersonal('Personal')} />
                      </div>                                       
                      <div>
                        <select className="filters_section" onChange={(e) => setCustomer(e.target.value === "Müştəri" ? "" : e.target.value)} value={customer} >
                          <option value="Müştəri">Müştəri</option>
                          {customersApi.map(x => {                       
                            return  <option key={x.id} value={x.id}>{x.fullname}</option>
                          })}
                        </select>
                        <MdCancel className="cancel_icon" onClick={() => setCustomer('Müştəri')} />
                      </div>                                       
                      <div>
                        <DatePicker
                          selected={startDate}
                          onChange={(endDate) => setStartDate(endDate)}
                          placeholderText="Başlanğıc tarix"
                          className="filters_section"
                        />
                        <MdCancel className="cancel_icon" onClick={() => setStartDate(null)} />
                      </div>
                     <div>
                        <DatePicker
                          selected={endDate}
                          onChange={(endDate) => setEndDate(endDate)}
                          placeholderText="Son tarix"
                          className="filters_section"
                        />
                        <MdCancel className="cancel_icon" onClick={() => setEndDate(null)} />
                      </div>
                     
                    </FilterFromHolding>
                    <button className="search" onClick={handleEnterpress}>Axtar</button>
                    <button className="delete" onClick={handleDeleteAll}>Təmizlə</button>
                  </CalculatorMainDiv>) : <CalculatorSmallDiv className={openScroll ? "posFixedsmall" : "posAbsolutesmall"}><FaAngleDoubleLeft className="openfilter" onClick={() => setOpenFilter(!openFilter)} />
                  </CalculatorSmallDiv>}
                  
                </FinancilalDiv>
        </FinancilalMainDiv>
    )
}

export default Cashflow;


const TransferTable = ({setLimitOffset, limit, cashFlow}) => {


    function createData(id, date, comment, action, amount, company, sender, endoffulfil, accepter, history, executer) {
      return {
        id,
        date,
        amount,
        comment,
        action,
        company,
        sender,
        endoffulfil,
        accepter,
        history,
        executer,
      };
    }
    const rows = [];
    cashFlow.map((index, key) => {
      return (
        rows.push(createData(
            index.id ,
            index.date ,
            index.description ,
            index.operation_style ,
            index.quantity,
            index.balance ,
            index.customer === null ? "" : index.customer.fullname,
            index.personal === null ? "" : index.personal.fullname,
            index.company === null ? "" : index.company.name,
            index.office === null ? "" : index.office.name,
            index.executor === null ? "" : index.executor.fullname,
         
           
          )))
    })
  
 

    
  
    function EnhancedTableHead() {
  
      return (
        <TableHead>
          <TableRow style={{ height: "48px", }}>
            <TableCell className='table_id th_total'>ID</TableCell>
            <TableCell className='table_leader th_total'>Tarix</TableCell>
            <TableCell className='table_company th_total '>Açıqlama</TableCell>
            <TableCell className='table_action th_total '>Əməliyyat</TableCell>
            <TableCell className='table_office th_total '>Məbləğ</TableCell>
            <TableCell className='table_office th_total '>Balans</TableCell>
            <TableCell className='table_customer th_total '>Müştəri</TableCell>
            <TableCell className='table_customer th_total '>Personal</TableCell>
            <TableCell className='table_task th_total '>Şirkət</TableCell>
            <TableCell className='table_history th_total '>Ofis</TableCell>
            <TableCell className='table_customer th_total'>İcraçı</TableCell>
          </TableRow>
        </TableHead>
      );
    }
  

  
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(15);
    
    useEffect(()=>{
      setLimitOffset({offset:rowsPerPage, page:page})
    },[rowsPerPage, setLimitOffset, page])



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value));
      setPage(0);
    };


    const amounttot = rows.map(x => parseInt(x.amount, 10))
    let amounttotal = 0;
    for (let i = 0; i < amounttot.length; i++) {
      amounttotal = amounttotal + amounttot[i];
    }
   
   
    const balancetot = rows.map(x => parseInt(x.company , 10))
    let balancetotal = 0;
    for (let i = 0; i < balancetot.length; i++) {
      balancetotal = balancetotal + balancetot[i];
    }
    
  
    return (
      <>
        <TransferTableDiv style={{width:"1340px"}}>
          <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
              <TableContainer>
                <Table
                  sx={{ minWidth: 1200 }}
                  aria-labelledby="tableTitle"
                  style={{width:"1340px"}}
                >
                  <EnhancedTableHead/>
                  <TableBody>
                    {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                    
  
                        return (
                          <>
                            <tr
                              hover
                              key={row.id}
  
                            >
                             
                              <td className='table_id'>{row.id}</td>
                              <td className='table_leader' title={row.date}>{row.date}</td>
                              <td className='table_company' title={row.comment}><p>{row.comment}</p></td>
                              <td className={row.action === "MƏDAXİL" ? "table_action_succes" : "table_action_fail"}>{row.action === "MƏDAXİL" ? "Mədaxil" : "Məxaric"}</td>
                              <td className='table_office'>{row.amount}</td>
                              <td className='table_office'>{row.company}</td>
                              <td className='table_customer' title={row.sender}><p>{row.sender}</p></td>
                              <td className='table_customer' title={row.endoffulfil}><p>{row.endoffulfil}</p></td>
                              <td className='table_task'>{row.accepter}</td>
                              <td className='table_history'>{row.history}</td>
                              <td className='table_customer' title={row.executer}><p>{row.executer}</p></td>
                            </tr>
                          </>
                        );
                      })}
  
                  </TableBody>
                </Table>
                <Totallist>
                  <div className="totaldiv">
                    <p className="totaltext">Məbləğ: </p>
                    <p className="totalapi"> {amounttotal.toFixed(1)} ₼</p>
                  </div>
                  <div className="totaldiv">
                    <p className="totaltext">Balans: </p>
                    <p className="totalapi"> {balancetotal.toFixed(1)} ₼</p>
                  </div>
                </Totallist>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 15, 25, 50, 100]}
                  className='rowsper'
                  component="div"
                  count={limit}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableContainer>
       
            </Paper>
  
          </Box>
        </TransferTableDiv>
  
      </>
    );
  }
