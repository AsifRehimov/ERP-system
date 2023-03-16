import { NavLink, Route, Routes /* ,useNavigate*/ } from 'react-router-dom';
import './App.css';
import { EmptyMaindiv, Logo, Nav, NavlinkDiv, NavSmall } from './App.styled';
import Homepage from './home-page/index';
import Crm from './crm/index';
import Financial from './financial/index';
import Warehouse from './warehouse/index';
import Statistic from './statistic/index';
import Task from './task/index';
import logo from './photo/logo.png'
import { FaHome, FaCalculator, FaWarehouse, FaTasks } from 'react-icons/fa';
import { IoPeopleCircleOutline } from 'react-icons/io5';
import { GiNetworkBars } from 'react-icons/gi';
import { FiMenu } from 'react-icons/fi';
import { MdBookmarks } from 'react-icons/md';
import { useState } from 'react';
import CustomerCard from './crm/Components/CustomerCard';
import Contract from './crm/Components/Contract';
import NewCustomer from './crm/Components/NewCustomer';
import NewConstract from './crm/Components/NewConstract';
import NewClient from './crm/Components/NewClient';
import Balance from './financial/components/Balance';
import Products from './warehouse/components/Product';
import Stock from './warehouse/components/Stock';
import AddProducts from './warehouse/components/AddProduct';
import EditProduct from './warehouse/components/EditProduct';
import GiveTask from './task/components/GiveTask';
import Givetasks from './task/components/Givetasks';
import Tasks from './task/components/Task';
import GetTask from './task/components/GetTask';
import AddWorker from './human-resource/components/worker_edits/AddWorker';
import Worker from './human-resource/components/Worker';
import WorkTable from './human-resource/components/WorkTable';
import EditWorker from './human-resource/components/worker_edits/EditWorker';
import PersonSettings from './person/account_settings/PersonSettings';
import CompanySettings from './person/company_settings/CompanySettings';
import CompanyBranch from './person/company_settings/components/CompanyBranch';
import CompanyPosition from './person/company_settings/components/CompanyPosition';
import Login from './login';
import AddAdvance from './financial/addComponents/AddAdvance';
import AddBonus from './financial/addComponents/AddBonus';
import AddPenalty from './financial/addComponents/AddPenalty';
import AddInterruption from './financial/addComponents/AddInterruption';
import SalaryPay from './financial/addComponents/SalaryPay';
import { useEffect } from 'react';
import axios from "axios"
import HoldingtoCompany from './financial/components/HoldingtoCompany';
import CreatefromHolding from './financial/components/CreatefromHolding';
import CompanyToOffice from './financial/components/CompanyToOffice';
import CreatefromCompany from './financial/components/CreatefromCompany';
import OfficeToOffice from './financial/components/OfficeToOffice';
import CreatefromOffice from './financial/components/CreatefromOffice';
import Installments from './financial/components/Installments';
import Cashflow from './financial/components/Cashflow';
import ActionCompany from './financial/components/ActionCompany';
import ActionHolding from './financial/components/ActionHolding';









