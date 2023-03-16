import { FinancilalDiv, CalculatorMainDiv, FiltersDiv, TeamsTableDiv, FinancilalMainDiv, CalculatorSmallDiv } from "./Financial.styled";
import { GiBackwardTime } from 'react-icons/gi';
import { IoNotificationsOutline } from 'react-icons/io5'
import { TopDiv, TopDivRightdiv, BlueLine } from "../human-resource/Hr.styled";
import { Tabs } from 'react-tabs';
import { MdCancel } from 'react-icons/md';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Link } from "react-router-dom";

import { useEffect } from 'react';
import axios from "axios";
import AddDiv from "./addComponents/AddDiv";

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
import EditAdvance from "./editComponent/EditAdvance";
import EditBonus from "./editComponent/EditBonus";
import EditInterruption from "./editComponent/EditInterruption";
import EditPenalty from "./editComponent/EditPenalty";
import DatePicker from "react-datepicker";
import dateFormat from "dateformat";





function Financial({ show, setIndexSelectApp, indexSelectApp, setInClick, dinClick }) {

  const [disabled, setDisabled] = useState()
  const [openAdvance, setOpenAdvance] = useState(false)
  const [openBonus, setOpenBonus] = useState(false)
  const [openInterruption, setOpenInterruption] = useState(false)
  const [salary, setSalary] = useState([])
  const [openPenalty, setOpenPenalty] = useState(false)
  const [openFilter, setOpenFilter] = useState(false)
  const [openScroll, setOpenScroll] = useState(false)
  const [employeeNameContains, setEmployeeNameContains] = useState('')
  const [saleAmount, setSaleAmount] = useState("")
  const [comp, setComp] = useState('')
  const [off, setOff] = useState('')
  const [pos, setPos] = useState('')
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isActive, setIsActive] = useState("");
  const [isDone, setIsDone] = useState("");

  // if (openPenalty === false) {
  //     console.log("success");
  // }
  // console.log(openPenalty.valueOf());
  const userm = salary.filter(m => [dinClick].some((t) => (t === m.id)));
  var empoyeeid = userm.map(i => i.employee.id)
  let month;
  let year;


  month = new Date().getMonth() + 1;
  year = new Date().getFullYear()

  useEffect(() => {
    const cony = `someapilink/salaries/salary-views?date__month=${month}&date__year=${year}`;
    axios.get(cony, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    }
    )
      .then((data) => {
        return (
          setSalary(data.data.results.data)
        )
      })
  }, [month, year])



  let dateLess = (endDate === null ? "" : dateFormat(endDate, "dd-mm-yyyy"))
  let dateGreater = startDate === null ? "" : dateFormat(startDate, "dd-mm-yyyy")



  const handleDeleteAll = () => {
    setEmployeeNameContains('')
    setComp('')
    setOff('')
    setPos('')
    setSaleAmount('')
    setStartDate(null)
    setEndDate(null)

    const cony = `someapilink/salaries/salary-views?date__month=${month}&date__year=${year}`;
    axios.get(cony, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    }
    )
      .then((data) => {
        return (
          setSalary(data.data.results.data)
        )
      })
  }

  const handleEnterpress = (e) => {
    if (startDate === null & endDate === null) {

      month = new Date().getMonth() + 1;
      year = new Date().getFullYear()
    } else {
      month = "";
      year = ""
    }
    e.preventDefault()

    const compa = [comp].filter(x => x === "Şirkət" ? "" : x)
    const offic = [off].filter(x => x === "Ofis" ? "" : x)
    const posi = [pos].filter(x => x === "Vəzifə" ? "" : x)
    console.log(month, year);
    console.log(compa, posi, offic);
    console.log(dateGreater, dateLess);

    const cony = `someapilink/salaries/salary-views?employee__fullname__icontains=${employeeNameContains}&employee_company_name=${compa.toString()}&employee__office__name=${offic.toString()}&employee__position__name=${posi.toString()}&employeeemployee_status=${isActive}&sales_amount=${saleAmount}&date__gte=${dateGreater}&date__lte=${dateLess}&date__month=${month}&date__year=${year}&is_done=${isDone}`;
    axios.get(cony, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    }
    )
      .then((data) => {
        return (
          setSalary(data.data.results.data)
        )
      })
  }








  const changeScroll = () => {
    if (window.scrollY >= 110) {
      setOpenScroll(true)
    } else {
      setOpenScroll(false)
    }
  }
  window.addEventListener('scroll', changeScroll)

  const changeWorker = (e) => {
    setEmployeeNameContains(e.target.value)
  }
  const sale = (e) => {
    setSaleAmount(e.target.value)
  }



  // COMPANY \\\\\/////// \/ \/ \/ \/ \/ \/
  const [company, setCompany] = useState([])

  useEffect(() => {
    const cony = `someapilink/company`;
    axios.get(cony, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    }
    )
      .then((data) => {
        return (
          setCompany(data.data.results)
        )
      })

  }, []);



  // OFFICE \\\\\/////// \/ \/ \/ \/ \/ \/
  const [office, setOffice] = useState([])

  useEffect(() => {
    const cony = `someapilink/company/offices`;
    axios.get(cony, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    }
    )
      .then((data) => {
        return (
          setOffice(data.data.results)
        )
      })

  }, []);




  // OFFICE \\\\\/////// \/ \/ \/ \/ \/ \/
  const [positions, setPositions] = useState([])

  useEffect(() => {
    const cony = `someapilink/company/positions`;
    axios.get(cony, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    }
    )
      .then((data) => {
        return (
          setPositions(data.data.results)
        )
      })

  }, []);

  return (
    <FinancilalMainDiv>
      {openAdvance ? (<EditAdvance user={userm} empoyeeid={empoyeeid} openAdvance={openAdvance} setOpenAdvance={setOpenAdvance} />) :
        (openBonus ? <EditBonus user={userm} empoyeeid={empoyeeid} openBonus={openBonus} setOpenBonus={setOpenBonus} /> :
          (openInterruption ? <EditInterruption user={userm} empoyeeid={empoyeeid} openInterruption={openInterruption} setOpenInterruption={setOpenInterruption} /> :
            (openPenalty ? <EditPenalty user={userm} empoyeeid={empoyeeid} setOpenPenalty={setOpenPenalty} openPenalty={openPenalty} /> :
              (<FinancilalDiv className={show ? "small" : "big"}>
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
                  <p className="page_name">Mühasibat / Əməkhaqqı</p>
                </TopDiv>
                <Tabs >
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

                  <SalaryTabe
                    salary={salary}
                    setDisabled={setDisabled}
                    setIndexSelectApp={setIndexSelectApp}
                    setInClick={setInClick}
                    openBonus={openBonus}
                    setOpenBonus={setOpenBonus}
                    setOpenAdvance={setOpenAdvance}
                    openAdvance={openAdvance}
                    setOpenInterruption={setOpenInterruption}
                    openInterruption={openInterruption}
                    setOpenPenalty={setOpenPenalty}
                    openPenalty={openPenalty}
                  />
                  <AddDiv disabled={disabled} indexSelectApp={indexSelectApp} />
                  {openFilter ? (<CalculatorMainDiv className={openScroll ? "posFixed" : "posAbsolute"}>
                    <FaAngleDoubleRight className="openfilter" onClick={() => setOpenFilter(!openFilter)} />
                    <p className="calcul_title">Ətraflı axtar</p>
                    <FiltersDiv>
                      <div>
                        <div className="search_filters_section">
                          <input type="text" className="search_input" placeholder="Əməkdaş axtar" onChange={changeWorker} value={employeeNameContains} />
                        </div>
                      </div>
                      <div>
                        <select className="filters_section" onChange={(e) => setComp(e.target.value === "Şirkət" ? "" : e.target.value)} value={comp} >
                          <option value="Şirkət">Şirkət</option>
                          {company.map(x => {
                            return <option value={x.name}>{x.name}</option>
                          })}
                        </select>
                        <MdCancel className="cancel_icon" onClick={() => setComp('Şirkət')} />
                      </div>
                      <div>
                        <select className="filters_section" onChange={(e) => setOff(e.target.value === "Ofis" ? "" : e.target.value)} value={off} >
                          <option value="Ofis">Ofis</option>
                          {office.map(x => {
                            return <option value={x.name}>{x.name}</option>
                          })}
                        </select>
                        <MdCancel className="cancel_icon" onClick={() => setOff('Ofis')} />
                      </div>
                      <div >
                        <select className="filters_section" onChange={(e) => setPos(e.target.value === "Vəzifə" ? "" : e.target.value)} value={pos} >
                          <option value="Vəzifə">Vəzifə</option>
                          {positions.map(x => {
                            return <option value={x.name}>{x.name}</option>
                          })}
                        </select>
                        <MdCancel className="cancel_icon" onClick={() => setPos('Vəzifə')} />
                      </div>
                      <div>
                        <select className="filters_section" onChange={(e) => setIsActive(e.target.value === "active" ? "" : e.target.value)} value={isActive}>
                          <option value="active">İşçi satatusu</option>
                          <option value={true}>Aktiv</option>
                          <option value={false}>Passiv</option>
                        </select>
                        <MdCancel className="cancel_icon" onClick={() => setIsActive("")} />
                      </div>
                      <div>
                        <input className="filters_section" placeholder="Satış sayı" type="number" onChange={sale} value={saleAmount} />
                        <MdCancel className="cancel_icon" onClick={() => setSaleAmount("")} />
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
                      <div>
                        <select className="filters_section" onChange={(e) => setIsDone(e.target.value === "status" ? "" : e.target.value)} value={isDone}>
                          <option value="status">Ə/H statusu</option>
                          <option value={true}>Ödənilib</option>
                          <option value={false}>Ödənilməyib</option>
                        </select>
                        <MdCancel className="cancel_icon" onClick={() => setIsDone('')} />
                      </div>
                    </FiltersDiv>
                    <button className="search" onClick={handleEnterpress}>Axtar</button>
                    <button className="delete" onClick={handleDeleteAll}>Təmizlə</button>
                  </CalculatorMainDiv>) : <CalculatorSmallDiv className={openScroll ? "posFixedsmall" : "posAbsolutesmall"}><FaAngleDoubleLeft className="openfilter" onClick={() => setOpenFilter(!openFilter)} />
                  </CalculatorSmallDiv>}

                </Tabs>
              </FinancilalDiv>))))}
    </FinancilalMainDiv>
  )
}

