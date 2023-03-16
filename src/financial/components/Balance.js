import { AlertNow, CompanyMainDiv, HoldingDiv } from "./Financial.styled";
import { FinancilalDiv, FinancilalMainDiv } from "../Financial.styled";
import { GiBackwardTime } from 'react-icons/gi';
import { IoNotificationsOutline } from 'react-icons/io5'
import { TopDiv, TopDivRightdiv, BlueLine } from "../../human-resource/Hr.styled";
import { TabList } from 'react-tabs';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import EditCompany from "./EditCompany";




function Balance({ show }) {


    const [holding, setHolding] = useState([])
    const [company, setCompany] = useState([])
    const [companyPlus, setCompanyPlus] = useState([])
    const [ale, setAle] = useState({ isCoping: false })
    const [success, setSuccess] = useState({ open: false })
    const [empId, setEmpId] = useState()
    const [companyOffice, setCompanyOffice] = useState(false)
    const [companyName, setCompanyName] = useState()
    const [refreshData, setRefreshData] = useState(false)

       
    const urlcompany = `someapilink/cashbox/company-cashbox/`;
    useEffect(() => {

    


        const getData = async ()=>{

        await axios.get(urlcompany, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        }
        ).then(data => {
            return (
                setCompany(data.data.results),
                setCompanyPlus(data.data.results),
                console.log(data.data.results)
            )
        })
    }
      
       if (refreshData === true) {
        setTimeout(() => {
          getData()  
        }, 100);
        
       }else{
        axios.get(urlcompany, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        }
        ).then(data => {
            return (
                setCompany(data.data.results),
                setCompanyPlus(data.data.results),
                console.log(data.data.results)
            )
        })
       }
    }, [urlcompany, refreshData]);
    const urlholding = `someapilink/cashbox/holding-cashbox/`;
    useEffect(() => {
         axios.get(urlholding, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        }
        ).then(data => {
            return (
                setHolding(data.data.results)
            )
        })
   
    }, [urlholding]);

    const [updateCash, setUpdateCash] = useState({ id: "", balance: "" });
    console.log(updateCash);

    const handleChangeBalance = (e, index) => {
        e.preventDefault();
        let result = company;
        result = result.map((el) => {
            if (el.id === index.id) el.balance = e.target.value;
            return el;
        });
        setCompany(result);

        console.log(index.id, index.balance);
        setUpdateCash({ id: index.id, balance: index.balance })
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const updatelink = `someapilink/cashbox/company-cashbox/${updateCash.id}/`;

            axios.put(updatelink, { "balance": parseInt(updateCash.balance, 10) }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            }
            ).then(
                setAle({ isCoping: true },
                    setTimeout(() => { setAle({ isCoping: false }) }, 2000)
                )).catch(err => console.log(err))
        }
    }
    console.log(companyPlus);

    const clickCompany = (index) => {
        setCompanyName(index.company.name)
        setEmpId(index.id)
        setCompanyOffice(true)
    }

    return (
        <FinancilalMainDiv>
            {companyOffice ? <EditCompany setRefreshData={setRefreshData} setCompanyOffice={setCompanyOffice} companyOffice={companyOffice} empId={empId} setSuccess={setSuccess} companyName={companyName} /> :
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
                        <p className="page_name">Mühasibat/Balans</p>
                    </TopDiv>
                    <BlueLine>
                        <TabList className="tabs_nav">
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
                        </TabList>
                    </BlueLine>
                    {
                        ale.isCoping ? <AlertNow>Uğurla dəyişdirildi</AlertNow> : ""
                    }
                    {
                        success.open ? <AlertNow>Uğurla dəyişdirildi</AlertNow> : ""
                    }
                    <HoldingDiv>
                        {holding.map(x =>
                            <div className="holding">
                                <span className="titletop">{x.holding.name}</span>
                                <p className="titlebottom">HOLDING</p>
                                <p className="mediumdiv">{x.balance} ₼</p>
                            </div>)}
                    </HoldingDiv>
                    <CompanyMainDiv>
                        {company.map((index, i) =>
                            <div className="companydiv" onClick={() => clickCompany(index)}>
                                <p className="companytitle">{index.company.name}</p>
                                <div className="inputdivcompany" onClick={(e) => e.stopPropagation()}>
                                    Şirkət kassası:
                                    <input
                                        className="inputcompany"
                                        value={index.balance}
                                        name={index.id}
                                        onChange={(e) => { handleChangeBalance(e, index) }}
                                        onKeyUp={handleKeyPress}
                                        onClick={() => setCompanyOffice(false)}
                                    /> ₼
                                </div>
                                <div className="totalcash">Bütün kassalar: {index.offices_of_company_total_balance} ₼</div>
                            </div>
                        )}
                    </CompanyMainDiv>
                </FinancilalDiv>}
        </FinancilalMainDiv>
    )
}

export default Balance;
