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
import { AlertNow, Transfer, TransferTableDiv, TransferTotallist } from "./Financial.styled";
import { TablePagination } from "@mui/material";
import { CalculatorMainDiv, CalculatorSmallDiv } from "../Financial.styled";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import dateFormat from "dateformat";







function OfficeToOffice({ show , successTransfer, companyDataApi, officeDataApi}) {

  
  

    const [transferCompApi, setTransferCompApi] = useState([])
    const [openFilter, setOpenFilter] = useState(false)
    const [openScroll, setOpenScroll] = useState(false)
    const [comment, setComment] = useState('')
    const [sender, setSender] = useState('')
    const [senderBalance, setSenderBalance] = useState('')
    const [senderData, setSenderData] = useState()
    const [company, setCompany] = useState('')
    const [making, setMaking] = useState('')
    const [makingBalance, setMakingBalance] = useState('')
    const [makingData, setMakingData] = useState()
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [openApi, setOpenApi] = useState(null)
    const [limit, setlimit] = useState([])
    const [limitoffset, setLimitOffset] = useState({offset:"", page:""});
    const [totalInfo, setTotalInfo] = useState({send:"", sendbal:"", make:"", comm:"", comp:"", makebal:"", sdate:null, edate:null});

    
    useEffect(() =>{
      setMakingData(officeDataApi)
      setSenderData(officeDataApi)
    },[officeDataApi, setMakingData, setSenderData])
      
      const changeWorker = (e) => {
        setComment(e.target.value)
      }    
      
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





      const handleEnterpress = (e) => {

        e.preventDefault()
        setOpenApi(0)
        setOpenApi(1)  
        setTotalInfo({
          send:sender, 
          sendbal:senderBalance, 
          make:making, 
          comm:comment, 
          comp:company, 
          makebal:makingBalance, 
          sdate:dateGreater,
          edate:dateLess
        })    
      }




      const handleDeleteAll = (e) => {

        e.preventDefault()
        setOpenApi(0)
        setCompany('')
        setComment('')
        setSender('')
        setSenderBalance('')
        setMaking('')
        setMakingBalance('')
        setStartDate(null)
        setEndDate(null)
      }    







      useEffect(() =>{
        if(openApi === 0){
          const url = `someapilink/transfer/office-transfer/?limit=${limitoffset.offset * (limitoffset.page + 1)}`;
          axios.get(url, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`,
            }
          }
          )
            .then((data) => {
              return (
                setTransferCompApi(data.data.results.data),
                setlimit(data.data.count)
              )
            })
        }else if(openApi === 1){
          const url = `someapilink/transfer/office-transfer/?limit=${limitoffset.offset * (limitoffset.page + 1)}&company=${totalInfo.comp}&sending_office=${totalInfo.send}&receiving_office=${totalInfo.make}&recipient_subsequent_balance=${totalInfo.makebal}&sender_subsequent_balance=${totalInfo.sendbal}&transfer_note=${totalInfo.comm}&transfer_date__gte=${totalInfo.sdate}&transfer_date__lte=${totalInfo.edate}`;
          axios.get(url, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`,
            }
          }
          )
            .then((data) => {
              return (
                setTransferCompApi(data.data.results.data),
                setlimit(data.data.count)
              )
            })
        }else{
          const url = `someapilink/transfer/office-transfer/?limit=${limitoffset.offset * (limitoffset.page + 1)}`
          axios.get(url ,{
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`,
            }
          }
          )
            .then((data) => {
              return (
                setTransferCompApi(data?.data?.results?.data),
                setlimit(data.data.count)
              )
            })
        }
        },[ limitoffset, openApi, totalInfo])
  
        











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
                        <p className="page_name">Maliyyə və Kredit/Ofislər arası transfer</p>
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

                    <Link to="/financial_credit/office_to_office/create"><Transfer>Transfer et</Transfer></Link>
                    
                    <TransferTable transferCompApi={transferCompApi} setLimitOffset={setLimitOffset} limit={limit}/>
                    
                    {openFilter ? (<CalculatorMainDiv className={openScroll ? "posFixed" : "posAbsolute"}>
                    <FaAngleDoubleRight className="openfilter" onClick={() => setOpenFilter(!openFilter)} />
                    <p className="calcul_title">Ətraflı axtar</p>
                    <FilterFromHolding style={{height:"550px"}}>
                      <div>
                        <div className="search_filters_section">
                          <input type="text" className="search_input" placeholder="Açıqlama axtar" onChange={changeWorker} value={comment} />
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
                        <select className="filters_section" onChange={(e) => setSender(e.target.value === "Göndərən" ? "" : e.target.value)} value={sender} >
                          <option value="Göndərən">Göndərən</option>
                          {senderData.map(x => {
                             return x.company.id === parseInt(company, 10) ?
                       
                              <option key={x.id} value={x.id}>{x.name}</option>: ""
                           
                          })}
                        </select>
                        <MdCancel className="cancel_icon" onClick={() => setSender('Göndərən')} />
                      </div>
                      <div>
                        <select className="filters_section" onChange={(e) => setMaking(e.target.value === "Qəbul edən" ? "" : e.target.value)} value={making} >
                          <option value="Qəbul edən">Qəbul edən</option>
                          {makingData.map(x => {
                             return x.company.id === parseInt(company, 10) ?
                              <option key={x.id} value={x.id}>{x.name}</option>: ""
                          })}
                        </select>
                        <MdCancel className="cancel_icon" onClick={() => setMaking('Qəbul edən')} />
                      </div>
                      <div className="filters_section">
                          <input type="text" className="search_input" placeholder="Göndərənin son balansı" onChange={(e) => setSenderBalance(e.target.value)} value={senderBalance} />
                        </div>
                          <MdCancel className="cancel_icon" onClick={() => setSenderBalance('')} />
                      <div className="filters_section">
                          <input type="text" className="search_input" placeholder="Qəbul edənin son balansı" onChange={(e) => setMakingBalance(e.target.value)} value={makingBalance} />
                        </div>
                          <MdCancel className="cancel_icon" onClick={() => setMakingBalance('')} />
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

export default OfficeToOffice;


const TransferTable = ({transferCompApi, setLimitOffset, limit}) => {


    function createData(id, date, comment, amount, company, sender, endoffulfil, accepter, history, executer) {
      return {
        id,
        date,
        comment,
        amount,
        company,
        sender,
        endoffulfil,
        accepter,
        history,
        executer,
      };
    }
    const rows = [];
    console.log(transferCompApi);
    transferCompApi.map((index, key) => {
      return (
        rows.push(createData(
            index.id ,
            index.transfer_date ,
            index.transfer_note ,
            index.transfer_amount ,
            index.company.name,
            index.sending_office === null ? index.company.name : index.sending_office.name,
            index.sender_subsequent_balance ,
            index.receiving_office === null ? index.company.name : index.receiving_office.name,
            index.recipient_subsequent_balance,
            index.executor.username 
          )))
    })
  
 

    
  
    function EnhancedTableHead() {
  
      return (
        <TableHead>
          <TableRow style={{ height: "48px", }}>
            <TableCell className='table_id th_total'>ID</TableCell>
            <TableCell className='table_leader th_total'>Tarix</TableCell>
            <TableCell className='table_company th_total '>Açıqlama</TableCell>
            <TableCell className='table_office th_total '>Məbləğ</TableCell>
            <TableCell className='table_office th_total '>Şirkət</TableCell>
            <TableCell className='table_const th_total '>Göndərən</TableCell>
            <TableCell className='table_rest th_total '>Göndərənin Son balansı</TableCell>
            <TableCell className='table_task th_total '>Qəbul edən</TableCell>
            <TableCell className='table_history th_total '>Qəbul edənin Son balans</TableCell>
            <TableCell className='table_comission th_total'>İcraçı</TableCell>
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
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const quantitytot = rows.map(x => parseInt(x.amount , 10))
    let quantitytotal = 0;
    for (let i = 0; i < quantitytot.length; i++) {
      quantitytotal = quantitytotal + quantitytot[i];
    }
    
    const sendertot = rows.map(x => parseInt(x.endoffulfil , 10))
    let sendertotal = 0;
    for (let i = 0; i < sendertot.length; i++) {
      sendertotal = sendertotal + sendertot[i];
    }
    const acceptertot = rows.map(x => parseInt(x.history , 10))
    let acceptertotal = 0;
    for (let i = 0; i < acceptertot.length; i++) {
      acceptertotal = acceptertotal + acceptertot[i];
    }
  
    return (
      <>
        <TransferTableDiv style={{width:"1177px"}}>
          <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
              <TableContainer>
                <Table
                  sx={{ minWidth: 1200 }}
                  aria-labelledby="tableTitle"
                  style={{width:"1177px"}}
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
                              <td className='table_office'>{row.amount}</td>
                              <td className='table_office'>{row.company}</td>
                              <td className='table_const' title={row.sender}>{row.sender}</td>
                              <td className='table_rest'>{row.endoffulfil}</td>
                              <td className='table_task'>{row.accepter}</td>
                              <td className='table_history'>{row.history}</td>
                              <td className='table_comission'>{row.executer}</td>
                            </tr>
  
                          </>
                        );
                      })}
  
                  </TableBody>
                </Table>
                <TransferTotallist>
                <div className="totaldiv">
                    <p className="totaltext">Məbləğ: </p>
                    <p className="totalapi"> {quantitytotal.toFixed(1)} ₼</p>
                  </div>
                <div className="totaldiv">
                    <p className="totaltext">Göndərənin son balansı: </p>
                    <p className="totalapi"> {sendertotal.toFixed(1)} ₼</p>
                  </div>
                <div className="totaldiv">
                    <p className="totaltext">Qəbul edənin son balans: </p>
                    <p className="totalapi"> {acceptertotal.toFixed(1)} ₼</p>
                  </div>
                </TransferTotallist>
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