export default Financial;


function SalaryTabe({ salary, setDisabled, setIndexSelectApp, setInClick, setOpenAdvance, openAdvance, setOpenBonus, openBonus, setOpenInterruption, openInterruption, setOpenPenalty, openPenalty }) {


  function createData(givetask, task, position, office, givetasktime, endoffulfil, gettask, history, comission, bonus, advance, interruption, penalty, result, salarydate, status, salary_date) {
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
      salary_date,
    };
  }

  const rows = [];
  salary.map(index => {
    return (
      index.id > 1 ?
        (rows.push(createData(
          index.id,
          index.employee.fullname,
          index.employee.company === null ? index.employee.company : index.employee.companyname,
          index.employee.office === null ? index.employee.office : index.employee.office.name,
          index.employee.position === null ? index.employee.position : index.employee.position.name,
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
          index.is_done,
          index.date
        ))) : "")
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
    const { onSelectAllClick, numSelected, rowCount, setDisabled } =
      props;


    setDisabled(numSelected);



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

  if (5 > 2) {
    setIndexSelectApp(selected);
  }

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
  // const month = new Date().getMonth()+1;
  // const year = new Date().getFullYear()
  const advanceClick = (cos) => {
    setInClick(cos.givetask);
    setOpenAdvance(!openAdvance)
  }
  const bonusClick = (cos) => {
    setInClick(cos.givetask);
    setOpenBonus(!openBonus)
  }
  const InterruptionClick = (cos) => {
    setInClick(cos.givetask);
    setOpenInterruption(!openInterruption)
  }
  const penaltyClick = (cos) => {
    setInClick(cos.givetask);
    setOpenPenalty(!openPenalty)
  }

  const constantotal = rows.map(x => parseInt(x.gettask, 10))
  let consttotal = 0;
  for (let i = 0; i < constantotal.length; i++) {
    consttotal = consttotal + constantotal[i];
  }
  const sellnumber = rows.map(x => parseInt(x.history, 10))
  let selltotal = 0;
  for (let i = 0; i < sellnumber.length; i++) {
    selltotal = selltotal + sellnumber[i];
  }
  const comssiontot = rows.map(x => parseInt(x.comission, 10))
  let comissiontotal = 0;
  for (let i = 0; i < comssiontot.length; i++) {
    comissiontotal = comissiontotal + comssiontot[i];
  }
  const advancetot = rows.map(x => parseInt(x.advance, 10))
  let advancetotal = 0;
  for (let i = 0; i < advancetot.length; i++) {
    advancetotal = advancetotal + advancetot[i];
  }
  const bonustot = rows.map(x => parseInt(x.bonus, 10))
  let bonustotal = 0;
  for (let i = 0; i < bonustot.length; i++) {
    bonustotal = bonustotal + bonustot[i];
  }
  const intertot = rows.map(x => parseInt(x.interruption, 10))
  let intertotal = 0;
  for (let i = 0; i < intertot.length; i++) {
    intertotal = intertotal + intertot[i];
  }
  const penaltytot = rows.map(x => parseInt(x.penalty, 10))
  let penaltytotal = 0;
  for (let i = 0; i < penaltytot.length; i++) {
    penaltytotal = penaltytotal + penaltytot[i];
  }
  const final = rows.map(x => parseInt(x.result, 10))
  let resultstot = 0;
  for (let i = 0; i < final.length; i++) {
    resultstot = resultstot + final[i];
  }


  return (
    <>
      <TeamsTableDiv>
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
                  setDisabled={setDisabled}
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
                            <td className='table_leader' title={row.task}><p className="table_leader_p">{row.task}</p></td>
                            <td className='table_company'>{row.position}</td>
                            <td className='table_office'>{row.office}</td>
                            <td className='table_const' title={row.givetasktime}>{row.givetasktime}</td>
                            <td className='table_rest'>{row.endoffulfil}</td>
                            <td className='table_task'>{row.gettask}</td>
                            <td className='table_history'>{row.history}</td>
                            <td className='table_comission'>{row.comission}</td>
                            <td className='table_advance'>
                              <Link onClick={() => { bonusClick(row) }} style={{ textDecoration: "none", color: "black" }}>{row.bonus}<IoDocumentTextOutline className='texticon' /></Link>
                            </td>
                            <td className='table_bonus'>
                              <Link onClick={() => { advanceClick(row) }} style={{ textDecoration: "none", color: "black" }}>{row.advance}<IoDocumentTextOutline className='texticon' /></Link>
                            </td>
                            <td className='table_interruption'>
                              <Link onClick={() => { InterruptionClick(row) }} style={{ textDecoration: "none", color: "black" }}>{row.interruption}<IoDocumentTextOutline className='texticon' /></Link>
                            </td>
                            <td className='table_penalty'>
                              <Link onClick={() => { penaltyClick(row) }} style={{ textDecoration: "none", color: "black" }} >{row.penalty}<IoDocumentTextOutline className='texticon' />
                              </Link></td>
                            <td className='table_result'>{row.result}</td>
                            <td style={{ display: "none" }}>{row.salary_date}</td>
                            <td className='table_salarydate' id={row.salary_date}>{row.salarydate}</td>
                            <td className='table_status'>{row.status ? <p className='status_true'>Ödənilib</p> : <p className='status_false'>Ödənilməyib</p>}</td>
                          </tr>

                        </>
                      );
                    })}

                </TableBody>
              </Table>
              <div className='bottom_task'>
                <Totaltask>
                 
                  <div className="totaldiv">
                    <p className="totaltext">Sabit: </p>
                    <p className="totalapi"> {consttotal.toFixed(1)} ₼</p>
                  </div>
                  <div className="totaldiv">
                    <p className="totaltext">Satış sayı: </p>
                    <p className="totalapi"> {selltotal.toFixed(1)} ₼</p>
                  </div>
                  <div className="totaldiv">
                    <p className="totaltext">Komissiya: </p>
                    <p className="totalapi"> {comissiontotal.toFixed(1)} ₼</p>
                  </div>
                  <div className="totaldiv">
                    <p className="totaltext">Avans: </p>
                    <p className="totalapi"> {advancetotal.toFixed(1)} ₼</p>
                  </div>
                  <div className="totaldiv">
                    <p className="totaltext">Bonus: </p>
                    <p className="totalapi"> {bonustotal.toFixed(1)} ₼</p>
                  </div>
                  <div className="totaldiv">
                    <p className="totaltext">Kəsinti: </p>
                    <p className="totalapi"> {intertotal.toFixed(1)} ₼</p>
                  </div>
                  <div className="totaldiv">
                    <p className="totaltext">Сərimə: </p>
                    <p className="totalapi"> {penaltytotal.toFixed(1)} ₼</p>
                  </div>
                  <div className="totaldiv">
                    <p className="totaltext">Yekun: </p>
                    <p className="totalapi"> {resultstot.toFixed(1)} ₼</p>
                  </div>
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
      </TeamsTableDiv>

    </>
  );
}