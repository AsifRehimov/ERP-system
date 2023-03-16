import { Cardcustomer, CardDivs, MainDiv } from "./components.styled";
import { CalculatorMainDiv, CRMMainDiv, FiltersDiv } from "../Crm.styled";
import { MdCancel } from 'react-icons/md';
import { BsFillGridFill } from 'react-icons/bs';
import { FaPen, FaTrash, FaList } from 'react-icons/fa';


import { IoNotificationsOutline } from 'react-icons/io5'
import { GiBackwardTime } from 'react-icons/gi';
import { TabList } from 'react-tabs';
import { TopDiv, TopDivRightdiv, BlueLine } from "../../human-resource/Hr.styled";
import { CRMDiv } from "../Crm.styled";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"





function NewCustomer({ show }) {

    return (
        <CRMMainDiv>
            <CRMDiv className={show ? "small" : "big"}>
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
                                <DropdownItem href="#/action-2" className="open_dropdown_choose">Şirkət parametrləri</DropdownItem>
                                <DropdownItem href="#/action-3" className="open_dropdown_choose">Hesabdan çıx</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </TopDivRightdiv>
                    <p className="page_name">CRM / Müştəri Bazası</p>
                </TopDiv>
                <BlueLine>
                    <TabList className="tabs_nav" >
                        <Dropdown>
                            <DropdownToggle variant="success" id="dropdown-basic" className="tabs_headers">
                                Müştəri
                            </DropdownToggle>

                            <DropdownMenu className="open_customer" style={{ inset: "auto" }}>
                                <Link to="/crm/add_customer" className="open_dropdown_Link" >Yeni Müştəri</Link>
                                <Link to="/crm/customer_card_basa" className="open_dropdown_Link" >Müştərilər</Link>
                            </DropdownMenu>
                        </Dropdown>
                        <Link className="tabs_headers" to="/crm">Müqavilələr</Link>
                    </TabList>
                </BlueLine>
                <MainDiv>

                    <CardDivs>
                        <Link to="/crm/contract">
                        <Cardcustomer >
                            <p className="cardcust_title">Əliyev Fərid Kamran</p>
                            <p className="degree">VIP</p>
                            <p className="number">055 230 30 30</p>
                            <FaPen className="pen" />
                            <FaTrash className="trash" />
                        </Cardcustomer>
                        </Link>
                    </CardDivs>
                    <BsFillGridFill className="menu_nav" />
                    <FaList className="menu_list" />
                    <CalculatorMainDiv>
                        <p className="calcul_title">Ətraflı axtar</p>
                        <FiltersDiv>

                            <div>
                                <select className="filters_section">
                                    <option>Müştəri adı</option>
                                </select>
                                <MdCancel className="cancel_icon" />
                            </div>
                            <div>
                                <select className="filters_section">
                                    <option>Tel nömrəsi</option>
                                </select>
                                <MdCancel className="cancel_icon" />
                            </div>
                            <div>
                                <select className="filters_section">
                                    <option>Statusu</option>
                                </select>
                                <MdCancel className="cancel_icon" />
                            </div>
                            <div>
                                <select className="filters_section">
                                    <option>Şəhər</option>
                                </select>
                                <MdCancel className="cancel_icon" />
                            </div>
                        </FiltersDiv>
                        <button className="delete_newcustomer">Təmizlə</button>
                    </CalculatorMainDiv>
                </MainDiv>
            </CRMDiv>
        </CRMMainDiv>
    )
}

export default NewCustomer;