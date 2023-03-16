import { CRMDiv,  CalculatorMainDiv, FiltersDiv, TeamsTableDiv, CRMMainDiv } from "./Crm.styled";
import { GiBackwardTime } from 'react-icons/gi';
import { BsCheckCircleFill, BsXLg, BsSearch } from 'react-icons/bs';
import { FaExchangeAlt } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5'
import { TopDiv, TopDivRightdiv, BlueLine } from "../human-resource/Hr.styled";
import { Tabs, TabList, TabPanel } from 'react-tabs';
import { MdCancel } from 'react-icons/md';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"




function Crm({show}) {

    

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
                <p className="page_name">CRM</p>
            </TopDiv>
            <Tabs >
                <BlueLine>
                    <TabList className="tabs_nav">
                    <Dropdown>
                        <DropdownToggle variant="success" id="dropdown-basic" className="tabs_headers">
                            Müştəri 
                        </DropdownToggle>

                        <DropdownMenu className="open_customer" style={{inset: "auto"}}>
                            <Link to="/crm/add_customer" className="open_dropdown_Link" >Yeni Müştəri</Link>
                            <Link to="/crm/customer_card_basa" className="open_dropdown_Link" >Müştərilər</Link>
                        </DropdownMenu>
                    </Dropdown>                        
                    <Link className="tabs_headers" to="/crm">Müqavilələr</Link>
                    </TabList>
                </BlueLine>
                {/* {
                    opencustomer ? <OpenCustomer>
                        <p className="customer_choose" onClick={() => setNewClient(!newClient)}>Yeni Müştəri</p>
                        <p className="customer_choose" onClick={() => setNewcustomer(!newcustomer)}>Müştərilər</p>
                    </OpenCustomer> : ""
                } */}
                <TabPanel>
                            <TeamsTableDiv>
                                <table className="table-fixed">
                                    <thead>
                                        <tr>
                                            <th className="th_total table_check"><input type="checkbox" className="checkbox" /></th>
                                            <th className="th_total table_id">ID</th>
                                            <th className="th_total table_leader">Müqavilə Tarixi</th>
                                            <th className="th_total table_company">Müştəri</th>
                                            <th className="th_total table_office">Ofis</th>
                                            <th className="th_total table_const">Ödəniş Üslubu</th>
                                            <th className="th_total table_rest">Qrup Rəhbəri</th>
                                            <th className="th_total table_vacation">Müdaxilə</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="table_white" >
                                            <td className="table_check"><input type="checkbox" className="checkbox" /></td>
                                            <td className="table_id">1</td>
                                            <td className="table_leader" title="Stewart Rutherford">5/28/2022</td>
                                            <td className="table_company"><Link to="/crm/contract" >Suzanne Bashirian</Link></td>
                                            <td className="table_office">Sumqayıt</td>
                                            <td className="table_const">Kredit</td>
                                            <td className="table_rest">Curtis Wilkinson</td>
                                            <td className="table_vacation"><BsCheckCircleFill className="table_icon_succes" /></td>
                                        </tr>
                                        <tr className="table_white">
                                            <td className="table_check"><input type="checkbox" className="checkbox" /></td>
                                            <td className="table_id">1</td>
                                            <td className="table_leader" title="Stewart Rutherford">5/28/2022</td>
                                            <td className="table_company">Suzanne Bashirian</td>
                                            <td className="table_office">Sumqayıt</td>
                                            <td className="table_const">Kredit</td>
                                            <td className="table_rest">Curtis Wilkinson</td>
                                            <td className="table_vacation"><FaExchangeAlt className="table_icon_loading" /></td>
                                        </tr>
                                        <tr className="table_white">
                                            <td className="table_check"><input type="checkbox" className="checkbox" /></td>
                                            <td className="table_id">1</td>
                                            <td className="table_leader" title="Stewart Rutherford">5/28/2022</td>
                                            <td className="table_company">Suzanne Bashirian</td>
                                            <td className="table_office">Sumqayıt</td>
                                            <td className="table_const">Kredit</td>
                                            <td className="table_rest">Curtis Wilkinson</td>
                                            <td className="table_vacation"><BsXLg className="table_icon_lose" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </TeamsTableDiv>
                            <CalculatorMainDiv>
                                <p className="calcul_title">Ətraflı axtar</p>
                                <FiltersDiv>
                                    <div>
                                        <div className="search_filters_section">
                                            <input type="search" className="search" placeholder="Müştəri adı axtar" />
                                            <BsSearch className="search_icon" />
                                        </div>
                                    </div>
                                    <div>
                                        <select className="filters_section">
                                            <option>Filial</option>
                                        </select>
                                        <MdCancel className="cancel_icon" />
                                    </div>
                                    <div>
                                        <select className="filters_section">
                                            <option>Ödəniş üslubu</option>
                                        </select>
                                        <MdCancel className="cancel_icon" />
                                    </div>
                                    <div>
                                        <select className="filters_section">
                                            <option>Başlanğıc tarix</option>
                                        </select>
                                        <MdCancel className="cancel_icon" />
                                    </div>
                                    <div>
                                        <select className="filters_section">
                                            <option>Son tarix</option>
                                        </select>
                                        <MdCancel className="cancel_icon" />
                                    </div>
                                    <div>
                                        <select className="filters_section">
                                            <option>Müdaxilə</option>
                                        </select>
                                        <MdCancel className="cancel_icon" />
                                    </div>
                                </FiltersDiv>
                                <button className="delete">Təmizlə</button>
                            </CalculatorMainDiv>
                        </TabPanel>
                    
            </Tabs>
        </CRMDiv>
        </CRMMainDiv>
    )
}

export default Crm;
