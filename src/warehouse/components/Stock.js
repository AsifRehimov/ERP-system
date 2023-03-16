import { WarehouseDiv, TopFiltersDiv, ProductAdd, WarehouseMainDiv } from "../Warehouse.styled";
import { TeamsTableDiv } from "./Components.styled"
import { GiBackwardTime } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi';
import { MdCancel } from 'react-icons/md';
import { IoNotificationsOutline } from 'react-icons/io5'
import { TopDiv, TopDivRightdiv, BlueLine } from "../../human-resource/Hr.styled";
import { Tabs, TabList, TabPanel } from 'react-tabs';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import AddStock from "./AddStock";
import { Link } from "react-router-dom";



function Stock({show}) {

    const [addstocks, setAddstock] = useState(false)

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
                    <p className="page_name">Anbar/Stok</p>
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
                                    <Link to="#" className="open_dropdown_Link">Ölçü Vahidləri</Link>
                                    <Link to="#/action-3" className="open_dropdown_Link">Kateqoriyalar</Link>
                                </DropdownMenu>
                            </Dropdown>
                            <Link className="tabs_headers" to="/warehouse/stock">Stok</Link>
                        </TabList>
                    </BlueLine>

                    {addstocks ? <AddStock addstocks={addstocks} setAddstock={setAddstock} /> : <TabPanel>
                        <TopFiltersDiv>
                            <ProductAdd onClick={() => setAddstock(!addstocks)}>
                                Stok əlavə et
                            </ProductAdd>
                            <div className="searchbar">
                                <input className="search_input" type="text" placeholder="Məhsul axtar" />
                                <BiSearch className="searchbar_icon" />
                            </div>
                            <Dropdown>
                                <DropdownToggle variant="success" id="dropdown-basic" className="company_filter" aria-expanded="false" aria-haspopup="true">
                                    Şirkət
                                </DropdownToggle>
                                <MdCancel className="company_cancel_three" />
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
                                        <th className="th_total table_id">Barkod</th>
                                        <th className="th_total table_company">Məhsulun adı</th>
                                        <th className="th_total table_const">Miqdar</th>
                                        <th className="th_total table_rest">Ölçü vahidi</th>
                                        <th className="th_total table_leader">Anbar</th>
                                        <th className="th_total table_office">Şirkət</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="table_white" >
                                        <td className="table_check"><input type="checkbox" className="checkbox" /></td>
                                        <td className="table_id">2134569871203</td>
                                        <td className="table_company" title="452 PREMIUM, 6 filtrli, qap">452 PREMIUM, 6 filtrli, qap</td>
                                        <td className="table_const">20000</td>
                                        <td className="table_rest">ədəd</td>
                                        <td className="table_leader" >Salyan</td>
                                        <td className="table_office">MAGNUS</td>
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

export default Stock;