function App() {

  const [show, setShow] = useState(true);
  const [userid, setUserid] = useState({ index: true, api: "" });
  const [indexSelectApp, setIndexSelectApp] = useState([])
  const [dinClick, setInClick] = useState([])
  const [officeDataApi, setOfficeDataApi] = useState([])
  const [companyDataApi, setCompanyDataApi] = useState([])
  const [successTransfer, setSuccessTransfer] = useState({ open: false })




  // const navigate = useNavigate();


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
          setCompanyDataApi(data.data.results)
        )
      })

  }, []);
  useEffect(() => {
    const cony = `someapilink/company/offices/`;
    axios.get(cony, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    }
    )
      .then((data) => {
        return (
          setOfficeDataApi(data.data.results)
        )
      })

  }, []);
  const [opencalendar, setOpencalendar] = useState()
  const [salary, setSalary] = useState([])
  // const [advanceedit, setAdvanceedit] = useState([])

  // console.log(indexSelectApp);

  useEffect(() => {
    const cony = "someapilink/salaries/salary-views/";
    axios.get(cony, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    }
    )
      .then((data) => {
        return (
          setSalary(data.data.results.data),
          console.log(data.data.results.data)

        )
      })

  }, []);




  const users = salary.filter(n => indexSelectApp.some(l => l === n.id));
  var empoyeeID = users.map(i => i.employee.id)

  const user = salary.filter(m => [dinClick].some((t) => (t === m.id)));
  var empoyeeid = user.map(i => i.employee.id)

  // console.log(empoyeeid);



  if (localStorage.getItem("token")) {
    if (!localStorage.getItem("token")) {
      // navigate("/login")
      window.reload()
    }
  }
  // useEffect(() => {
    
  //       if (!localStorage.getItem("token")) {
  //         navigate("/login")
  //       }
  // }, [navigate])

  //   window.onbeforeunload = function() {
  //     localStorage.clear();
  //  }
  var hours = 1;
  var now = new Date().getTime();
  var setupTime = localStorage.getItem('setupTime');
  if (setupTime == null) {
    localStorage.setItem('setupTime', now)
  } else {
    if (now - setupTime > hours * 24 * 60 * 60 * 1000) {
      localStorage.clear()
      localStorage.setItem('setupTime', now);
    }
  }
  // useEffect(() => {

  //   const cony = `someapilink/salaries/advancepayment/`;
  //     axios.get(cony, { 
  //       headers: {
  //             "Content-Type": "application/json",
  //             "Authorization": `Bearer ${localStorage.getItem("token")}`,
  //         }
  //       })
  //       .then(res => (
  //         // setAdvanceedit(res.data.results), 
  //         console.log(res.data.results)))
  //       .catch(err => alert(err, "iugugu"))
  //     }, [])
  // const advanceidedit = advanceedit.filter(n => empoyeeID.some(l => l === n.employee.id));
  // var advanceid = advanceidedit.map(i => i.id).filter(index => index.date === new Date() ? console.log("succ") : console.log("fail"))
  // console.log(advanceid);
  // console.log(advanceidedit);
  return (
    <div>


      <EmptyMaindiv>
        {show ? (<Nav>
          <Logo src={logo} />
          <FiMenu className='hamburger_menu' onClick={() => setShow(show === false)} />
          <NavlinkDiv>
            <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : 'deactive')} ><FaHome className='icon' />Ana Səhifə</NavLink>
            <NavLink to="/human_resource" className={({ isActive }) => (isActive ? 'active' : "deactive")} ><IoPeopleCircleOutline className='icon' />İnsan Resursları</NavLink>
            <NavLink to="/crm" className={({ isActive }) => (isActive ? 'active' : "deactive")}><MdBookmarks className='icon' />CRM</NavLink>
            <NavLink to="/financial_credit" className={({ isActive }) => (isActive ? 'active' : "deactive")}><FaCalculator className='icon' />Maliyyə və Kredit</NavLink>
            <NavLink to="/warehouse" className={({ isActive }) => (isActive ? 'active' : "deactive")} ><FaWarehouse className='icon' />Anbar</NavLink>
            <NavLink to="/statistic" className={({ isActive }) => (isActive ? 'active' : "deactive")}><GiNetworkBars className='icon' />Statistika</NavLink>
            <NavLink to="/task" className={({ isActive }) => (isActive ? 'active' : "deactive")}><FaTasks className='icon' />Tapşırıqlar</NavLink>
          </NavlinkDiv>
        </Nav>) :
          (<NavSmall>
            <FiMenu className='hamburger_menu_small' onClick={() => setShow(!show)} />
            <NavlinkDiv>
              <NavLink to="/home" className={({ isActive }) => (isActive ? 'actives' : "deactives")}><FaHome className='icon_small' /></NavLink>
              <NavLink className={({ isActive }) => (isActive ? 'actives' : "deactives")} to="/human_resource"><IoPeopleCircleOutline className='icon_small' /></NavLink>
              <NavLink className={({ isActive }) => (isActive ? 'actives' : "deactives")} to="/crm"><MdBookmarks className='icon_small' /></NavLink>
              <NavLink className={({ isActive }) => (isActive ? 'actives' : "deactives")} to="/financial_credit"><FaCalculator className='icon_small' /></NavLink>
              <NavLink className={({ isActive }) => (isActive ? 'actives' : "deactives")} to="/warehouse"><FaWarehouse className='icon_small' /></NavLink>
              <NavLink className={({ isActive }) => (isActive ? 'actives' : "deactives")} to="/statistic"><GiNetworkBars className='icon_small' /></NavLink>
              <NavLink className={({ isActive }) => (isActive ? 'actives' : "deactives")} to="/task"><FaTasks className='icon_small' /></NavLink>
            </NavlinkDiv>
          </NavSmall>)}
        <Routes>
          <Route path='/home' element={<Homepage show={show} setShow={setShow} />} />
          <Route path='/human_resource/addworker' element={<AddWorker show={show} setShow={setShow} />} />
          <Route path='/human_resource/edit_worker/:id' element={<EditWorker setSuccessTransfer={setSuccessTransfer} show={show} setShow={setShow} userid={userid} officeDataApi={officeDataApi} companyDataApi={companyDataApi} />} />
          <Route path='/human_resource' element={<Worker show={show} setShow={setShow} setUserid={setUserid} successTransfer={successTransfer} />} />
          <Route path='/human_resource/work_table' element={<WorkTable opencalendar={opencalendar} setOpencalendar={setOpencalendar} show={show} setShow={setShow} />} />
          <Route path='/crm' element={<Crm show={show} />} />
          <Route path='/financial_credit' element={<Financial show={show} setIndexSelectApp={setIndexSelectApp} indexSelectApp={indexSelectApp} setInClick={setInClick} empoyeeid={empoyeeid} dinClick={dinClick} />} />
          <Route path='/warehouse' element={<Warehouse show={show} />} />
          <Route path='/warehouse/product' element={<Products show={show} />} />
          <Route path='/warehouse/stock' element={<Stock show={show} />} />
          <Route path='/warehouse/addproduct' element={<AddProducts show={show} />} />
          <Route path='/warehouse/editproduct' element={<EditProduct show={show} />} />
          <Route path='/statistic' element={<Statistic show={show} />} />
          <Route path='/task' element={<Task show={show} />} />
          <Route path='/task/givetask' element={<GiveTask show={show} />} />
          <Route path='/task/givetasks' element={<Givetasks show={show} />} />
          <Route path='/task/gettasks' element={<GetTask show={show} />} />
          <Route path='/task/tasks' element={<Tasks show={show} />} />
          <Route path='/crm/custom_card' element={<CustomerCard show={show} />} />
          <Route path='/crm/contract' element={<Contract show={show} />} />
          <Route path='/crm/customer_card_basa' element={<NewCustomer show={show} />} />
          <Route path='/crm/new_customer_card' element={<NewConstract show={show} />} />
          <Route path='/crm/add_customer' element={<NewClient show={show} />} />
          <Route path='/financial_credit/salary/advance/' element={<AddAdvance empoyeeID={empoyeeID} />} />
          <Route path='/financial_credit/salary/bonus/' element={<AddBonus empoyeeID={empoyeeID} />} />
          <Route path='/financial_credit/salary/salary-punishment/' element={<AddPenalty empoyeeID={empoyeeID} />} />
          <Route path='/financial_credit/salary/salary-deduction/' element={<AddInterruption empoyeeID={empoyeeID} />} />
          <Route path='/financial_credit/salary/pay-salary/' element={<SalaryPay indexSelectApp={indexSelectApp} />} />
          <Route path='/financial_credit/balance' element={<Balance show={show} />} />
          <Route path='/financial_credit/holding_to_company' element={<HoldingtoCompany show={show} successTransfer={successTransfer} companyDataApi={companyDataApi} />} />
          <Route path='/financial_credit/company_to_office' element={<CompanyToOffice show={show} successTransfer={successTransfer} officeDataApi={officeDataApi} />} />
          <Route path='/financial_credit/office_to_office' element={<OfficeToOffice show={show} successTransfer={successTransfer} officeDataApi={officeDataApi} companyDataApi={companyDataApi} />} />
          <Route path='/financial_credit/installments' element={<Installments show={show} officeDataApi={officeDataApi} companyDataApi={companyDataApi} />} />
          <Route path='/financial_credit/cashflow' element={<Cashflow show={show} officeDataApi={officeDataApi} companyDataApi={companyDataApi} successTransfer={successTransfer} />} />
          <Route path='/financial_credit/holding_to_company/create' element={<CreatefromHolding setSuccessTransfer={setSuccessTransfer} />} />
          <Route path='/financial_credit/company_to_office/create' element={<CreatefromCompany setSuccessTransfer={setSuccessTransfer} />} />
          <Route path='/financial_credit/office_to_office/create' element={<CreatefromOffice setSuccessTransfer={setSuccessTransfer} />} />
          <Route path='/financial_credit/cashflow/company_action' element={<ActionCompany setSuccessTransfer={setSuccessTransfer} officeDataApi={officeDataApi} companyDataApi={companyDataApi} />} />
          <Route path='/financial_credit/cashflow/holding_action' element={<ActionHolding setSuccessTransfer={setSuccessTransfer} />} />
          <Route path='/person_setings' element={<PersonSettings show={show} />} />
          <Route path='/company_setings' element={<CompanySettings show={show} />} />
          <Route path='/company_setings/branch' element={<CompanyBranch show={show} />} />
          <Route path='/company_setings/position' element={<CompanyPosition show={show} />} />
          <Route path='/login' element={<Login />} />
        </Routes>

      </EmptyMaindiv>

    </div>
  );
}

export default App;
