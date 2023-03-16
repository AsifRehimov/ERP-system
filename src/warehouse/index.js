import { WarehouseDiv, TopFiltersDiv, TeamsTableDiv, WarehouseMainDiv } from "./Warehouse.styled";
import { GiBackwardTime } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi';
import { MdCancel } from 'react-icons/md';
import { IoNotificationsOutline } from 'react-icons/io5'
import { TopDiv, TopDivRightdiv, BlueLine } from "../human-resource/Hr.styled";
import { Tabs, TabList, TabPanel } from 'react-tabs';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Measure from "./components/Measure";
import { Link } from "react-router-dom";



function Warehouse({ show }) {

    const [measure, setMeasure] = useState(false)

    return (
        <WarehouseMainDiv>
            <WarehouseDiv className={show ? "small" : "big"}>
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
                    <p className="page_name">Anbar</p>
                </TopDiv>
                <Tabs>
                    <BlueLine>
                        <TabList className="tabs_nav" defaultindex={1}>

                            <Link className="tabs_headers" to="/warehouse">Əməliyyatlar</Link>
                            <Dropdown>
                                <DropdownToggle variant="success" id="dropdown-basic" className="tabs_headers">
                                    Məhsul
                                </DropdownToggle>

                                <DropdownMenu className="open_drop_down">
                                    <Link to="/warehouse/product" className="open_dropdown_Link">Məhsullar</Link>
                                    <Link to="#" onClick={() => setMeasure(!measure)} className="open_dropdown_Link">Ölçü Vahidləri</Link>
                                    <Link to="#/action-3" className="open_dropdown_Link">Kateqoriyalar</Link>
                                </DropdownMenu>
                            </Dropdown>
                            <Link className="tabs_headers" to="/warehouse/stock">Stok</Link>
                        </TabList>
                    </BlueLine>

                    {measure ? <Measure measure={measure} setMeasure={setMeasure} /> : <TabPanel>
                        <TopFiltersDiv>
                            <div className="searchbar">
                                <input className="search_input" type="text" placeholder="Məhsul axtar" />
                                <BiSearch className="searchbar_icon" />
                            </div>
                            <Dropdown>
                                <DropdownToggle variant="success" id="dropdown-basic" className="company_filter" aria-expanded="false" aria-haspopup="true">
                                    Şirkət
                                </DropdownToggle>
                                <MdCancel className="company_cancel" />
                                <DropdownMenu className="open_drop_down">
                                    <DropdownItem href="#/action-1" className="open_dropdown_choose">Hesab parametrləri</DropdownItem>
                                    <DropdownItem href="#/action-2" className="open_dropdown_choose">Şirkət parametrləri</DropdownItem>
                                    <DropdownItem href="#/action-3" className="open_dropdown_choose">Hesabdan çıx</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </TopFiltersDiv>
                        <TeamsTableDiv>
                            <table className="table-fixed">
                                <thead>
                                    <tr>
                                        <th className="th_total table_check"><input type="checkbox" className="checkbox" /></th>
                                        <th className="th_total table_id">ID</th>
                                        <th className="th_total table_company">Ad</th>
                                        <th className="th_total table_leader">Şirkət</th>
                                        <th className="th_total table_office">Anbar</th>
                                        <th className="th_total table_const">Qiymət</th>
                                        <th className="th_total table_rest">Say</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="table_white" >
                                        <td className="table_check"><input type="checkbox" className="checkbox" /></td>
                                        <td className="table_id">1</td>
                                        <td className="table_company" title="KATRIC 12 AY"><Link to="/warehouse/editproduct">KATRIC 12 AY</Link></td>
                                        <td className="table_leader" >OCEAN</td>
                                        <td className="table_office">Xaçmaz anbar</td>
                                        <td className="table_const">1890.0</td>
                                        <td className="table_rest">1000</td>
                                    </tr>

                                </tbody>
                            </table>
                        </TeamsTableDiv>


                    </TabPanel>}

                </Tabs>
            </WarehouseDiv>
        </WarehouseMainDiv>
    )
}

export default Warehouse;
