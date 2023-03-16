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
import {   InstallmentsTableDiv } from "./Financial.styled";
import { TablePagination } from "@mui/material";
import { CalculatorMainDiv, CalculatorSmallDiv } from "../Financial.styled";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import dateFormat from "dateformat";







function Installments({ show , officeDataApi, companyDataApi}) {

  
  

    const [limit, setlimit] = useState([])
    const [installmentsApi, setInstallmentsApi] = useState([])
    const [openFilter, setOpenFilter] = useState(false)
    const [openScroll, setOpenScroll] = useState(false)
    const [openApi, setOpenApi] = useState(null)
    const [comment, setComment] = useState('')
    const [company, setcompany] = useState('')
    const [creditorData, setcreditorData] = useState([])
    const [creditor, setCreditor] = useState('')
    const [Office, setOffice] = useState('')
    const [Region, setRegion] = useState('')
    const [statuspay, setStatus] = useState('')
    const [RegionData, setRegionData] = useState([])
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [limitoffset, setLimitOffset] = useState({offset:"", page:""});
    const [totalInfo, setTotalInfo] = useState({reg:"", cred:"", stat:"", comm:"", comp:"", off:"", sdate:null, edate:null});





   console.log(window.scrollY);



      
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
        setOpenApi(0)
        setOpenApi(1)  
        setTotalInfo({
          reg:Region, 
          cred:creditor, 
          stat:statuspay, 
          comm:comment, 
          comp:company, 
          off:Office, 
          sdate:dateGreater,
          edate:dateLess
        })
      }




      const handleDeleteAll = () => {
        setOpenApi(0)
        setRegion('')
        setCreditor('')
        setStatus('')
        setComment('')
        setcompany('')
        setOffice('')
        setStartDate(null)
        setEndDate(null)
      }    

      useEffect(() =>{
      if(openApi === 0){
        const url = `someapilink/contract/installments/?limit=${limitoffset.offset * (limitoffset.page + 1)}`;
        axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          }
        }
        )
          .then((data) => {
            return (
              setInstallmentsApi(data.data.results[0].data),
              setlimit(data.data.count)
            )
          })
      }else if(openApi === 1){
        const url = `someapilink/contract/installments/?limit=${limitoffset.offset * (limitoffset.page + 1)}&contract__company=${totalInfo.comp}&contract__customer__region=${totalInfo.reg}&payment_status=${totalInfo.stat}&contract__office=${totalInfo.off}&contract__creditors__creditor__fullname=${totalInfo.cred}&contract__customer__fullname=${totalInfo.comm}&date__gte=${totalInfo.sdate}&date__lte=${totalInfo.edate}`;
        axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          }
        }
        )
          .then((data) => {
            return (
              setInstallmentsApi(data.data.results[0].data),
              setlimit(data.data.count),
              console.log(data.data.results[0].data)
            )
          })
      }else{
        const installmentsUrl= `someapilink/contract/installments/?limit=${limitoffset.offset * (limitoffset.page + 1)}`;
        axios.get(installmentsUrl ,{
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          }
        }
        )
          .then((data) => {
            return (
              setInstallmentsApi(data?.data?.results[0]?.data),
              setlimit(data.data.count)
            )
          })
      }
      },[ limitoffset, openApi, totalInfo])
 

      useEffect(() => {
        const cony = `someapilink/users/?position_name_in=USTA%2CKREDİTOR`;
        axios.get(cony, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          }
        }
        )
          .then((data) => {
            return (
              setcreditorData(data.data.results)
            )
          })
    
      }, []);
      useEffect(() => {
        const cony = `someapilink/users/region/`;
        axios.get(cony, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          }
        }
        )
          .then((data) => {
            return (
              setRegionData(data.data.results)
            )
          })
    
      }, []);




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
                        <p className="page_name">Maliyyə və Kredit/Ödəniş izləmə</p>
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

 
                    
                    <InstallTable installmentsApi={installmentsApi} limit={limit} setLimitOffset={setLimitOffset}/>
                    {/* {installmentsApi.map(x=> <p>{x.id}<p>{x.contract.customer.fullname}</p>
                    <p>{x.date}</p>
                    <p>{x.price}</p>
                    <p>{x.payment_status}</p>
                    <p>{x.contract_creditor}</p>
                    <p>{x.contract.company?.name}</p>
                    <p>{x.contract.office?.name}</p>
                    <p>{x.contract.customer?.region?.region_name}</p>
                    <p>{ x.contract.remaining_debt}</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <br/></p> )} */}
                    
                    {openFilter ? (<CalculatorMainDiv  className={openScroll ? "posFixed" : "posAbsolute"}>
                    <FaAngleDoubleRight className="openfilter" onClick={() => setOpenFilter(!openFilter)} />
                    <p className="calcul_title">Ətraflı axtar</p>
                    <FilterFromHolding style={{height:"550px"}}>
                      <div>
                        <div className="search_filters_section">
                          <input type="text" className="search_input" placeholder="Müştəri axtar" onChange={changeWorker} value={comment} />
                        </div>
                      </div>
                      <div>
                        <select className="filters_section" onChange={(e) => setcompany(e.target.value === "Şirkət" ? "" : e.target.value)} value={company} >
                          <option value="Şirkət">Şirkət</option>
                          {companyDataApi.map(x => {
                            return <option value={x.id}>{x.name}</option>
                          })}
                        </select>
                        <MdCancel className="cancel_icon" onClick={() => setcompany('Şirkət')} />
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
                        <select className="filters_section" onChange={(e) => setCreditor(e.target.value === "Kreditor" ? "" : e.target.value)} value={creditor} >
                          <option value="Kreditor">Kreditor</option>
                          {creditorData.map(x => {
                              return (x.id > 1 ? x.position.name : "") === 'KREDITOR' ?
                               <option key={x.id} value={x.fullname}>{x.fullname}</option> : 
                               ""
                          })}
                        </select>
                        <MdCancel className="cancel_icon" onClick={() => setCreditor('Kreditor')} />
                      </div>
                      <div>
                        <select className="filters_section" onChange={(e) => setStatus(e.target.value === "Ödənmə statusu" ? "" : e.target.value)} value={statuspay} >
                          <option value="Ödənmə statusu">Ödənmə statusu</option>
                          <option value="ÖDƏNMƏYƏN">ÖDƏNMƏYƏN</option> 
                          <option value="ÖDƏNƏN">ÖDƏNƏN</option> 
                          <option value="BURAXILMIŞ AY">BURAXILMIŞ AY</option> 
                          <option value="NATAMAM AY">NATAMAM AY</option> 
                          <option value="RAZILAŞDIRILMIŞ AZ ÖDƏMƏ">RAZILAŞDIRILMIŞ AZ ÖDƏMƏ</option> 
                          <option value="ARTIQ ÖDƏMƏ">ARTIQ ÖDƏMƏ</option> 
                          <option value="SON AYIN BÖLÜNMƏSİ">SON AYIN BÖLÜNMƏSİ</option>                           
                        </select>
                        <MdCancel className="cancel_icon" onClick={() => setStatus('Ödənmə statusu')} />
                      </div>
                      <div>
                        <select className="filters_section" onChange={(e) => setRegion(e.target.value === "Şəhər" ? "" : e.target.value)} value={Region} >
                          <option value="Şəhər">Şəhər</option>
                          {RegionData.map(x => {
                              return <option key={x.id} value={x.id}>{x.region_name}</option>
                          })}
                        </select>
                        <MdCancel className="cancel_icon" onClick={() => setRegion('Şəhər')} />
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

export default Installments;


const InstallTable = ({installmentsApi, limit, setLimitOffset}) => {
  console.log(installmentsApi.map(x =>  x));


    function createData(id, date, customer, payment_amount, payment_status, creditor, companyy, office, city, residues) {
      return {
        id,
        date,
        customer,
        payment_amount,
        payment_status,
        creditor,
        companyy,
        office,
        city, 
        residues,
      };
    }
    const rows = [];
    installmentsApi.map((index) => {
      return (
        rows.push(createData(
            index.id,
            index.date === null ? "" : index.date,
            index.contract.customer === null ? "" : index.contract.customer.fullname,
            index.price === null ? "" : index.price,
            index.payment_status === null ? "" : index.payment_status,
            index.contract_creditor === null ? "" : index.contract_creditor.fullname,
            "",
            index.contract.company?.name === null ? "" : index.contract.company?.name,
            index.contract.office?.name === null ? "" : index.contract.office?.name,
            index.contract.customer?.region?.region_name === null ? "" : index.contract.customer?.region?.region_name,
            index.contract.remaining_debt === null ? "" : index.contract.remaining_debt,
          )))
    })
  
 

    
  
    function EnhancedTableHead() {
  
      return (
        <TableHead>
          <TableRow style={{ height: "48px", }}>
            <TableCell className='table_id th_total'>Ödəmə tarixi</TableCell>
            <TableCell className='table_leader th_total'>Müştəri</TableCell>
            <TableCell className='table_company th_total '>Ödəyəcəyi məbləğ</TableCell>
            <TableCell className='table_office th_total '>Ödəmə statusu</TableCell>
            <TableCell className='table_const th_total '>Kreditor</TableCell>
            <TableCell className='table_rest th_total '>Şirkət</TableCell>
            <TableCell className='table_task th_total '>Ofis</TableCell>
            <TableCell className='table_history th_total '>Şəhər</TableCell>
            <TableCell className='table_comission th_total'>Qalıq borcu</TableCell>
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
  
  
    return (
      <>
        <InstallmentsTableDiv>
          <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
              <TableContainer>
                <Table
                  sx={{ minWidth: 1200 }}
                  aria-labelledby="tableTitle"
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
                             
                              <td className='table_id'>{row.date}</td>
                              <td className='table_leader' title={row.customer}>{row.customer}</td>
                              <td className='table_company' >{row.payment_amount}</td>
                              <td className='table_office'>{row.payment_status}</td>
                              <td className='table_const' title={row.creditor}>{row.creditor}</td>
                              <td className='table_rest'>{row.companyy}</td>
                              <td className='table_task'>{row.office}</td>
                              <td className='table_history'>{row.city}</td>
                              <td className='table_comission'>{row.residues}</td>
                            </tr>
  
                          </>
                        );
                      })}
  
                  </TableBody>
                </Table>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 15, 25, 50, 59, 71 ,100]}
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
        </InstallmentsTableDiv>
  
      </>
    );
  }
